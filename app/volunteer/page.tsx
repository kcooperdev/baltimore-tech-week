import { ApplyForm } from "@/components/ApplyForm";
import { pageMeta, pillars } from "@/lib/site";

export const metadata = pageMeta(
  "Volunteer",
  "Volunteer at Baltimore Tech Week, April 27–29, 2027, at 4MLK. No hour quota.",
);

export default function VolunteerPage() {
  return (
    <main className="plain-page">
      <div className="page-top">
        <div className="week-wrap split">
          <header id="main">
            <p className="week-kicker">Get involved</p>
            <h1>Volunteer</h1>
            <p className="plain-lede">Check-in, the floor, directions. Shifts are posted when they are real.</p>
          </header>
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
                options: ["Check-in", "Set up", "Breakdown"],
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
      </div>
    </main>
  );
}
