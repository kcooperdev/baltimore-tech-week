import { InquiryForm } from "@/components/InquiryForm";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta, pillars } from "@/lib/site";

export const metadata = pageMeta(
  "Volunteer",
  "Volunteer at Baltimore Tech Week 2027. Help with check-in, the expo, wayfinding, and welcoming people at Tech Week HQ.",
);

const roles = [
  { title: "Check-in", text: "Get people into HQ without a pile of clipboards." },
  { title: "Expo floor", text: "Help exhibitors and attendees find each other." },
  { title: "Wayfinding", text: "Point people toward the right room, and toward the city at night." },
  { title: "Welcome", text: "Be the person who makes a first-timer feel like they are in the right place." },
];

export default function VolunteerPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Get involved"
        title="Help the week happen."
        lede="Volunteers keep HQ moving. There is no hour quota and no leaderboard. Tell us which day you can actually be there."
      />
      <div className="editorial-flow">
        <section className="band-paper">
          <div className="week-wrap">
            <div className="who-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))" }}>
              {roles.map((role) => (
                <article key={role.title} className="who-card">
                  <h3>{role.title}</h3>
                  <p>{role.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="band-connect">
          <div className="week-wrap split">
            <div>
              <h2 className="week-title">Volunteer</h2>
              <p className="week-lede">Shifts are not posted yet. We will write back when roles are set.</p>
            </div>
            <InquiryForm
              subject="Baltimore Tech Week volunteer"
              submitLabel="Volunteer"
              fields={[
                { name: "name", label: "Name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                {
                  name: "day",
                  label: "Which day can you be there?",
                  type: "select",
                  required: true,
                  options: [...pillars.map((pillar) => pillar.day), "More than one day", "Not sure yet"],
                },
                {
                  name: "help",
                  label: "How do you want to help?",
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
