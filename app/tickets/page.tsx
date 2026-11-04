import { InquiryForm } from "@/components/InquiryForm";
import { PageHeader } from "@/components/PageHeader";
import { formatPrice, generalAdmission, pageMeta, site, vip } from "@/lib/site";

export const metadata = pageMeta(
  "Tickets",
  "Baltimore Tech Week 2027 tickets: General Admission at $29, $49, and $69 by window, and VIP at $99. Checkout is not open yet.",
);

export default function TicketsPage() {
  return (
    <main>
      <PageHeader
        eyebrow={`${site.when} · ${site.year} · ${site.where}`}
        title="Tickets"
        lede="Two passes. General Admission and VIP. Checkout is not open yet. These are the planned prices, and inclusions can still change before they go on sale."
      />

      <div className="editorial-flow">
        <section className="band-ink">
          <div className="week-wrap split">
            <article>
              <p className="week-kicker">General Admission</p>
              <h2 className="week-title">{generalAdmission.name}</h2>
              <ul className="price-ladder">
                {generalAdmission.windows.map((window) => (
                  <li key={window.id} className="price-row">
                    <span>{window.name}</span>
                    <strong>{formatPrice(window.price)}</strong>
                  </li>
                ))}
              </ul>
              <p className="week-kicker" style={{ marginTop: "2rem" }}>
                Planned access
              </p>
              <ul className="access-list">
                {generalAdmission.access.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="vip-panel">
              <p className="week-kicker" style={{ color: "#16120c99" }}>
                VIP
              </p>
              <h2 className="week-title">{vip.name}</h2>
              <p className="vip-price">{formatPrice(vip.price)}</p>
              <p className="week-lede" style={{ color: "#16120cc7" }}>
                One price. One pass. No extra premium tiers.
              </p>
              <p className="week-kicker" style={{ color: "#16120c99", marginTop: "1.5rem" }}>
                Planned benefits
              </p>
              <ul className="access-list">
                {vip.access.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="band-paper">
          <div className="week-wrap narrow-copy">
            <h2 className="week-title week-title-wide">Read this before you buy.</h2>
            <p className="week-lede">
              A pass covers Baltimore Tech Week programming at Tech Week HQ, and partner experiences only where the host says a pass applies.
            </p>
            <p className="week-lede">
              Partner events may have their own capacity or their own registration. A General Admission or VIP pass is not universal entry to independently hosted events.
            </p>
            <p className="week-lede">Final inclusions stay editable until checkout opens.</p>
          </div>
        </section>

        <section className="band-sky">
          <div className="week-wrap split">
            <div>
              <p className="week-kicker" style={{ color: "#16120c99" }}>
                Checkout is not open yet
              </p>
              <h2 className="week-title">Get Tickets</h2>
              <p className="week-lede">Leave your email. When checkout opens, we&apos;ll send the link for the pass you want.</p>
            </div>
            <InquiryForm
              id="notify"
              subject="Baltimore Tech Week ticket interest"
              submitLabel="Get Tickets"
              fields={[
                { name: "name", label: "Name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                {
                  name: "pass",
                  label: "Pass",
                  type: "select",
                  required: true,
                  options: ["General Admission", "VIP", "Not sure yet"],
                },
              ]}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
