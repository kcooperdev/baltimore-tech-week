import { ApplyForm } from "@/components/ApplyForm";
import { pageMeta, sponsorPackages } from "@/lib/site";

export const metadata = pageMeta(
  "Sponsors",
  "Sponsor Baltimore Tech Week, April 27–29, 2027. Packages and prices will be published after they are approved.",
);

export default function SponsorsPage() {
  return (
    <main className="plain-page">
      <div className="page-top">
        <div className="week-wrap split">
          <header id="main">
            <p className="week-kicker">Get involved</p>
            <h1>Sponsor</h1>
            <p className="plain-lede">Be in the room your people already want to be in. Prices stay off this page until they are approved.</p>
            {sponsorPackages.length > 0 ? (
              <ul className="hold-list">
                {sponsorPackages.map((pkg) => (
                  <li key={pkg.id}>
                    <strong>
                      {pkg.name}
                      {pkg.price ? ` · ${pkg.price}` : ""}
                    </strong>
                    <span>{pkg.summary}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </header>
          <ApplyForm
            id="sponsor-form"
            endpoint="/api/apply"
            extra={{ kind: "sponsor" }}
            submitLabel="Send"
            successTitle="Thanks. We have your note."
            successBody="We will write back about the room you want."
            fields={[
              { name: "organization", label: "Organization", required: true, autoComplete: "organization" },
              { name: "name", label: "Your name", required: true, autoComplete: "name" },
              { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
              { name: "note", label: "What do you want to do?", type: "textarea", required: true },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
