import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageBanner from "@/components/ui/PageBanner";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ui/ContactForm";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { clinicSites, site } from "@/data/site";

export const metadata: Metadata = { title: "Contact — Patsogolo CP Foundation" };

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Let's talk."
        description="Whether you're a potential partner, a caregiver seeking referral information, or a journalist — we'd like to hear from you."
      />

      <section className="py-25">
        <Container className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
          <Reveal as="div">
            <ContactForm />
          </Reveal>

          <Reveal as="div" className="flex flex-col gap-5">
            <div className="bg-lake-deep text-paper rounded-2xl p-7.5">
              <div className="eyebrow text-sun-soft mb-3.5">Direct contact</div>
              <p className="text-sm text-paper/75 leading-relaxed mb-4">
                For institutional gifts, in-kind donations or partnership funding, reach our team directly.
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

            <div className="bg-paper-dim border border-black/10 rounded-2xl p-7.5">
              <div className="eyebrow text-clay mb-3.5">Clinic sites</div>
              <ul className="flex flex-col gap-2">
                {clinicSites.map((s) => (
                  <li key={s} className="text-[14px] text-ink/70">{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
