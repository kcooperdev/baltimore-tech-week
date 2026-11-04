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
      <section className="border-b border-border">
        <div className="container grid gap-10 py-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Tech Week grows when Baltimore tells Baltimore.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Tell people it is three days, Wednesday through Friday, based at 4MLK, with partner events around the city. There is no quota, no script you have to hit, and no points system.
            </p>
          </div>
          <ul className="grid content-start gap-2 sm:grid-cols-2 md:col-span-6">
            {ambassadorChannels.map((channel) => (
              <li key={channel} className="border border-border px-4 py-3 text-sm">
                {channel}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div className="container grid gap-10 py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-4xl font-semibold tracking-tight">Become an Ambassador</h2>
          </div>
          <div className="md:col-span-8">
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
        </div>
      </section>
    </main>
  );
}
