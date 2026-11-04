import { Check, Ticket } from "lucide-react";
import { ApplyForm } from "@/components/ApplyForm";
import { formatPrice, generalAdmission, pageMeta, site } from "@/lib/site";

export const metadata = pageMeta(
  "Tickets",
  "Baltimore Tech Week tickets are $49 for April 27–29, 2027. All three days at 4MLK. Checkout is not open yet.",
);

export default function TicketsPage() {
  return (
    <main className="plain-page">
      <div className="week-wrap packs">
        <header className="packs-head" id="main">
          <p className="week-kicker">{site.dates}</p>
          <h1>Tickets</h1>
          <p>One pass. Checkout is not open yet. Leave your email and we will write when it is.</p>
        </header>

        <div className="packs-grid packs-single">
          <article className="pack pack-ga">
            <p className="pack-name">
              <Ticket size={18} strokeWidth={2.25} aria-hidden="true" />
              {generalAdmission.name}
            </p>
            <p className="pack-kicker">All three days at 4MLK.</p>
            <p className="pack-price">{formatPrice(generalAdmission.price)}</p>
            <p className="pack-note">The building, Tuesday through Thursday.</p>
            <ul className="pack-rows">
              <li>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>Days</span>
                <span>Tue–Thu</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>Where</span>
                <span>4MLK</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>Floor</span>
                <span>Expo</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>Rooms</span>
                <span>Talks and workshops</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>Tables</span>
                <span>Coworking</span>
              </li>
            </ul>
            <a className="pack-btn" href="#notify">
              Get Tickets
            </a>
          </article>
        </div>

        <div className="pack-form" id="notify">
          <ApplyForm
            endpoint="/api/tickets"
            extra={{ pass: generalAdmission.name }}
            submitLabel="Get Tickets"
            successTitle="Thanks. We will write you."
            successBody="Checkout is not open yet. You will hear from us when the sale link is ready."
            fields={[
              { name: "name", label: "Name", required: true, autoComplete: "name" },
              { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
