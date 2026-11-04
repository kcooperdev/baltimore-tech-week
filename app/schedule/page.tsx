import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta, pillars, rhythm, schedule, site } from "@/lib/site";

export const metadata = pageMeta(
  "Schedule",
  "The Baltimore Tech Week 2027 schedule: Wednesday Connect, Thursday Build, and Friday Opportunity. Programming will be posted as it is confirmed.",
);

export default function SchedulePage() {
  return (
    <main>
      <PageHeader
        eyebrow="The Week"
        title="Three days. One city."
        lede="Wednesday is for meeting people. Thursday is for making things. Friday is for what happens next. Sessions land here when they are real."
      >
        <Link href="/tickets" className="inline-flex h-12 items-center bg-accent px-5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground">
          Get Tickets
        </Link>
      </PageHeader>

      {site.phase === "live" ? (
        <div className="border-b border-border bg-card">
          <div className="container flex flex-wrap items-center justify-between gap-3 py-4">
            <p className="font-display text-lg font-semibold">
              Today is {pillars.find((pillar) => pillar.id === site.liveDay)?.day}.
            </p>
            <a href={`#${site.liveDay}`} className="text-sm underline underline-offset-4">
              View today&apos;s schedule
            </a>
          </div>
        </div>
      ) : null}

      <section className="border-b border-border">
        <div className="container py-10">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
            Shape of each day · not a timetable
          </p>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rhythm.map((block) => (
              <div key={block.label}>
                <dt className="font-display text-lg font-semibold">{block.label}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{block.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {pillars.map((pillar) => {
        const items = schedule.filter((item) => item.day === pillar.id);
        return (
          <section key={pillar.id} id={pillar.id} className="scroll-mt-24 border-b border-border">
            <div className="container py-14 md:py-16">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="eyebrow">
                    {pillar.day} · {pillar.question}
                  </p>
                  <h2 className="mt-2 font-display text-5xl font-semibold tracking-tight">{pillar.name}</h2>
                  <p className="mt-3 max-w-xl text-muted-foreground">{pillar.tagline}</p>
                </div>
                <Link href={`/the-week#${pillar.id}`} className="text-sm underline underline-offset-4">
                  About this day
                </Link>
              </div>

              {items.length === 0 ? (
                <div className="mt-8 border border-dashed border-border px-6 py-10">
                  <p className="font-display text-2xl font-semibold tracking-tight">More programming coming soon.</p>
                  <p className="mt-2 max-w-xl text-muted-foreground">
                    Schedule coming soon. Confirmed sessions will list a time, title, description, speakers, venue, category, and whether you need to register.
                  </p>
                </div>
              ) : (
                <ul className="mt-8 divide-y divide-border border-y border-border">
                  {items.map((item) => (
                    <li key={item.id} className="grid gap-3 py-6 md:grid-cols-12">
                      <p className="font-mono text-sm md:col-span-2">{item.time}</p>
                      <div className="md:col-span-7">
                        <div className="flex flex-wrap gap-2">
                          <span
                            className={`px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] ${
                              item.place === "hq"
                                ? "bg-primary text-primary-foreground"
                                : "bg-accent text-accent-foreground"
                            }`}
                          >
                            {item.place === "hq" ? "Tech Week HQ" : "Partner event"}
                          </span>
                          <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                        {item.speakers.length > 0 ? (
                          <p className="mt-2 text-sm">{item.speakers.join(", ")}</p>
                        ) : null}
                      </div>
                      <div className="text-sm md:col-span-3">
                        <p>{item.venue}</p>
                        <p className="mt-2 text-muted-foreground">{item.registration}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        );
      })}

      <section>
        <div className="container flex flex-col gap-4 py-14 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-2xl font-semibold tracking-tight">{site.nightLine}</p>
          <Link href="/around-baltimore" className="text-sm underline underline-offset-4">
            Around Baltimore
          </Link>
        </div>
      </section>
    </main>
  );
}
