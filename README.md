# MULWA — Clinical Exam Portal

**Author:** MULWA (<martinmulwa95@gmail.com>)  
**Version:** 6.0.0  
**Stack:** React 19 · TypeScript 5.8 · Vite 6 · Tailwind CSS v4 · Lucide Icons · Motion

A high-yield, distraction-free examination revision and self-assessment platform built specifically for medical, clinical medicine, and nursing candidates (including Kenya Registered Nursing / KRCHN / KRN, End-of-Block, University, and Nursing Council Board Licensure examinations).

The portal combines 1,000+ past examination questions, physiological and pathophysiological rationales, instant chromatic feedback, high-yield Short Answer Questions (SAQs) with structured mnemonics, real-time analytics, and an automated mistakes remediation queue.

---

## 📊 Portal at a Glance

| Metric | Count | Details |
| :--- | :--- | :--- |
| **Access Model** | **Open & Equal** | Universal access for all candidates; no administrative barriers or sign-in gates |
| **Total Past Papers & Practice Modules** | **40 Papers** | Curated official exams and standardized practice modules |
| **Total MCQ & True/False Items** | **1,245 Questions** | Validated stems with distractors and clinical rationales |
| **High-Yield SAQ Items** | **112 Questions** | Model answers scaled to marks with examiner scoring tips |
| **Clinical SAQ Units** | **2 Clinical Units** | Respiratory Disorders (29 SAQs) & Trauma and Emergency (11 SAQs) |
| **TNH Practice SAQ Modules** | **16 Modules (72 SAQs)** | Dedicated Trauma & Emergency SAQs (Sets 1–4) under TNH Practice |
| **Study Curriculum Hub** | **Block 1 Guides** | High-yield lecture transcriptions, mnemonics & exam pattern decoding |
| **Clinical Specialties (Block 1)** | **4 Units** | Respiratory Disorders, Trauma & Emergency, Pharmacology 1, Paediatrics 1 |
| **Active Practice Chunks** | **55+ Sets** | Standardized 15–30 question chunks for cognitive pacing |
| **Workstation Privacy** | **Session-Isolated** | Zero lingering data on shared library or ward computers |

---

## 🏛️ Architecture & Access Model

- **Universal Equal Access:** All candidates receive full, unrestricted access to the entire question repository, past papers, TNH practice modules, and SAQ libraries. Administrative logins and role divisions have been removed so every learner has identical access to all materials.
- **Dedicated Study Section (`HomeDashboard.tsx` & `StudySection.tsx`):**
  - Accessed via the **Study** button on the home dashboard through a strict 5-tier navigation flow:
    1. **Block Selection:** Choose between **Block 1** (MSN 101, 102, 103) and **Block 2**.
    2. **Unit Selection:** Select from Block 1 units (**Pharmacology 1**, **Respiratory Disorders**, **Trauma & Emergency Nursing**).
    3. **Subject Area:** Choose **Antibiotics** under Pharmacology 1.
    4. **Topic Selection:** Select **1. Foundations: Classification of Antibiotics**.
    5. **Study Guide Reader:** Fully responsive reader with multi-line wrapping section filter pills (all section tags visible with zero horizontal scrolling), enhanced mobile font sizes, and complete clinical content.
- **Dedicated TNH Practice Hub:**
  - TNH Practice is organized in its own dedicated section (`TNH Practice`), supporting both **MCQ Practice Papers** and **SAQ Practice Modules**.
  - **TNH Practice SAQs** (72 questions across 16 Modules in Sets 1–4) are accessed directly within TNH Practice under Trauma and Emergency Nursing via an interactive **MCQ Bank / SAQ Bank** toggle.
  - The standard **SAQ Bank** remains cleanly focused on core past paper clinical units (Respiratory Disorders with 29 SAQs and Trauma & Emergency Nursing with 11 SAQs).
- **Mobile-First Responsive Layout:**
  - On smaller screens and mobile devices, the **MULWA** brand logo is always centered in the top navigation bar.
  - Quick, ergonomic thumb navigation is enabled via a persistent bottom navigation bar (Home, Study, MCQs, Practice, SAQs, Mistakes).
- **Workstation Privacy (`sessionStorage`):**
  - Progress persists smoothly across refreshes and tab switches during a revision session, but clears when the browser tab closes, preventing student data leakage on shared nursing laboratory, hospital, and library computers.

---

