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
      <div className="editorial-flow">
        <section className="band-ink">
          <div className="week-wrap split">
            <h2 className="week-title">{site.idea}</h2>
            <div>
              <p className="week-lede">
                HQ is {hq.venue}, {hq.street}. Everything else on this page is either confirmed and listed as a partner event, or still a conversation.
              </p>
              <p className="week-lede">A map will plot confirmed partner events. Until then, start at Tech Week HQ.</p>
              <div className="week-actions">
                <a className="week-btn" href={hq.mapsUrl} target="_blank" rel="noreferrer">
                  Directions to 4MLK
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="band-paper">
          <div className="week-wrap">
            <PartnerBoard />
          </div>
        </section>
      </div>
    </main>
  );
}
