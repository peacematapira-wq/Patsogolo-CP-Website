import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import { featuredActivity } from "@/data/activities";

export default function FeaturedActivity() {
  return (
    <section className="pb-25">
      <Container>
        <SectionHead eyebrow="On the ground" title="A look at the work in Mangochi." />
      </Container>
      <Container>
        <Reveal as="div" className="grid grid-cols-1 lg:grid-cols-2 rounded-[20px] overflow-hidden border border-black/10">
          <div className="relative min-h-[240px] lg:min-h-[340px]">
            <Image
              src={featuredActivity.image!}
              alt={featuredActivity.imageAlt || featuredActivity.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-9 lg:p-11 bg-paper-dim flex flex-col justify-center">
            <div className="eyebrow text-clay mb-3.5">{featuredActivity.tag}</div>
            <h3 className="text-2xl font-display font-bold leading-snug mb-4">{featuredActivity.title}</h3>
            <p className="text-[15px] text-ink/70 leading-relaxed">{featuredActivity.description}</p>
            <Link href="/gallery" className="font-mono text-[13px] text-lake font-medium hover:text-clay mt-5 inline-block w-fit">
              See all activities →
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
