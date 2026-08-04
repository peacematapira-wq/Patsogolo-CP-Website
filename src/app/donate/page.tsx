import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import Reveal from "@/components/ui/Reveal";
import DonateFlow from "@/components/donate/DonateFlow";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Donate — Patsogolo CP Foundation" };

export default function DonatePage() {
  return (
    <>
      <PageBanner
        eyebrow="Donate"
        title="Every contribution keeps a clinic day running."
        description="The children in our care need support now. Choose an amount below to get started."
      />

      <section className="py-25 bg-paper">
        <Container className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <Reveal as="div">
            <DonateFlow />
          </Reveal>

          <Reveal as="div" className="flex flex-col gap-5 lg:sticky lg:top-28">
            <div className="bg-lake-deep text-paper rounded-2xl p-7.5">
              <div className="eyebrow text-sun-soft mb-3.5">Where things stand — 2026</div>
              <StatRow label="Wheelchairs pending funding" value="11 children" />
              <StatRow label="Audience reached" value="1,000,000+" />
              <StatRow label="Year 1 plan" value="Aug 2026 – Jul 2027" />
              <StatRow label="Local fundraising" value="Dossan Trust, cookbook sales" last />
            </div>
            <div className="bg-paper-dim border border-black/10 rounded-2xl p-7.5">
              <div className="eyebrow text-clay mb-3.5">Prefer to talk first?</div>
              <p className="text-sm text-ink/68 leading-relaxed mb-4">
                For institutional gifts, in-kind donations or partnership funding, reach our team directly.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center bg-ink text-paper font-semibold text-sm px-5 py-3 rounded-full hover:bg-lake transition-colors"
              >
                Email our team
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function StatRow({ label, value, last = false }: { label: string; value: string; last?: boolean }) {
  return (
    <div className={`flex justify-between py-3 text-[13.5px] ${last ? "" : "border-b border-paper/15"}`}>
      <span>{label}</span>
      <b className="font-mono text-sun-soft font-medium">{value}</b>
    </div>
  );
}
