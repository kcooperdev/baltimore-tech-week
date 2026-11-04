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
      <section>
        <div className="container py-6 pb-20">
          <ul className="divide-y divide-border border-y border-border">
            {waysIn.map((way) => (
              <li key={way.href}>
                <Link href={way.href} className="grid gap-2 py-7 md:grid-cols-12 md:items-baseline">
                  <span className="font-display text-3xl font-semibold tracking-tight md:col-span-4">{way.title}</span>
                  <span className="text-muted-foreground md:col-span-8">{way.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
