import { ApplyForm } from "@/components/ApplyForm";
import { sponsorCallUrl, sponsorFields, sponsorTierCopy, sponsorTiers, tableCopy } from "@/lib/involve";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Sponsors",
  "Sponsor Baltimore Tech Week. Five tiers from $500 to $10,000, or take a table. Book a 30-minute intro. Nothing to pay today.",
);

const tiers = new Set(sponsorTiers.map((tier) => tier.value));

export default async function SponsorsPage({
  searchParams,
}: {
  searchParams: Promise<{ tier?: string }>;
}) {
  const params = await searchParams;
  const tier = tiers.has(params.tier ?? "") ? params.tier : undefined;

  return (
    <main className="plain-page">
      <div className="page-top">
        <div className="week-wrap split">
          <header id="main">
            <p className="week-kicker">$500 to $10,000 · Limited spots</p>
            <h1>Sponsor</h1>
            <p className="plain-lede">
              A sponsorship is your name on the week. A table is floor space in the room. You can do one, or both. Tables are included from $1,000, or $500 on their own. Nothing to pay today.
            </p>
            <ul className="hold-list">
              {sponsorTierCopy.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong>
                  <br />
                  {item.text}
                </li>
              ))}
            </ul>
            <p className="plain-lede">Or just take a table. Eight tables a night. Sponsors pick first.</p>
            <ul className="hold-list">
              {tableCopy.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong>
                  <br />
                  {item.text}
                </li>
              ))}
            </ul>
            <p className="plain-lede">
              Book a 30-minute intro, then send the application.{" "}
              <a href={sponsorCallUrl} target="_blank" rel="noreferrer">
                Book a 30-minute call
              </a>
            </p>
          </header>
          <ApplyForm
            id="sponsor-form"
            endpoint="/api/apply"
            extra={{ kind: "sponsor" }}
            defaults={tier ? { tier } : undefined}
            submitLabel="Book call & submit"
            successTitle="Thanks. We have your application."
            successBody="If you booked the 30-minute intro, the calendar invite comes from TidyCal. Nothing to pay today. If you still need a time, we will write you."
            fields={sponsorFields}
          />
        </div>
      </div>
    </main>
  );
}
