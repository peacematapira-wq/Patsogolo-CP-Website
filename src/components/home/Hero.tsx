import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { IconSites, IconChildren, IconTraining, IconAudience } from "@/components/ui/StatIcons";
import { clinicSites, heroStats } from "@/data/site";

const icons = {
  sites: IconSites,
  children: IconChildren,
  training: IconTraining,
  audience: IconAudience,
};

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden text-paper pt-[150px] pb-[92px] bg-[radial-gradient(140%_100%_at_15%_0%,var(--color-lake-deep)_0%,#013b23_55%,#012a19_100%)]">
        <div className="absolute inset-0 opacity-70 pointer-events-none bg-[radial-gradient(circle_at_85%_15%,rgba(221,154,136,0.14),transparent_45%),radial-gradient(circle_at_5%_95%,rgba(48,132,132,0.22),transparent_45%)]" />
        <Container className="relative">
          <div className="max-w-[720px]">
            <Reveal as="div" className="eyebrow text-sand mb-5">
              Mangochi District, Malawi
            </Reveal>
            <Reveal as="h1" className="font-display font-bold text-[clamp(36px,5vw,58px)] leading-[1.06] tracking-tight">
              Care that walks <em className="italic text-sun-soft font-medium">alongside</em> every child with cerebral palsy.
            </Reveal>
            <Reveal as="p" className="text-[17px] text-paper/82 max-w-[560px] mt-5 leading-relaxed">
              What began in 2022 as a single physiotherapy clinic at Malawi Children&rsquo;s Village is now a four-site, multidisciplinary foundation — combining clinical care, awareness and advocacy, health-worker training and research so that no child in Mangochi is left behind.
            </Reveal>
            <Reveal as="div" className="flex gap-4 mt-8 flex-wrap items-center">
              <Button href="/donate" variant="primary">
                Donate now
              </Button>
              <Button href="/about" variant="secondary">
                Our story →
              </Button>
            </Reveal>
          </div>
        </Container>

        {/* Icon stat cards — placed high, inside the fold, and lifted to overlap the section edge below */}
        <Container className="relative">
          <Reveal
            as="div"
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 lg:mb-[-96px]"
          >
            {heroStats.map((s) => {
              const Icon = icons[s.icon];
              return (
                <div
                  key={s.label}
                  className="bg-paper rounded-2xl p-5 shadow-[0_16px_36px_rgba(1,42,25,0.2)] border border-black/5"
                >
                  <div className="w-9 h-9 rounded-full bg-sand-soft text-clay flex items-center justify-center mb-3">
                    <Icon />
                  </div>
                  <div className="font-mono text-[24px] text-ink font-medium leading-none">{s.num}</div>
                  <div className="text-[12px] text-ink/60 mt-2 leading-tight">{s.label}</div>
                </div>
              );
            })}
          </Reveal>
        </Container>
      </section>

      {/* Spacer so the lifted cards have room to overlap on large screens without colliding with the strip below */}
      <div className="hidden lg:block h-[96px] bg-paper" />

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
