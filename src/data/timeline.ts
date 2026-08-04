export type TimelinePoint = {
  year: string;
  title: string;
  description: string;
};

export const timeline: TimelinePoint[] = [
  {
    year: "2022",
    title: "Physiotherapy only",
    description: "A single physiotherapy service begins at Malawi Children's Village. Fragmented care, no integrated model.",
  },
  {
    year: "Feb 2023",
    title: "Multidisciplinary pilot",
    description: "ICF-based integrated clinic launches, end of 2023 results: attendance up 59%.",
  },
  {
    year: "2023",
    title: "Training reaches out",
    description: "20 health centres, 2 community hospitals, 73 community leaders trained.",
  },
  {
    year: "2024",
    title: "Four sites & first World CP Day",
    description: "Malembo added, bringing us to four active clinic sites. Our caregiver-led drama group forms, and we mark our first World CP Day.",
  },
  {
    year: "2025",
    title: "Validation & second CP Day",
    description: "EDACS feeding-assessment validation begins. Our electronic patient records system is introduced. Second edition of World CP Day.",
  },
  {
    year: "2026",
    title: "Research & collaboration",
    description: "Autism/ADHD clinic launched. Our first PhD trajectory begins, alongside school assessments for inclusion and new collaborations with other hospitals and institutions.",
  },
];

export const originStory = [
  {
    year: "2022",
    title: "A physiotherapy clinic, alone",
    description:
      "CP care in Mangochi begins as a single physiotherapy service at Malawi Children's Village, with no integrated support for nutrition or development.",
  },
  {
    year: "2023",
    title: "The multidisciplinary pilot",
    description:
      "Baseline data tells the story plainly: 42% of children had epilepsy, 40% moderate-to-severe malnutrition, and 92.2% were wasted — 35 times the national average wasting prevalence. Integrated care follows — attendance rises 59%.",
  },
  {
    year: "2026",
    title: "A foundation with a research base",
    description:
      "Four clinic sites, an Autism and ADHD clinic, two journal publications, our first PhD trajectory, and new collaborations with hospitals and institutions across Malawi.",
  },
];

export const impactStats = [
  { num: "42%", label: "of children in care also have epilepsy, often never before medically managed" },
  { num: "40%", label: "have moderate-to-severe malnutrition — more than double the rate in Mangochi's general child population" },
  { num: "92.2%", label: "of children in our care are wasted — 35 times the national average wasting prevalence" },
  { num: "59%", label: "rise in clinic attendance after the shift to integrated, multidisciplinary care" },
];
