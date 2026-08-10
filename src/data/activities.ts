export type Activity = {
  title: string;
  tag: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export const featuredVideo = {
  title: "World CP Day Awareness Drama — Makawa Primary School",
  tag: "Awareness · Video",
  description:
    "Our caregiver dramaplay group performing at Makawa Primary School to mark World CP Day, taking our stigma-reduction advocacy directly into a school community.",
  src: "/videos/world-cp-day-makawa-primary.mp4",
};

export const featuredActivity: Activity = {
  title: "Marking World Disability Day",
  tag: "Featured activity",
  description:
    "Each year, our clinical and advocacy teams join children with CP, their caregivers, chiefs and health workers to mark World Disability Day — combining public celebration with an on-the-day platform for reducing stigma and raising awareness of early identification.",
  image: "/images/world-disability-day.jpg",
  imageAlt: "Patsogolo CP Foundation team and community members marking World Disability Day",
};

export const activities: Activity[] = [
  {
    title: "Integrated multidisciplinary clinics",
    tag: "Clinical care",
    description:
      "Monthly clinic days at all four sites, combining physiotherapy, nutrition screening, medical review and caregiver health education in a single visit.",
    image: "/images/IMG_3300.jpeg",
    imageAlt: "Caregivers and children gathered indoors during a Patsogolo CP Foundation clinic day",
  },
  {
    title: "Awareness campaigns on world CP day",
    tag: "Awareness",
    description:
      "Monthly physical and radio performances written and staged by our twelve-member caregiver dramaplay group, each followed by a community conversation.",
    image: "/images/IMG_3301.jpeg",
    imageAlt: "A caregiver holding an awareness placard at a Patsogolo CP Foundation event",
  },
  {
    title: "Cooking book handouts and nutrition education",
    tag: "Awareness",
    description:
      "Weekly sessions in Mangochi Hospital's maternity and nursery wards — which see roughly 1,200 deliveries a month — on early warning signs of CP.",
    image: "/images/IMG_3302.jpeg",
    imageAlt: "Caregivers and children at a Patsogolo CP Foundation community event",
  },
  {
    title: "Health worker training sessions",
    tag: "Training",
    description:
      "Ongoing training and mentorship for Health Surveillance Assistants and clinicians across 14 health centres and 2 community hospitals.",
    image: "/images/health_worker_training.JPG",
    imageAlt: "Patsogolo CP Foundation team marking World CP Day",
  },
  {
    title: "Clinical care nutrition",
    tag: "Clinical care",
    description:
      "Custom CP chairs, standing frames, rollators and modified feeding utensils, produced with a local carpentry workshop and MAP-trained artisans.",
    image: "/images/IMG_3304.jpeg",
    imageAlt: "A caregiver with a child at a Patsogolo CP Foundation clinic",
  },
  {
    title: "Clinical care devices",
    tag: "Clinical care",
    description:
      "Assessments and basic teacher training at daycare centres and a government primary school, plus an advisory role at a special-needs daycare.",
    image: "/images/clinical_care_devices.JPG",
    imageAlt: "Caregivers with children at a Patsogolo CP Foundation community event",
  },
];
