import Link from "next/link";

export const metadata = {
  title: "Events",
  description:
    "Upcoming NCACS gatherings — monthly meetings, the Annual General Assembly, our cultural celebrations, the End of Year Celebration, and charitable engagements.",
};

const EVENTS = [
  {
    day: "07",
    month: "Jun",
    title: "Monthly General Meeting",
    meta: "Saturday • 2:00 PM • Colorado Springs",
    location: "Member's residence — RSVP for address",
    body: "Our regular monthly gathering. We review association business, plan upcoming events, welcome new members, and share a meal together. Open to all members and prospective members.",
  },
  {
    day: "12",
    month: "Jul",
    title: "Summer Family Picnic",
    meta: "Saturday • 11:00 AM • Colorado Springs",
    location: "Memorial Park, Colorado Springs",
    body: "A relaxed summer afternoon for our families — children's games, food off the grill, music, and time to enjoy each other's company outside of formal gatherings.",
  },
  {
    day: "02",
    month: "Aug",
    title: "Monthly General Meeting",
    meta: "Saturday • 2:00 PM • Colorado Springs",
    location: "Member's residence — RSVP for address",
    body: "Monthly gathering with a focus on planning the Annual Cultural Celebration.",
  },
  {
    day: "16",
    month: "Aug",
    title: "Annual Cultural Celebration",
    meta: "Saturday • All Day • Colorado Springs",
    location: "Community venue (TBA)",
    body: "Our flagship annual celebration of Ngemba heritage. Traditional attire, drumming, dance, the unveiling of cultural displays, and a feast of Achu and other beloved dishes. Family and friends warmly welcomed.",
  },
  {
    day: "11",
    month: "Oct",
    title: "Annual General Assembly",
    meta: "Saturday • 1:00 PM • Colorado Springs",
    location: "Community venue (TBA)",
    body: "Our annual statutory assembly. Review of the year's work, financial report, election and reaffirmation of officers, and adoption of the year's strategic priorities. Attendance is strongly encouraged.",
  },
  {
    day: "08",
    month: "Nov",
    title: "Charitable Engagement",
    meta: "Saturday Morning • Colorado Springs",
    location: "Marian House Soup Kitchen",
    body: "One of our minimum two yearly charitable engagements serving the Colorado Springs community. All members and family encouraged to join.",
  },
  {
    day: "20",
    month: "Dec",
    title: "End of Year Celebration",
    meta: "Saturday Evening • Members and Families",
    location: "Reserved community hall (TBA)",
    body: "Our most cherished gathering of the year — a night of food, dance, gratitude, and the formal recognition of milestones. Mandatory for all members per our bylaws.",
  },
];

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
            and the great End of Year gathering.
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
              <h3>End of Year Celebration</h3>
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
            <h2 className="section-title center">2025 Calendar</h2>
          </div>

          <div className="grid" style={{ gap: 16 }}>
            {EVENTS.map((e, i) => (
              <article className="event-card" key={i}>
                <div className="event-date">
                  <div className="event-date-day">{e.day}</div>
                  <div className="event-date-month">{e.month}</div>
                </div>
                <div className="event-body">
                  <h3>{e.title}</h3>
                  <div className="event-meta">{e.meta}</div>
                  <p>{e.body}</p>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: 12 }}>
                    📍 {e.location}
                  </div>
                  <Link href="/contact" className="btn btn-outline" style={{ minHeight: 40, padding: "8px 20px", fontSize: 14 }}>
                    RSVP
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