## 📚 Curriculum & Question Bank Inventory

The platform organizes content modularly under **Block 1**, divided into clinical specialty units:

### 1. Respiratory Disorders (MSN 101)
* **Status:** 11 Curated Examination Papers & Practice Modules (**553 total MCQs & True/False items**)
* **Examinations & Modules Included:**
  1. **January 2011 Supplementary Exam** (`nhson-block1-jan2011-respiratory`) — 54 Questions
  2. **January 2011 Practice Exam** (`krn-respiratory-jan2011-respiratory-conditions`) — 49 Questions
  3. **July 2012 Supplementary Exam** (`tnh-block1-jul2012-respiratory-diseases`) — 54 Questions
  4. **August 2013 Supplementary Exam** (`tnh-block1-aug2013-respiratory`) — 64 Questions
  5. **TNH Practice: Acute Conditions** (`tnh-practice-acute-conditions`) — 59 Questions
  6. **TNH Practice: Chronic Conditions** (`tnh-respiratory-disorders-chronic-conditions`) — 60 Questions
  7. **TNH Practice: Traumatic Conditions** (`tnh-respiratory-disorders-traumatic-conditions`) — 60 Questions
  8. **September 2023 End of Block Exam** (`krn-block1-sept2023-respiratory-disorders`) — 40 Questions
  9. **September 2024 End of Block Exam** (`krn-block1-sept2024-respiratory-disorders`) — 40 Questions
  10. **October 2025 End of Block Exam** (`krn-block1-oct2025-respiratory-disorders`) — 37 Questions
  11. **March 2026 End of Block Exam** (`krn-block1-mar2026-respiratory-disorders`) — 36 Questions
* **Key Topics Covered:**
  * Acid-Base Balance & Arterial Blood Gas (ABG) interpretation (Respiratory Acidosis/Alkalosis, compensation mechanisms)
  * Oxygen Delivery Systems (low-flow vs. high-flow Venturi masks, reservoir bags, hypoxic drive in COPD)
  * Mechanical Ventilation & Airway Management (PEEP, CPAP, BiPAP, suctioning protocols)
  * Pneumonia classifications (CAP, HAP, VAP), CURB-65 prognostic criteria, sputum culture diagnostics
  * Bronchial Asthma & Status Asthmaticus (stepwise GINA pharmacotherapy, peak expiratory flow monitoring)
  * Chronic Obstructive Pulmonary Disease (emphysema vs. chronic bronchitis, GOLD guidelines)
  * Pulmonary Tuberculosis & Multidrug-Resistant TB (GeneXpert, sputum AFB, 2RHZE/4RH regimens, DOTS protocol)
  * Pleural conditions: Closed underwater seal drainage (UWSD), thoracentesis, empyema, pleural effusion
  * Pulmonary Embolism & Deep Vein Thrombosis (Wells criteria, D-dimer, anticoagulation, V/Q mismatch)
  * Acute Respiratory Distress Syndrome (ARDS) Berlin definition, PaO₂/FiO₂ ratio, prone positioning

---

### 2. Trauma and Emergency Nursing (MSN 102)
* **Status:** 12 Curated Examination Papers & Practice Modules (**357 total MCQs & True/False items**)
* **Examinations & Modules Included:**
  1. **September 2022 Class End of Block Exam** (`krn-block1-sept2022-trauma-emergency-nursing`) — 16 Questions
  2. **September 2023 Class End of Block Exam** (`krn-block1-sept2023-trauma-emergency-nursing`) — 15 Questions
  3. **April 2024 Class End of Block Exam** (`krn-block1-april2024-trauma-emergency-nursing`) — 15 Questions
  4. **September 2024 Class End of Block Exam** (`krn-block1-sept2024-trauma-emergency-nursing`) — 15 Questions
  5. **April 2025 Class End of Block Exam** (`krn-block1-april2025-trauma-emergency-nursing`) — 16 Questions
  6. **TNH Practice: Trauma and Emergency Care** (`tnh-practice-trauma-and-emergency-care`) — 40 Questions
  7. **TNH Practice: Principles of Trauma and Emergency Care** (`tnh-practice-principles-of-trauma-and-emergency-care`) — 40 Questions
  8. **TNH Practice: First Aid** (`tnh-practice-first-aid`) — 40 Questions
  9. **TNH Practice: Adults Basic Life Support** (`tnh-practice-adults-basic-life-support`) — 40 Questions
  10. **TNH Practice: Paediatric BLS & FBAO** (`tnh-practice-paediatric-bls-and-fbao`) — 40 Questions
  11. **TNH Practice: Burns** (`tnh-practice-burns`) — 40 Questions
  12. **TNH Practice: Management of Burns** (`tnh-practice-management-of-burns`) — 40 Questions
