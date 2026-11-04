import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { hq, pageMeta, pillars, rhythm, site } from "@/lib/site";

export const metadata = pageMeta(
  "The Week",
  "Baltimore Tech Week 2027 is one three-day experience, Wednesday through Friday. Connect, build, and find opportunity across Baltimore, with 4MLK as Tech Week HQ.",
);

const tones = {
  wednesday: "bg-primary text-primary-foreground",
  thursday: "bg-accent text-accent-foreground",
  friday: "bg-foreground text-background",
} as const;

export default function TheWeekPage() {
  return (
    <main>
      <PageHeader
        eyebrow={`${site.when} · ${site.year}`}
        title="The Week"
        lede="Three days. One city. Baltimore's tech community, in the same place at the same time — and then out in the city after dark."
      >
        <Link
          href="/schedule"
          className="inline-flex h-12 items-center bg-accent px-5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground"
        >
          Schedule
        </Link>
        <Link
          href="/tickets"
          className="inline-flex h-12 items-center border border-border px-5 font-mono text-xs uppercase tracking-[0.14em]"
        >
          Get Tickets
        </Link>
      </PageHeader>

      <section className="border-b border-border">
        <div className="container grid gap-10 py-16 md:grid-cols-12 md:py-20">
          <p className="font-display text-3xl font-semibold tracking-tight md:col-span-5 md:text-4xl">
            One three-day experience, happening across Baltimore.
          </p>
          <div className="space-y-4 text-muted-foreground leading-relaxed md:col-span-7">
            <p>
              This is not a traditional corporate conference. It is Baltimore&apos;s technology ecosystem in the same city for three concentrated days: technology, startups, builders, careers, AI, creative technology, community, networking, entrepreneurship, education, innovation, and opportunity.
            </p>
            <p>
              There is a central headquarters, and there are independently hosted partner events throughout Baltimore. The day starts at HQ. The night belongs to the city.
            </p>
            <p className="text-foreground">{site.datesNote}. When the dates are locked, they will be updated in one place across the site.</p>
          </div>
        </div>
      </section>

      {pillars.map((pillar) => (
        <section key={pillar.id} id={pillar.id} className="border-b border-border scroll-mt-20">
          <div className="container grid gap-8 py-16 md:grid-cols-12 md:py-20">
            <div className="md:col-span-5">
              <span className={`inline-block px-2 py-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] ${tones[pillar.id]}`}>
                {pillar.day}
              </span>
              <h2 className="mt-5 font-display text-5xl font-semibold tracking-tight">{pillar.name}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{pillar.purpose}</p>
              <p className="mt-6 font-display text-2xl font-semibold tracking-tight">{pillar.tagline}</p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">{pillar.question}</p>
            </div>
            <ul className="grid content-start gap-2 sm:grid-cols-2 md:col-span-7">
              {pillar.programming.map((item) => (
                <li key={item} className="border-t border-border py-2 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="border-b border-border">
        <div className="container py-16 md:py-20">
          <h2 className="font-display text-4xl font-semibold tracking-tight">The shape of a day</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            This is the rhythm, not a timetable. Session times go on the schedule once they are confirmed.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {rhythm.map((block, index) => (
              <li key={block.label} className="border border-border p-5">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{block.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{block.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 font-display text-2xl font-semibold tracking-tight">{site.nightLine}</p>
        </div>
      </section>

      <section id="hq" className="scroll-mt-20">
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="eyebrow">Headquarters</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">{site.idea}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              You can spend the day at {hq.venue} and still be at Baltimore Tech Week. Check-in, the expo, coworking, talks, workshops, and selected evening programming are based there.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Not every Tech Week event happens at {hq.venue}. Partner hosts run their own rooms, in their own neighborhoods.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              {hq.street}, {hq.cityLine}
            </p>
            <a href={hq.mapsUrl} className="mt-4 inline-block text-sm underline underline-offset-4" target="_blank" rel="noreferrer">
              Get directions
            </a>
          </div>
          <ul className="border border-border p-6">
            {hq.holds.map((item) => (
              <li key={item} className="border-b border-border py-3 last:border-b-0">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
