import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta, pillars, schedule, site } from "@/lib/site";

export const metadata = pageMeta(
  "Schedule",
  "Baltimore Tech Week 2027 schedule. Wednesday Connect, Thursday Build, Friday Opportunity. Sessions will be posted when they are confirmed.",
);

export default function SchedulePage() {
  return (
    <main className="plain-page">
      <PageHeader
        eyebrow={site.when}
        title="Schedule"
        lede="The days are set. The sessions go up when they are real."
      />

      <div className="plain-body">
        <div className="week-wrap">
          {site.phase === "live" ? (
            <p className="week-lede">
              Today is {pillars.find((pillar) => pillar.id === site.liveDay)?.day}.{" "}
              <a href={`#${site.liveDay}`}>Jump to today</a>
            </p>
          ) : null}

          <ul className="schedule-days">
            {pillars.map((pillar) => {
              const items = schedule.filter((item) => item.day === pillar.id);
              return (
                <li key={pillar.id} id={pillar.id} className="scroll-mt-24">
                  <div>
                    <p className="week-kicker">{pillar.day}</p>
                    <h2 style={{ margin: "0.15rem 0 0", fontSize: "clamp(1.7rem, 3vw, 2.2rem)", fontWeight: 650, letterSpacing: "-0.03em" }}>
                      {pillar.name}
                    </h2>
                    <p className="week-lede" style={{ marginTop: "0.35rem" }}>
                      {pillar.tagline}
                    </p>
                  </div>
                  <div>
                    {items.length === 0 ? (
                      <p className="week-lede">Schedule coming soon.</p>
                    ) : (
                      <ul className="topic-list">
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
                </li>
              );
            })}
          </ul>

          <div className="week-actions">
            <Link className="week-btn week-btn-ghost" href="/the-week">
              About the days
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