* **Key Topics Covered:**
  * Trauma Resuscitation: Primary & Secondary Surveys (ATLS ABCDE sequence, cervical in-line stabilization)
  * Triage Systems: Canadian Triage and Acuity Scale (CTAS 1–5) and Simple Triage and Rapid Treatment (START mass casualty protocol)
  * Shock Syndromes: Pathophysiology and emergency hemodynamics of Hypovolemic, Cardiogenic, Anaphylactic, Septic, Neurogenic, and Obstructive Shock
  * Basic Life Support (BLS) & Resuscitation: High-quality adult and pediatric CPR ratios (30:2, 15:2), chest compression fractions, automated external defibrillator (AED) usage, foreign body airway obstruction relief (Heimlich maneuver, back blows, chest thrusts)
  * Thoracic Trauma: Tension pneumothorax needle decompression (2nd ICS MCL or 5th ICS AAL), sucking chest wound 3-sided occlusive flutter dressing, flail chest paradoxical respiration, massive hemothorax (>1500 mL)
  * Burn Management: Wallace Rule of Nines, Parkland fluid resuscitation formula (`4 mL × kg × %TBSA`), Curling's stress ulcer prophylaxis, escharotomy indications
  * Environmental & Toxicological Emergencies: Snake bite management (20-minute whole blood clotting test [20WBCT], antivenom indications, avoiding harmful tourniquets/incisions), organophosphate toxicity and atropinisation, submersion injury / near-drowning

---

### 3. Pharmacology 1 (MSN 103)
* **Status:** 6 Curated Examination Papers & CAT Modules (**162 total MCQs & True/False items**)
* **Examinations & Modules Included:**
  1. **September 2019 Class Supplementary Exam** (`krn-block1-sept2019-pharmacology-supplementary`) — 10 Questions
  2. **September 2023 Class End of Block Exam** (`krn-block1-sept2023-pharmacology-paper1`) — 30 Questions
  3. **April 2024 Class Supplementary Exam** (`krn-block1-april2024-pharmacology-supplementary`) — 30 Questions
  4. **September 2024 Class CAT 1** (`krn-block1-sept2024-pharmacology-cat1`) — 31 Questions
  5. **April 2025 Class End of Block Exam** (`krn-block1-april2025-pharmacology-paper1`) — 31 Questions
  6. **September 2025 Class End of Block Exam** (`krn-block1-sept2025-pharmacology-paper1`) — 30 Questions
* **Key Topics Covered:**
  * Principles of Pharmacokinetics & Pharmacodynamics: Absorption, first-pass metabolism, bioavailability, volume of distribution, hepatic clearance, renal elimination, half-life ($t_{1/2}$), receptor agonism/antagonism
  * Autonomic Pharmacology: Sympathomimetics, beta-blockers, anticholinergics (atropine), parasympathomimetics
  * Antimicrobial Chemotherapy: Beta-lactams, macrolides, aminoglycosides, fluoroquinolones, antitubercular agents, mechanisms of resistance, ototoxicity/nephrotoxicity monitoring
  * Analgesics & Anti-Inflammatory Agents: NSAIDs, acetaminophen toxicity and N-acetylcysteine reversal, opioid analgesics and naloxone titration
  * Cardiovascular Drugs: Antihypertensives, ACE inhibitors, diuretics, cardiac glycosides (digoxin toxicity and therapeutic drug monitoring)
  * Endocrine Pharmacology: Insulin regimens (rapid, regular, NPH, glargine), oral hypoglycemic agents, corticosteroids and adrenal suppression
  * Dosage Calculations: Flow rates, pediatric weight-based dosing, reconstitution formulas

---

