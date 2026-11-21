"use client";

import Link from "next/link";
import { useUpcomingEvents } from "../events/useUpcomingEvents";

export default function NextEvents() {
  const events = useUpcomingEvents();
  const heading =
    events.length === 2 ? "Our Next Two Events" : events.length === 1 ? "Our Next Event" : "Upcoming Events";

  return (
    <section className="section next-events" aria-labelledby="next-events-title">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="eyebrow">Join Us</span>
          <h2 id="next-events-title" className="section-title center">{heading}</h2>
        </div>

        {events.length === 0 ? (
          <p className="events-empty">More events coming soon.</p>
        ) : (
          <div className={`next-events-grid${events.length === 1 ? " single" : ""}`}>
            {events.map((e) => (
              <Link href={`/events#${e.id}`} className="next-event-card" key={e.id}>
                <div className="next-event-date" aria-hidden="true">
                  <span className="next-event-month">{e.month}</span>
                  <span className="next-event-day">{e.day}</span>
                  <span className="next-event-year">{e.year}</span>
                </div>
                <div className="next-event-body">
                  <h3>{e.title}</h3>
                  <p className="next-event-when">
                    {e.weekday}, {e.month} {Number(e.day)}, {e.year} · {e.time}
                  </p>
                  <p className="next-event-where">
                    <span aria-hidden="true">📍</span>{" "}
                    <span>
                      <strong>{e.venue}</strong>
                      <br />
                      {e.address}
                    </span>
                  </p>
                  <p className="next-event-note">{e.note}</p>
                  <span className="btn btn-gold next-event-btn">View Details</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link href="/events" className="btn btn-outline">See All Events</Link>
        </div>
      </div>
    </section>
  );
}
