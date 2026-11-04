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
        <a
          href="#sponsor-form"
          className="inline-flex h-12 items-center bg-accent px-5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground"
        >
          Sponsor Baltimore Tech Week
        </a>
        <a
          href="#sponsor-form"
          className="inline-flex h-12 items-center border border-border px-5 font-mono text-xs uppercase tracking-[0.14em]"
        >
          Book a Sponsor Call
        </a>
      </PageHeader>

      <section className="border-b border-border">
        <div className="container py-16 md:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Where sponsors show up</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sponsorSurfaces.map((surface) => (
              <li key={surface.title} className="border border-border p-5">
                <h3 className="font-display text-xl font-semibold tracking-tight">{surface.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{surface.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container py-16 md:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Packages</h2>
          {sponsorPackages.length === 0 ? (
            <div className="mt-6 border border-dashed border-border px-6 py-12">
              <p className="font-display text-2xl font-semibold tracking-tight">Packages are being set for the three-day week.</p>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Prices and benefits will be published here once they are approved. Until then, book a call and tell us what you actually want to do.
              </p>
            </div>
          ) : (
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {sponsorPackages.map((pkg) => (
                <li key={pkg.id} className="border border-border p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold">{pkg.name}</h3>
                    {pkg.price ? <p className="font-display text-2xl">{pkg.price}</p> : null}
                  </div>
                  <p className="mt-3 text-muted-foreground">{pkg.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {pkg.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
          <p className="mt-10 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
            Sponsor roster coming soon
          </p>
        </div>
      </section>

      <section>
        <div className="container grid gap-10 py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-4xl font-semibold tracking-tight">Tell us what you want to back.</h2>
          </div>
          <div className="md:col-span-8">
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
        </div>
      </section>
    </main>
  );
}
