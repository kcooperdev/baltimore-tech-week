import Link from "next/link";
import { HarborScene } from "@/components/HarborScene";
import { LivePortal } from "@/components/LivePortal";
import { formatPrice, generalAdmission, hq, pillars, site } from "@/lib/site";

const panelClass = {
  tuesday: "day-panel day-panel-connect",
  wednesday: "day-panel day-panel-build",
  thursday: "day-panel day-panel-opportunity",
} as const;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ live?: string }>;
}) {
  const params = await searchParams;
  const live = site.phase === "live" || params.live === "1";

  return (
    <>
      <HarborScene />
      <div className="editorial-flow">
        {live ? <LivePortal /> : null}

        <section className="band-paper" aria-labelledby="week-promise">
          <div className="week-wrap">
            <p className="week-kicker">
              {site.dates} · {site.when}
            </p>
            <h2 id="week-promise" className="week-title">
              {site.promise}
            </h2>
            <p className="week-lede">{site.positioning}</p>
            <div className="week-actions">
              <Link className="week-btn" href="/tickets">
                Get a pass · {formatPrice(generalAdmission.windows[0].price)}
              </Link>
              <Link className="week-btn week-btn-ghost" href="/schedule">
                Schedule
              </Link>
            </div>
            <div className="day-panels">
              {pillars.map((pillar) => (
                <Link key={pillar.id} className={panelClass[pillar.id]} href={`/schedule#${pillar.id}`}>
                  <div>
                    <p className="day-panel-day">{pillar.day}</p>
                    <h3>{pillar.name}</h3>
                  </div>
                  <p className="day-panel-q">{pillar.question}</p>
                </Link>
              ))}
            </div>
            <p className="home-address">
              {hq.venue}
              <br />
              {hq.street}
              <br />
              {hq.cityLine}
              <br />
              <a href={hq.mapsUrl} target="_blank" rel="noreferrer">
                Directions
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
