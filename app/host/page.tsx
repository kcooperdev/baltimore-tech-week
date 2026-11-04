import { InquiryForm } from "@/components/InquiryForm";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta, partnerFilters, pillars } from "@/lib/site";

export const metadata = pageMeta(
  "Host an Event",
  "Propose a Baltimore Tech Week partner event. If it is accepted, Tech Week lists it. Tech Week does not produce or fund it.",
);

const categories = partnerFilters.filter((item) => item !== "All");

export default function HostPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Partner events"
        title="Host"
        lede="You run it. If we accept it, we list it and send people your way. We do not produce it or pay for it."
      />

      <div className="editorial-flow">
        <section className="band-paper">
          <div className="week-wrap split">
            <p className="week-lede">Unconfirmed ideas stay off the public calendar. Say if your event is free or paid, and how many people fit.</p>
            <InquiryForm
              subject="Baltimore Tech Week partner event proposal"
              submitLabel="Submit"
              fields={[
                { name: "organization", label: "Organization", required: true, autoComplete: "organization" },
                { name: "contact", label: "Your name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                { name: "concept", label: "What is the event?", type: "textarea", required: true },
                {
                  name: "day",
                  label: "Preferred day",
                  type: "select",
                  required: true,
                  options: [...pillars.map((pillar) => `${pillar.day} — ${pillar.name}`), "No preference"],
                },
                { name: "time", label: "Preferred time", required: true },
                { name: "venue", label: "Venue", required: true },
                { name: "address", label: "Address", required: true },
                { name: "capacity", label: "How many people?", required: true },
                { name: "category", label: "Category", type: "select", required: true, options: [...categories] },
                { name: "cost", label: "Free or paid", type: "select", required: true, options: ["Free", "Paid", "Not sure"] },
                { name: "access", label: "Accessibility", type: "textarea", required: true },
                { name: "provide", label: "What will you provide?", type: "textarea", required: true },
                { name: "support", label: "What do you need from Tech Week?", type: "textarea", required: true },
              ]}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
