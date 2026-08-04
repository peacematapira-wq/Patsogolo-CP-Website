"use client";

import { useState } from "react";

const amounts = [15, 35, 75, 150, 300];
const impactMap: Record<number, string> = {
  15: "covers a month of Likuni Pala nutrition supplementation for one malnourished child.",
  35: "covers assistive-device materials for one child's custom-fitted feeding utensils.",
  75: "covers a full CP chair, built and fitted by our local carpentry workshop.",
  150: "supports one community rehabilitation volunteer for a month, reaching 4 families.",
  300: "helps fund a full day of multidisciplinary clinic — physiotherapy, nutrition and medical care together.",
};
const methods = ["Airtel Money", "TNM Mpamba", "Bank Transfer", "Card"];

function closestImpact(amount: number) {
  let closest = 15;
  let dist = Infinity;
  for (const a of amounts) {
    const d = Math.abs(a - amount);
    if (d < dist) {
      dist = d;
      closest = a;
    }
  }
  return impactMap[closest];
}

export default function DonateFlow() {
  const [step, setStep] = useState(1);
  const [freq, setFreq] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number | "custom">(35);
  const [customAmount, setCustomAmount] = useState("");
  const [method, setMethod] = useState(methods[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const numericAmount = amount === "custom" ? parseInt(customAmount) || 0 : amount;

  return (
    <div className="bg-paper border border-black/10 rounded-[22px] p-7 sm:p-10 shadow-[0_24px_50px_rgba(22,35,31,0.06)]">
      <div className="flex gap-2.5 mb-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex-1 h-[3px] rounded-full bg-black/10 relative overflow-hidden">
            <div
              className={`absolute inset-0 bg-clay origin-left transition-transform duration-300 ${
                n <= step ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="fade-in">
          <h3 className="font-display font-bold text-[22px] mb-1.5">Choose your gift</h3>
          <p className="text-sm text-ink/60 mb-7">
            All amounts are in US dollars for illustration — you&rsquo;ll be able to give in Malawian Kwacha at the next step.
          </p>

          <div className="flex gap-px bg-black/10 border border-black/10 rounded-full overflow-hidden mb-6 w-fit">
            {(["once", "monthly"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFreq(f)}
                className={`px-5.5 py-2.5 text-[13.5px] font-medium ${
                  freq === f ? "bg-ink text-paper" : "bg-paper text-ink/60"
                }`}
              >
                {f === "once" ? "One-time" : "Monthly"}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 mb-5">
            {amounts.map((a) => (
              <button
                key={a}
                onClick={() => setAmount(a)}
                className={`py-4 px-2.5 rounded-xl border-[1.5px] text-center font-mono text-[15px] font-medium transition-colors ${
                  amount === a ? "border-clay bg-clay/8 text-clay" : "border-black/10 text-ink"
                }`}
              >
                ${a}
              </button>
            ))}
            <button
              onClick={() => setAmount("custom")}
              className={`py-4 px-2.5 rounded-xl border-[1.5px] text-center font-mono text-[15px] font-medium transition-colors ${
                amount === "custom" ? "border-clay bg-clay/8 text-clay" : "border-black/10 text-ink"
              }`}
            >
              Custom
            </button>
          </div>

          {amount === "custom" && (
            <div className="flex items-center border-[1.5px] border-black/10 rounded-xl overflow-hidden mb-7">
              <span className="px-4 py-3.5 font-mono text-sm bg-paper-dim text-ink/55">$</span>
              <input
                type="number"
                min={1}
                autoFocus
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter an amount"
                className="border-none px-3 py-3.5 font-mono text-[15px] flex-1 outline-none bg-transparent"
              />
            </div>
          )}

          <div className="bg-paper-dim rounded-xl px-4.5 py-4 text-[13.5px] text-ink/70 leading-relaxed mb-7">
            <b className="font-mono text-clay font-medium">${numericAmount || 0}</b>{" "}
            {freq === "monthly" ? "a month " : ""}
            {closestImpact(numericAmount || 15)}
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setStep(2)}
              className="bg-ink text-paper font-semibold text-[15px] px-6.5 py-3.5 rounded-full hover:-translate-y-0.5 transition-transform"
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="fade-in">
          <h3 className="font-display font-bold text-[22px] mb-1.5">How would you like to give?</h3>
          <p className="text-sm text-ink/60 mb-7">
            Choose a payment method. This preview flow doesn&rsquo;t process real payments yet.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {methods.map((m) => (
              <button
                key={m}
                onClick={() => setMethod(m)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border-[1.5px] text-sm font-medium text-left transition-colors ${
                  method === m ? "border-lake bg-lake/6" : "border-black/10"
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full border-[1.5px] shrink-0 ${
                    method === m ? "border-lake bg-lake" : "border-black/30"
                  }`}
                />
                {m}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
            <Field label="Full name">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="field-input" />
            </Field>
            <Field label="Email">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="field-input"
              />
            </Field>
            <Field label="Phone or account number" full>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g. 099 xxx xxxx" className="field-input" />
            </Field>
          </div>

          <div className="flex justify-between mt-2">
            <button onClick={() => setStep(1)} className="text-ink/55 text-sm font-medium py-3.5 hover:text-ink">
              ← Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="bg-ink text-paper font-semibold text-[15px] px-6.5 py-3.5 rounded-full hover:-translate-y-0.5 transition-transform"
            >
              Review gift →
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="fade-in">
          <div className="w-14 h-14 rounded-full bg-leaf flex items-center justify-center mb-5.5">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M4 12.5L9.5 18L20 6" stroke="#F6F1E4" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="font-display font-bold text-[22px] mb-1.5">
            {confirmed ? "Thank you — your gift is on its way." : "Review your gift"}
          </h3>
          <p className="text-sm text-ink/60 mb-7">
            {confirmed
              ? "We're deeply grateful for your support of children with cerebral palsy in Mangochi District."
              : "In a live version of this site, confirming here would hand off to a payment processor (e.g. Airtel Money, TNM Mpamba or a card gateway) to complete the transaction."}
          </p>

          <div className="bg-paper-dim rounded-2xl px-5.5 py-1 mb-7 text-sm">
            <Row label="Gift" value={`$${numericAmount || 0}${freq === "monthly" ? " / month" : " one-time"}`} />
            <Row label="Method" value={method} />
            <Row label="Name" value={name || "—"} />
            <Row label="Contact" value={email || phone || "—"} last />
          </div>

          {!confirmed ? (
            <>
              <div className="flex justify-between gap-3.5">
                <button onClick={() => setStep(2)} className="text-ink/55 text-sm font-medium py-3.5 hover:text-ink">
                  ← Back
                </button>
                <button
                  onClick={() => setConfirmed(true)}
                  className="flex-1 bg-sand text-ink font-semibold text-[15px] px-6.5 py-3.5 rounded-full text-center shadow-[0_8px_20px_rgba(221,154,136,0.35)] hover:bg-sand-deep hover:-translate-y-0.5 transition-all"
                >
                  Confirm gift
                </button>
              </div>
              <p className="text-[12.5px] text-ink/45 mt-4.5 leading-relaxed">
                This is a demo donation flow built for preview purposes — connect a payment processor to accept live gifts. No payment is taken by this page.
              </p>
            </>
          ) : (
            <p className="text-[12.5px] text-ink/45 mt-1 leading-relaxed">
              🌿 No payment was actually processed — this is a preview flow.
            </p>
          )}
        </div>
      )}

      <style jsx global>{`
        .field-input {
          padding: 12px 14px;
          border: 1.5px solid rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          font-size: 14.5px;
          background: var(--color-paper);
          color: var(--color-ink);
          outline: none;
          width: 100%;
        }
        .field-input:focus {
          border-color: var(--color-lake);
        }
      `}</style>
    </div>
  );
}

function Field({ label, children, full = false }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <div className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
      <label className="text-[12.5px] font-mono text-ink/55">{label}</label>
      {children}
    </div>
  );
}

function Row({ label, value, last = false }: { label: string; value: string; last?: boolean }) {
  return (
    <div className={`flex justify-between py-3 ${last ? "" : "border-b border-black/10"}`}>
      <span>{label}</span>
      <span className="font-mono font-medium">{value}</span>
    </div>
  );
}