### 4. Paediatrics 1 (PEN 101: Communicable Diseases & Medical-Surgical Conditions)
* **Status:** 11 Curated Examination Papers (**173 total MCQs & True/False items**)
* **Examinations & Modules Included:**
  1. **April 2025 Class End of Block 1 Special/Supplementary Exam** (`krn-block1-april2025-paediatric-nursing-i-supplementary`) — 15 Questions (PEN 101: Paediatric Nursing I, sat 18 December 2025, Section A, Q1 to Q15)
  2. **April 2024 Class End of Block Exam** (`krn-block1-april2024-paediatric-nursing-i`) — 15 Questions (PEN 101: Paediatric Nursing I, sat 11 November 2024, Part A, Q1 to Q15)
  3. **April 2024 Class End of Block Supplementary Exam — Medical-Surgical** (`krn-block1-april2024-paediatric-medical-surgical-supplementary`) — 31 Questions (PEN 101: Paediatric Medical-Surgical, sat 19 December 2024, Section A, Q1 to Q30)
  4. **September 2023 Class First Block Supplementary Exam** (`krn-block1-september2023-paediatrics-i-supplementary`) — 15 Questions (PEN 101: Paediatrics I, sat 29 May 2024, Part A, Q1 to Q15)
  5. **April 2022 Class End of Block Exam — Medical-Surgical Conditions** (`krn-block1-april2022-paediatric-medical-surgical-conditions`) — 32 Questions (PEN 101: Paediatric Medical Surgical Conditions, Part One, Q1 to Q30)
  6. **April 2022 Class End of Block Exam — Communicable Diseases** (`krn-block1-april2022-paediatrics-communicable-diseases`) — 15 Questions (PEN 101: Paediatrics Communicable Diseases, Part A, Q1 to Q15)
  7. **September 2021 Class Paediatrics Communicable Diseases Exam** (`krn-block1-september2021-paediatrics-communicable-diseases`) — 15 Questions (PEN 101: Paediatrics Communicable Diseases, sat 20 April 2022, Part A, Q1 to Q15)
  8. **September 2019 Class End of Block 1 Exam** (`krn-block1-september2019-paediatrics-i-end-of-block`) — 10 Questions (Paediatrics 1, sat 4 November 2020, Part A, Q1 to Q10)
  9. **September 2019 Class End of Block 1 Special Exam** (`krn-block1-september2019-paediatrics-i-special`) — 10 Questions (Paediatrics 1, sat 14 January 2021, Part A, Q1 to Q10)
  10. **September 2019 Class PTS Block Exam: Introduction to Paediatrics** (`krn-pts-september2019-introduction-to-paediatrics`) — 5 Questions (Introduction to Paediatrics, sat 6 December 2019, Part A, Q1 to Q5)
  11. **April 2019 Class End of Block 1 Supplementary Exam** (`krn-block1-april2019-paediatrics-i-supplementary`) — 10 Questions (Paediatrics 1, sat 17 January 2020, Part A, Q1 to Q10)
