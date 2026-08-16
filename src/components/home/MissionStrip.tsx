import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const missionPhoto = {
  src: "/images/mission-photo.jpg",
  alt: "Patsogolo CP Foundation team and community members at work in Mangochi District",
};

const tags = ["ICF Framework", "Family-Centred", "Community-Led", "Mangochi District"];

export default function MissionStrip() {
  const exists = fs.existsSync(path.join(process.cwd(), "public", missionPhoto.src));

  return (
    <section className="py-24 bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <Reveal as="div" className="relative">
          <div className="relative rounded-2xl overflow-hidden bg-paper-dim aspect-4/5">
            {exists ? (
              <Image src={missionPhoto.src} alt={missionPhoto.alt} fill className="object-cover" />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 gap-2 border-2 border-dashed border-black/15">
                <span className="font-mono text-[11px] uppercase tracking-wide text-ink/40">Mission photo</span>
                <span className="font-mono text-[10px] text-ink/35">Coming soon</span>
              </div>
            )}
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-3 rounded-full text-[13px] font-bold text-paper shadow-lg whitespace-nowrap bg-clay">
            Community-led, family-first
          </div>
        </Reveal>

        {/* Text */}
        <Reveal as="div">
          <div className="eyebrow text-clay mb-5">Our mission</div>
          <h2 className="font-display font-bold leading-[1.1] mb-6 text-[clamp(28px,3.4vw,42px)] tracking-tight">
            Building ability,
            <br />
            <span className="text-lake-deep">celebrating possibility.</span>
          </h2>
          <p className="text-[16px] text-ink/72 leading-relaxed mb-4">
            Patsogolo CP Foundation is a multidisciplinary programme built on the ICF framework.
          </p>
          <p className="text-[16px] text-ink/72 leading-relaxed mb-8">
            Our interdisciplinary team of physiotherapists, nutritionists and community health workers works alongside caregivers to improve the qiality of life and create a long-lasting impact where families are part of the plan.
          </p>
          <div className="flex flex-wrap gap-2.5 mb-8">
            {tags.map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full text-[13px] font-semibold bg-paper-dim text-ink">
                {tag}
              </span>
            ))}
          </div>
          <Link href="/about" className="inline-flex items-center gap-1.5 font-mono text-[13px] text-lake font-medium hover:text-clay transition-colors">
            Read our full story &rarr;
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
