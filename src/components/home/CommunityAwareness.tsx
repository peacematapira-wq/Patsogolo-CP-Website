import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";

const channels = [
  {
    label: "Drama Plays",
    value: "6",
    description:
      "Productions written and performed by our caregiver-led dramaplay group, staged live and carried by radio across Mangochi District.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M8 10.5C9 11.5 10.5 11.5 11.5 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M4 7C4 5.3 5.3 4 7 4H10C10 6.5 8.5 8 6 8C5 8 4 7.5 4 7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M20 7C20 5.3 18.7 4 17 4H14C14 6.5 15.5 8 18 8C19 8 20 7.5 20 7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M6 8C6 13 8.5 18 12 18C15.5 18 18 13 18 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 18L8 21M15 18L16 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Radio",
    value: "Regular",
    description:
      "Ongoing broadcasts carrying our awareness and dramaplay content to households across multiple districts in the region.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3.5" y="9" width="17" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="8" cy="14.5" r="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M13 13H17M13 16H15.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 9L15 4M15 4L13.5 6.5M15 4L17.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "World CP Day",
    value: "3rd edition",
    description:
      "First marked in 2024 and now in its second year, our annual World CP Day brings children, caregivers and community leaders together.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="5.5" width="16" height="14.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 9.5H20" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 3.5V7M16 3.5V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8.5 13.5L11 16L15.5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function CommunityAwareness() {
  return (
    <section className="py-25 bg-ink text-paper">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-13">
          <SectionHead
            light
            eyebrow="Community awareness"
            title="Reaching Mangochi District, one story at a time."
            description="Awareness work carries our stigma-reduction message far beyond clinic walls — into homes, schools and villages across the district."
            className="mb-0"
          />
          <Reveal as="div" className="shrink-0">
            <div className="font-mono text-[42px] sm:text-[52px] text-sand leading-none font-medium">1,000,000+</div>
            <div className="text-[13px] text-paper/60 mt-2">people reached through community awareness</div>
          </Reveal>
        </div>

        <Reveal as="div" className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {channels.map((c) => (
            <div key={c.label} className="border-t border-paper/18 pt-6">
              <div className="w-10 h-10 rounded-full bg-paper/8 text-sand flex items-center justify-center mb-4">
                {c.icon}
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <h4 className="text-base font-display font-bold">{c.label}</h4>
                <span className="font-mono text-[12.5px] text-sun-soft">{c.value}</span>
              </div>
              <p className="text-[14px] text-paper/62 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
