import { InquiryForm } from "@/components/InquiryForm";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta, sponsorPackages } from "@/lib/site";

export const metadata = pageMeta(
  "Sponsors",
  "Sponsor Baltimore Tech Week 2027. Packages and prices will be published after they are approved.",
);

export default function SponsorsPage() {
  return (
    <main className="plain-page">
      <PageHeader eyebrow="Get involved" title="Sponsor" lede="Packages are not published yet. Tell us what you want to back.">
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
                  <h2 className="week-title">No prices yet.</h2>
                  <p className="week-lede">Prices and benefits go here after they are approved. Nothing is listed until then.</p>
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
            <InquiryForm
              id="sponsor-form"
              subject="Baltimore Tech Week sponsorship"
              submitLabel="Send"
              fields={[
                { name: "organization", label: "Organization", required: true, autoComplete: "organization" },
                { name: "contact", label: "Your name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                {
                  name: "note",
                  label: "What do you want to do?",
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
