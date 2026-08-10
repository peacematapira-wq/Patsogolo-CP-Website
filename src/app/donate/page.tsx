import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import SectionHead from "@/components/ui/SectionHead";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ui/ContactForm";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Donate — Patsogolo CP Foundation" };

const collaborationWays = [
  {
    title: "Institutional partnership",
    description:
      "Foundations, hospitals and academic institutions can partner with us on funding, research or training across our four clinic sites.",
  },
  {
    title: "In-kind support",
    description:
      "Assistive devices, nutrition supplies and materials for our local carpentry workshop make a direct, tangible difference.",
  },
  {
    title: "Major & recurring gifts",
    description:
      "For larger or recurring gifts, our team can walk you through the options currently available to us.",
  },
  {
    title: "Volunteering & skills",
    description:
      "From fundraising training to clinical mentorship, skilled volunteers extend what our small team can do.",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageBanner
        eyebrow="Donate & Collaborate"
        title="We're setting up how you can give directly — for now, let's talk."
        description="We don't yet have an online payment gateway in place, but we'd love to hear from you about how you can support children with cerebral palsy in Mangochi District."
      />

      <section className="py-25">
        <Container>
          <SectionHead eyebrow="How to help" title="Ways to collaborate with us." />
          <Reveal as="div" className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {collaborationWays.map((c) => (
              <div key={c.title} className="border border-black/10 rounded-2xl p-7 bg-paper-dim">
                <h4 className="text-lg font-display font-bold mb-2.5">{c.title}</h4>
                <p className="text-[14.5px] text-ink/66 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="py-25 bg-paper-dim">
        <Container className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
          <Reveal as="div">
            <SectionHead eyebrow="Get in touch" title="Tell us how you&rsquo;d like to help." className="mb-8" />
            <ContactForm />
          </Reveal>

          <Reveal as="div" className="flex flex-col gap-5">
            <div className="bg-lake-deep text-paper rounded-2xl p-7.5">
              <div className="eyebrow text-sun-soft mb-3.5">Direct contact</div>
              <p className="text-sm text-paper/75 leading-relaxed mb-4">
                Prefer to reach out directly? We&rsquo;re happy to talk through any way you&rsquo;d like to collaborate.
              </p>
              <a href={`mailto:${site.email}`} className="font-mono text-sun-soft text-sm block mb-1.5">{site.email}</a>
              <span className="text-sm text-paper/70 block mb-4">{site.address}</span>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sun-soft text-sm hover:text-paper transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                {site.instagram}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
