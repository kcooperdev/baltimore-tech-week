import Link from "next/link";
import { ApplyForm } from "@/components/ApplyForm";
import { sponsorFields, sponsorTierCopy, sponsorTiers } from "@/lib/involve";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Sponsors",
  "Sponsor Baltimore Tech Week. Five tiers from $500 to $10,000.",
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
        <div className="week-wrap">
          <header id="main">
            <p className="week-kicker">$500 to $10,000 · Limited spots</p>
            <h1>Sponsor</h1>
            <p className="plain-lede">A sponsorship is your name on the week.</p>
          </header>
          <ul className="tier-grid">
            {sponsorTierCopy.map((item) => (
              <li key={item.id}>
                <article className={item.id === "presenting" ? "tier-card is-top" : "tier-card"}>
                  <p className="tier-name">{item.name}</p>
                  <p className="tier-price">{item.price}</p>
                  <p className="tier-spots">{item.spots}</p>
                  <p>{item.text}</p>
                  <Link className="tier-apply" href={`/sponsors?tier=${item.id}#sponsor-form`}>
                    Apply
                  </Link>
                </article>
              </li>
            ))}
          </ul>
          <div className="sponsor-apply" id="sponsor-form">
            <ApplyForm
              key={tier ?? "open"}
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
      </div>
    </main>
  );
}
