import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta, pillars, site } from "@/lib/site";

export const metadata = pageMeta(
  "Schedule",
  "Baltimore Tech Week 2027 runs Wednesday through Friday. Connect, Build, and Opportunity. Days at 4MLK, nights around Baltimore. Sessions are added when they are booked.",
);

export default function SchedulePage() {
  const today = pillars.find((pillar) => pillar.id === site.liveDay);

  return (
    <main className="plain-page">
      <PageHeader
        eyebrow={`${site.when} · ${site.year} · ${site.datesNote}`}
        title="How the week goes"
        lede="Three days. The building by day. The city after. Names of talks show up when someone is booked."
      />

      <div className="plain-body">
        <div className="week-wrap">
          {site.phase === "live" && today ? (
            <p className="week-lede">
              Today is {today.day}. <a href={`#${today.id}`}>Jump to today</a>
            </p>
          ) : null}

          <nav className="day-jump" aria-label="Days">
            {pillars.map((pillar) => (
              <a key={pillar.id} href={`#${pillar.id}`}>
                <span>{pillar.day}</span>
                <strong>{pillar.name}</strong>
                <em>{pillar.question}</em>
              </a>
            ))}
          </nav>

          {pillars.map((pillar) => (
            <section key={pillar.id} id={pillar.id} className="day-chapter">
              <header>
                <p className="week-kicker">{pillar.day}</p>
                <h2>{pillar.name}</h2>
                <p className="day-question">{pillar.question}</p>
                <p className="week-lede">{pillar.tagline}</p>
              </header>
              <ol className="day-spine">
                {pillar.stops.map((stop) => (
                  <li key={stop.id} className={stop.kind === "city" ? "is-city" : stop.kind === "pause" ? "is-pause" : undefined}>
                    <p className="day-when">{stop.when}</p>
                    <div>
                      <p className="day-where">{stop.where}</p>
                      <h3>{stop.title}</h3>
                      <p>{stop.text}</p>
                      {stop.places ? (
                        <ul className="city-places">
                          {stop.places.map((place) => (
                            <li key={place.name}>
                              {place.href ? (
                                <Link href={place.href}>
                                  <strong>{place.name}</strong>
                                  <span>{place.line}</span>
                                </Link>
                              ) : (
                                <>
                                  <strong>{place.name}</strong>
                                  <span>{place.line}</span>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ))}

          <p className="campus-note">
            <span>4MLK is headquarters.</span>
            <span>Baltimore is the campus.</span>
          </p>

          <div className="week-actions">
            <Link className="week-btn" href="/tickets">
              Get a pass
            </Link>
            <Link className="week-btn week-btn-ghost" href="/around-baltimore">
              Nights in the city
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
