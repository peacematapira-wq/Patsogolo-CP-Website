import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export default function DonateBanner() {
  return (
    <section className="py-24 bg-lake-deep relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_88%_15%,rgba(221,154,136,0.16),transparent_45%)]" />
      <Container className="relative text-center">
        {/* Memphis dots */}
        <Reveal as="div" className="flex justify-center gap-3 mb-7 opacity-70">
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ background: i % 2 === 0 ? "var(--color-sand)" : "var(--color-paper)" }}
            />
          ))}
        </Reveal>

        <Reveal as="h2" className="font-display font-bold text-paper leading-tight mb-4 text-[clamp(28px,4.2vw,44px)] tracking-tight">
          Together, we go further.
        </Reveal>
        <Reveal as="p" className="text-[16px] font-medium mb-10 text-paper/80 max-w-[560px] mx-auto leading-relaxed">
          We&rsquo;re setting up how you can give directly, but funding constraints have already forced us to cancel planned wheelchair provision for 11 children. Whether you want to collaborate, follow our work, or simply learn more &mdash; every bit of support counts.
        </Reveal>

        <Reveal as="div" className="flex flex-wrap justify-center gap-4">
          <Button href="/donate" variant="primary">
            Donate &amp; Collaborate
          </Button>
          <Button href="/about" variant="secondary">
            Read our story
          </Button>
          <Button href={site.instagramUrl} variant="secondary">
            Follow our journey
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
