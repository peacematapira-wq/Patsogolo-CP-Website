import type { Metadata } from "next";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import PathTimeline from "@/components/ui/PathTimeline";
import { originStory, impactStats } from "@/data/timeline";

const clinicPhotos = [
  { src: "/images/clinic-1.JPG", alt: "One of Patsogolo CP Foundation's clinic sites in Mangochi District" },
  { src: "/images/clinic-2.JPG", alt: "One of Patsogolo CP Foundation's clinic sites in Mangochi District" },
];

export const metadata: Metadata = { title: "About Us — Patsogolo CP Foundation" };

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="Our story"
        title="Before 2022, cerebral palsy care in Mangochi meant a different clinic for every problem."
        description="A child with CP might see a physiotherapist one week and be sent to a separate clinic entirely for malnutrition or epilepsy the next. Patsogolo exists to close that gap: one visit, one team, one plan for the whole child."
      />

      <section className="py-25">
        <Container className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <Reveal as="div">
            <p className="text-[16.5px] text-ink/78 leading-loose">
              Before 2022, cerebral palsy care in Mangochi was fragmented. Many children had access only to physiotherapy services, and if they also faced malnutrition or epilepsy, they were sent to different clinics on different days — for many families, this meant multiple hospital visits in a single week, and a significant gap in care. Worldwide, cerebral palsy is a leading cause of childhood malnutrition, and children with CP in Mangochi faced that same fragmented care alongside deep community stigma. CP is still, in places, attributed to curses or &ldquo;something gone wrong&rdquo; during pregnancy.
            </p>
            <p className="text-[16.5px] text-ink/78 leading-loose mt-4.5">
              The care of a child with CP falls almost entirely on mothers and grandmothers, often without support from family or community members. Stigma and pressure on marital relationships frequently leave mothers facing that medical and social weight alone.
            </p>
            <p className="text-[16.5px] text-ink/78 leading-loose mt-4.5">
              In February 2023, the physiotherapy-only clinic was redesigned around the ICF framework — physiotherapy, nutrition, medical care and health education delivered together, in one visit. That single decision is the hinge our whole history turns on.
            </p>
            <div className="border-l-[3px] border-clay pl-5.5 mt-7">
              <p className="font-display text-xl font-medium italic leading-snug">
                &ldquo;No child left behind&rdquo; isn&rsquo;t a slogan we added later. It&rsquo;s the reason the clinic changed shape in the first place.
              </p>
              <div className="font-mono text-[12.5px] text-ink/55 mt-2.5 uppercase tracking-wide">Patsogolo CP Foundation</div>
            </div>
          </Reveal>

          <Reveal as="div" className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-3">
              {clinicPhotos.map((p, i) => {
                const exists = fs.existsSync(path.join(process.cwd(), "public", p.src));
                return (
                  <div key={i} className="relative aspect-4/5 rounded-2xl overflow-hidden border border-black/10 bg-paper-dim">
                    {exists ? (
                      <Image src={p.src} alt={p.alt} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 gap-2 border-2 border-dashed border-black/15">
                        <span className="font-mono text-[10.5px] uppercase tracking-wide text-ink/40">Clinic photo</span>
                        <span className="font-mono text-[10px] text-ink/35">Coming soon</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-px bg-black/10 border border-black/10 rounded-2xl overflow-hidden">
              {originStory.map((o) => (
                <div key={o.year} className="bg-paper p-6.5 grid grid-cols-[64px_1fr] gap-5 items-start">
                  <div className="font-mono text-sm text-clay font-medium">{o.year}</div>
                  <div>
                    <h4 className="text-[17px] font-display font-bold mb-1.5">{o.title}</h4>
                    <p className="text-[14.5px] text-ink/68 leading-relaxed">{o.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-25">
        <Container>
          <Reveal
            as="div"
            className="bg-lake-deep text-paper rounded-[28px] p-7 sm:p-11 lg:p-14 shadow-[0_30px_60px_rgba(1,84,48,0.18)]"
          >
            <SectionHead
              light
              eyebrow="Six years, one throughline"
              title={'Patsogolo means "forward" — this is the path we\u2019ve walked.'}
              description="Each phase was built on evidence gathered in the one before it. Baseline malnutrition data justified the multidisciplinary model; caregiver focus groups shaped our dramaplay programme; and 2026 opened with our first PhD trajectory and new collaborations with hospitals and institutions across Malawi."
            />
            <PathTimeline />
          </Reveal>
        </Container>
      </section>

      <section className="py-25">
        <Container>
          <SectionHead
            eyebrow="Why integrated care"
            title="The numbers that made the case for change."
            description="These figures, gathered by the end of 2023, are the reason Patsogolo's care model looks the way it does today."
          />
          <Reveal as="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10 rounded-2xl overflow-hidden">
            {impactStats.map((s) => (
              <div key={s.label} className="bg-paper p-8 text-left">
                <div className="font-mono text-[36px] text-lake font-medium leading-none">{s.num}</div>
                <div className="text-[13px] text-ink/65 mt-2.5 leading-relaxed">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
