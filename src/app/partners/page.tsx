import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import Reveal from "@/components/ui/Reveal";
import { IconHospital, IconAudience, IconHandshake } from "@/components/ui/StatIcons";
import { partners, type Partner } from "@/data/partners";

export const metadata: Metadata = { title: "Partners — Patsogolo CP Foundation" };

const categoryMeta: Record<
  Partner["category"],
  { icon: React.ComponentType; bg: string; ring: string; text: string; pill: string }
> = {
  "Clinical & Research Partners": {
    icon: IconHospital,
    bg: "bg-teal-pastel",
    ring: "ring-teal-ring/40",
    text: "text-lake",
    pill: "bg-teal-pastel text-lake",
  },
  "Community & Capacity Partners": {
    icon: IconAudience,
    bg: "bg-sand-pastel",
    ring: "ring-sand-ring/50",
    text: "text-clay",
    pill: "bg-sand-pastel text-clay",
  },
  "Funding & Governance Partners": {
    icon: IconHandshake,
    bg: "bg-green-pastel",
    ring: "ring-green-ring/40",
    text: "text-lake-deep",
    pill: "bg-green-pastel text-lake-deep",
  },
};

const categoryOrder: Partner["category"][] = [
  "Clinical & Research Partners",
  "Community & Capacity Partners",
  "Funding & Governance Partners",
];

export default function PartnersPage() {
  return (
    <>
      <PageBanner
        eyebrow="Partners"
        title="The work of many organisations, in one district."
        description="From clinical referral hospitals to fundraising trainers, our progress has depended on partners across Malawi and beyond."
      />

      <section className="py-25">
        <Container className="flex flex-col gap-16">
          {categoryOrder.map((category) => {
            const meta = categoryMeta[category];
            const Icon = meta.icon;
            const group = partners.filter((p) => p.category === category);
            return (
              <div key={category}>
                <Reveal as="div" className="flex items-center gap-3 mb-7">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ring-2 ${meta.bg} ${meta.ring} ${meta.text}`}>
                    <Icon />
                  </div>
                  <h2 className="font-display font-bold text-[20px] tracking-tight">{category}</h2>
                </Reveal>

                <Reveal as="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.map((p) => (
                    <div
                      key={p.name}
                      className="group rounded-2xl p-6 bg-white border border-black/8 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(22,35,31,0.1)] transition-all duration-300"
                    >
                      <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold mb-3.5 ${meta.pill}`}>
                        {p.type}
                      </span>
                      <h3 className="text-[16.5px] font-display font-bold mb-2 leading-snug">{p.name}</h3>
                      <p className="text-[13.5px] text-ink/62 leading-relaxed">{p.description}</p>
                    </div>
                  ))}
                </Reveal>
              </div>
            );
          })}
        </Container>
      </section>
    </>
  );
}
