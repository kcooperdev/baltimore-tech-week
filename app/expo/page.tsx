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
        <a
          href="#exhibit"
          className="inline-flex h-12 items-center bg-accent px-5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground"
        >
          Become an Exhibitor
        </a>
        <Link
          href="/sponsors"
          className="inline-flex h-12 items-center border border-border px-5 font-mono text-xs uppercase tracking-[0.14em]"
        >
          Sponsor Tech Week
        </Link>
      </PageHeader>

      <section className="border-b border-border">
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">Who the floor is for</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A pass gets you into the expo at {hq.venue}. You do not need a booth to walk it. If you want a table, apply below. We&apos;ll confirm space before anything is listed publicly.
            </p>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {expoParticipants.map((item) => (
              <li key={item} className="border border-border px-4 py-3 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container py-16 md:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Exhibitors</h2>
          {exhibitors.length === 0 ? (
            <div className="mt-6 border border-dashed border-border px-6 py-14">
              <p className="font-display text-3xl font-semibold tracking-tight">Exhibitors coming soon.</p>
              <p className="mt-3 max-w-lg text-muted-foreground">
                Names and logos will be published here after organizations confirm. None are listed yet.
              </p>
            </div>
          ) : (
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {exhibitors.map((exhibitor) => (
                <li key={exhibitor.name} className="border border-border p-6">
                  {exhibitor.url ? (
                    <a href={exhibitor.url} className="font-display text-xl font-semibold underline-offset-4 hover:underline">
                      {exhibitor.name}
                    </a>
                  ) : (
                    <p className="font-display text-xl font-semibold">{exhibitor.name}</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="scroll-mt-24">
        <div className="container grid gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <h2 className="font-display text-4xl font-semibold tracking-tight">Bring something people can walk up to.</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Tell us what you want to show. A product, a hiring team, a school, a community program. We&apos;ll follow up about space at HQ.
            </p>
          </div>
          <div className="md:col-span-7">
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
        </div>
      </section>
    </main>
  );
}
