import { Check, Box, Ticket } from "lucide-react";
import { ApplyForm } from "@/components/ApplyForm";
import { formatPrice, generalAdmission, pageMeta, site, vip } from "@/lib/site";

export const metadata = pageMeta(
  "Tickets",
  "Baltimore Tech Week tickets, April 27–29, 2027. General Admission is $29, $49, or $69. VIP is $99. Checkout is not open yet.",
);

export default function TicketsPage() {
  const [early, general, late] = generalAdmission.windows;

  return (
    <main className="plain-page">
      <div className="week-wrap packs">
        <header className="packs-head" id="main">
          <p className="week-kicker">{site.dates}</p>
          <h1>Tickets</h1>
          <p>Checkout is not open yet. Leave your email and we will write when it is.</p>
        </header>

        <div className="packs-grid">
          <article className="pack pack-ga">
            <p className="pack-name">
              <Ticket size={18} strokeWidth={2.25} aria-hidden="true" />
              General
            </p>
            <p className="pack-kicker">All three days at 4MLK.</p>
            <p className="pack-price">{formatPrice(early.price)}</p>
            <p className="pack-note">Early bird. Then {formatPrice(general.price)}, then {formatPrice(late.price)}.</p>
            <ul className="pack-rows">
              <li>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>Early Bird</span>
                <span>{formatPrice(early.price)}</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>General</span>
                <span>{formatPrice(general.price)}</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>Late</span>
                <span>{formatPrice(late.price)}</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>Days</span>
                <span>3 days</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>Place</span>
                <span>4MLK</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>Check-in</span>
                <span>Standard</span>
              </li>
            </ul>
            <a className="pack-btn" href="#notify">
              Get Tickets
            </a>
          </article>

          <article className="pack pack-vip">
            <p className="pack-name">
              <Box size={18} strokeWidth={2.25} aria-hidden="true" />
              VIP
            </p>
            <p className="pack-kicker">Same three days. A faster way in.</p>
            <p className="pack-price">{formatPrice(vip.price)}</p>
            <p className="pack-note">Priority entry and a VIP check-in.</p>
            <ul className="pack-rows">
              <li>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>Pass</span>
                <span>{formatPrice(vip.price)}</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>Days</span>
                <span>3 days</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>Place</span>
                <span>4MLK</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>Entry</span>
                <span>Priority</span>
              </li>
              <li>
                <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>Check-in</span>
                <span>VIP</span>
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
