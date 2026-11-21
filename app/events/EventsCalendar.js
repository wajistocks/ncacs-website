"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FLYER_SRC } from "./eventsData";
import { useUpcomingEvents } from "./useUpcomingEvents";

const smallBtn = { minHeight: 40, padding: "8px 20px", fontSize: 14 };

// Scrolls to the card named in the URL hash and briefly highlights it.
function useHashHighlight(ready) {
  const [highlighted, setHighlighted] = useState(null);

  useEffect(() => {
    if (!ready) return;
    let clearTimer;
    function apply() {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const el = id && document.getElementById(id);
      if (!el || !el.classList.contains("event-card")) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      });
      requestAnimationFrame(() => setHighlighted(id));
      clearTimeout(clearTimer);
      clearTimer = setTimeout(() => setHighlighted(null), 2600);
    }
    apply();
    window.addEventListener("hashchange", apply);
    return () => {
      window.removeEventListener("hashchange", apply);
      clearTimeout(clearTimer);
    };
  }, [ready]);

  return highlighted;
}

export default function EventsCalendar({ flyerAvailable }) {
  const events = useUpcomingEvents();
  const highlighted = useHashHighlight(events.length > 0);

  if (events.length === 0) {
    return <p className="events-empty">More events coming soon.</p>;
  }

  return (
      <div className="grid" style={{ gap: 16 }}>
        {events.map((e) => (
          <article
            className={`event-card${highlighted === e.id ? " is-highlighted" : ""}`}
            key={e.id}
            id={e.id}
          >
            <div className="event-date">
              <div className="event-date-day">{e.day}</div>
              <div className="event-date-month">{e.month}</div>
              <div className="event-date-year">{e.year}</div>
            </div>
            <div className="event-body">
              <h3>{e.title}</h3>
              <div className="event-meta">{e.meta}</div>
              {e.tagline && <p className="event-tagline">{e.tagline}</p>}
              {e.body && <p>{e.body}</p>}

              <div className="event-location">
                <span aria-hidden="true">📍</span>
                <span>
                  <strong>{e.venue}</strong>
                  <br />
                  {e.address}
                </span>
              </div>

              {e.tickets && (
                <div className="event-tickets">
                  <h4>Tickets</h4>
                  <ul>
                    {e.tickets.map((t) => (
                      <li key={t.name}>
                        <div className="event-ticket-head">
                          <span>{t.name}</span>
                          <span className="event-ticket-price">{t.price}</span>
                        </div>
                        <div className="event-ticket-detail">{t.detail}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {e.dressCode && (
                <p className="event-dress">
                  <strong>Dress code:</strong> {e.dressCode}
                </p>
              )}

              {e.hasFlyer && flyerAvailable && (
                <a href={FLYER_SRC} target="_blank" rel="noopener noreferrer" className="event-flyer">
                  <img
                    src={FLYER_SRC}
                    alt={`${e.title} flyer`}
                    loading="lazy"
                  />
                </a>
              )}

              <div className="event-actions">
                <a
                  href={e.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={smallBtn}
                >
                  Get Directions
                </a>
                {e.hasFlyer && flyerAvailable && (
                  <a
                    href={FLYER_SRC}
                    download="NCACS-End-of-Year-Cultural-Night-Flyer.jpg"
                    className="btn btn-outline"
                    style={smallBtn}
                  >
                    Download Flyer
                  </a>
                )}
                {e.ticketsCta && (
                  <Link href="/contact" className="btn btn-gold" style={smallBtn}>
                    Contact Us for Tickets
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
  );
}
