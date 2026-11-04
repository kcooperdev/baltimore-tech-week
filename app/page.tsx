import Link from "next/link";
import { HarborScene } from "@/components/HarborScene";
import { LivePortal } from "@/components/LivePortal";
import { audiences, formatPrice, generalAdmission, hq, pillars, site } from "@/lib/site";

const panelClass = {
  wednesday: "day-panel day-panel-connect",
  thursday: "day-panel day-panel-build",
  friday: "day-panel day-panel-opportunity",
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
              {site.when} · {site.year} · {site.datesNote}
            </p>
            <h2 id="week-promise" className="week-title">
              {site.promise}
            </h2>
            <p className="week-lede">{site.positioning}</p>
            <div className="week-actions">
              <Link className="week-btn" href="/tickets">
                Get a pass · {formatPrice(generalAdmission.windows[0].price)}
              </Link>
              <Link className="week-btn week-btn-ghost" href="/the-week">
                The three days
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
          </div>
        </section>

        <section className="band-ink" aria-labelledby="who">
          <div className="week-wrap">
            <h2 id="who" className="week-title">
              {site.forLine}
            </h2>
            <div className="who-grid">
              {audiences.map((audience) => (
                <article key={audience.title} className="who-card">
                  <h3>{audience.title}</h3>
                  <p>{audience.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band-paper" aria-labelledby="hq">
          <div className="week-wrap">
            <h2 id="hq" className="week-title">
              4MLK by day. Baltimore by night.
            </h2>
            <p className="week-lede">The pass covers HQ. The city is the rest of the story.</p>
            <p className="week-lede">
              {hq.street}
              <br />
              {hq.cityLine}
            </p>
            <div className="week-actions">
              <a className="week-btn" href={hq.mapsUrl} target="_blank" rel="noreferrer">
                Directions
              </a>
              <Link className="week-btn week-btn-ghost" href="/around-baltimore">
                Around the city
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
