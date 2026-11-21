import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { EVENTS_2026, FLYER_SRC } from "./eventsData";

export const metadata = {
  title: "Events",
  description:
    "Upcoming NCACS gatherings — monthly meetings, the Annual General Assembly, our cultural celebrations, the End of Year Cultural Night, and charitable engagements.",
};

const FLYER_AVAILABLE = fs.existsSync(path.join(process.cwd(), "public", FLYER_SRC));

const smallBtn = { minHeight: 40, padding: "8px 20px", fontSize: 14 };

export default function EventsPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Gather With Us</span>
          <h1>Events &amp; Gatherings</h1>
          <p>
            The rhythm of our shared life — monthly meetings, the Annual
            General Assembly, the cultural celebration, charitable service,
            and the End of Year Cultural Night.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3" style={{ marginBottom: 56 }}>
            <article className="card">
              <h3>Monthly Meetings</h3>
              <p>
                Held monthly, open to all members and prospective members.
                Where the work of the association gets done.
              </p>
            </article>
            <article className="card">
              <h3>Annual General Assembly</h3>
              <p>
                Once per year. Our formal review of finances, officers,
                and the year ahead. Attendance strongly encouraged.
              </p>
            </article>
            <article className="card">
              <h3>End of Year Cultural Night</h3>
              <p>
                Every December. Mandatory for all members. A night of
                food, dance, and gratitude.
              </p>
            </article>
            <article className="card">
              <h3>Cultural Events</h3>
              <p>
                Annual Cultural Celebration and other heritage gatherings
                throughout the year. Family and friends welcome.
              </p>
            </article>
            <article className="card">
              <h3>Charitable Engagements</h3>
              <p>
                A minimum of two community service engagements per year —
                here in Colorado Springs and supporting causes back home.
              </p>
            </article>
            <article className="card">
              <h3>Member Care</h3>
              <p>
                When a member celebrates or grieves, the association
                shows up. Births, weddings, bereavements — we are present.
              </p>
            </article>
          </div>

          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="eyebrow">Upcoming</span>
            <h2 className="section-title center">2026 Calendar</h2>
          </div>

          <div className="grid" style={{ gap: 16 }}>
            {EVENTS_2026.map((e) => (
              <article className="event-card" key={e.id} id={e.id}>
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

                  {e.hasFlyer && FLYER_AVAILABLE && (
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
                    {e.hasFlyer && FLYER_AVAILABLE && (
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
        </div>
      </section>
    </>
  );
}
