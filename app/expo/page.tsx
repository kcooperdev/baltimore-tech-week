import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHeader } from "@/components/PageHeader";
import { exhibitors, expoParticipants, hq, pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Expo",
  "The Baltimore Tech Week Expo at 4MLK is where attendees meet the companies, startups, schools, and community organizations building in Baltimore. Exhibitor applications are open.",
);

export default function ExpoPage() {
  return (
    <main>
      <PageHeader
        eyebrow={`${hq.name} · ${hq.venue}`}
        title="See what's being built."
        lede="The Baltimore Tech Week Expo takes place at Tech Week HQ. Walk the floor and meet the organizations, companies, startups, products, and resources in Baltimore's technology ecosystem."
      >
        <a className="week-btn" href="#exhibit">
          Become an Exhibitor
        </a>
        <Link className="week-btn week-btn-ghost" href="/sponsors">
          Sponsor Tech Week
        </Link>
      </PageHeader>

      <div className="editorial-flow">
        <section className="band-sky">
          <div className="week-wrap split">
            <div>
              <p className="week-kicker" style={{ color: "#16120c99" }}>
                On the floor at {hq.venue}
              </p>
              <h2 className="week-title">Who the floor is for</h2>
              <p className="week-lede">
                A pass gets you into the expo at {hq.venue}. You do not need a booth to walk it. If you want a table, apply below. We&apos;ll confirm space before anything is listed publicly.
              </p>
            </div>
            <ul className="hold-list">
              {expoParticipants.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="band-paper">
          <div className="week-wrap">
            <p className="week-kicker">Exhibitors</p>
            {exhibitors.length === 0 ? (
              <>
                <h2 className="week-title week-title-wide">Exhibitors coming soon.</h2>
                <p className="week-lede">Names and logos will be published here after organizations confirm. None are listed yet.</p>
              </>
            ) : (
              <ul className="who-grid">
                {exhibitors.map((exhibitor) => (
                  <li key={exhibitor.name} className="who-card">
                    {exhibitor.url ? (
                      <a href={exhibitor.url}>
                        <h3>{exhibitor.name}</h3>
                      </a>
                    ) : (
                      <h3>{exhibitor.name}</h3>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="band-ink scroll-mt-24">
          <div className="week-wrap split">
            <div>
              <h2 className="week-title week-title-wide">Bring something people can walk up to.</h2>
              <p className="week-lede">
                Tell us what you want to show. A product, a hiring team, a school, a community program. We&apos;ll follow up about space at HQ.
              </p>
            </div>
            <InquiryForm
              id="exhibit"
              subject="Baltimore Tech Week exhibitor application"
              submitLabel="Become an Exhibitor"
              fields={[
                { name: "organization", label: "Organization", required: true, autoComplete: "organization" },
                { name: "contact", label: "Contact name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                { name: "website", label: "Website" },
                {
                  name: "showing",
                  label: "What do you want people to see?",
                  type: "textarea",
                  required: true,
                },
              ]}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
