export type Project = {
  title: string;
  status: "Ongoing" | "Completed" | "Launched 2026" | "Seeking funding";
  year: string;
  description: string;
  tag: string;
};

export const projects: Project[] = [
  {
    title: "EDACS Feeding & Swallowing Validation",
    status: "Ongoing",
    year: "2025",
    description:
      "A project validating the Eating and Drinking Ability Classification System for Malawi, begun in 2025 in response to widespread swallowing and feeding difficulties among children in our care.",
    tag: "Research",
  },
  {
    title: "Electronic Patient Records System",
    status: "Ongoing",
    year: "2025",
    description:
      "An electronic patient records system flagging missed follow-ups and tracking nutrition supplementation across all four clinic sites.",
    tag: "Clinical Care",
  },
  {
    title: "World CP Day",
    status: "Ongoing",
    year: "2024–2026",
    description:
      "First marked in 2024 and now in its second edition, our annual World CP Day brings children, caregivers and community leaders together — part of a wider community awareness effort that has reached over one million people.",
    tag: "Awareness",
  },
  {
    title: "Caregiver-Led Drama Group",
    status: "Ongoing",
    year: "2024",
    description:
      "Formed in 2024, our caregiver-led dramaplay group now stages six productions carried through live performance and radio to reduce stigma across Mangochi District.",
    tag: "Awareness",
  },
  {
    title: "CP Cookbook",
    status: "Completed",
    year: "2025–2026",
    description:
      "A safe-feeding cookbook for children with CP, finalised in 2025, published in Field Exchange issue 77 in 2026, and adopted into UNICEF's global resource bank — with interest from partners in Tanzania and India.",
    tag: "Nutrition",
  },
  {
    title: "Autism & ADHD Clinic",
    status: "Launched 2026",
    year: "2026",
    description:
      "Launched 28 April 2026 after training nine health workers, extending our multidisciplinary model to neurodevelopmental conditions beyond CP.",
    tag: "Clinical Care",
  },
  {
    title: "First PhD Trajectory",
    status: "Ongoing",
    year: "2026",
    description:
      "Our first PhD research trajectory, examining our district-level CP care model in depth to strengthen the evidence base behind it.",
    tag: "Research",
  },
  {
    title: "School Assessments & Inclusion Support",
    status: "Ongoing",
    year: "2026",
    description:
      "Assessments and inclusion support at schools and daycare centres across Mangochi District, helping children with CP participate more fully in education.",
    tag: "Awareness",
  },
  {
    title: "Hospital & Institutional Collaborations",
    status: "Ongoing",
    year: "2026",
    description:
      "New collaborations with hospitals and academic institutions across Malawi, extending our clinical and research reach beyond Mangochi District.",
    tag: "Research",
  },
  {
    title: "Modified Feeding Utensils Programme",
    status: "Ongoing",
    year: "2026",
    description:
      "Custom-modified feeding utensils delivered to 25+ children, with the model now shared with Queen Elizabeth Central Hospital.",
    tag: "Nutrition",
  },
  {
    title: "MAP Local Artisan Training",
    status: "Ongoing",
    year: "2026",
    description:
      "A partnership training local artisans to build and maintain assistive devices, strengthening supply beyond any single funding cycle.",
    tag: "Training",
  },
  {
    title: "CP QoL-Child Questionnaire Validation",
    status: "Ongoing",
    year: "2026",
    description:
      "The first quality-of-life tool validated for use in Malawi for children with CP, accepted for publication in the Malawi Medical Journal in July 2026.",
    tag: "Research",
  },
  {
    title: "Neuro-Developmental Disorders Network",
    status: "Ongoing",
    year: "2025–2026",
    description:
      "A formal network with KUHES, Queen Elizabeth Central Hospital, Zomba Central Hospital and Fount for Nations, working toward national standards for CP and neurodevelopmental care.",
    tag: "Advocacy",
  },
  {
    title: "Wheelchair Provision — 11 children",
    status: "Seeking funding",
    year: "2026",
    description:
      "Planned wheelchair provision for 11 children was cancelled in 2026 due to funding constraints — we're actively seeking support to restart this work.",
    tag: "Clinical Care",
  },
];
