import { ApplyForm } from "@/components/ApplyForm";
import { PageHeader } from "@/components/PageHeader";
import { exhibitors, hq, pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Expo",
  "The Baltimore Tech Week Expo is at 4MLK. Exhibitor names will be listed after they confirm.",
);

export default function ExpoPage() {
  return (
    <main className="plain-page">
      <PageHeader eyebrow={hq.venue} title="Expo" lede="Come for the floor. Stay for the person at the next table. You do not need a table to walk in.">
        <a className="week-btn" href="#exhibit">
          Ask for a table
        </a>
      </PageHeader>

      <div className="editorial-flow">
        <section className="band-paper">
          <div className="week-wrap">
            {exhibitors.length === 0 ? (
              <>
                <h2 className="week-title">Exhibitors coming soon.</h2>
                <p className="week-lede">Names land here after an organization confirms. No placeholders.</p>
              </>
            ) : (
              <ul className="hold-list">
                {exhibitors.map((exhibitor) => (
                  <li key={exhibitor.name}>
                    {exhibitor.url ? <a href={exhibitor.url}>{exhibitor.name}</a> : exhibitor.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="scroll-mt-24">
          <div className="week-wrap split">
            <div>
              <h2 className="week-title">A table.</h2>
              <p className="week-lede">Tell us what someone should stop and see. We confirm the space before we put your name on the floor.</p>
            </div>
            <ApplyForm
              id="exhibit"
              endpoint="/api/apply"
              extra={{ kind: "exhibitor" }}
              submitLabel="Ask for a table"
              successTitle="Thanks. We have your table request."
              successBody="We confirm the space before your name goes on the floor."
              fields={[
                { name: "organization", label: "Organization", required: true, autoComplete: "organization" },
                { name: "name", label: "Your name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                { name: "website", label: "Website" },
                { name: "showing", label: "What will you show?", type: "textarea", required: true },
              ]}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
