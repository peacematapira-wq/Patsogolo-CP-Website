export type Publication = {
  title: string;
  description: string;
  category: string;
  fileSize?: string;
  href?: string;
  downloadName?: string;
  coverImage?: string;
  comingSoon?: boolean;
};

export const downloadablePublications: Publication[] = [
  {
    title: "Historical Growth Summary",
    description:
      "Our full evolution from a single hospital clinic to a four-site, multidisciplinary foundation, 2022–2026.",
    category: "Historical Overview",
    fileSize: "754 KB",
    href: "/resources/historical-growth-summary.pdf",
    downloadName: "Patsogolo-CP-Foundation-Historical-Growth-Summary.pdf",
    coverImage: "/images/publications/historical-growth-summary-cover.png",
  },
  {
    title: "Our Programme Pillars",
    description:
      "A narrative overview of Clinical Care, Awareness & Advocacy, Training and Research — prepared for funding proposals and partnership discussions.",
    category: "Programme Overview",
    fileSize: "785 KB",
    href: "/resources/programme-pillars.pdf",
    downloadName: "Patsogolo-CP-Foundation-Programme-Pillars.pdf",
    coverImage: "/images/publications/programme-pillars-cover.png",
  },
  {
    title: "CP Cookbook — Safe Feeding Manual",
    description:
      "Our full safe-feeding cookbook for children with cerebral palsy — the manual behind the recipes featured in Field Exchange and adopted into UNICEF's resource bank.",
    category: "Cookbook",
    fileSize: "4 MB",
    href: "/resources/cp-cookbook.pdf",
    downloadName: "Patsogolo-CP-Foundation-CP-Cookbook.pdf",
    coverImage: "/images/publications/cp-cookbook-cover.png",
  },
];

export const externalPublications: Publication[] = [
  {
    title: "CP Cookbook — Field Exchange, Issue 77",
    description:
      "A safe-feeding cookbook for children with cerebral palsy, published in Field Exchange and adopted into UNICEF's global resource bank.",
    category: "Journal Feature · 2026",
  },
  {
    title: "CP QoL-Child Questionnaire — Malawi Medical Journal",
    description:
      "The first quality-of-life tool validated for children with CP in Malawi, accepted for publication in July 2026.",
    category: "Journal Publication · Accepted July 2026",
  },
];
