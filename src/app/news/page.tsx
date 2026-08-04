import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import Reveal from "@/components/ui/Reveal";
import { news } from "@/data/news";

export const metadata: Metadata = { title: "News — Patsogolo CP Foundation" };

export default function NewsPage() {
  return (
    <>
      <PageBanner
        eyebrow="News"
        title="Updates from Mangochi District."
        description="Milestones, publications and programme news as our foundation grows and formalises."
      />

      <section className="py-25">
        <Container>
          <Reveal as="div" className="flex flex-col gap-px bg-black/10 border border-black/10 rounded-2xl overflow-hidden">
            {news.map((n) => (
              <article key={n.title} className="bg-paper p-7 sm:p-8 grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4 sm:gap-8">
                <div>
                  <span className="font-mono text-[12px] text-ink/45">{n.date}</span>
                  <div className="mt-2">
                    <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-clay/10 text-clay font-medium">{n.tag}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[18px] font-display font-bold mb-2 leading-snug">{n.title}</h3>
                  <p className="text-[14.5px] text-ink/68 leading-relaxed">{n.excerpt}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
