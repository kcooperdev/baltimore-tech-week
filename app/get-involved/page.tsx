import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { pageMeta, waysIn } from "@/lib/site";

export const metadata = pageMeta(
  "Get Involved",
  "Attend, speak, sponsor, exhibit, host, volunteer, or tell people about Baltimore Tech Week 2027.",
);

export default function GetInvolvedPage() {
  return (
    <main className="plain-page">
      <PageHeader eyebrow="Pick one" title="Get involved" lede="Pick a way in. A person writes back." />
      <div className="plain-body">
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
      </div>
    </main>
  );
}
