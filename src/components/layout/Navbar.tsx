"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-lake-deep/95 backdrop-blur-md shadow-[0_1px_0_rgba(246,241,228,0.08)] py-3">
      <div className="max-w-310 mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2.5 text-paper shrink-0">
            <Image
              src="/images/logo.png"
              alt={`${site.name} logo`}
              width={34}
              height={34}
              className="rounded-full object-cover"
            />
            <span className="font-display font-bold text-[17px] tracking-tight">{site.shortName}</span>
          </Link>

          <ul className="hidden xl:flex items-center gap-5">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-[13.5px] font-medium transition-colors relative py-1 ${
                      active ? "text-sun-soft" : "text-paper/78 hover:text-paper"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="hidden sm:inline-flex items-center font-mono text-[13px] font-medium bg-sand text-ink px-4.5 py-2.25 rounded-full hover:bg-sand-deep transition-colors"
            >
              Donate
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="xl:hidden border border-paper/30 text-paper rounded-lg px-2.5 py-2"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </nav>

        {open && (
          <div className="xl:hidden mt-4 pb-2 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-[14.5px] font-medium py-2.5 px-1 border-b border-paper/10 ${
                  pathname === item.href ? "text-sun-soft" : "text-paper/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="mt-3 text-center font-mono text-[13px] font-medium bg-sand text-ink px-4.5 py-2.5 rounded-full"
            >
              Donate
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
