import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { PartnerBoard } from "@/components/PartnerBoard";
import { hq, pageMeta, site } from "@/lib/site";

export const metadata = pageMeta(
  "Around Baltimore",
  "Partner events around Baltimore during Tech Week. Nothing is listed as confirmed until the venue, time, and RSVP are set.",
);

export default function AroundBaltimorePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Not confirmed yet"
        title="Around Baltimore"
        lede="The week also happens outside 4MLK. A pass does not get you into every one of these."
      >
        <Link className="week-btn" href="/host">
          Host an event
        </Link>
      </PageHeader>
      <div className="editorial-flow">
        <section className="band-paper">
          <div className="week-wrap">
            <p className="week-lede">
              HQ is {hq.venue}, {hq.street}. {site.datesNote}.
            </p>
            <PartnerBoard />
          </div>
        </section>
      </div>
    </main>
  );
}
