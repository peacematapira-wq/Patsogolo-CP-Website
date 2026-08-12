import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import { pillars } from "@/data/programs";
import { IconCare, IconAudience, IconTraining, IconResearch } from "@/components/ui/StatIcons";

const pillarStyle: Record<string, { icon: React.ComponentType; bg: string; ring: string; text: string; link: string }> = {
  "clinical-care": { icon: IconCare, bg: "bg-teal-pastel", ring: "ring-teal-ring/40", text: "text-lake", link: "text-lake" },
  "awareness-advocacy": { icon: IconAudience, bg: "bg-sand-pastel", ring: "ring-sand-ring/50", text: "text-clay", link: "text-clay" },
  training: { icon: IconTraining, bg: "bg-green-pastel", ring: "ring-green-ring/40", text: "text-lake-deep", link: "text-lake-deep" },
  research: { icon: IconResearch, bg: "bg-brown-pastel", ring: "ring-brown-ring/40", text: "text-clay-deep", link: "text-clay-deep" },
};

export default function PillarsTeaser() {
  return (
    <section className="py-24">
      <Container>
        <SectionHead
          eyebrow="How the work holds together"
          title="Four pillars. One system."
        />
        <Reveal as="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => {
            const style = pillarStyle[p.id];
            const Icon = style.icon;
            return (
              <div
                key={p.id}
                className="group rounded-2xl p-6 bg-white border border-black/8 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(22,35,31,0.1)] transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ring-2 transition-transform group-hover:scale-105 ${style.bg} ${style.ring} ${style.text}`}>
                  <Icon />
                </div>
                <div className="font-mono text-[12px] text-ink/40 mb-2">{p.number}</div>
                <h4 className="text-[17px] font-display font-bold mb-2.5">{p.title}</h4>
                <p className="text-[14px] text-ink/64 leading-relaxed mb-5">{p.summary.split(" — now running")[0].replace(/\.$/, "")}.</p>
                <Link
                  href="/programs"
                  className={`font-mono text-[12.5px] font-medium inline-flex items-center gap-1 transition-all group-hover:gap-2 ${style.link}`}
                >
                  See how it works &rarr;
                </Link>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
