import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { hq, pageMeta, pillars, rhythm, site } from "@/lib/site";

export const metadata = pageMeta(
  "The Week",
  "Baltimore Tech Week 2027 is Wednesday, Thursday, and Friday. Connect, Build, and Opportunity. Tech Week HQ is 4MLK.",
);

export default function TheWeekPage() {
  return (
    <main className="plain-page">
      <PageHeader
        eyebrow={`${site.when} · ${site.year} · ${site.datesNote}`}
        title="The Week"
        lede="Connect. Build. Opportunity. One city. Exact dates coming soon."
      />

      <div className="plain-body">
        <div className="week-wrap">
          <div className="day-list">
            {pillars.map((pillar) => (
              <article key={pillar.id} id={pillar.id} className="scroll-mt-24">
                <p className="week-kicker">{pillar.day}</p>
                <h2>{pillar.name}</h2>
                <p className="week-lede">{pillar.purpose}</p>
                <p className="week-kicker" style={{ marginTop: "1rem" }}>
                  {pillar.question}
                </p>
                <ul className="topic-list">
                  {pillar.programming.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="rhythm">
            {rhythm.map((block) => (
              <div key={block.label}>
                <h3>{block.label}</h3>
                <p>{block.text}</p>
              </div>
            ))}
          </div>

          <p className="week-lede">
            {hq.venue} · {hq.street}, {hq.cityLine}
          </p>
          <div className="week-actions">
            <Link className="week-btn" href="/schedule">
              Schedule
            </Link>
            <a className="week-btn week-btn-ghost" href={hq.mapsUrl} target="_blank" rel="noreferrer">
              Directions
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
