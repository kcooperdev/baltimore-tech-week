import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { hq, pageMeta, pillars, site } from "@/lib/site";

export const metadata = pageMeta(
  "The Week",
  "Baltimore Tech Week 2027 is Wednesday, Thursday, and Friday. Connect, Build, and Opportunity. Tech Week HQ is 4MLK. The city is the campus.",
);

export default function TheWeekPage() {
  return (
    <main className="plain-page">
      <PageHeader
        eyebrow={`${site.when} · ${site.year} · ${site.datesNote}`}
        title="One question a day"
        lede="Connect. Build. Opportunity. The hours live on the schedule. The idea is simpler than that."
      />

      <div className="plain-body">
        <div className="week-wrap">
          <ol className="journey">
            {pillars.map((pillar) => (
              <li key={pillar.id}>
                <Link href={`/schedule#${pillar.id}`}>
                  <span>{pillar.day}</span>
                  <strong>{pillar.name}</strong>
                  <em>{pillar.question}</em>
                  <p>{pillar.purpose}</p>
                </Link>
              </li>
            ))}
          </ol>

          <p className="campus-note">
            <span>{hq.venue} · {hq.street}</span>
            <span>Baltimore is the campus.</span>
          </p>
          <p className="week-lede">{hq.cityLine}</p>

          <div className="week-actions">
            <Link className="week-btn" href="/schedule">
              The hours
            </Link>
            <a className="week-btn week-btn-ghost" href={hq.mapsUrl} target="_blank" rel="noreferrer">
              Directions to 4MLK
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
