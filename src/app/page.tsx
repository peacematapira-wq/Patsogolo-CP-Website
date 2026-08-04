import Hero from "@/components/home/Hero";
import PillarsTeaser from "@/components/home/PillarsTeaser";
import CommunityAwareness from "@/components/home/CommunityAwareness";
import FeaturedActivity from "@/components/home/FeaturedActivity";
import DonateBanner from "@/components/home/DonateBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PillarsTeaser />
      <CommunityAwareness />
      <FeaturedActivity />
      <DonateBanner />
    </>
  );
}
