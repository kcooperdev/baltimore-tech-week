import { InquiryForm } from "@/components/InquiryForm";
import { PageHeader } from "@/components/PageHeader";
import { hostInvitees, pageMeta, partnerFilters, pillars } from "@/lib/site";

export const metadata = pageMeta(
  "Host an Event",
  "Propose an official Baltimore Tech Week partner event. Acceptance onto the calendar does not mean Tech Week produces or funds the event.",
);

const categories = partnerFilters.filter((item) => item !== "All");

export default function HostPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Partner events"
        title="Host an official Baltimore Tech Week event"
        lede="Baltimore Tech Week is bigger than one building. If you have a room, a community, or a reason for people to gather, propose it."
      />

      <div className="editorial-flow">
        <section className="band-paper">
          <div className="week-wrap split">
            <div>
              <p className="week-lede">
                Startups, companies, restaurants, coworking spaces, universities, community organizations, meetups, creative spaces, and tech organizations can all propose programming.
              </p>
              <p className="week-lede" style={{ color: "var(--ink)" }}>
                Acceptance into the calendar does not mean Baltimore Tech Week produces the event or pays for it. You host it. If it is accepted, we list it and send people toward it.
              </p>
              <p className="week-lede">Partner events can have their own capacity and their own tickets. Say so in the proposal.</p>
            </div>
            <ul className="hold-list">
              {hostInvitees.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="band-opportunity">
          <div className="week-wrap split">
            <div>
              <h2 className="week-title">Submit your event</h2>
              <p className="week-lede">Unconfirmed proposals stay off the public calendar.</p>
            </div>
            <InquiryForm
              subject="Baltimore Tech Week partner event proposal"
              submitLabel="Submit Your Event"
              fields={[
                { name: "organization", label: "Organization", required: true, autoComplete: "organization" },
                { name: "contact", label: "Contact name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                { name: "concept", label: "Event concept", type: "textarea", required: true },
                {
                  name: "day",
                  label: "Preferred day",
                  type: "select",
                  required: true,
                  options: [...pillars.map((pillar) => `${pillar.day} — ${pillar.name}`), "No preference"],
                },
                { name: "time", label: "Preferred time", required: true },
                { name: "venue", label: "Venue", required: true },
                { name: "address", label: "Venue address", required: true },
                { name: "capacity", label: "Expected capacity", required: true },
                {
                  name: "category",
                  label: "Event category",
                  type: "select",
                  required: true,
                  options: [...categories],
                },
                {
                  name: "cost",
                  label: "Free or paid",
                  type: "select",
                  required: true,
                  options: ["Free", "Paid", "Not sure"],
                },
                { name: "access", label: "Accessibility information", type: "textarea", required: true },
                { name: "provide", label: "What the host will provide", type: "textarea", required: true },
                {
                  name: "support",
                  label: "What support are you requesting from Baltimore Tech Week?",
                  type: "textarea",
                  required: true,
                },
              ]}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
