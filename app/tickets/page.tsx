import { InquiryForm } from "@/components/InquiryForm";
import { PageHeader } from "@/components/PageHeader";
import { formatPrice, generalAdmission, pageMeta, site, vip } from "@/lib/site";

export const metadata = pageMeta(
  "Tickets",
  "Baltimore Tech Week 2027 tickets. General Admission is $29, $49, or $69. VIP is $99. Checkout is not open yet.",
);

export default function TicketsPage() {
  return (
    <main>
      <PageHeader
        eyebrow={`${site.when} · ${site.year}`}
        title="Tickets"
        lede="Two passes. Checkout is not open yet."
      />

      <div className="editorial-flow">
        <section className="band-ink">
          <div className="week-wrap split">
            <article>
              <p className="week-kicker">General Admission</p>
              <ul className="price-ladder">
                {generalAdmission.windows.map((window) => (
                  <li key={window.id} className="price-row">
                    <span>{window.name}</span>
                    <strong>{formatPrice(window.price)}</strong>
                  </li>
                ))}
              </ul>
              <p className="week-lede">HQ for all three days: expo, talks, workshops, and places to meet.</p>
            </article>
            <article className="vip-panel">
              <p className="week-kicker" style={{ color: "#16120c99" }}>
                VIP
              </p>
              <p className="vip-price">{formatPrice(vip.price)}</p>
              <p className="week-lede" style={{ color: "#16120cc7" }}>
                General Admission, plus priority entry and a VIP check-in.
              </p>
            </article>
          </div>
        </section>

        <section className="band-paper">
          <div className="week-wrap split">
            <div>
              <h2 className="week-title">Before you buy.</h2>
              <p className="week-lede">A pass covers HQ. It does not get you into every partner event.</p>
              <p className="week-lede">What a pass includes can still change before checkout opens.</p>
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
