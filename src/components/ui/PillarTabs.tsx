"use client";

import { useState } from "react";
import { pillars } from "@/data/programs";
import Reveal from "./Reveal";

export default function PillarTabs() {
  const [activeId, setActiveId] = useState(pillars[0].id);
  const active = pillars.find((p) => p.id === activeId)!;

  return (
    <div>
      <Reveal as="div" className="flex gap-2.5 mb-11 flex-wrap">
        {pillars.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveId(p.id)}
            className={`font-mono text-[13px] tracking-wide px-5 py-2.5 rounded-full border transition-colors ${
              p.id === activeId
                ? "bg-sun text-ink border-sun font-medium"
                : "bg-transparent text-paper/68 border-paper/22 hover:text-paper"
            }`}
          >
            {p.number} — {p.title}
          </button>
        ))}
      </Reveal>

      <Reveal as="div" key={active.id} className="in">
        <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_1fr] gap-10 lg:gap-14 mb-11">
          <div className="font-mono text-[52px] lg:text-[80px] text-paper/14 leading-none font-medium">
            {active.number}
          </div>
          <div>
            <h3 className="font-display font-bold text-[clamp(26px,2.8vw,36px)] leading-tight tracking-tight">
              {active.title}
            </h3>
            <p className="mt-4 text-[15.5px] text-paper/68 leading-relaxed">{active.summary}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {active.components.map((c) => (
            <div key={c.title} className="border-t border-paper/18 pt-5">
              <h4 className="text-[16px] font-semibold mb-2.5">{c.title}</h4>
              <p className="text-[14px] text-paper/60 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
