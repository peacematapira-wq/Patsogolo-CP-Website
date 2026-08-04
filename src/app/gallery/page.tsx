import type { Metadata } from "next";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import { activities, featuredActivity, featuredVideo } from "@/data/activities";

export const metadata: Metadata = { title: "Gallery — Patsogolo CP Foundation" };

export default function GalleryPage() {
  const videoPath = path.join(process.cwd(), "public", featuredVideo.src);
  const videoExists = fs.existsSync(videoPath);

  return (
    <>
      <PageBanner
        eyebrow="Gallery"
        title="Moments from the work."
        description="A growing photo and video record of our clinics, training sessions and community events across Mangochi District."
      />

      <section className="py-25">
        <Container>
          <Reveal as="div" className="relative rounded-2xl overflow-hidden border border-black/10 mb-6">
            <div className="relative w-full aspect-[16/10] sm:aspect-[21/9]">
              <Image src={featuredActivity.image!} alt={featuredActivity.imageAlt || featuredActivity.title} fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <span className="font-mono text-[12px] text-sun-soft uppercase tracking-wide">{featuredActivity.tag}</span>
              <h3 className="text-paper text-lg font-display font-bold mt-1">{featuredActivity.title}</h3>
            </div>
          </Reveal>

          <SectionHead eyebrow={featuredVideo.tag} title={featuredVideo.title} description={featuredVideo.description} className="mb-8" />

          <Reveal as="div" className="rounded-2xl overflow-hidden border border-black/10 mb-13">
            {videoExists ? (
              <video controls poster={featuredActivity.image} className="w-full aspect-video bg-black">
                <source src={featuredVideo.src} type="video/mp4" />
                Your browser doesn&rsquo;t support embedded video.
              </video>
            ) : (
              <div className="w-full aspect-video bg-paper-dim border-2 border-dashed border-black/15 flex flex-col items-center justify-center gap-3 text-center px-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="14" height="14" rx="2.5" stroke="#6B3C30" strokeWidth="1.6" />
                  <path d="M17 9.5L21 7V17L17 14.5" stroke="#6B3C30" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
                <span className="text-sm font-medium text-ink/60">Video coming soon</span>
                <span className="font-mono text-[11.5px] text-ink/40 max-w-[360px] leading-relaxed">
                  Drop the file at <code className="bg-black/5 px-1.5 py-0.5 rounded">public{featuredVideo.src}</code> and it will appear here automatically.
                </span>
              </div>
            )}
          </Reveal>

          <SectionHead eyebrow="More of our work" title="Activities across all four pillars." className="mb-8" />

          <Reveal as="div" className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {activities.map((a) => {
              const exists = a.image ? fs.existsSync(path.join(process.cwd(), "public", a.image.replace(/^\//, ""))) : false;
              return (
                <div key={a.title} className="aspect-square rounded-2xl overflow-hidden relative border border-black/10">
                  {exists ? (
                    <>
                      <Image src={a.image!} alt={a.imageAlt || a.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="font-mono text-[10px] text-sun-soft uppercase tracking-wide">{a.tag}</span>
                        <h4 className="text-paper text-[13px] font-semibold leading-snug mt-0.5">{a.title}</h4>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full border-2 border-dashed border-black/15 bg-paper-dim flex flex-col items-center justify-center text-center p-5 gap-2">
                      <span className="font-mono text-[10.5px] uppercase tracking-wide text-ink/40">{a.tag}</span>
                      <span className="text-[13px] font-medium text-ink/65 leading-snug">{a.title}</span>
                      <span className="font-mono text-[10.5px] text-ink/35 mt-1">Photo coming soon</span>
                    </div>
                  )}
                </div>
              );
            })}
          </Reveal>

          <p className="text-[13.5px] text-ink/45 mt-8 max-w-[560px] leading-relaxed">
            Have photos or video from these activities? Send them to us and we&rsquo;ll add them here — see the Contact page to get in touch.
          </p>
        </Container>
      </section>
    </>
  );
}
