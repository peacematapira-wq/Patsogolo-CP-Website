import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import PillarTabs from "@/components/ui/PillarTabs";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "Our Programs — Patsogolo CP Foundation" };

export default function ProgramsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Our programs"
        title="Four pillars. One system."
        description="A child identified through our awareness work is referred into clinical care. The health worker who referred her was equipped by our training programme. Her caregiver becomes, in time, the advocate reducing stigma in her own village — and the data from all of it feeds our research."
      />
      <section className="py-25">
        <Container>
          <Reveal
            as="div"
            className="bg-ink text-paper rounded-[28px] p-7 sm:p-11 lg:p-14 shadow-[0_30px_60px_rgba(28,28,28,0.14)]"
          >
            <PillarTabs />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
