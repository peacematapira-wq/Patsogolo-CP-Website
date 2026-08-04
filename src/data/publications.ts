export type Publication = {
  title: string;
  description: string;
  meta: string;
  href?: string;
  downloadName?: string;
  comingSoon?: boolean;
};

export const downloadablePublications: Publication[] = [
  {
    title: "Historical Growth Summary (2022–2026)",
    description:
      "Our full evolution from a single hospital clinic to a four-site, multidisciplinary foundation.",
    meta: "PDF · Historical overview",
    href: "/resources/historical-growth-summary.pdf",
    downloadName: "Patsogolo-CP-Foundation-Historical-Growth-Summary.pdf",
  },
  {
    title: "Our Programme Pillars",
    description:
      "A narrative overview of Integrated Clinical Care, Awareness & Advocacy, and Training — prepared for funding proposals and partnership discussions.",
    meta: "PDF · Programme overview",
    href: "/resources/programme-pillars.pdf",
    downloadName: "Patsogolo-CP-Foundation-Programme-Pillars.pdf",
  },
  {
    title: "CP Cookbook — Safe Feeding Manual",
    description:
      "Our full safe-feeding cookbook for children with cerebral palsy — the manual behind the recipes featured in Field Exchange and adopted into UNICEF's resource bank.",
    meta: "PDF · Cookbook manual",
    href: "/resources/cp-cookbook.pdf",
    downloadName: "Patsogolo-CP-Foundation-CP-Cookbook.pdf",
  },
];

export const externalPublications: Publication[] = [
  {
    title: "CP Cookbook — Field Exchange, Issue 77",
    description:
      "A safe-feeding cookbook for children with cerebral palsy, published in Field Exchange and adopted into UNICEF's global resource bank.",
    meta: "Journal publication · 2026",
  },
  {
    title: "CP QoL-Child Questionnaire — Malawi Medical Journal",
    description:
      "The first quality-of-life tool validated for children with CP in Malawi, accepted for publication in July 2026.",
    meta: "Journal publication · Accepted July 2026",
  },
];
