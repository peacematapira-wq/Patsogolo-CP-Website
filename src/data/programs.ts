export type Component = { title: string; description: string };

export type Pillar = {
  id: string;
  number: string;
  title: string;
  summary: string;
  components: Component[];
};

export const pillars: Pillar[] = [
  {
    id: "clinical-care",
    number: "01",
    title: "Integrated Clinical Care",
    summary:
      "A model that didn't exist in Mangochi before 2023: one visit in which a child receives physiotherapy, nutrition support, medical treatment and health education together — now running across four sites and reaching over 400 children.",
    components: [
      {
        title: "Physiotherapy & rehabilitation",
        description:
          "Therapists and caregivers set shared three-month goals together, with community rehabilitation volunteers extending care into homes families can't easily bring to clinic.",
      },
      {
        title: "Medical care & comorbidities",
        description:
          "Epilepsy management sits alongside general paediatric care. In 2026, a dedicated Autism and ADHD clinic was added to meet a growing need.",
      },
      {
        title: "Nutrition & feeding support",
        description:
          "Every child is screened; moderate cases receive locally produced Likuni Pala, severe cases are referred for RUTF. Our validated EDACS tool and CP cookbook — now in UNICEF's resource bank — support safe feeding.",
      },
      {
        title: "Health education",
        description:
          "Every clinic day includes a themed session for caregivers — feeding, positioning, communication — building both knowledge and peer connection.",
      },
      {
        title: "Assistive devices",
        description:
          "Custom-fitted CP chairs, standing frames, rollators and feeding utensils, built with a local carpentry workshop and, since 2026, MAP-trained artisans.",
      },
      {
        title: "Monitoring systems",
        description:
          "Our electronic patient records system flags missed follow-ups and tracks supplementation needs across all four sites.",
      },
    ],
  },
  {
    id: "awareness-advocacy",
    number: "02",
    title: "Awareness & Advocacy",
    summary:
      "Clinical care alone can't undo stigma or late identification. This pillar reaches families earlier, shifts attitudes, and hands caregivers themselves the microphone.",
    components: [
      {
        title: "Early identification at birth",
        description:
          "Weekly talks in the maternity and nursery wards — which see roughly 1,200 deliveries a month — reach mothers while intervention can still do the most good.",
      },
      {
        title: "Caregiver-led dramaplay",
        description:
          "Twelve mothers, trained by Together Act Now, write and perform plays about raising a child with CP — staged monthly and broadcast as radio drama.",
      },
      {
        title: "Radio & social media",
        description:
          "A programme broadcast twice weekly across eight districts, reaching an estimated one million listeners, archived as a podcast.",
      },
      {
        title: "School-based inclusion",
        description:
          "Daycare centres and a primary school assessed and trained, freeing caregivers — mostly mothers — to pursue income-generating work.",
      },
      {
        title: "Caregiver economic empowerment",
        description:
          "Support groups oriented around village savings and income generation, responding directly to caregivers being abandoned or unable to farm.",
      },
      {
        title: "Networks & policy",
        description:
          "Founding member of Malawi's Neuro-Developmental Disorders Network, engaging government toward national standards for CP care.",
      },
    ],
  },
  {
    id: "training",
    number: "03",
    title: "Training",
    summary:
      "Every gain in clinical care and awareness depends on people, at every level, who know how to recognise CP and respond. High staff turnover makes this a continuous effort, not a one-off.",
    components: [
      {
        title: "Early ID & referral training",
        description:
          "Health Surveillance Assistants, nurses and volunteers across 20 health centres trained to recognise early signs and refer promptly.",
      },
      {
        title: "Mentorship",
        description:
          "Each trained facility is paired with a physiotherapy mentor who visits in person once children with CP are identified — working real cases, not just classroom theory.",
      },
      {
        title: "Specialised clinical training",
        description:
          "In-depth training on EDACS, autism/ADHD identification and our electronic patient records system — now extended to Queen Elizabeth Central Hospital and Tiyende Pamodzi.",
      },
      {
        title: "Training the trainers",
        description:
          "Maternity nurses and clinicians trained to train caregivers directly at the point of birth, multiplying reach beyond our own team.",
      },
      {
        title: "Caregiver training",
        description:
          "A structured curriculum guides monthly sessions, with caregivers — including dramaplay members — trained to lead sessions themselves.",
      },
      {
        title: "Local production capacity",
        description:
          "Our MAP partnership trains local artisans, strengthening the durability of assistive devices and building skills that outlast any funding cycle.",
      },
    ],
  },
  {
    id: "research",
    number: "04",
    title: "Research",
    summary:
      "Every clinical decision at Patsogolo is backed by data we've gathered ourselves — from a 2023 baseline study to our first PhD trajectory, launched in 2026 to strengthen the evidence behind district-level CP care.",
    components: [
      {
        title: "Baseline & outcomes research",
        description:
          "Our 2023 baseline study on epilepsy, malnutrition and feeding difficulties shaped the multidisciplinary model, and continues to be updated as new data comes in.",
      },
      {
        title: "EDACS validation",
        description:
          "A validation study for the Eating and Drinking Ability Classification System in Malawi, begun in 2025 in response to widespread feeding difficulties among children with CP.",
      },
      {
        title: "CP QoL-Child questionnaire",
        description:
          "The first quality-of-life tool validated for children with CP in Malawi, accepted for publication in the Malawi Medical Journal.",
      },
      {
        title: "PhD research trajectory",
        description:
          "Our first PhD trajectory, launched in 2026, examining CP care in Mangochi in depth to strengthen the evidence behind our district-level model.",
      },
      {
        title: "Electronic patient records",
        description:
          "Our electronic patient records system gives us structured, longitudinal data across all four clinic sites to track outcomes over time.",
      },
      {
        title: "Academic collaboration",
        description:
          "New partnerships with hospitals and academic institutions extend our research capacity and connect Mangochi's data to national and international CP research.",
      },
    ],
  },
];
