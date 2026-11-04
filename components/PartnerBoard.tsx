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
      <div className="filter-row" role="tablist" aria-label="Filter partner events">
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

      <div style={{ marginTop: "2.5rem" }}>
        <p className="week-kicker">Confirmed</p>
        <h2 className="week-title week-title-wide">Partner events</h2>
        <p className="week-lede">
          {events.length === 0
            ? "None confirmed yet."
            : `${events.length} confirmed.`}
        </p>
        {events.length === 0 ? (
          <div className="coming" style={{ marginTop: "1.5rem" }}>
            <h3>Partner events coming soon.</h3>
            <p className="week-lede">
              Confirmed community-hosted experiences will show a venue, a time, and how to RSVP.
            </p>
          </div>
        ) : (
          <ul className="venue-grid">
            {events.map((event) => (
              <li key={event.id} className="venue-card">
                <p className="status-tag">Partner event · {event.category}</p>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <p>
                  {event.host} · {event.venue} · {event.neighborhood}
                </p>
                <p>
                  {event.date} · {event.time}
                </p>
                <p>
                  {event.capacity} · {event.ticket}
                </p>
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

      <div style={{ marginTop: "3.5rem" }}>
        <p className="week-kicker">Not confirmed</p>
        <h2 className="week-title week-title-wide">Locations being explored</h2>
        <p className="week-lede">
          These places are in conversation. Nothing below is a confirmed Tech Week event, time, or partnership.
        </p>
        {venues.length === 0 ? (
          <p className="week-lede">No locations in this category yet.</p>
        ) : (
          <ul className="venue-grid">
            {venues.map((venue) => (
              <li key={venue.id} className="venue-card">
                <p className="status-tag">Being explored</p>
                <h3>{venue.name}</h3>
                <p>
                  {venue.focus} · {venue.neighborhood}
                </p>
                <p>{venue.address}</p>
                <p>{venue.possible.join(" · ")}</p>
              </li>
            ))}
          </ul>
        )}
        <div className="week-actions">
          <Link className="week-btn" href="/host">
            Host an Event
          </Link>
        </div>
      </div>
    </div>
  );
}
