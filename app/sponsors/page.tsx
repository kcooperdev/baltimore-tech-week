import { InquiryForm } from "@/components/InquiryForm";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta, sponsorPackages, sponsorSurfaces } from "@/lib/site";

export const metadata = pageMeta(
  "Sponsors",
  "Sponsor Baltimore Tech Week 2027 across HQ, the expo, programming, and the city. Book a sponsor call. Packages will be published when they are approved.",
);

export default function SponsorsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Get involved"
        title="Sponsor Baltimore Tech Week"
        lede="Sponsors back a three-day citywide week: a headquarters, an expo, and programming that moves through Baltimore. This is not a set of themed nights to put a logo on."
      >
        <a className="week-btn" href="#sponsor-form">
          Sponsor Baltimore Tech Week
        </a>
        <a className="week-btn week-btn-ghost" href="#sponsor-form">
          Book a Sponsor Call
        </a>
      </PageHeader>

      <div className="editorial-flow">
        <section className="band-ink">
          <div className="week-wrap split">
            <h2 className="week-title">Where sponsors show up</h2>
            <ul className="hold-list">
              {sponsorSurfaces.map((surface) => (
                <li key={surface.title}>
                  <strong>{surface.title}</strong>
                  <span style={{ display: "block", opacity: 0.8 }}>{surface.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="band-paper">
          <div className="week-wrap">
            <p className="week-kicker">Packages</p>
            {sponsorPackages.length === 0 ? (
              <>
                <h2 className="week-title week-title-wide">Packages are being set for the three-day week.</h2>
                <p className="week-lede">
                  Prices and benefits will be published here once they are approved. Until then, book a call and tell us what you actually want to do.
                </p>
              </>
            ) : (
              <ul className="venue-grid">
                {sponsorPackages.map((pkg) => (
                  <li key={pkg.id} className="venue-card">
                    <h3>{pkg.name}</h3>
                    {pkg.price ? <p>{pkg.price}</p> : null}
                    <p>{pkg.summary}</p>
                    <p>{pkg.includes.join(" · ")}</p>
                  </li>
                ))}
              </ul>
            )}
            <p className="week-kicker" style={{ marginTop: "2.5rem" }}>
              Sponsor roster coming soon
            </p>
          </div>
        </section>

        <section className="band-build">
          <div className="week-wrap split">
            <h2 className="week-title week-title-wide">Tell us what you want to back.</h2>
            <InquiryForm
              id="sponsor-form"
              subject="Baltimore Tech Week sponsorship"
              submitLabel="Send"
              fields={[
                { name: "organization", label: "Organization", required: true, autoComplete: "organization" },
                { name: "contact", label: "Contact name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                {
                  name: "intent",
                  label: "What do you need?",
                  type: "select",
                  required: true,
                  options: ["Sponsor Baltimore Tech Week", "Book a sponsor call"],
                },
                {
                  name: "note",
                  label: "What are you hoping to do?",
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
