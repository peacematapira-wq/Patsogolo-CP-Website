import Container from "./Container";
import Reveal from "./Reveal";

export default function PageBanner({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-lake-deep text-paper pt-[150px] pb-14">
      <Container>
        <Reveal as="div" className="eyebrow text-sun-soft mb-4">
          {eyebrow}
        </Reveal>
        <Reveal as="h1" className="font-display font-bold text-[clamp(34px,4.4vw,52px)] leading-[1.08] tracking-tight">
          {title}
        </Reveal>
        {description && (
          <Reveal as="p" className="mt-4.5 text-[16.5px] text-paper/78 max-w-[600px] leading-relaxed">
            {description}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
