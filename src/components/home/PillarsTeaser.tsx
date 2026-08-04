import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import { pillars } from "@/data/programs";

export default function PillarsTeaser() {
  return (
    <section className="py-25">
      <Container>
        <SectionHead
          eyebrow="How the work holds together"
          title="Four pillars. One system."
          description="A child identified through our awareness work is referred into clinical care. The health worker who referred her was equipped by our training programme. Her caregiver becomes, in time, an advocate reducing stigma in her own village — and the data from all of it feeds our research."
        />
        <Reveal as="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.id}
              className="border border-black/10 rounded-2xl p-7 bg-paper-dim hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(22,35,31,0.08)] transition-all"
            >
              <div className="font-mono text-[13px] text-clay mb-3.5">{p.number}</div>
              <h4 className="text-lg font-display font-bold mb-2.5">{p.title}</h4>
              <p className="text-[14.5px] text-ink/66 leading-relaxed mb-4.5">{p.summary.split(" — now running")[0]}.</p>
              <Link href="/programs" className="font-mono text-[13px] text-lake font-medium hover:text-clay">
                See how it works →
              </Link>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
