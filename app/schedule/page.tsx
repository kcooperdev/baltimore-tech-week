import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta, pillars, rhythm, schedule, site } from "@/lib/site";

export const metadata = pageMeta(
  "Schedule",
  "The Baltimore Tech Week 2027 schedule: Wednesday Connect, Thursday Build, and Friday Opportunity. Programming will be posted as it is confirmed.",
);

const band = {
  wednesday: "band-connect",
  thursday: "band-build",
  friday: "band-opportunity",
} as const;

export default function SchedulePage() {
  return (
    <main>
      <PageHeader
        eyebrow="The Week"
        title="Three days. One city."
        lede="Wednesday is for meeting people. Thursday is for making things. Friday is for what happens next. Sessions land here when they are real."
      >
        <Link className="week-btn" href="/tickets">
          Get Tickets
        </Link>
      </PageHeader>

      <div className="editorial-flow">
        {site.phase === "live" ? (
          <section className="band-ink">
            <div className="week-wrap" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1rem" }}>
              <p className="week-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                Today is {pillars.find((pillar) => pillar.id === site.liveDay)?.day}.
              </p>
              <a className="week-btn" href={`#${site.liveDay}`}>
                View today&apos;s schedule
              </a>
            </div>
          </section>
        ) : null}

        <section className="band-paper">
          <div className="week-wrap">
            <p className="week-kicker">Shape of each day · not a timetable</p>
            <div className="rhythm">
              {rhythm.map((block) => (
                <div key={block.label}>
                  <h3>{block.label}</h3>
                  <p>{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {pillars.map((pillar) => {
          const items = schedule.filter((item) => item.day === pillar.id);
          return (
            <section key={pillar.id} id={pillar.id} className={`${band[pillar.id]} scroll-mt-24`}>
              <div className="week-wrap">
                <p className="week-kicker">
                  {pillar.day} · {pillar.question}
                </p>
                <h2 className="week-title">{pillar.name}</h2>
                <p className="week-lede">{pillar.tagline}</p>
                {items.length === 0 ? (
                  <div style={{ marginTop: "2rem" }}>
                    <p className="week-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
                      More programming coming soon.
                    </p>
                    <p className="week-lede">
                      Schedule coming soon. Confirmed sessions will list a time, title, description, speakers, venue, category, and whether you need to register.
                    </p>
                  </div>
                ) : (
                  <ul className="hold-list" style={{ marginTop: "2rem" }}>
                    {items.map((item) => (
                      <li key={item.id}>
                        <p className="week-kicker">{item.time}</p>
                        <h3 style={{ margin: "0.3rem 0 0", fontSize: "1.6rem" }}>{item.title}</h3>
                        <p>
                          {item.place === "hq" ? "Tech Week HQ" : "Partner event"} · {item.category}
                        </p>
                        <p>{item.description}</p>
                        {item.speakers.length > 0 ? <p>{item.speakers.join(", ")}</p> : null}
                        <p>
                          {item.venue} · {item.registration}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="week-actions">
                  <Link className="week-btn" href={`/the-week#${pillar.id}`}>
                    About this day
                  </Link>
                </div>
              </div>
            </section>
          );
        })}

        <section className="band-paper">
          <div className="week-wrap split">
            <p className="week-title week-title-wide">{site.nightLine}</p>
            <Link className="week-btn" href="/around-baltimore">
              Around Baltimore
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
