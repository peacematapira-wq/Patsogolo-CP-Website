"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General enquiry");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `[Website] ${subject}${name ? " — " + name : ""}`
  )}&body=${encodeURIComponent(`${message}\n\n— ${name}\n${email}`)}`;

  return (
    <form
      className="bg-paper border border-black/10 rounded-[22px] p-7 sm:p-10 shadow-[0_24px_50px_rgba(22,35,31,0.06)]"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[12.5px] font-mono text-ink/55">Your name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="px-3.5 py-3 border-[1.5px] border-black/10 rounded-[10px] text-[14.5px] outline-none focus:border-lake bg-paper"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[12.5px] font-mono text-ink/55">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="px-3.5 py-3 border-[1.5px] border-black/10 rounded-[10px] text-[14.5px] outline-none focus:border-lake bg-paper"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 mb-4">
        <label className="text-[12.5px] font-mono text-ink/55">What&rsquo;s this about?</label>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="px-3.5 py-3 border-[1.5px] border-black/10 rounded-[10px] text-[14.5px] outline-none focus:border-lake bg-paper"
        >
          <option>General enquiry</option>
          <option>Partnership or funding</option>
          <option>Volunteering</option>
          <option>Media & press</option>
          <option>Referral or clinical question</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5 mb-6">
        <label className="text-[12.5px] font-mono text-ink/55">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us a little about what you'd like to discuss"
          rows={5}
          className="px-3.5 py-3 border-[1.5px] border-black/10 rounded-[10px] text-[14.5px] outline-none focus:border-lake bg-paper resize-none"
        />
      </div>

      <a
        href={mailtoHref}
        className="inline-flex items-center justify-center w-full bg-ink text-paper font-semibold text-[15px] px-6.5 py-3.5 rounded-full hover:bg-lake hover:-translate-y-0.5 transition-all"
      >
        Send via email →
      </a>
      <p className="text-[12.5px] text-ink/45 mt-4 leading-relaxed">
        This opens your email app with the message pre-filled to {site.email}. Prefer to write directly? Reach us any time at{" "}
        <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
      </p>
    </form>
  );
}
