import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { hq, pageMeta, pillars, rhythm, site } from "@/lib/site";

export const metadata = pageMeta(
  "The Week",
  "Baltimore Tech Week 2027 is one three-day experience, Wednesday through Friday. Connect, build, and find opportunity across Baltimore, with 4MLK as Tech Week HQ.",
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
        lede="Three days. One city. Baltimore's tech community, in the same place at the same time — and then out in the city after dark."
      >
        <Link className="week-btn" href="/schedule">
          Schedule
        </Link>
        <Link className="week-btn week-btn-ghost" href="/tickets">
          Get Tickets
        </Link>
      </PageHeader>

      <div className="editorial-flow">
        <section className="band-paper">
          <div className="week-wrap">
            <p className="week-kicker">Wednesday through Friday</p>
            <h2 className="week-title week-title-wide">One three-day experience, happening across Baltimore.</h2>
            <p className="week-lede">
              This is not a traditional corporate conference. It is Baltimore&apos;s technology ecosystem in the same city for three concentrated days: technology, startups, builders, careers, AI, creative technology, community, networking, entrepreneurship, education, innovation, and opportunity.
            </p>
            <p className="week-lede">
              There is a central headquarters, and there are independently hosted partner events throughout Baltimore. The day starts at HQ. The night belongs to the city.
            </p>
            <p className="week-lede">
              {site.datesNote}. When the dates are locked, they will be updated in one place across the site.
            </p>
          </div>
        </section>

        {pillars.map((pillar) => (
          <section key={pillar.id} id={pillar.id} className={`${band[pillar.id]} scroll-mt-20`}>
            <div className="week-wrap split">
              <div>
                <p className="week-kicker">{pillar.day}</p>
                <h2 className="week-title">{pillar.name}</h2>
                <p className="week-lede">{pillar.purpose}</p>
                <p className="week-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginTop: "1.5rem" }}>
                  {pillar.tagline}
                </p>
                <p className="week-kicker" style={{ marginTop: "1.25rem" }}>
                  {pillar.question}
                </p>
                <div className="week-actions">
                  <Link className="week-btn" href={`/schedule#${pillar.id}`}>
                    {pillar.day} on the schedule
                  </Link>
                </div>
              </div>
              <ul className="hold-list">
                {pillar.programming.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="band-paper">
          <div className="week-wrap">
            <p className="week-kicker">Shape of a day · not a timetable</p>
            <h2 className="week-title">How a day moves.</h2>
            <p className="week-lede">Session times go on the schedule once they are confirmed.</p>
            <div className="rhythm">
              {rhythm.map((block) => (
                <div key={block.label}>
                  <h3>{block.label}</h3>
                  <p>{block.text}</p>
                </div>
              ))}
            </div>
            <p className="week-lede">{site.nightLine}</p>
          </div>
        </section>

        <section id="hq" className="band-ink scroll-mt-20">
          <div className="week-wrap split">
            <div>
              <p className="week-kicker">Headquarters</p>
              <h2 className="week-title">{site.idea}</h2>
              <p className="week-lede">
                You can spend the day at {hq.venue} and still be at Baltimore Tech Week. Check-in, the expo, coworking, talks, workshops, and selected evening programming are based there.
              </p>
              <p className="week-lede">
                Not every Tech Week event happens at {hq.venue}. Partner hosts run their own rooms, in their own neighborhoods.
              </p>
              <p className="week-lede">
                {hq.street}, {hq.cityLine}
              </p>
              <div className="week-actions">
                <a className="week-btn" href={hq.mapsUrl} target="_blank" rel="noreferrer">
                  Get directions
                </a>
              </div>
            </div>
            <ul className="hold-list">
              {hq.holds.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
