import type { Metadata } from "next";
import Image from "next/image";
import fs from "fs";
import path from "path";
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
        description="Milestones, publications and programme news as our foundation grows."
      />

      <section className="py-25">
        <Container>
          <Reveal as="div" className="flex flex-col gap-px bg-black/10 border border-black/10 rounded-2xl overflow-hidden">
            {news.map((n) => {
              const hasImage = n.image && fs.existsSync(path.join(process.cwd(), "public", n.image));
              return (
                <article
                  key={n.title}
                  className="bg-paper p-7 sm:p-8 grid grid-cols-1 sm:grid-cols-[96px_120px_1fr] gap-4 sm:gap-6 items-start"
                >
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-paper-dim border border-black/10 shrink-0">
                    {hasImage ? (
                      <Image src={n.image!} alt={n.title} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-mono text-[9px] text-ink/35 text-center px-1">Photo soon</span>
                      </div>
                    )}
                  </div>
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
              );
            })}
          </Reveal>
          <p className="text-[13.5px] text-ink/45 mt-8 max-w-[560px] leading-relaxed">
            Photos appear automatically once added to <code className="bg-black/5 px-1.5 py-0.5 rounded">public/images/news/</code> with the matching filename — see <code className="bg-black/5 px-1.5 py-0.5 rounded">src/data/news.ts</code>.
          </p>
        </Container>
      </section>
    </>
  );
}
