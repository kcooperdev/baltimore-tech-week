import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta, pillars, schedule, site } from "@/lib/site";

export const metadata = pageMeta(
  "Schedule",
  "Baltimore Tech Week 2027 schedule. Wednesday Connect, Thursday Build, Friday Opportunity. Sessions will be posted when they are confirmed.",
);

const band = {
  wednesday: "band-connect",
  thursday: "band-build",
  friday: "band-opportunity",
} as const;

export default function SchedulePage() {
  return (
    <main>
      <PageHeader eyebrow={site.when} title="Schedule" lede="Nothing is posted until it is confirmed.">
        <Link className="week-btn" href="/tickets">
          Get Tickets
        </Link>
      </PageHeader>

      <div className="editorial-flow">
        {site.phase === "live" ? (
          <section className="band-ink">
            <div className="week-wrap">
              <p className="week-lede">
                Today is {pillars.find((pillar) => pillar.id === site.liveDay)?.day}.{" "}
                <a href={`#${site.liveDay}`}>Jump to today</a>
              </p>
            </div>
          </section>
        ) : null}

        {pillars.map((pillar) => {
          const items = schedule.filter((item) => item.day === pillar.id);
          return (
            <section key={pillar.id} id={pillar.id} className={`${band[pillar.id]} scroll-mt-24`}>
              <div className="week-wrap">
                <p className="week-kicker">{pillar.day}</p>
                <h2 className="week-title">{pillar.name}</h2>
                <p className="week-lede">{pillar.tagline}</p>
                {items.length === 0 ? (
                  <p className="week-lede">Schedule coming soon.</p>
                ) : (
                  <ul className="hold-list" style={{ marginTop: "1.5rem" }}>
                    {items.map((item) => (
                      <li key={item.id}>
                        <strong>
                          {item.time} · {item.title}
                        </strong>
                        <span style={{ display: "block" }}>{item.description}</span>
                        <span style={{ display: "block" }}>
                          {item.venue} · {item.registration}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
