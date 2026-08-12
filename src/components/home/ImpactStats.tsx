import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { IconSites, IconChildren, IconTraining, IconAudience } from "@/components/ui/StatIcons";

const stats = [
  { icon: IconSites, value: "4", label: "Clinic sites in Mangochi" },
  { icon: IconChildren, value: "400+", label: "Children reached" },
  { icon: IconTraining, value: "20", label: "Health centres trained" },
  { icon: IconAudience, value: "1M+", label: "People reached through awareness" },
];

export default function ImpactStats() {
  return (
    <section className="py-14 bg-paper">
      <Container>
        <Reveal as="div" className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-paper-dim">
              <div className="w-11 h-11 rounded-full bg-teal-pastel text-lake flex items-center justify-center mx-auto mb-3">
                <s.icon />
              </div>
              <div className="font-mono text-3xl font-medium mb-1 text-lake-deep">{s.value}</div>
              <div className="text-[13px] font-medium text-ink/60">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
