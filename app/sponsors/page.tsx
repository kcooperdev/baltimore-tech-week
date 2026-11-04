import { SponsorBoard } from "@/components/SponsorBoard";
import { sponsorTiers } from "@/lib/involve";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Sponsors",
  "Sponsor Baltimore Tech Week. Three tiers from $2,500 to $10,000. The sponsor list closes March 1, 2027.",
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
            <p className="week-kicker">Closes March 1, 2027</p>
            <h1>Sponsor</h1>
            <p className="plain-lede">
              Three ways onto the week. Pick one. The list locks March 1, so the names are on the site before April.
            </p>
          </header>
          <SponsorBoard initialTier={tier} />
        </div>
      </div>
    </main>
  );
}
