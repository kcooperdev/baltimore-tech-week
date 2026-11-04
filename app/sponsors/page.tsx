import { ApplyForm } from "@/components/ApplyForm";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta, sponsorPackages, sponsorSurfaces } from "@/lib/site";

export const metadata = pageMeta(
  "Sponsors",
  "Sponsor Baltimore Tech Week 2027. Packages and prices will be published after they are approved.",
);

export default function SponsorsPage() {
  return (
    <main className="plain-page">
      <PageHeader eyebrow="Get involved" title="Sponsor" lede="Be in the room your people already want to be in. Prices stay off this page until they are approved.">
        <a className="week-btn" href="#sponsor-form">
          Write to us
        </a>
      </PageHeader>

      <div className="editorial-flow">
        <section className="band-paper">
          <div className="week-wrap split">
            <div>
              {sponsorPackages.length === 0 ? (
                <>
                  <h2 className="week-title">No public prices yet.</h2>
                  <p className="week-lede">Tell us the room you want. We publish a package only after the price and the benefits are signed off.</p>
                  <ul className="topic-list">
                    {sponsorSurfaces.map((surface) => (
                      <li key={surface.title}>
                        <strong>{surface.title}.</strong> {surface.text}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <ul className="hold-list">
                  {sponsorPackages.map((pkg) => (
                    <li key={pkg.id}>
                      <strong>
                        {pkg.name}
                        {pkg.price ? ` · ${pkg.price}` : ""}
                      </strong>
                      <span style={{ display: "block" }}>{pkg.summary}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <ApplyForm
              id="sponsor-form"
              endpoint="/api/apply"
              extra={{ kind: "sponsor" }}
              submitLabel="Send"
              successTitle="Thanks. We have your application."
              successBody="No public prices yet. Tell us the room you want and we will write back."
              fields={[
                { name: "organization", label: "Organization", required: true, autoComplete: "organization" },
                { name: "name", label: "Your name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                { name: "note", label: "What do you want to do?", type: "textarea", required: true },
              ]}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
