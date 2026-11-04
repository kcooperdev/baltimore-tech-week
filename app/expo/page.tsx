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
      <PageHeader eyebrow={hq.venue} title="Expo" lede="The floor is open all three days. You do not need a table to walk it." />

      <div className="plain-body">
        <div className="week-wrap">
          {exhibitors.length > 0 ? (
            <ul className="hold-list">
              {exhibitors.map((exhibitor) => (
                <li key={exhibitor.name}>
                  {exhibitor.url ? <a href={exhibitor.url}>{exhibitor.name}</a> : exhibitor.name}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="apply-wrap">
            <p className="week-lede">Want a table? Tell us what someone should stop and see.</p>
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
        </div>
      </div>
    </main>
  );
}
