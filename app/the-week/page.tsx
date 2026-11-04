import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { hq, pageMeta, pillars, rhythm, site } from "@/lib/site";

export const metadata = pageMeta(
  "The Week",
  "Baltimore Tech Week 2027 is Wednesday, Thursday, and Friday. Connect, Build, and Opportunity. Tech Week HQ is 4MLK.",
);

const band = {
  wednesday: "band-connect",
  thursday: "band-build",
  friday: "band-opportunity",
} as const;

export default function TheWeekPage() {
  return (
    <main>
      <PageHeader
        eyebrow={`${site.when} · ${site.year}`}
        title="The Week"
        lede="Three days. One city. Exact dates coming soon."
      >
        <Link className="week-btn" href="/tickets">
          Get Tickets
        </Link>
      </PageHeader>

      <div className="editorial-flow">
        {pillars.map((pillar) => (
          <section key={pillar.id} id={pillar.id} className={`${band[pillar.id]} scroll-mt-20`}>
            <div className="week-wrap">
              <p className="week-kicker">{pillar.day}</p>
              <h2 className="week-title">{pillar.name}</h2>
              <p className="week-lede">{pillar.purpose}</p>
              <p className="week-kicker" style={{ marginTop: "1.5rem" }}>
                {pillar.question}
              </p>
            </div>
          </section>
        ))}

        <section className="band-paper">
          <div className="week-wrap">
            <p className="week-kicker">A day, simply</p>
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
        </section>
      </div>
    </main>
  );
}
