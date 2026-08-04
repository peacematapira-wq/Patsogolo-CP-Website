import Reveal from "./Reveal";

export default function SectionHead({
  eyebrow,
  title,
  description,
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal as="div" className={`max-w-[660px] mb-13 ${className}`}>
      <div className={`eyebrow mb-4 ${light ? "text-sun-soft" : "text-clay"}`}>{eyebrow}</div>
      <h2 className={`font-display font-bold text-[clamp(29px,3.2vw,42px)] leading-[1.08] tracking-tight ${light ? "text-paper" : "text-ink"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4.5 text-[16.5px] leading-relaxed ${light ? "text-paper/75" : "text-ink/72"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
