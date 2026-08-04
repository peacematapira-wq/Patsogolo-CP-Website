"use client";

import Reveal from "./Reveal";
import { timeline } from "@/data/timeline";

const nodeX = [20, 340, 660, 980, 1180];
const nodeY = [90, 80, 70, 65, 40];

export default function PathTimeline() {
  return (
    <div>
      <Reveal as="div" className="relative mt-7">
        <svg className="w-full h-auto" viewBox="0 0 1200 140" preserveAspectRatio="none">
          <path
            className="fill-none stroke-paper/28 stroke-2"
            strokeDasharray="2 10"
            strokeLinecap="round"
            d="M20,90 C140,20 220,140 340,80 C460,20 540,130 660,70 C780,10 860,120 980,65 C1040,38 1090,55 1180,40"
          />
          <path
            className="fill-none stroke-sun"
            strokeWidth="2.5"
            strokeLinecap="round"
            d="M20,90 C140,20 220,140 340,80 C460,20 540,130 660,70 C780,10 860,120 980,65 C1040,38 1090,55 1180,40"
          />
          {nodeX.map((x, i) => (
            <g key={x}>
              <circle cx={x} cy={nodeY[i]} r="10" className="fill-none stroke-sun opacity-50" />
              <circle cx={x} cy={nodeY[i]} r="6" className="fill-lake-deep stroke-sun stroke-2" />
            </g>
          ))}
        </svg>
      </Reveal>

      <Reveal as="div" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mt-2">
        {timeline.map((t) => (
          <div key={t.year} className="bg-paper/5 border border-paper/12 rounded-2xl p-4.5 min-h-[150px] flex flex-col gap-2">
            <div className="font-mono text-[12.5px] text-sun-soft tracking-wide">{t.year}</div>
            <h5 className="font-display text-[14.5px] font-semibold leading-snug text-paper">{t.title}</h5>
            <p className="text-[12.5px] text-paper/62 leading-relaxed">{t.description}</p>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
