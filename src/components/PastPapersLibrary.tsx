/**
 * Mulwa Clinical Exam Portal
 * MCQ Past Papers & TNH Practice Library
 *
 * Streamlined, minimalist Block 1 navigation matching SAQ Library:
 * - Level 1: Block 1 unit list (Respiratory Disorders, Trauma & Emergency)
 * - Level 2: Unit's Past / Practice Papers listing (clean cards, zero icon/text clutter)
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 12.0.0
 */

import React, { useMemo } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  Wind,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { SessionProgress, PastPaper } from '../types';
import { BOARD_PAST_PAPERS, TNH_PRACTICE_PAPERS, getRevisionSetsForPaper } from '../data/questions';
import { makeSetKey } from '../utils/storage';

interface PastPapersLibraryProps {
  progress: SessionProgress;
  onSelectPaper: (paperId: string) => void;
  onBack: () => void;
  activeSection?: 'past_papers' | 'tnh_practice';
  onSectionChange?: (section: 'past_papers' | 'tnh_practice') => void;
  selectedUnit?: string | null;
  onSelectUnit?: (unit: string | null) => void;
}

export default function PastPapersLibrary({
  progress,
  onSelectPaper,
  onBack,
  activeSection = 'past_papers',
  selectedUnit: controlledSelectedUnit,
  onSelectUnit: controlledOnSelectUnit
}: PastPapersLibraryProps) {
  const [internalSelectedUnit, setInternalSelectedUnit] = React.useState<string | null>(null);

  const selectedUnit = controlledSelectedUnit !== undefined ? controlledSelectedUnit : internalSelectedUnit;
  const setSelectedUnit = (unit: string | null) => {
    if (controlledOnSelectUnit) {
      controlledOnSelectUnit(unit);
    } else {
      setInternalSelectedUnit(unit);
    }
  };

  const isPastPapers = activeSection === 'past_papers';
  const sourcePapers = isPastPapers ? BOARD_PAST_PAPERS : TNH_PRACTICE_PAPERS;

  // Block 1 Units Definitions
  const unitsDefinition = useMemo(() => {
    const respiratoryPapers = sourcePapers.filter(
      p => (p.unit || p.category) === 'Respiratory Disorders' || p.category === 'Respiratory Disorders'
    );
    const traumaPapers = sourcePapers.filter(
      p => (p.unit || p.category) === 'Trauma and Emergency Nursing' || p.category === 'Trauma and Emergency Nursing'
    );

    return [
      {
        id: 'Respiratory Disorders',
        title: 'Respiratory Disorders',
        papersCount: respiratoryPapers.length,
        questionsCount: respiratoryPapers.reduce((sum, p) => sum + (p.questions?.length || p.totalQuestions || 0), 0),
        isRespiratory: true
      },
      {
        id: 'Trauma and Emergency Nursing',
        title: 'Trauma and Emergency Nursing',
        papersCount: traumaPapers.length,
        questionsCount: traumaPapers.reduce((sum, p) => sum + (p.questions?.length || p.totalQuestions || 0), 0),
        isRespiratory: false
      }
    ];
  }, [sourcePapers]);

  // Papers belonging to the currently selected Unit
  const scopedUnitPapers = useMemo(() => {
    if (!selectedUnit) return [];
    return sourcePapers.filter(
      p => (p.unit || p.category) === selectedUnit || p.category === selectedUnit
    );
  }, [selectedUnit, sourcePapers]);

  // Sort papers chronologically (newest first) then by title
  const sortedPapers = useMemo(() => {
    return [...scopedUnitPapers].sort((a, b) => {
      if (a.year && b.year && a.year !== b.year) {
        return b.year.localeCompare(a.year, undefined, { numeric: true });
      }
      return a.title.localeCompare(b.title, undefined, { numeric: true });
    });
  }, [scopedUnitPapers]);

  // ==========================================
  // LEVEL 1: Block 1 Units List (Matching SAQ view)
  // ==========================================
  if (selectedUnit === null) {
    return (
      <div className="space-y-4" id="screen-past-papers-units">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-xl active:scale-95 transition-transform min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer shadow-2xs"
              id="back-btn-library"
              title="Back"
              aria-label="Back to dashboard"
            >
              <ArrowLeft className="w-4.5 h-4.5" strokeWidth={2.5} />
            </button>

            <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              {isPastPapers ? 'MCQ Bank' : 'TNH Practice'}
            </h1>
          </div>
        </div>

        {/* Block 1 Section */}
        <div className="space-y-2.5">
          <h2 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 px-1">
            Block 1
          </h2>

          {/* List of Unit Buttons */}
          <div className="space-y-2">
            {unitsDefinition.map(unit => {
              const isRespiratory = unit.isRespiratory;
              return (
                <button
                  key={unit.id}
                  type="button"
                  onClick={() => setSelectedUnit(unit.id)}
                  id={`unit-card-${unit.id}`}
                  className="w-full text-left bg-white border border-slate-200/90 hover:border-[#0B1B3D] p-3.5 sm:p-4 rounded-xl transition-all shadow-2xs hover:shadow-xs active:scale-[0.99] flex items-center justify-between gap-3 group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                      isRespiratory
                        ? 'bg-sky-50 text-sky-600 border-sky-200/80 group-hover:bg-sky-100 group-hover:text-sky-700'
                        : 'bg-rose-50 text-rose-600 border-rose-200/80 group-hover:bg-rose-100 group-hover:text-rose-700'
                    }`}>
                      {isRespiratory ? (
                        <Wind className="w-4.5 h-4.5" />
                      ) : (
                        <Activity className="w-4.5 h-4.5" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0B1B3D] transition-colors leading-snug truncate">
                        {unit.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {unit.papersCount > 0
                          ? `${unit.papersCount} ${unit.papersCount === 1 ? 'Paper' : 'Papers'} · ${unit.questionsCount} Questions`
                          : '0 Papers'}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="w-4.5 h-4.5 text-slate-400 group-hover:text-[#0B1B3D] group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // LEVEL 2: Unit's Papers List (Matching SAQ view)
  // ==========================================
  return (
    <div className="space-y-4" id="screen-past-papers-list">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSelectedUnit(null)}
            className="p-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-xl active:scale-95 transition-transform min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer shadow-2xs"
            id="back-btn-unit"
            title="Back to Units"
            aria-label="Back to units"
          >
            <ArrowLeft className="w-4.5 h-4.5" strokeWidth={2.5} />
          </button>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold text-slate-400 truncate">
              <span className="text-indigo-900 font-bold">Block 1</span>
              <span>·</span>
              <span>{isPastPapers ? 'MCQ Bank' : 'TNH Practice'}</span>
            </div>
            <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug truncate">
              {selectedUnit}
            </h1>
          </div>
        </div>
      </div>

      {/* Papers List */}
      {sortedPapers.length === 0 ? (
        <div className="border border-slate-200/90 bg-white p-8 rounded-xl flex flex-col items-center justify-center text-center space-y-2.5 shadow-2xs">
          <p className="text-sm font-semibold text-slate-600">
            No papers available for this unit yet
          </p>
          <button
            onClick={() => setSelectedUnit(null)}
            className="px-3.5 py-1.5 bg-[#0B1B3D] text-white rounded-lg text-xs font-bold hover:bg-[#132A5E] transition-all cursor-pointer shadow-xs active:scale-95"
          >
            Back to Units
          </button>
        </div>
      ) : (
        <div className="space-y-2" id="papers-container">
          {sortedPapers.map(paper => {
            const totalQuestions = paper.questions?.length || paper.totalQuestions || 0;
            const isPractice = paper.examType === 'Practice' || paper.year === 'Practice';
            const yearNum = parseInt(paper.year || '0', 10);

            // Dynamic color coding for badges
            let badgeClass = 'bg-slate-50 text-slate-700 border-slate-200/80';
            if (isPractice) {
              badgeClass = 'bg-teal-50 text-teal-800 border-teal-200/80';
            } else if (yearNum >= 2025) {
              badgeClass = 'bg-indigo-50 text-indigo-700 border-indigo-200/80';
            } else if (yearNum >= 2023) {
              badgeClass = 'bg-sky-50 text-sky-700 border-sky-200/80';
            } else if (yearNum >= 2020) {
              badgeClass = 'bg-blue-50 text-blue-700 border-blue-200/80';
            } else {
              badgeClass = 'bg-purple-50 text-purple-700 border-purple-200/80';
            }

            // Check if all sets for this paper are completed
            const sets = getRevisionSetsForPaper(paper.id);
            const completedSetsCount = sets.filter(s => !!progress.completedSets[makeSetKey(paper.id, s.id)]).length;
            const isAllCompleted = sets.length > 0 && completedSetsCount === sets.length;

            return (
              <button
                key={paper.id}
                type="button"
                onClick={() => onSelectPaper(paper.id)}
                id={`paper-card-${paper.id}`}
                className="w-full text-left bg-white border border-slate-200/90 hover:border-indigo-300 p-3.5 sm:p-4 rounded-xl transition-all shadow-2xs hover:shadow-xs active:scale-[0.99] flex items-center justify-between gap-3 group cursor-pointer"
              >
                <div className="min-w-0 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-950 transition-colors leading-snug">
                      {paper.title}
                    </h3>

                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${badgeClass}`}>
                      {isPractice ? 'Practice' : paper.year}
                    </span>

                    {isAllCompleted && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Completed
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 font-medium">
                    {totalQuestions} Questions
                    {completedSetsCount > 0 && !isAllCompleted && (
                      <span className="text-indigo-600 font-semibold">
                        {` · ${completedSetsCount}/${sets.length} Sets Completed`}
                      </span>
                    )}
                  </p>
                </div>

                <ChevronRight className="w-4.5 h-4.5 text-slate-400 group-hover:text-[#0B1B3D] transition-colors shrink-0" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
