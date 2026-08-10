export type NewsItem = {
  date: string;
  title: string;
  excerpt: string;
  tag: string;
  image?: string;
};

// Ordered most recent first.
export const news: NewsItem[] = [
  {
    date: "2026",
    title: "CP QoL-Child questionnaire accepted for the Malawi Medical Journal",
    excerpt:
      "Our quality-of-life questionnaire — the first such tool validated for use in Malawi — has been accepted for publication, a milestone for CP research nationally.",
    tag: "Research",
    image: "/images/news/cp-qol-questionnaire.jpg",
  },
  {
    date: "April 2026",
    title: "Autism and ADHD clinic launched",
    excerpt:
      "After training nine health workers, we launched a dedicated clinic extending our multidisciplinary model to autism and ADHD care.",
    tag: "Clinical Care",
    image: "/images/news/autism-adhd-clinic.jpg",
  },
  {
    date: "July 2026",
    title: "Awareness drama at Makawa Primary School",
    excerpt:
      "Our caregiver dramaplay group performed at Makawa Primary School for our second World CP Day, bringing our stigma-reduction advocacy directly into a school community.",
    tag: "Awareness",
    image: "/images/news/world-cp-day-2026.jpg",
  },
  {
    date: "2025",
    title: "CP Cookbook adopted into UNICEF's resource bank",
    excerpt:
      "Following publication in Field Exchange issue 77, our safe-feeding cookbook has drawn interest from partner organisations in Tanzania and India.",
    tag: "Nutrition",
    image: "/images/news/cp-cookbook.jpg",
  },
  {
    date: "2025",
    title: "CP and Neuro-Developmental Disorders Network convened",
    excerpt:
      "Around 50 participants from health facilities and partner organisations across Malawi joined our first network gathering.",
    tag: "Advocacy",
    image: "/images/news/network-convened.jpg",
  },
  {
    date: "2024",
    title: "First World CP Day and the launch of our caregiver-led drama group",
    excerpt:
      "We marked our first World CP Day and formed our caregiver-led dramaplay group, now central to how we reach communities across Mangochi District.",
    tag: "Awareness",
    image: "/images/news/world-cp-day-2024.jpg",
  },
];
