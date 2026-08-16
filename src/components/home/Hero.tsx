import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { IconSites, IconChildren, IconTraining, IconAudience } from "@/components/ui/StatIcons";
import { clinicSites } from "@/data/site";

const miniStats = [
  { icon: IconSites, n: "4", l: "Clinic sites" },
  { icon: IconChildren, n: "400+", l: "Children reached" },
  { icon: IconTraining, n: "20", l: "Health centres trained" },
  { icon: IconAudience, n: "1M+", l: "Reached through awareness" },
];

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden text-paper pt-37.5 pb-17.5 bg-[radial-gradient(140%_100%_at_15%_0%,var(--color-lake-deep)_0%,#013b23_55%,#012a19_100%)]">
        {/* Background illustration layer — blended into the gradient, not a foreground photo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 h-full w-full sm:w-[64%]">
            <Image
              src="/images/care-illustration.png"
              alt=""
              fill
              className="object-cover object-top opacity-[0.24]"
              priority
            />
          </div>
          {/* Blend gradients so the illustration reads as texture, not a photo card */}
          <div className="absolute inset-0 bg-linear-to-r from-lake-deep via-lake-deep/55 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#012a19]" />
        </div>

        {/* Decorative blurred shapes */}
        <div className="absolute top-24 right-[8%] w-72 h-72 rounded-full opacity-20 blur-3xl bg-sand pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15 blur-3xl bg-lake pointer-events-none" />

        {/* Memphis dot row */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 hidden sm:flex gap-3 opacity-40">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ background: i % 3 === 0 ? "var(--color-sand)" : i % 3 === 1 ? "var(--color-teal-ring)" : "var(--color-paper)" }}
            />
          ))}
        </div>

        <Container className="relative">
          <div className="max-w-180">
            <Reveal
              as="div"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-mono font-medium mb-6 tracking-wider uppercase bg-paper/10 border border-paper/20 text-sand"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sand inline-block" />
              Mangochi District, Malawi
            </Reveal>

            <Reveal as="h1" className="font-display font-bold text-[clamp(36px,5vw,58px)] leading-[1.06] tracking-tight">
              Care that walks <em className="italic text-sun-soft font-medium">alongside</em> every child with cerebral palsy.
            </Reveal>

            <Reveal as="p" className="text-left sm:text-justify text-[17px] text-paper/82 max-w-155 mt-5 leading-relaxed">
              What began in 2022 as a single physiotherapy clinic at Malawi Children&rsquo;s Village is now a four-site, multidisciplinary foundation combining clinical care, awareness and advocacy, health-worker training and research so that no child in Mangochi is left behind.
            </Reveal>

            <Reveal as="div" className="flex gap-4 mt-8 flex-wrap items-center">
              <Button href="/donate" variant="primary">
                Donate &amp; Collaborate
              </Button>
              <Button href="/about" variant="secondary">
                Our story &rarr;
              </Button>
            </Reveal>

            <Reveal as="div" className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-7 mt-12 max-w-[680px]">
              {miniStats.map((s) => (
                <div key={s.l} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-paper/10 border border-paper/20 text-sand flex items-center justify-center shrink-0">
                    <s.icon />
                  </div>
                  <div>
                    <div className="font-mono text-[19px] text-paper font-medium leading-none">{s.n}</div>
                    <div className="text-[11px] text-paper/60 mt-1 leading-snug">{s.l}</div>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full" height="48">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--color-paper)" />
          </svg>
        </div>
      </section>

      <div className="bg-ink text-paper py-4 overflow-hidden">
        <div className="sites-track flex gap-13 whitespace-nowrap font-mono text-[13px] tracking-wide text-paper/65">
          {[...clinicSites, ...clinicSites].map((s, i) => (
            <span key={i} className="flex items-center gap-2.5">
              <span className="text-sand">○</span> {s}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
