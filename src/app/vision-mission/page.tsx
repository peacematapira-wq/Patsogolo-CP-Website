import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "Vision & Mission — Patsogolo CP Foundation" };

const values = [
  {
    title: "Whole-child care",
    description: "A child is never just a diagnosis. Every plan considers physiotherapy, nutrition, medicine and family context together.",
  },
  {
    title: "Community first",
    description: "Change that lasts is led by caregivers and community members themselves, not delivered to them from outside.",
  },
  {
    title: "Evidence before expansion",
    description: "We gather data before we scale — our multidisciplinary model, EDACS validation and QoL research all began with a baseline study.",
  },
  {
    title: "Dignity over charity",
    description: "\"My ability is stronger than my disability.\" Our advocacy work centres capability, not pity.",
  },
];

export default function VisionMissionPage() {
  return (
    <>
      <PageBanner
        eyebrow="Vision & Mission"
        title="No child left behind."
        description="Everything we build in Mangochi District traces back to one commitment: that a child's postcode should never determine whether their cerebral palsy is recognised, treated, or understood."
      />

      <section className="py-25">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal as="div" className="bg-paper-dim border border-black/10 rounded-2xl p-9">
            <div className="eyebrow text-clay mb-4">Our vision</div>
            <p className="font-display text-2xl font-semibold leading-snug">
              A Mangochi District where every child with cerebral palsy is identified early, cared for holistically, and included fully in family and community life.
            </p>
          </Reveal>
          <Reveal as="div" className="bg-lake-deep text-paper rounded-2xl p-9">
            <div className="eyebrow text-sun-soft mb-4">Our mission</div>
            <p className="font-display text-2xl font-semibold leading-snug">
              To deliver integrated clinical care, shift community attitudes through awareness and advocacy, and train the health workers and caregivers who make lasting care possible.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-25 bg-ink text-paper">
        <Container>
          <Reveal as="div" className="max-w-[660px] mb-13">
            <div className="eyebrow text-sun-soft mb-4">What guides the work</div>
            <h2 className="font-display font-bold text-[clamp(29px,3.2vw,42px)] leading-tight tracking-tight">Our values</h2>
          </Reveal>
          <Reveal as="div" className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={v.title} className="border-t border-paper/18 pt-5">
                <div className="font-mono text-sun-soft text-sm mb-2">0{i + 1}</div>
                <h4 className="text-lg font-display font-bold mb-2.5">{v.title}</h4>
                <p className="text-[14.5px] text-paper/62 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
