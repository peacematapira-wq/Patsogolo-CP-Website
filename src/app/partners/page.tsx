import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import Reveal from "@/components/ui/Reveal";
import { partners } from "@/data/partners";

export const metadata: Metadata = { title: "Partners — Patsogolo CP Foundation" };

export default function PartnersPage() {
  return (
    <>
      <PageBanner
        eyebrow="Partners"
        title="The work of many organisations, in one district."
        description="From clinical referral hospitals to fundraising trainers, our progress has depended on partners across Malawi and beyond."
      />

      <section className="py-25">
        <Container>
          <Reveal as="div" className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/10 border border-black/10 rounded-2xl overflow-hidden">
            {partners.map((p) => (
              <div key={p.name} className="bg-paper p-7">
                <div className="font-mono text-[11px] uppercase tracking-wide text-clay mb-2.5">{p.type}</div>
                <h4 className="text-[17px] font-display font-bold mb-2">{p.name}</h4>
                <p className="text-[14px] text-ink/65 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
