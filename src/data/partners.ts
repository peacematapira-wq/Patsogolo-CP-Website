export type Partner = {
  name: string;
  type: string;
  description: string;
  category: "Clinical & Research Partners" | "Community & Capacity Partners" | "Funding & Governance Partners";
};

export const partners: Partner[] = [
  // Clinical & Research Partners
  {
    name: "Queen Elizabeth Central Hospital",
    type: "Referral & Research Hospital",
    description:
      "Referral hospital and collaboration hospital for multicentre studies such as our EDACS validation, and for improving nutrition care within the hospital setting.",
    category: "Clinical & Research Partners",
  },
  {
    name: "Kamuzu Central Hospital",
    type: "Research Hospital",
    description: "Collaboration hospital for research.",
    category: "Clinical & Research Partners",
  },
  {
    name: "KUHES",
    type: "Academic Collaboration",
    description: "Close collaboration with the Family Medicine Department at Kamuzu University of Health Sciences.",
    category: "Clinical & Research Partners",
  },

  // Community & Capacity Partners
  {
    name: "Fount for Nations",
    type: "Advocacy Partner",
    description: "Close collaboration on advocacy work.",
    category: "Community & Capacity Partners",
  },
  {
    name: "Together Act Now",
    type: "Training Partner",
    description: "Training and collaboration in developing new drama plays with our caregiver dramaplay group.",
    category: "Community & Capacity Partners",
  },
  {
    name: "Tiyende Pamodzi",
    type: "CBR Partner",
    description: "Partner organisation providing community-based rehabilitation (CBR) care in Mangochi District.",
    category: "Community & Capacity Partners",
  },
  {
    name: "MAP",
    type: "Assistive Devices",
    description: "Trains local artisans to build and maintain assistive devices, strengthening local production capacity.",
    category: "Community & Capacity Partners",
  },

  // Funding & Governance Partners
  {
    name: "Enablement Foundation",
    type: "Partner & Funding Organisation",
    description: "Partner organisation and funding organisation supporting Patsogolo CP Foundation's work in Mangochi District.",
    category: "Funding & Governance Partners",
  },
  {
    name: "Dossan Trust",
    type: "Funding Partner",
    description: "Donor supporting our work amid ongoing funding constraints.",
    category: "Funding & Governance Partners",
  },
  {
    name: "Wilde Ganzen",
    type: "Funding Partner",
    description: "Funding partner supporting our programmes, including fundraising training for our team.",
    category: "Funding & Governance Partners",
  },
];
