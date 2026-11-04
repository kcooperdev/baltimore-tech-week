import { InquiryForm } from "@/components/InquiryForm";
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
            <InquiryForm
              subject="Baltimore Tech Week volunteer"
              submitLabel="Volunteer"
              fields={[
                { name: "name", label: "Name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                {
                  name: "day",
                  label: "Which day?",
                  type: "select",
                  required: true,
                  options: [...pillars.map((pillar) => pillar.day), "More than one day", "Not sure yet"],
                },
                { name: "help", label: "How do you want to help?", type: "textarea", required: true },
              ]}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
