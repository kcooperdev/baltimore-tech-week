import Link from "next/link";
import { hq, pageMeta, pillars, site, type Pillar } from "@/lib/site";

export const metadata = pageMeta(
  "Schedule",
  "April 27–29, 2027. Tuesday Connect, Wednesday Build, Thursday Opportunity. Days at 4MLK.",
);

type Row = {
  key: string;
  when: string;
  title: string;
  where: string;
  detail: string;
  href?: string;
  tone: "hq" | "pause" | "city";
};

function rowsFor(pillar: Pillar): Row[] {
  const rows: Row[] = [];
  for (const stop of pillar.stops) {
    if (stop.places?.length) {
      for (const place of stop.places) {
        rows.push({
          key: `${stop.id}-${place.name}`,
          when: stop.when,
          title: place.name,
          where: place.line,
          detail: "",
          href: place.href,
          tone: "city",
        });
      }
      continue;
    }
    rows.push({
      key: stop.id,
      when: stop.when,
      title: stop.title,
      where: stop.where,
      detail: stop.text,
      tone: stop.kind,
    });
  }
  return rows;
}

export default function SchedulePage() {
  return (
    <main className="plain-page schedule-page">
      <header className="plain-hero" id="main">
        <div className="week-wrap schedule-intro">
          <div>
            <p className="week-kicker">{site.dates}</p>
            <h1>Schedule</h1>
          </div>
          <p className="plain-lede">
            Days at 4MLK, {hq.street} Talks are added when booked.
          </p>
        </div>
      </header>

      <div className="plain-body">
        <div className="week-wrap">
          <div className="day-board">
            {pillars.map((pillar) => (
              <section key={pillar.id} id={pillar.id} className={`day-sheet day-sheet-${pillar.id}`}>
                <header>
                  <p className="day-sheet-date">
                    {pillar.day} · {pillar.date}
                  </p>
                  <h2>{pillar.name}</h2>
                  <p>{pillar.tagline}</p>
                </header>
                <ol className="day-rows">
                  {rowsFor(pillar).map((row) => {
                    const body = (
                      <>
                        <strong>{row.title}</strong>
                        {row.detail ? <span className="day-detail">{row.detail}</span> : null}
                        {row.where ? <span className="day-place">{row.where}</span> : null}
                      </>
                    );
                    return (
                      <li key={row.key} className={row.tone === "hq" ? undefined : `is-${row.tone}`}>
                        <time>{row.when}</time>
                        {row.href ? <Link href={row.href}>{body}</Link> : <div>{body}</div>}
                      </li>
                    );
                  })}
                </ol>
              </section>
            ))}
          </div>

          <div className="week-actions">
            <Link className="week-btn" href="/tickets">
              Get a pass
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
