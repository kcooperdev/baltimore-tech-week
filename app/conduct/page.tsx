import { PageHeader } from "@/components/PageHeader";
import { pageMeta, site } from "@/lib/site";

export const metadata = pageMeta(
  "Code of Conduct",
  "Baltimore Tech Week is for anyone curious about what is being built in the city. Harassment is not welcome, at HQ or at partner events.",
);

export default function ConductPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Community"
        title="Code of Conduct"
        lede="You don't need a tech title to be here. You do need to treat people like they belong."
      />
      <div className="editorial-flow">
        <section className="band-paper">
          <div className="week-wrap narrow-copy">
            <p>Baltimore Tech Week is for builders, founders, students, companies, and anyone curious about technology in this city.</p>
            <p>
              Harassment, discrimination, and creepy behavior are not part of the week. That applies at 4MLK and at official partner events. Hosts agree to the same standard when their event is listed.
            </p>
            <p>
              If something is off, tell a Tech Week organizer or email <a href={`mailto:${site.email}`}>{site.email}</a>. We would rather hear about it than have you leave quietly.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
