import type { Metadata } from "next";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import Reveal from "@/components/ui/Reveal";
import { team } from "@/data/team";

export const metadata: Metadata = { title: "Team — Patsogolo CP Foundation" };

export default function TeamPage() {
  return (
    <>
      <PageBanner
        eyebrow="Team"
        title="A team rooted in the same district-level approach it began with."
        description="Governance, clinical leadership and programme delivery, led by people who have been with Patsogolo since its early years."
      />

      <section className="py-25">
        <Container>
          <Reveal as="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => {
              const hasPhoto = m.photo && fs.existsSync(path.join(process.cwd(), "public", m.photo));
              return (
                <div key={m.name} className="border border-black/10 rounded-2xl bg-paper-dim overflow-hidden">
                  {hasPhoto ? (
                    <div className="relative w-full aspect-square">
                      <Image src={m.photo!} alt={m.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="pt-6.5 px-6.5">
                      <div className="w-11 h-11 rounded-full bg-lake text-sun-soft font-mono font-medium text-[15px] flex items-center justify-center">
                        {m.initials}
                      </div>
                    </div>
                  )}
                  <div className="p-6.5 pt-4">
                    <h4 className="text-base font-display font-bold mb-1">{m.name}</h4>
                    <div className="font-mono text-[12px] text-clay uppercase tracking-wide mb-2.5">{m.role}</div>
                    <p className="text-[13.5px] text-ink/65 leading-relaxed">{m.bio}</p>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
