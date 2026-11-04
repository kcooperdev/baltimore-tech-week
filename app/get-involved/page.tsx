import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta, waysIn } from "@/lib/site";

export const metadata = pageMeta(
  "Get Involved",
  "Attend, speak, sponsor, exhibit, host, volunteer, or become an ambassador for Baltimore Tech Week 2027.",
);

export default function GetInvolvedPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Baltimore Tech Week 2027"
        title="Get involved"
        lede="Attend. Speak. Sponsor. Exhibit. Host. Volunteer. Or bring other people with you."
      />
      <div className="editorial-flow">
        <section className="band-paper">
          <div className="week-wrap">
            <ul className="path-list">
              {waysIn.map((way) => (
                <li key={way.href}>
                  <Link href={way.href}>
                    <strong>{way.title}</strong>
                    <span>{way.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
