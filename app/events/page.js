import fs from "node:fs";
import path from "node:path";
import { FLYER_SRC } from "./eventsData";
import EventsCalendar from "./EventsCalendar";

export const metadata = {
  title: "Events",
  description:
    "Upcoming NCACS gatherings — monthly meetings, the Annual General Assembly, our cultural celebrations, the End of Year Cultural Night, and charitable engagements.",
};

const FLYER_AVAILABLE = fs.existsSync(path.join(process.cwd(), "public", FLYER_SRC));

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

          <EventsCalendar flyerAvailable={FLYER_AVAILABLE} />
        </div>
      </section>
    </>
  );
}
