import { InquiryForm } from "@/components/InquiryForm";
import { PageHeader } from "@/components/PageHeader";
import { ambassadorChannels, pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Ambassadors",
  "Become a Baltimore Tech Week ambassador. Bring the three-day week to your campus, company, neighborhood, or group. No quotas.",
);

export default function AmbassadorPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Get involved"
        title="Bring Baltimore with you"
        lede="Ambassadors spread Baltimore Tech Week through the rooms they are already in. The program is simple on purpose."
      />
      <div className="editorial-flow">
        <section className="band-ink">
          <div className="week-wrap split">
            <div>
              <h2 className="week-title week-title-wide">Tech Week grows when Baltimore tells Baltimore.</h2>
              <p className="week-lede">
                Tell people it is three days, Wednesday through Friday, based at 4MLK, with partner events around the city. There is no quota, no script you have to hit, and no points system.
              </p>
            </div>
            <ul className="hold-list">
              {ambassadorChannels.map((channel) => (
                <li key={channel}>{channel}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="band-paper">
          <div className="week-wrap split">
            <h2 className="week-title week-title-wide">Become an Ambassador</h2>
            <InquiryForm
              subject="Baltimore Tech Week ambassador"
              submitLabel="Become an Ambassador"
              fields={[
                { name: "name", label: "Name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                {
                  name: "where",
                  label: "Where will you share Tech Week?",
                  type: "textarea",
                  required: true,
                  placeholder: "A campus, a company, a neighborhood, a Slack, a group chat.",
                },
              ]}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
