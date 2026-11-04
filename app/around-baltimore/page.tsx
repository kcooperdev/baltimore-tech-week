import { PageHeader } from "@/components/PageHeader";
import { PartnerBoard } from "@/components/PartnerBoard";
import { hq, pageMeta, site } from "@/lib/site";

export const metadata = pageMeta(
  "Around Baltimore",
  "Baltimore Tech Week extends past 4MLK through independently hosted partner events. Confirmed events will be listed here. Several venues are still being explored.",
);

export default function AroundBaltimorePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Partner events"
        title="Around Baltimore"
        lede="Baltimore Tech Week extends beyond its central HQ through independently hosted community experiences around the city. General Admission and VIP do not automatically get you into every one of them."
      />
      <section className="border-b border-border">
        <div className="container grid gap-6 py-10 md:grid-cols-3">
          <p className="font-display text-2xl font-semibold tracking-tight md:col-span-2">{site.idea}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            HQ is {hq.venue}, {hq.street}. Everything else on this page is either confirmed and listed as a partner event, or still a conversation.
          </p>
        </div>
      </section>
      <section>
        <div className="container grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:py-16">
          <PartnerBoard />
          <aside className="h-fit border border-border p-6 lg:sticky lg:top-24">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">Map</p>
            <p className="mt-3 font-display text-2xl font-semibold tracking-tight">Venues, when they are real.</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A map will plot confirmed partner events. Until then, start at Tech Week HQ.
            </p>
            <a
              href={hq.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-11 items-center border border-foreground px-4 font-mono text-[0.68rem] uppercase tracking-[0.14em]"
            >
              Directions to 4MLK
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
