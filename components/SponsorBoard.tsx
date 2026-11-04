"use client";

import { useEffect, useRef, useState } from "react";
import { ApplyForm } from "@/components/ApplyForm";
import { sponsorFields, sponsorTierCopy } from "@/lib/involve";

export function SponsorBoard({ initialTier }: { initialTier?: string }) {
  const known = new Set(sponsorTierCopy.map((item) => item.id));
  const [tier, setTier] = useState<string | null>(initialTier && known.has(initialTier) ? initialTier : null);
  const dialog = useRef<HTMLDialogElement>(null);
  const picked = sponsorTierCopy.find((item) => item.id === tier);

  useEffect(() => {
    const node = dialog.current;
    if (!node || !tier || node.open) return;
    node.showModal();
  }, [tier]);

  function open(id: string) {
    setTier(id);
    window.history.replaceState(null, "", `/sponsors?tier=${id}`);
  }

  function close() {
    dialog.current?.close();
  }

  return (
    <>
      <ul className="tier-grid">
        {sponsorTierCopy.map((item) => (
          <li key={item.id}>
            <article className={item.top ? "tier-card is-top" : item.pick ? "tier-card is-pick" : "tier-card"}>
              {item.pick ? <p className="tier-flag">Most sponsors</p> : <p className="tier-flag tier-flag-empty" aria-hidden="true" />}
              <p className="tier-name">{item.name}</p>
              <p className="tier-price">{item.price}</p>
              <p className="tier-spots">{item.spots}</p>
              <p>{item.text}</p>
              <ul className="tier-perks">
                {item.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
              <button type="button" className="tier-apply" onClick={() => open(item.id)}>
                Get this tier
              </button>
            </article>
          </li>
        ))}
      </ul>

      <dialog ref={dialog} className="tier-dialog" aria-labelledby="sponsor-form-title" onClose={() => {
        setTier(null);
        window.history.replaceState(null, "", "/sponsors");
      }}>
        {picked ? (
          <>
            <div className="tier-dialog-bar">
              <div>
                <h2 id="sponsor-form-title">{picked.name}</h2>
                <p>{picked.price}</p>
              </div>
              <button type="button" className="tier-dialog-close" onClick={close}>
                Close
              </button>
            </div>
            <ApplyForm
              key={picked.id}
              endpoint="/api/apply"
              extra={{ kind: "sponsor" }}
              defaults={{ tier: picked.id }}
              submitLabel="Book call & submit"
              successTitle="Thanks. We have your application."
              successBody="If you booked the 30-minute intro, the calendar invite comes from TidyCal. Nothing to pay today. If you still need a time, we will write you."
              fields={sponsorFields}
            />
          </>
        ) : null}
      </dialog>
    </>
  );
}
