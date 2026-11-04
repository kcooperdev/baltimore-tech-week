import { ApplyForm } from "@/components/ApplyForm";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Ambassadors",
  "Tell people about Baltimore Tech Week 2027. Three days, Wednesday through Friday, based at 4MLK. No quotas.",
);

export default function AmbassadorPage() {
  return (
    <main className="plain-page">
      <PageHeader
        eyebrow="Get involved"
        title="Bring people"
        lede="Tell the rooms you are already in. No quota. No script. Three days at 4MLK, then the city."
      />
      <div className="plain-body">
        <div className="week-wrap apply-wrap">
            <ApplyForm
              endpoint="/api/apply"
              extra={{ kind: "ambassador" }}
              submitLabel="Count me in"
              successTitle="Thanks. You are on the ambassador list."
              successBody="No quota and no script. Tell the rooms you are already in."
              fields={[
                { name: "name", label: "Name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                {
                  name: "where",
                  label: "Where will you share it?",
                  type: "textarea",
                  required: true,
                  placeholder: "A campus, a company, a neighborhood, a group chat.",
                },
              ]}
            />
        </div>
      </div>
    </main>
  );
}
