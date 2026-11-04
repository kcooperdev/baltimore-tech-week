import { InquiryForm } from "@/components/InquiryForm";
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
        lede="Tell the rooms you are already in. Three days, Wednesday through Friday, based at 4MLK. No quota and no script."
      />
      <div className="editorial-flow">
        <section className="band-paper">
          <div className="week-wrap split">
            <p className="week-lede">Tech Week grows when Baltimore tells Baltimore.</p>
            <InquiryForm
              subject="Baltimore Tech Week ambassador"
              submitLabel="Count me in"
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
        </section>
      </div>
    </main>
  );
}