* **Key Topics Covered:**
  * **Developmental Milestones & Physical Assessment:** 3–4 months head control delay warning signs, 3–6 months visual tracking, 6–8 months unsupported sitting, 9–12 months fine pincer grasp; weight doubling by 6 months, quadrupling by 2 years; neonate definitions (first 28 days of life); primary, secondary, and tertiary prevention scopes; deciduous tooth eruption timelines (18–20 teeth at 2 years); MUAC nutritional screening (6–59 months: <11.5 cm severe acute malnutrition); pediatric-specific history taking (nutrition/weaning, birth history, developmental milestones)
  * **Pediatric Nursing Principles & Restraints:** Family-centered care partnerships and parental decision-making; minimizing separation anxiety (phases of protest, despair, detachment; rooming-in, familiar caregivers); fear management in adolescents (assent for parental presence); restraint classifications (mechanical [mittens, elbow restraints, papoose boards for blood exchange/transfusions] vs. physical [holding during injection] vs. environmental vs. chemical); bundled care in neonatal tetanus (reducing sensory spasm triggers)
  * **Pediatric Triage (ETAT) & Respiratory Distress:** Prioritization rules (Emergency signs vs. Priority signs [bilateral pedal pitting edema in kwashiorkor, urgent referral] vs. Non-urgent well-child attendances); age-specific fast breathing thresholds (<2 mo: ≥60 bpm; 2–12 mo: ≥50 bpm; 12 mo–5 yr: ≥40 bpm)
  * **Fluid Resuscitation & Dehydration (IMCI/WHO):** Severe dehydration clinical criteria (sunken eyes, delayed skin pinch >2s, poor drinking, lethargy) managed via Plan C; hypovolemic shock emergency bolus calculation (Ringer's lactate or Normal Saline 20 mL/kg over 15 minutes); osmotic diarrhea mechanism in lactose intolerance
  * **Congenital Gastrointestinal Anomalies:**
    * **Tracheoesophageal Fistula (TEF) & Esophageal Atresia:** Clinical triad (the 3 Cs: coughing, choking, cyanosis with initial feeding), Gross classification (Type A pure atresia, Type B proximal fistula, Type C distal fistula [85% commonest])
    * **Hypertrophic Pyloric Stenosis:** Projectile non-bilious vomiting (2–8 weeks), visible left-to-right gastric peristalsis waves, palpable olive-shaped epigastric mass, hypochloremic metabolic alkalosis, Ramstedt's pyloromyotomy
    * **Hirschsprung's Disease (Congenital Aganglionic Megacolon):** Absence of ganglion cells in submucosal (Meissner's) and myenteric (Auerbach's) plexuses, failure to pass meconium within 24–48 hours, ribbon-like stools, rectal suction biopsy, surgical pull-through
    * **Intussusception:** Ileocecal telescoping, severe colicky abdominal pain with screaming and leg flexion, currant jelly stools (blood and mucus), sausage-shaped mass, pneumatic/hydrostatic barium enema reduction
    * **Abdominal Wall Defects:** Gastroschisis (right para-umbilical full-thickness defect, eviscerated bowel without covering sac; emergency warm sterile saline dressing and plastic wrap) vs. Omphalocele (peritoneal/amniotic membrane covered sac with umbilical cord insertion)
    * **Cleft Lip & Palate:** Maternal alcohol/antiepileptic risk factors, Rule of 10s for cleft lip surgery (10 weeks, 10 lbs, 10 g/dL Hb), cleft palate repair at 6–12 months (cup feeding, soft elbow restraints, avoiding straws/spoons)
  * **Pediatric Genitourinary Disorders:**
    * **Cryptorchidism:** Undescended testis, orchidopexy timing (6–18 months, before age 2) to preserve spermatogenesis and reduce malignancy/torsion risks
    * **Phimosis vs. Paraphimosis:** Phimosis (stenosis of prepuce; physiological up to 3–5 years, circumcision for recurrent balanitis/obstruction) vs. Paraphimosis (retracted foreskin trapped behind glans creating constricting ring; urological emergency)
    * **Hypospadias vs. Epispadias:** Ventral urethral displacement with chordee (circumcision strictly contraindicated to preserve prepuce for reconstruction)
    * **Wilms' Tumor (Nephroblastoma):** Firm painless abdominal mass not crossing midline; strict "DO NOT PALPATE" precaution to prevent capsular rupture; Stage V defined as bilateral renal involvement
    * **Polycystic Kidney Disease:** Recessive vs. dominant forms, renal cyst expansion, hematuria, hypertension
    * **Disorders of Sex Development (DSD):** Incompletely masculinized 46,XY males via Androgen Insensitivity Syndrome vs. 46,XX female virilization via Congenital Adrenal Hyperplasia
  * **Pediatric ENT & Upper Airway Conditions:**
    * **Acute Laryngotracheobronchitis (Croup):** Parainfluenza viral etiology, subglottic edema, barking seal-like cough, inspiratory stridor, dexamethasone/budesonide and nebulized adrenaline
    * **Tonsillitis & Adenoiditis:** Adenovirus and Group A Beta-Hemolytic Streptococcus (*S. pyogenes*); adenoid hypertrophy causing mouth breathing, snoring, and halitosis
  * **Pediatric Neurology & Afebrile Seizures:** Causes of nonfebrile convulsions (hypoxia/birth asphyxia, hypoglycemia, intracranial lesions/tumors, electrolyte disturbances) vs. febrile seizures
  * **Pediatric Orthopedics:** Talipes calcaneus (excessive ankle dorsiflexion, heel weight-bearing) vs. talipes equinus; congenital clubfoot (talipes equinovarus) managed with Ponseti serial weekly casting and foot abduction braces
  * **Communicable Pediatric Infections & TB:**
    * **Diphtheria (*Corynebacterium diphtheriae*):** Bull's neck lymphadenitis, grey adherent pseudomembrane, antitoxin + penicillin
    * **Mumps:** Parotitis aggravated by acidic citrus beverages; droplet transmission, nasopharyngeal viral replication
    * **Measles:** Pathognomonic Koplik spots, descending rash, age-based Vitamin A supplementation (50,000 IU <6 mo; 100,000 IU 6–12 mo; 200,000 IU >1 yr), airborne isolation
    * **Chickenpox & Pertussis:** Pruritic vesicles (aspirin avoidance to prevent Reye syndrome); whooping cough droplet precautions, catarrhal stage, erythromycin
    * **Poliomyelitis:** Faecal-oral enteric transmission, anterior horn destruction, asymmetric flaccid paralysis, post-paralytic limb shortening
    * **Neonatal Tetanus:** Unsterile delivery practices, inability to breastfeed (trismus/lockjaw), maternal tetanus toxoid vaccination and clean cord care
    * **Pediatric Tuberculosis:** 2-month intensive phase (RHZE) followed by 4-month continuation phase (RH); Pyridoxine (B6) co-administration to prevent isoniazid peripheral neuropathy

---

### 5. SAQ Question Banks & Categorization

#### A. Core Clinical SAQ Bank (40 Total SAQs)
Accessible via the **SAQ Bank** tab:
* **Respiratory Disorders (29 SAQs across 6 condition categories):**
  * Chest Drain & Underwater Seal Drainage (UWSD)
  * Bronchial Asthma & Status Asthmaticus
  * Pneumonia (Community-Acquired, Hospital-Acquired, Aspiration)
  * Chronic Obstructive Pulmonary Disease (COPD)
  * Thoracic Surgery & Post-Operative Management
  * Pulmonary Tuberculosis, Pleural Effusion, Pulmonary Embolism & ARDS
* **Trauma and Emergency Nursing (11 SAQs across 8 condition categories):**
  * Triage in the Emergency Department (CTAS levels, mass-casualty triage, nurse roles)
  * Trauma Assessment & Nurse Roles (Primary survey ABCDE, secondary survey SAMPLE)
  * Snake Bite (Envenomation first aid, 20WBCT protocol, hospital care, forbidden interventions)
  * Tension Pneumothorax (Pathophysiology, obstructive shock signs, needle decompression)
  * Emergent Burn Care (Inhalation injury, Parkland resuscitation formula, hypothermia prevention)
  * Seizure First Aid (Stay/Safe/Side, status epilepticus timing, post-ictal positioning)
  * Submersion Injury / Near Drowning (Hypoxia correction, rewarming, 24-hour observation)
  * Organophosphate Poisoning (Atropine titration protocol, signs of atropinisation)

#### B. TNH Practice SAQ Bank (72 SAQs across 16 Modules)
Accessible via the **TNH Practice** tab -> Trauma and Emergency Nursing -> **SAQ Bank**:
* **Set 1 Modules:** Triage in ED, Trauma Assessment Primary/Secondary Survey, Shock
* **Set 2 Modules:** Basic Life Support & CPR, Burns Emergent Phase, First Aid, Paediatric Emergencies & FBAO, Poisoning
* **Set 3 Modules:** Triage Process Tools & CTAS, Emergency & Trauma Fundamentals, Shock Pathophysiology & Types, Primary Survey (B, C, E & Re-evaluation)
* **Set 4 Modules:** Burns Classification & Care, BLS & Paediatric Resuscitation II, First Aid II, Snake Bite / Drowning / Stroke / Poisoning II

Each SAQ module provides:
* **Single-Focus Workspace:** 1-at-a-time display with instant "Reveal Solution" action.
* **Mark-Sized Model Answers:** Sized directly to allocated examiner marks with physiological justifications.
* **Clinical Mnemonics:** Memory aids (e.g. `TUBES` for chest drains, `MONA` for ACS, `SAMPLE` for trauma histories, `TICS` for snake bite prohibitions).
* **Examiner Scoring Tips:** "Ace It" callout boxes emphasizing exact clinical grading keywords, marking rubrics, and high-frequency traps.

---

## 🚀 Key Application Features

### 1. Interactive Practice Workspace (`QuestionScreen.tsx`)
* Single-choice (A, B, C, D) and authentic True/False interactive selectors.
* Immediate chromatic validation (emerald for correct, soft red for incorrect).
* Rich explanations detailing pathophysiological mechanisms and distractor refutations.
* Bi-directional question navigation and bookmarking flags.

### 2. Mistakes Review Queue (`ReviewIncorrectScreen.tsx`)
* Questions answered incorrectly or scored below 50% are automatically logged into an ephemeral remediation queue.
* In-line retesting interface: answering correctly automatically resolves and clears the mistake item from the queue.

### 3. Session Isolation & Workstation Privacy (`storage.ts`)
* Built with `window.sessionStorage` (Schema v3).
* Ephemeral: data persists across browser refreshes and tab switches, but clears immediately when the browser tab is closed.
* Ensures zero workstation data leakage on shared nursing laboratory, hospital, and university library computers.

### 4. Results Scorecard & Academic Grading (`ResultsScreen.tsx`)
* Deterministic auto-grading with standard academic performance bands:
  * **Distinction:** $\ge 80\%$
  * **Credit:** $\ge 60\%$
  * **Pass:** $\ge 50\%$
  * **Needs Review:** $< 50\%$
* Breakdown by source (Original exam questions vs Derived questions).
* Plain-text clipboard export for quick note-taking and revision logging.

---

## 🛠️ Tech Stack & Directory Structure

```text
├── src/
│   ├── components/         # Clean UI views
│   │   ├── HomeDashboard.tsx         # Analytics, resume card, recent activity logs
│   │   ├── Layout.tsx                # Mobile-centered logo header, tabs, bottom bar
│   │   ├── PastPapersLibrary.tsx     # Past papers archive, TNH practice with MCQ/SAQ switcher
│   │   ├── QuestionScreen.tsx        # Interactive MCQ engine with instant rationale
│   │   ├── ResultsScreen.tsx         # Scorecard, academic grade band, clipboard export
│   │   ├── ReviewIncorrectScreen.tsx # Remediation queue with in-line retesting
│   │   ├── RevisionSetSelection.tsx  # Chunked question set selection interface
│   │   ├── SAQLibrary.tsx            # Unit & condition browser for normal SAQ Bank
│   │   ├── SAQScreen.tsx             # 1-at-a-time SAQ workspace with mnemonics & tips
│   │   └── StudySection.tsx          # Responsive, minimalist Block 1 curriculum guides
│   ├── config/             # Constants, grading thresholds, and UI configurations
│   ├── data/
│   │   ├── block1/
│   │   │   ├── mcqs/
│   │   │   │   ├── pharmacology-1/              # 6 Pharmacology exam modules (162 MCQs)
│   │   │   │   ├── respiratory-disorders/       # 11 Respiratory exam modules (553 MCQs)
│   │   │   │   └── trauma-and-emergency-nursing/# 12 Trauma & Emergency modules (357 MCQs)
│   │   │   └── saqs/                            # 112 High-yield SAQs across 30 condition modules
│   │   │       ├── respiratory-disorders/       # 29 Respiratory SAQs
│   │   │       ├── tnh-practice/                # 72 TNH Practice SAQs (Sets 1–4)
│   │   │       └── trauma-and-emergency-nursing/# 11 Trauma & Emergency SAQs
│   │   ├── study/                            # Block 1 curriculum notes & lecture slide guides
│   │   │   ├── antibioticsContent.ts         # Foundations & classification of antibiotics
│   │   │   └── index.ts                      # Study curriculum aggregation
│   │   ├── papers/         # Unified papers aggregator & exports
│   │   ├── questions.ts    # Central query and slicing helpers
│   │   ├── saqData.ts      # SAQ barrel provider & typed exports
│   │   └── validator.ts    # 9-point strict schema integrity validator
│   ├── utils/              # Scoring, chunking, and ephemeral storage utilities
│   ├── types.ts            # Domain TypeScript types
│   ├── index.css           # Tailwind CSS v4 styling
│   └── main.tsx            # Application entry point
├── DESIGN.md               # Design constitution & ergonomic vision
├── STUDY_GUIDE_SPECIFICATION.md # Study section UI/UX, responsive layout & typography spec
├── PAST_PAPER_EXTRACTION_PROMPT.md # AI OCR past paper extraction prompt for new exams
├── metadata.json           # Application metadata & permissions
└── README.md               # Project documentation
```

---

## 💻 Development & Build Commands

```bash
# Install dependencies
npm install

# Start Vite development server (port 3000)
npm run dev

# Run TypeScript type check and linter
npm run lint

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📄 Adding New Past Papers

To transcribe and add new scanned past papers to the repository, use the automated extraction prompt provided in [`PAST_PAPER_EXTRACTION_PROMPT.md`](./PAST_PAPER_EXTRACTION_PROMPT.md). It guides AI OCR models to produce clean outputs matching the portal's TypeScript and JSON schemas.
