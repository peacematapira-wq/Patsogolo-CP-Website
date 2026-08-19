import type { Metadata } from "next";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import { downloadablePublications, externalPublications, type Publication } from "@/data/publications";

export const metadata: Metadata = { title: "Publications — Patsogolo CP Foundation" };

const categoryStyle: Record<string, { bg: string; text: string }> = {
  "Historical Overview": { bg: "bg-teal-pastel", text: "text-lake" },
  "Programme Overview": { bg: "bg-green-pastel", text: "text-lake-deep" },
  Cookbook: { bg: "bg-sand-pastel", text: "text-clay" },
  "Activity Plan": { bg: "bg-brown-pastel", text: "text-clay-deep" },
};

function categoryColor(category: string) {
  if (categoryStyle[category]) return categoryStyle[category];
  if (category.startsWith("Journal")) return { bg: "bg-brown-pastel", text: "text-clay-deep" };
  return { bg: "bg-paper-dim", text: "text-ink" };
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M12 4V15M12 15L7.5 10.5M12 15L16.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17.5V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DocFoldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 3H14L19 8V20C19 20.55 18.55 21 18 21H6C5.45 21 5 20.55 5 20V4C5 3.45 5.45 3 6 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 3V8H19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function Cover({ pub }: { pub: Publication }) {
  const hasCover = pub.coverImage && fs.existsSync(path.join(process.cwd(), "public", pub.coverImage));
  const style = categoryColor(pub.category);

  return (
    <div
      className={`relative w-26 sm:w-30 aspect-3/4 shrink-0 rounded-lg overflow-hidden border border-black/10 shadow-md group-hover:shadow-lg transition-shadow duration-300 bg-white ${
        pub.comingSoon ? "opacity-60" : ""
      }`}
    >
      {hasCover ? (
        <Image src={pub.coverImage!} alt={`${pub.title} — cover preview`} fill className="object-cover object-top" />
      ) : (
        <div className="w-full h-full flex flex-col">
          <div className={`h-[38%] w-full ${style.bg} flex items-center justify-center`}>
            <DocFoldIcon className={`w-6 h-6 ${style.text} opacity-70`} />
          </div>
          <div className="flex-1 p-2.5 flex flex-col gap-1.5 justify-center">
            <div className="h-1 rounded-full bg-black/10 w-full" />
            <div className="h-1 rounded-full bg-black/10 w-4/5" />
            <div className="h-1 rounded-full bg-black/10 w-full" />
            <div className="h-1 rounded-full bg-black/10 w-3/5" />
          </div>
        </div>
      )}
    </div>
  );
}

function PublicationCard({ pub }: { pub: Publication }) {
  const fileReady = !pub.comingSoon && !!pub.href && fs.existsSync(path.join(process.cwd(), "public", pub.href));
  const style = categoryColor(pub.category);

  return (
    <div className="group bg-white rounded-2xl border border-black/8 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_32px_rgba(22,35,31,0.1)] transition-all duration-300">
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
        <Cover pub={pub} />

        <div className="flex-1 min-w-0">
          <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold mb-3 ${style.bg} ${style.text}`}>
            {pub.category}
          </span>
          <h3 className="text-lg font-display font-bold leading-snug mb-2">{pub.title}</h3>
          <p className="text-[13.5px] text-ink/60 leading-relaxed line-clamp-2 max-w-120">{pub.description}</p>
        </div>

        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 sm:min-w-38 pt-1">
          <span
            className={`font-mono text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap ${
              fileReady ? "bg-clay/10 text-clay" : "bg-black/8 text-ink/40"
            }`}
          >
            PDF{pub.fileSize ? ` \u00b7 ${pub.fileSize}` : ""}
          </span>

          {fileReady ? (
            <a
              href={pub.href}
              download={pub.downloadName}
              className="inline-flex items-center gap-2 font-mono text-[12.5px] font-medium bg-ink text-paper px-5 py-2.5 rounded-full whitespace-nowrap hover:bg-lake hover:-translate-y-0.5 transition-all"
            >
              <DownloadIcon />
              Download
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 font-mono text-[12.5px] font-medium bg-black/8 text-ink/40 px-5 py-2.5 rounded-full whitespace-nowrap">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PublicationsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Publications"
        title="Read the detail behind the summary."
        description="Documents prepared for funders, partners and researchers, plus our published research and journal features."
      />

      <section className="py-25">
        <Container>
          <SectionHead eyebrow="Downloadable resources" title="Reports & overviews" />
          <Reveal as="div" className="flex flex-col gap-5 mb-4">
            {downloadablePublications.map((pub) => (
              <PublicationCard key={pub.title} pub={pub} />
            ))}
          </Reveal>

          <SectionHead eyebrow="Peer-reviewed & journal features" title="Research & media coverage" />
          <Reveal as="div" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {externalPublications.map((pub) => {
              const style = categoryColor(pub.category);
              return (
                <div key={pub.title} className="border border-black/8 rounded-2xl p-7 bg-paper-dim">
                  <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold mb-3 ${style.bg} ${style.text}`}>
                    {pub.category}
                  </span>
                  <h4 className="text-[17px] font-display font-bold mb-2.5 leading-snug">{pub.title}</h4>
                  <p className="text-sm text-ink/65 leading-relaxed">{pub.description}</p>
                </div>
              );
            })}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
