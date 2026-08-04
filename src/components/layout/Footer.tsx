import Link from "next/link";
import Image from "next/image";
import { clinicSites, site } from "@/data/site";
import InstagramIcon from "@/components/ui/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/70 pt-16 pb-8">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-paper/10">
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-paper mb-3.5">
              <Image src="/images/logo.jpg" alt={`${site.name} logo`} width={30} height={30} className="rounded-full object-cover" />
              <span className="font-display font-bold text-[17px]">{site.shortName}</span>
            </Link>
            <p className="text-sm text-paper/55 max-w-[280px] leading-relaxed">
              Care, inclusion and empowerment for children with cerebral palsy, their families and communities — {site.district}.
            </p>
          </div>

          <div>
            <h5 className="font-mono text-xs tracking-widest uppercase text-paper/40 mb-3.5 font-medium">Site</h5>
            <ul className="flex flex-col gap-2.5">
              {[
                ["About Us", "/about"],
                ["Vision & Mission", "/vision-mission"],
                ["Our Programs", "/programs"],
                ["Projects", "/projects"],
                ["News", "/news"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-paper/72 hover:text-sun-soft transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-xs tracking-widest uppercase text-paper/40 mb-3.5 font-medium">More</h5>
            <ul className="flex flex-col gap-2.5">
              {[
                ["Gallery", "/gallery"],
                ["Team", "/team"],
                ["Partners", "/partners"],
                ["Publications", "/publications"],
                ["Donate", "/donate"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-paper/72 hover:text-sun-soft transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-xs tracking-widest uppercase text-paper/40 mb-3.5 font-medium">Contact</h5>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href={`mailto:${site.email}`} className="text-sm text-paper/72 hover:text-sun-soft transition-colors">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-paper/72 hover:text-sun-soft transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  {site.instagram}
                </a>
              </li>
              <li className="text-sm text-paper/72">{site.address}</li>
            </ul>
            <h5 className="font-mono text-xs tracking-widest uppercase text-paper/40 mt-5 mb-2.5 font-medium">Clinic sites</h5>
            <ul className="flex flex-col gap-1.5">
              {clinicSites.map((s) => (
                <li key={s} className="text-[13px] text-paper/55">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-between flex-wrap gap-2.5 pt-6 text-[12.5px] text-paper/40">
          <span>© {new Date().getFullYear()} {site.name}. &ldquo;{site.tagline}.&rdquo;</span>
          <span>Mangochi District, Malawi.</span>
        </div>
      </div>
    </footer>
  );
}
