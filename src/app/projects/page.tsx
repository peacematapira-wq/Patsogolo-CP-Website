import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import PathTimeline from "@/components/ui/PathTimeline";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects — Patsogolo CP Foundation" };

const statusStyle: Record<string, string> = {
  Ongoing: "bg-lake/12 text-lake",
  Completed: "bg-leaf/15 text-leaf",
  "Launched 2026": "bg-sun/20 text-clay",
  "Seeking funding": "bg-clay/12 text-clay",
};

export default function ProjectsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Projects"
        title="Discrete initiatives, one growth story."
        description="Each project below grew out of evidence gathered through our clinical work — from a €13,453 feeding-assessment validation to a national quality-of-life questionnaire now headed for publication."
      />

      <section className="py-25">
        <Container>
          <Reveal
            as="div"
            className="bg-lake-deep text-paper rounded-[28px] p-7 sm:p-11 lg:p-14 shadow-[0_30px_60px_rgba(1,84,48,0.18)]"
          >
            <SectionHead light eyebrow="The throughline" title="Six years, one path forward." />
            <PathTimeline />
          </Reveal>
        </Container>
      </section>

      <section className="py-25">
        <Container>
          <SectionHead eyebrow="Current & recent" title="Projects across all four pillars." />
          <Reveal as="div" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="border border-black/10 rounded-2xl p-7 bg-paper-dim">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-ink/45">{p.tag} · {p.year}</span>
                  <span className={`font-mono text-[11px] px-2.5 py-1 rounded-full font-medium ${statusStyle[p.status]}`}>
                    {p.status}
                  </span>
                </div>
                <h4 className="text-lg font-display font-bold mb-2.5">{p.title}</h4>
                <p className="text-[14.5px] text-ink/66 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
