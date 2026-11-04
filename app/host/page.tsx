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

      <section className="border-b border-border">
        <div className="container grid gap-10 py-14 md:grid-cols-12">
          <div className="md:col-span-7 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Startups, companies, restaurants, coworking spaces, universities, community organizations, meetups, creative spaces, and tech organizations can all propose programming.
            </p>
            <p className="text-foreground">
              Acceptance into the calendar does not mean Baltimore Tech Week produces the event or pays for it. You host it. If it is accepted, we list it and send people toward it.
            </p>
            <p>Partner events can have their own capacity and their own tickets. Say so in the proposal.</p>
          </div>
          <ul className="grid content-start gap-2 sm:grid-cols-2 md:col-span-5">
            {hostInvitees.map((name) => (
              <li key={name} className="border border-border px-3 py-2 text-sm">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="container grid gap-10 py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-4xl font-semibold tracking-tight">Submit your event</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Unconfirmed proposals stay off the public calendar.
            </p>
          </div>
          <div className="md:col-span-8">
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
                  options: [
                    ...pillars.map((pillar) => `${pillar.day} — ${pillar.name}`),
                    "No preference",
                  ],
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
        </div>
      </section>
    </main>
  );
}
