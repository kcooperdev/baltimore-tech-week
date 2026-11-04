import Link from "next/link";
import { HarborScene } from "@/components/HarborScene";
import { LivePortal } from "@/components/LivePortal";
import {
  audiences,
  exploringVenues,
  expoParticipants,
  hq,
  pillars,
  rhythm,
  site,
  waysIn,
} from "@/lib/site";

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
              {site.when} · {site.year} · {site.where}
            </p>
            <h2 id="week-promise" className="week-title">
              Connect. Build. Opportunity.
            </h2>
            <p className="week-lede">{site.promise}</p>
            <p className="week-lede">{site.positioning}</p>
            <div className="week-actions">
              <Link className="week-btn" href="/tickets">
                Get Tickets
              </Link>
              <Link className="week-btn week-btn-ghost" href="/the-week">
                Explore the Week
              </Link>
              <Link className="week-btn week-btn-ghost" href="/host">
                Host a Partner Event
              </Link>
            </div>
            <div className="day-panels">
              {pillars.map((pillar) => (
                <Link key={pillar.id} className={panelClass[pillar.id]} href={`/schedule#${pillar.id}`}>
                  <div>
                    <p className="day-panel-day">{pillar.day}</p>
                    <h3>{pillar.name}</h3>
                    <p>{pillar.summary}</p>
                  </div>
                  <p className="day-panel-q">{pillar.tagline}</p>
                </Link>
              ))}
            </div>
            <p className="week-kicker" style={{ marginTop: "2.75rem" }}>
              Shape of the day · not a timetable
            </p>
            <div className="rhythm">
              {rhythm.map((block) => (
                <div key={block.label}>
                  <h3>{block.label}</h3>
                  <p>{block.text}</p>
                </div>
              ))}
            </div>
            <p className="week-lede">{site.nightLine}</p>
          </div>
        </section>

        <section className="band-ink" aria-labelledby="hq">
          <div className="week-wrap split">
            <div>
              <p className="week-kicker">Baltimore Tech Week HQ · {hq.venue}</p>
              <h2 id="hq" className="week-title">
                One home base. A whole city participating.
              </h2>
              <p className="week-lede">
                Spend the day at {hq.venue}. Registration, the expo, coworking, talks, workshops, and evening programming can all happen there. Not every Baltimore Tech Week event does.
              </p>
              <p className="week-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginTop: "1.5rem", maxWidth: "20ch" }}>
                {site.idea}
              </p>
              <p className="week-lede">
                {hq.street}, {hq.cityLine}. Hours and rooms will be posted when they are confirmed.
              </p>
              <div className="week-actions">
                <Link className="week-btn" href="/around-baltimore">
                  Explore Venues
                </Link>
                <a className="week-btn week-btn-ghost" href={hq.mapsUrl} target="_blank" rel="noreferrer">
                  Directions to 4MLK
                </a>
              </div>
            </div>
            <ul className="hold-list">
              {hq.holds.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="band-paper" aria-labelledby="expo">
          <div className="week-wrap split">
            <div>
              <p className="week-kicker">At Tech Week HQ</p>
              <h2 id="expo" className="week-title">
                See what&apos;s being built.
              </h2>
              <p className="week-lede">
                The Baltimore Tech Week Expo is where you meet the organizations, companies, startups, products, and resources in this city&apos;s technology ecosystem.
              </p>
              <div className="week-actions">
                <Link className="week-btn" href="/expo#exhibit">
                  Become an Exhibitor
                </Link>
                <Link className="week-btn week-btn-ghost" href="/sponsors">
                  Sponsor Tech Week
                </Link>
              </div>
            </div>
            <div className="coming">
              <h3>Exhibitors coming soon.</h3>
              <p className="week-lede">Logos go here after an organization confirms. The floor is open to:</p>
              <ul className="hold-list">
                {expoParticipants.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="band-ink" aria-labelledby="around">
          <div className="week-wrap">
            <p className="week-kicker">Partner events</p>
            <h2 id="around" className="week-title">
              Tech Week doesn&apos;t stop at the front door.
            </h2>
            <p className="week-lede">
              Organizations around Baltimore can host official Tech Week experiences. Nothing below is a confirmed event, time, or partnership. Confirmed events will show a venue, a time, and a way to RSVP.
            </p>
            <div className="venue-grid">
              {exploringVenues.map((venue) => (
                <article key={venue.id} className="venue-card">
                  <p className="status-tag">Being explored</p>
                  <h3>{venue.name}</h3>
                  <p>
                    {venue.focus} · {venue.neighborhood}
                  </p>
                  <p>{venue.possible.slice(0, 3).join(" · ")}</p>
                </article>
              ))}
            </div>
            <div className="week-actions">
              <Link className="week-btn" href="/host">
                Host an Event
              </Link>
              <Link className="week-btn week-btn-ghost" href="/around-baltimore">
                Around Baltimore
              </Link>
            </div>
          </div>
        </section>

        <section className="band-paper" aria-labelledby="who">
          <div className="week-wrap">
            <p className="week-kicker">Who it&apos;s for</p>
            <h2 id="who" className="week-title">
              You don&apos;t need a tech title to belong at Tech Week.
            </h2>
            <div className="who-grid">
              {audiences.map((audience) => (
                <article key={audience.title} className="who-card">
                  <h3>{audience.title}</h3>
                  <p>{audience.text}</p>
                </article>
              ))}
            </div>
            <ul className="path-list">
              {waysIn.map((way) => (
                <li key={way.href}>
                  <Link href={way.href}>
                    <strong>{way.title}</strong>
                    <span>{way.text}</span>
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
