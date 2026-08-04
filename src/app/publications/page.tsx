import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import { downloadablePublications, externalPublications } from "@/data/publications";

export const metadata: Metadata = { title: "Publications — Patsogolo CP Foundation" };

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M6 3H14L19 8V20C19 20.55 18.55 21 18 21H6C5.45 21 5 20.55 5 20V4C5 3.45 5.45 3 6 3Z" stroke="#6B3C30" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14 3V8H19" stroke="#6B3C30" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
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
          <Reveal as="div" className="flex flex-col gap-px bg-black/10 border border-black/10 rounded-2xl overflow-hidden mb-4">
            {downloadablePublications.map((pub) => {
              const fileReady =
                !pub.comingSoon && !!pub.href && fs.existsSync(path.join(process.cwd(), "public", pub.href));
              return (
                <div
                  key={pub.title}
                  className={`bg-paper p-6 sm:p-7.5 grid grid-cols-1 sm:grid-cols-[52px_1fr_auto] gap-4 sm:gap-5.5 items-center ${
                    fileReady ? "" : "opacity-55"
                  }`}
                >
                  <div className="w-13 h-13 rounded-xl bg-paper-dim flex items-center justify-center shrink-0">
                    <DocIcon />
                  </div>
                  <div>
                    <h4 className="text-[16.5px] font-display font-bold mb-1.5">{pub.title}</h4>
                    <p className="text-sm text-ink/62 leading-relaxed max-w-[560px]">{pub.description}</p>
                    <span className="font-mono text-[11.5px] text-clay mt-2 inline-block">{pub.meta}</span>
                  </div>
                  {fileReady ? (
                    <a
                      href={pub.href}
                      download={pub.downloadName}
                      className="font-mono text-[13px] font-medium bg-ink text-paper px-5 py-2.5 rounded-full whitespace-nowrap hover:bg-lake hover:-translate-y-0.5 transition-all text-center"
                    >
                      Download PDF
                    </a>
                  ) : (
                    <span className="font-mono text-[13px] font-medium bg-black/10 text-ink/50 px-5 py-2.5 rounded-full whitespace-nowrap text-center">
                      Coming soon
                    </span>
                  )}
                </div>
              );
            })}
          </Reveal>

          <SectionHead eyebrow="Peer-reviewed & journal features" title="Research & media coverage" />
          <Reveal as="div" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {externalPublications.map((pub) => (
              <div key={pub.title} className="border border-black/10 rounded-2xl p-7 bg-paper-dim">
                <span className="font-mono text-[11.5px] text-clay">{pub.meta}</span>
                <h4 className="text-[17px] font-display font-bold mt-2.5 mb-2.5 leading-snug">{pub.title}</h4>
                <p className="text-sm text-ink/65 leading-relaxed">{pub.description}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
