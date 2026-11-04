import Link from "next/link";
import { hq, pillars, schedule, site, type ScheduleItem } from "@/lib/site";

function Item({ item }: { item: ScheduleItem | undefined }) {
  if (!item) {
    return <p className="mt-3 text-sm text-muted-foreground">Nothing posted yet.</p>;
  }
  return (
    <div className="mt-3">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">{item.time}</p>
      <p className="mt-1 font-display text-xl font-semibold tracking-tight">{item.title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{item.venue}</p>
    </div>
  );
}

function List({ items }: { items: ScheduleItem[] }) {
  if (items.length === 0) {
    return <p className="mt-3 text-sm text-muted-foreground">Nothing posted yet.</p>;
  }
  return (
    <ul className="mt-3 space-y-3">
      {items.map((item) => (
        <li key={item.id}>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">{item.time}</p>
          <p className="font-display text-lg font-semibold tracking-tight">{item.title}</p>
          <p className="text-sm text-muted-foreground">{item.venue}</p>
        </li>
      ))}
    </ul>
  );
}

export function LivePortal() {
  const day = pillars.find((pillar) => pillar.id === site.liveDay) ?? pillars[0];
  const today = schedule.filter((item) => item.day === day.id);

  return (
    <section className="border-b border-border bg-card/40" aria-label="Happening during Tech Week">
      <div className="container py-8 md:py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Today · {day.day}</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">{day.name}</h2>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href={`/schedule#${day.id}`} className="underline underline-offset-4">
              View today&apos;s schedule
            </Link>
            <a href={hq.mapsUrl} className="underline underline-offset-4" target="_blank" rel="noreferrer">
              Directions to 4MLK
            </a>
          </div>
        </div>
        <div className="mt-6 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          <article className="bg-background p-5">
            <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent">Happening now</h3>
            <Item item={today[0]} />
          </article>
          <article className="bg-background p-5">
            <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.16em]">Up next</h3>
            <Item item={today[1]} />
          </article>
          <article className="bg-background p-5">
            <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.16em]">At 4MLK</h3>
            <List items={today.filter((item) => item.place === "hq")} />
          </article>
          <article className="bg-background p-5">
            <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.16em]">Around Baltimore</h3>
            <List items={today.filter((item) => item.place === "partner")} />
            <Link href="/around-baltimore" className="mt-4 inline-block text-sm underline underline-offset-4">
              Partner events
            </Link>
          </article>
          <article className="bg-background p-5 sm:col-span-2 lg:col-span-1">
            <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.16em]">Tonight</h3>
            <List items={today.filter((item) => item.part === "evening")} />
          </article>
        </div>
      </div>
    </section>
  );
}
