import { ApplyForm } from "@/components/ApplyForm";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta, pillars } from "@/lib/site";

export const metadata = pageMeta(
  "Volunteer",
  "Volunteer at Baltimore Tech Week 2027 at Tech Week HQ. No hour quota.",
);

export default function VolunteerPage() {
  return (
    <main className="plain-page">
      <PageHeader
        eyebrow="Get involved"
        title="Volunteer"
        lede="Help someone find the right room. Check-in, the floor, directions. No hour quota. Shifts are not posted yet."
      />
      <div className="editorial-flow">
        <section className="band-paper">
          <div className="week-wrap split">
            <p className="week-lede">Tell us which day you can actually be at 4MLK. We will write back when roles are set.</p>
            <ApplyForm
              endpoint="/api/volunteers"
              submitLabel="Volunteer"
              successTitle="Thanks. We have you down."
              successBody="No hour quota. We will write when the shifts are real."
              fields={[
                { name: "name", label: "Name", required: true, autoComplete: "name", step: "You" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", step: "You" },
                { name: "phone", label: "Phone", autoComplete: "tel", step: "You" },
                {
                  name: "roles",
                  label: "Where do you want to help?",
                  type: "checks",
                  required: true,
                  options: ["check-in", "set-up", "breakdown"],
                  step: "The shift",
                },
                {
                  name: "day",
                  label: "Which day?",
                  type: "checks",
                  required: true,
                  options: pillars.map((pillar) => pillar.day),
                  step: "The shift",
                },
                { name: "help", label: "Anything else?", type: "textarea", step: "The shift" },
              ]}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
