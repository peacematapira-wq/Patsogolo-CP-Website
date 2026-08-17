export type TeamMember = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    initials: "BM",
    name: "Bente van der Meijden",
    role: "PhD · Medical Doctor & Project Coordinator",
    bio: "Coordinates project delivery and brings clinical medical expertise to our multidisciplinary model.",
    photo: "/images/team/bente-van-der-meijden.JPG",
  },
  {
    initials: "AC",
    name: "Alinafe Chisulanda",
    role: "Director & Physiotherapist",
    bio: "Leads the foundation while continuing to deliver physiotherapy care across our clinic sites.",
    photo: "/images/team/alinafe-chisulanda.jpeg",
  },
  {
    initials: "AN",
    name: "Alpheus Njewa",
    role: "Secretary & Rehabilitation Technician",
    bio: "Supports organisational administration alongside hands-on rehabilitation technician work.",
    photo: "/images/team/alpheus-njewa.jpeg",
  },
  {
    initials: "LC",
    name: "Lara Chikuse",
    role: "Nutritionist",
    bio: "Nutrition screening and feeding support for children across our clinic sites.",
    photo: "/images/team/lara-chikuse.jpg",
  },
  {
    initials: "PM",
    name: "Peace Stanley Matapira",
    role: "Dietitian & IT Specialist",
    bio: "Nutrition and feeding support for children with CP and IT support.",
    photo: "/images/team/peace-stanley-matapira.jpeg",
  },
  {
    initials: "MM",
    name: "Mercy Mgawi",
    role: "Dramaplay Coordinator & Health Education",
    bio: "Coordinates our caregiver-led dramaplay group and leads health education sessions for caregivers.",
    photo: "/images/team/mercy-mgawi.jpeg",
  },
];
