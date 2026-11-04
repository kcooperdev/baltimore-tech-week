import Link from "next/link";
import { HarborScene } from "@/components/HarborScene";
import { LivePortal } from "@/components/LivePortal";
import { audiences, formatPrice, generalAdmission, hq, pillars, site, waysIn } from "@/lib/site";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ live?: string }>;
}) {
  const params = await searchParams;
  const live = site.phase === "live" || params.live === "1";
  const early = generalAdmission.windows[0];

  return (
    <>
      <HarborScene />
      <div className="editorial-flow">
        {live ? <LivePortal /> : null}

        <section className="ed-cream-section" aria-labelledby="manifesto">
          <div className="ed-container">
            <p className="ed-eyebrow">
              {site.when} · {site.year} · {site.where}
            </p>
            <h2 id="manifesto" className="ed-manifesto-title">
              Three days. Across <span className="ed-highlight">Baltimore</span>.
            </h2>
            <p className="ed-manifesto-sub">{site.promise}</p>
            <p className="ed-manifesto-sub">{site.nightLine}</p>
            <div className="ed-manifesto-cta">
              <Link className="ed-pill-btn" href="/tickets">
                Get Tickets
              </Link>
              <Link className="ed-pill-btn ed-pill-btn-outline" href="/the-week">
                Explore the Week
              </Link>
            </div>
            <dl className="ed-stats-row">
              <div className="ed-stat-cell">
                <dt>When</dt>
                <dd>Wed–Fri</dd>
              </div>
              <div className="ed-stat-cell">
                <dt>Days</dt>
                <dd>3</dd>
              </div>
              <div className="ed-stat-cell">
                <dt>General admission from</dt>
                <dd>{formatPrice(early.price)}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="ed-nights-strip" aria-labelledby="three-days">
          <div className="ed-container">
            <p className="ed-night-meta">Connect. Build. Opportunity.</p>
            <h2 id="three-days" className="ed-nights-title">
              Meet people. Make something. Find what&apos;s next.
            </h2>
            <ul className="ed-nights-grid">
              {pillars.map((pillar, index) => (
                <li key={pillar.id}>
                  <Link className="ed-night-card" href={`/schedule#${pillar.id}`}>
                    <span className="ed-night-num">0{index + 1}</span>
                    <span>
                      <p className="ed-night-meta">{pillar.day}</p>
                      <h3 className="ed-night-name">{pillar.name}</h3>
                      <p className="ed-night-body">{pillar.summary}</p>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ed-sky-band" aria-labelledby="hq">
          <div className="ed-container">
            <p className="ed-eyebrow" style={{ color: "#16120ca6" }}>
              {hq.venue}
            </p>
            <h2 id="hq" className="ed-sky-title">
              One home base. A whole city participating.
            </h2>
            <p className="ed-sky-copy">
              {hq.venue} is Baltimore Tech Week HQ. Registration, the expo, coworking, talks, workshops, and evening programming can live there. Not every event does. {site.idea}
            </p>
            <div className="ed-manifesto-cta" style={{ justifyContent: "flex-start" }}>
              <Link className="ed-pill-btn" href="/around-baltimore">
                Explore Venues
              </Link>
              <a className="ed-pill-btn ed-pill-btn-outline" href={hq.mapsUrl} target="_blank" rel="noreferrer">
                Directions
              </a>
            </div>
          </div>
        </section>

        <section className="ed-dark-showcase" aria-labelledby="who">
          <div className="ed-container">
            <h2 id="who" className="ed-section-title">
              You don&apos;t need a tech title to belong here.
            </h2>
            <ul className="ed-nights-grid">
              {audiences.map((audience) => (
                <li key={audience.title} className="ed-night-card">
                  <span>
                    <h3 className="ed-night-name">{audience.title}</h3>
                    <p className="ed-night-body">{audience.text}</p>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ed-cream-section" aria-labelledby="participate">
          <div className="ed-container">
            <h2 id="participate" className="ed-manifesto-title">
              Tech Week doesn&apos;t stop at the front door.
            </h2>
            <p className="ed-manifesto-sub">
              The expo is at HQ. Partner events are hosted around the city, and they are listed only after they are confirmed.
            </p>
            <div className="ed-manifesto-cta">
              <Link className="ed-pill-btn" href="/expo">
                The Expo
              </Link>
              <Link className="ed-pill-btn ed-pill-btn-outline" href="/host">
                Host a Partner Event
              </Link>
            </div>
            <ul className="ed-nights-grid" style={{ textAlign: "left", marginTop: "2.5rem" }}>
              {waysIn.slice(0, 6).map((way) => (
                <li key={way.href}>
                  <Link href={way.href} className="ed-night-card" style={{ background: "#16120c0d", borderColor: "#16120c24", color: "#16120c" }}>
                    <span>
                      <h3 className="ed-night-name" style={{ color: "#16120c" }}>
                        {way.title}
                      </h3>
                      <p className="ed-night-body" style={{ color: "#16120cc7" }}>
                        {way.text}
                      </p>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
