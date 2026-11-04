"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  exploringVenues,
  partnerEvents,
  partnerFilters,
  type PartnerFilter,
} from "@/lib/site";

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
      <div className="filter-row" role="tablist" aria-label="Filter partner events" style={{ marginTop: "1.75rem" }}>
        {partnerFilters.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "2.25rem" }}>
        <h2 className="week-title">Confirmed</h2>
        {events.length === 0 ? (
          <p className="week-lede">None yet. A confirmed event will show a time and a way to RSVP.</p>
        ) : (
          <ul className="venue-grid">
            {events.map((event) => (
              <li key={event.id} className="venue-card">
                <p className="status-tag">{event.category}</p>
                <h3>{event.name}</h3>
                <p>
                  {event.venue} · {event.neighborhood}
                </p>
                <p>
                  {event.date} · {event.time}
                </p>
                <p>{event.ticket}</p>
                {event.rsvpUrl ? (
                  <a className="week-btn" href={event.rsvpUrl} style={{ marginTop: "1rem" }}>
                    RSVP
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h2 className="week-title">Where the nights are headed</h2>
        <p className="week-lede">These rooms are in the plan. A time and a door go up when the night is real.</p>
        {venues.length === 0 ? (
          <p className="week-lede">Nothing in this category.</p>
        ) : (
          <ul className="venue-grid">
            {venues.map((venue) => (
              <li key={venue.id} id={venue.id} className="venue-card scroll-mt-24">
                <p className="status-tag">Being explored</p>
                <h3>{venue.name}</h3>
                <p>
                  {venue.focus} · {venue.neighborhood}
                </p>
                <p>{venue.address}</p>
              </li>
            ))}
          </ul>
        )}
        <div className="week-actions">
          <Link className="week-btn" href="/host">
            Host an event
          </Link>
        </div>
      </div>
    </div>
  );
}
