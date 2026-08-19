import type { Metadata } from "next";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import Reveal from "@/components/ui/Reveal";
import { news } from "@/data/news";

export const metadata: Metadata = { title: "News — Patsogolo CP Foundation" };

const tagStyle: Record<string, { bg: string; text: string }> = {
  "Clinical Care": { bg: "bg-teal-pastel", text: "text-lake" },
  Awareness: { bg: "bg-sand-pastel", text: "text-clay" },
  Research: { bg: "bg-brown-pastel", text: "text-clay-deep" },
  Nutrition: { bg: "bg-green-pastel", text: "text-lake-deep" },
  Advocacy: { bg: "bg-brown-pastel", text: "text-clay-deep" },
};

function CalendarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="5.5" width="16" height="14.5" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 9.5H20" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 3.5V7M16 3.5V7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function Thumb({ item, className }: { item: (typeof news)[number]; className: string }) {
  const hasImage = item.image && fs.existsSync(path.join(process.cwd(), "public", item.image));
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-paper-dim ${className}`}>
      {hasImage ? (
        <Image src={item.image!} alt={item.title} fill className="object-cover" />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-center gap-2 border-2 border-dashed border-black/10">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="#6B3C30" strokeWidth="1.5" opacity="0.5" />
            <circle cx="8.5" cy="10" r="1.5" stroke="#6B3C30" strokeWidth="1.5" opacity="0.5" />
            <path d="M4 16L9 12L13 15L16 12.5L20 16" stroke="#6B3C30" strokeWidth="1.5" opacity="0.5" strokeLinejoin="round" />
          </svg>
          <span className="font-mono text-[10px] text-ink/35">Photo coming soon</span>
        </div>
      )}
    </div>
  );
}

function Tag({ tag }: { tag: string }) {
  const style = tagStyle[tag] || { bg: "bg-paper-dim", text: "text-ink" };
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-[11.5px] font-semibold ${style.bg} ${style.text}`}>
      {tag}
    </span>
  );
}

function DateLabel({ date }: { date: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-ink/50">
      <CalendarIcon />
      {date}
    </span>
  );
}

export default function NewsPage() {
  const [featured, ...rest] = news;

  return (
    <>
      <PageBanner
        eyebrow="News"
        title="Updates from Mangochi District."
        description="Milestones, publications and programme news as our foundation grows."
      />

      <section className="py-25">
        <Container>
          {/* Featured article */}
          <Reveal as="article" className="group mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Thumb item={featured} className="aspect-video lg:aspect-[4/3] w-full transition-transform duration-300 group-hover:scale-[1.015]" />
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Tag tag={featured.tag} />
                  <DateLabel date={featured.date} />
                </div>
                <h2 className="font-display font-bold text-[28px] sm:text-[32px] leading-tight mb-3.5">
                  {featured.title}
                </h2>
                <p className="text-[15.5px] text-ink/65 leading-relaxed max-w-[520px]">{featured.excerpt}</p>
              </div>
            </div>
          </Reveal>

          {/* Grid of remaining articles */}
          <Reveal as="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((n) => (
              <article
                key={n.title}
                className="group rounded-2xl bg-white border border-black/8 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_32px_rgba(22,35,31,0.1)] hover:-translate-y-1 transition-all duration-200"
              >
                <Thumb item={n} className="aspect-video w-full" />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Tag tag={n.tag} />
                  </div>
                  <DateLabel date={n.date} />
                  <h3 className="font-display font-bold text-[16.5px] leading-snug mt-2 mb-2.5">
                    {n.title}
                  </h3>
                  <p className="text-[13.5px] text-ink/62 leading-relaxed line-clamp-3">{n.excerpt}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
