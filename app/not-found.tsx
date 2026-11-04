import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container py-24">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-7xl">That page is gone.</h1>
      <p className="mt-5 max-w-md text-lg text-muted-foreground">
        The week has a new shape. Start from the homepage, the schedule, or tickets.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="inline-flex h-12 items-center bg-accent px-5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground">
          Home
        </Link>
        <Link href="/schedule" className="inline-flex h-12 items-center border border-border px-5 font-mono text-xs uppercase tracking-[0.14em]">
          Schedule
        </Link>
      </div>
    </main>
  );
}
