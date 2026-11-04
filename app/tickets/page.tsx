import { ApplyForm } from "@/components/ApplyForm";
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
            <p className="week-lede">All three days at 4MLK. Partner nights are separate.</p>

            <p className="week-kicker" style={{ marginTop: "2rem" }}>
              VIP · {formatPrice(vip.price)}
            </p>
            <p className="week-lede">Same three days, with priority entry and a VIP check-in.</p>
          </div>
          <ApplyForm
            id="notify"
            endpoint="/api/tickets"
            submitLabel="Get Tickets"
            successTitle="Thanks. We will write you."
            successBody="Checkout is not open yet. You will hear from us when the sale link is ready."
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
