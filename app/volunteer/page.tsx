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
      <section className="border-b border-border">
        <div className="container grid gap-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <article key={role.title} className="border border-border p-5">
              <h2 className="font-display text-2xl font-semibold tracking-tight">{role.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{role.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section>
        <div className="container grid gap-10 py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-4xl font-semibold tracking-tight">Volunteer</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Shifts are not posted yet. We will write back when roles are set.
            </p>
          </div>
          <div className="md:col-span-8">
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
        </div>
      </section>
    </main>
  );
}
