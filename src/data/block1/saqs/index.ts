/**
 * Block 1 · Master SAQ Question Bank Aggregator
 * Combines unit-specific SAQ question banks (Respiratory Disorders + Trauma and Emergency Nursing)
 */

import respiratorySaqsRaw from './respiratory-disorders/respiratorySaqs.json';
import traumaSaqsRaw from './trauma-and-emergency-nursing/traumaSaqs.json';
import { SAQBankData, SAQQuestion, SAQPart } from '../../../types';

export const RESPIRATORY_SAQ_BANK = respiratorySaqsRaw as unknown as SAQBankData;
export const TRAUMA_SAQ_BANK = traumaSaqsRaw as unknown as SAQBankData;

/** Unified Block 1 SAQ Bank */
export const BLOCK1_SAQ_BANK: SAQBankData = {
  id: 'block1-master-saq-question-bank',
  title: 'Block 1: Master SAQ Question Bank',
  subtitle: 'Categorized by clinical unit and condition: Respiratory Disorders & Trauma and Emergency Nursing.',
  author: 'MULWA <martinmulwa95@gmail.com>',
  version: '3.0.0',
  block: 'Block 1',
  category: 'Block 1 Clinical Units',
  totalQuestions: (RESPIRATORY_SAQ_BANK.totalQuestions || 0) + (TRAUMA_SAQ_BANK.totalQuestions || 0),
  parts: [
    ...(RESPIRATORY_SAQ_BANK.parts || []),
    ...(TRAUMA_SAQ_BANK.parts || [])
  ]
};

export const SAQ_BANK = BLOCK1_SAQ_BANK;

/** Condition categories sorted by exam priority */
export const SAQ_CATEGORIES: SAQPart[] = SAQ_BANK.parts;

export const ALL_SAQ_QUESTIONS: SAQQuestion[] = SAQ_BANK.parts.flatMap(
  (part) => part.questions
);

export const SAQ_CATEGORIES_LIST = [
  'Respiratory Disorders',
  'Trauma and Emergency Nursing'
] as const;

export type SAQCategoryName = typeof SAQ_CATEGORIES_LIST[number];

export function getCategoriesByUnit(categoryName: string): SAQPart[] {
  return SAQ_CATEGORIES.filter((c) => (c.category || 'Respiratory Disorders') === categoryName);
}

export function getSAQsByUnit(categoryName: string): SAQQuestion[] {
  return getCategoriesByUnit(categoryName).flatMap((c) => c.questions);
}

export function getCategoryById(categoryId: string): SAQPart | undefined {
  return SAQ_CATEGORIES.find((c) => c.id === categoryId);
}

export function getSAQsByCategory(categoryId: string): SAQQuestion[] {
  const cat = getCategoryById(categoryId);
  return cat ? cat.questions : [];
}

export function getSAQById(id: string): SAQQuestion | undefined {
  return ALL_SAQ_QUESTIONS.find(
    (q) => q.id === id || q.qNumber.toLowerCase() === id.toLowerCase()
  );
}

export const SAQ_PARTS = SAQ_CATEGORIES;
