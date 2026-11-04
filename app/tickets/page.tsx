import { InquiryForm } from "@/components/InquiryForm";
import { PageHeader } from "@/components/PageHeader";
import { formatPrice, generalAdmission, pageMeta, site, vip } from "@/lib/site";

export const metadata = pageMeta(
  "Tickets",
  "Baltimore Tech Week 2027 tickets: General Admission at $29, $49, and $69 by window, and VIP at $99. Checkout is not open yet.",
);

export default function TicketsPage() {
  return (
    <main>
      <PageHeader
        eyebrow={`${site.when} · ${site.year} · ${site.where}`}
        title="Tickets"
        lede="Two passes. General Admission and VIP. Checkout is not open yet. These are the planned prices, and inclusions can still change before they go on sale."
      />

      <section className="border-b border-border">
        <div className="container grid gap-4 py-14 md:grid-cols-2 md:py-16">
          <article className="flex flex-col border border-border p-6 md:p-8">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-primary">General Admission</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">{generalAdmission.name}</h2>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {generalAdmission.windows.map((window) => (
                <li key={window.id} className="flex items-baseline justify-between py-3">
                  <span>{window.name}</span>
                  <span className="font-display text-3xl font-semibold">{formatPrice(window.price)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
              Planned access
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {generalAdmission.access.map((item) => (
                <li key={item} className="border-t border-border pt-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="flex flex-col border border-accent p-6 md:p-8">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent">VIP</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight">{vip.name}</h2>
            <p className="mt-6 font-display text-6xl font-semibold tracking-tight">{formatPrice(vip.price)}</p>
            <p className="mt-2 text-sm text-muted-foreground">One price. One pass. No extra premium tiers.</p>
            <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
              Planned benefits
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {vip.access.map((item) => (
                <li key={item} className="border-t border-border pt-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container max-w-3xl py-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Read this before you buy.</h2>
          <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
            <p>
              A pass covers Baltimore Tech Week programming at Tech Week HQ, and partner experiences only where the host says a pass applies.
            </p>
            <p>
              Partner events may have their own capacity or their own registration. A General Admission or VIP pass is not universal entry to independently hosted events.
            </p>
            <p>Final inclusions stay editable until checkout opens.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid gap-10 py-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="font-display text-4xl font-semibold tracking-tight">Get Tickets</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Leave your email. When checkout opens, we&apos;ll send the link for the pass you want.
            </p>
          </div>
          <div className="md:col-span-7">
            <InquiryForm
              id="notify"
              subject="Baltimore Tech Week ticket interest"
              submitLabel="Get Tickets"
              fields={[
                { name: "name", label: "Name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                {
                  name: "pass",
                  label: "Pass",
                  type: "select",
                  required: true,
                  options: ["General Admission", "VIP", "Not sure yet"],
                },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
