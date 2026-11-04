"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  exploringVenues,
  partnerEvents,
  partnerFilters,
  type PartnerFilter,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export function PartnerBoard() {
  const [filter, setFilter] = useState<PartnerFilter>("All");

  const events = useMemo(
    () => (filter === "All" ? partnerEvents : partnerEvents.filter((event) => event.category === filter)),
    [filter],
  );

  const venues = useMemo(
    () =>
      filter === "All"
        ? exploringVenues
        : exploringVenues.filter((venue) => venue.categories.includes(filter)),
    [filter],
  );

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filter partner events">
        {partnerFilters.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={filter === item}
            onClick={() => setFilter(item)}
            className={cn(
              "shrink-0 border px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em]",
              filter === item
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Partner events</h2>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
            {events.length} confirmed
          </p>
        </div>
        {events.length === 0 ? (
          <div className="mt-4 border border-dashed border-border px-6 py-10">
            <p className="font-display text-2xl font-semibold tracking-tight">Partner events coming soon.</p>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Confirmed community-hosted experiences will show up here with the venue, time, and how to RSVP.
            </p>
          </div>
        ) : (
          <ul className="mt-4 grid gap-4 lg:grid-cols-2">
            {events.map((event) => (
              <li key={event.id} className="flex flex-col border border-border bg-card p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="border border-accent px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-accent">
                    Partner event
                  </span>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {event.category}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{event.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
                <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                  <div>
                    <dt className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">Host</dt>
                    <dd>{event.host}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">Venue</dt>
                    <dd>{event.venue}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">Neighborhood</dt>
                    <dd>{event.neighborhood}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">When</dt>
                    <dd>
                      {event.date}
                      <br />
                      {event.time}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">Capacity</dt>
                    <dd>{event.capacity}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">Tickets</dt>
                    <dd>{event.ticket}</dd>
                  </div>
                </dl>
                {event.rsvpUrl ? (
                  <a
                    href={event.rsvpUrl}
                    className="mt-6 inline-flex h-11 items-center justify-center bg-foreground px-4 font-mono text-xs uppercase tracking-[0.14em] text-background"
                  >
                    RSVP
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-14">
        <h2 className="font-display text-3xl font-semibold tracking-tight">Locations being explored</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
          These places are in conversation. Nothing below is a confirmed Tech Week event, time, or partnership.
        </p>
        {venues.length === 0 ? (
          <p className="mt-6 text-muted-foreground">No locations in this category yet.</p>
        ) : (
          <ul className="mt-6 grid gap-4 lg:grid-cols-3">
            {venues.map((venue) => (
              <li key={venue.id} className="flex flex-col border border-border p-6">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-accent">Being explored</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{venue.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {venue.neighborhood}
                  <span className="px-1.5">·</span>
                  {venue.address}
                </p>
                <p className="mt-4 font-display text-lg font-semibold">{venue.focus}</p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {venue.possible.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
        <Link
          href="/host"
          className="mt-8 inline-flex h-12 items-center bg-accent px-5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground hover:bg-accent/90"
        >
          Host an Event
        </Link>
      </div>
    </div>
  );
}
