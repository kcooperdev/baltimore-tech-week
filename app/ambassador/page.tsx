import { ApplyForm } from "@/components/ApplyForm";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Ambassadors",
  "Tell people about Baltimore Tech Week, April 27–29, 2027, at 4MLK. No quotas.",
);

export default function AmbassadorPage() {
  return (
    <main className="plain-page">
      <div className="page-top">
        <div className="week-wrap split">
          <header id="main">
            <p className="week-kicker">Get involved</p>
            <h1>Bring people</h1>
            <p className="plain-lede">Tell the rooms you are already in. No quota. No script.</p>
          </header>
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
