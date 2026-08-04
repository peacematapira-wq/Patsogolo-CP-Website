import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function DonateBanner() {
  return (
    <section className="pb-20">
      <Container>
        <Reveal
          as="div"
          className="relative overflow-hidden rounded-[24px] p-9 sm:p-14 text-paper bg-[linear-gradient(160deg,var(--color-clay)_0%,var(--color-clay-deep)_100%)]"
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_88%_12%,rgba(221,154,136,0.3),transparent_50%)]" />
          <div className="relative flex justify-between items-center gap-10 flex-wrap">
            <div>
              <div className="eyebrow text-sand mb-3">Help us reach the next child</div>
              <h2 className="font-display font-bold text-[clamp(26px,3vw,36px)] leading-tight tracking-tight max-w-[480px]">
                Your support keeps four clinics running.
              </h2>
              <p className="mt-3.5 text-paper/82 max-w-[440px] text-[15.5px] leading-relaxed">
                Funding constraints have already forced us to cancel planned wheelchair provision for 11 children — your gift helps us close that gap.
              </p>
            </div>
            <div className="flex gap-3.5 flex-wrap">
              <Button href="/donate" variant="primary">
                Donate now
              </Button>
              <Button href="/publications" variant="secondary">
                Download our overview
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
