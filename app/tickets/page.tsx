import { InquiryForm } from "@/components/InquiryForm";
import { PageHeader } from "@/components/PageHeader";
import { formatPrice, generalAdmission, pageMeta, site, vip } from "@/lib/site";

export const metadata = pageMeta(
  "Tickets",
  "Baltimore Tech Week 2027 tickets. General Admission is $29, $49, or $69. VIP is $99. Checkout is not open yet.",
);

export default function TicketsPage() {
  return (
    <main className="plain-page">
      <PageHeader
        eyebrow={`${site.when} · ${site.year}`}
        title="Tickets"
        lede="The early pass is $29. Checkout is not open yet. Leave your email and we will write when it is."
      />

      <div className="plain-body">
        <div className="week-wrap split">
          <div>
            <p className="week-kicker">General Admission</p>
            <ul className="price-ladder">
              {generalAdmission.windows.map((window) => (
                <li key={window.id} className="price-row">
                  <span>{window.name}</span>
                  <strong>{formatPrice(window.price)}</strong>
                </li>
              ))}
            </ul>
            <p className="week-lede">All three days at HQ. The floor, the talks, the workshops, the people.</p>

            <p className="week-kicker" style={{ marginTop: "2rem" }}>
              VIP · {formatPrice(vip.price)}
            </p>
            <p className="week-lede">Same three days, with priority entry and a VIP check-in.</p>

            <h2 className="week-title" style={{ marginTop: "2.5rem", fontSize: "clamp(1.7rem, 3vw, 2.2rem)" }}>
              Know this first.
            </h2>
            <p className="week-lede">A pass is the HQ. It is not a ticket to every partner night.</p>
            <p className="week-lede">What is included can still change before checkout opens.</p>
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
      </div>
    </main>
  );
}
