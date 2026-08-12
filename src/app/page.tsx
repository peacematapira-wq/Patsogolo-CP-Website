import Hero from "@/components/home/Hero";
import MissionStrip from "@/components/home/MissionStrip";
import PillarsTeaser from "@/components/home/PillarsTeaser";
import CommunityAwareness from "@/components/home/CommunityAwareness";
import DonateBanner from "@/components/home/DonateBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionStrip />
      <PillarsTeaser />
      <CommunityAwareness />
      <DonateBanner />
    </>
  );
}
