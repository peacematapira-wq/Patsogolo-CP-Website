export type TeamMember = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    initials: "SE",
    name: "Sandra Emons",
    role: "Chair, Board of Trustees · Enablement",
    bio: "Leads governance alongside the Enablement Foundation partnership.",
    photo: "/images/team/sandra-emons.jpg",
  },
  {
    initials: "AC",
    name: "Alinafe Chisulanda",
    role: "Executive Director",
    bio: "Oversees day-to-day programme delivery across all four sites.",
    photo: "/images/team/alinafe-chisulanda.jpg",
  },
  {
    initials: "AN",
    name: "Alpheus Njewa",
    role: "Core Team",
    bio: "Part of the founding team since the original physiotherapy clinic.",
    photo: "/images/team/alpheus-njewa.jpg",
  },
  {
    initials: "BM",
    name: "Bente van der Meijden",
    role: "Core Team",
    bio: "Part of the founding team, spanning clinical and research work.",
    photo: "/images/team/bente-van-der-meijden.jpg",
  },
];
