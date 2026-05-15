import Link from "next/link";

export const metadata = {
  title: "NCACS — Ngemba Cultural Association of Colorado Springs",
  description:
    "A proud African cultural organization in Colorado Springs, fostering unity and strength through social engagement, networking, and collective growth.",
};

const COMMUNITY_PHOTOS = [
  { src: "/photos/community2.jpg", caption: "Community gathering" },
  { src: "/photos/community3.jpg", caption: "Cultural celebration" },
  { src: "/photos/community5.jpg", caption: "Honoring our heritage" },
  { src: "/photos/community6.jpg", caption: "Family unity" },
  { src: "/photos/community7.jpg", caption: "Members in traditional attire" },
];

const UPCOMING_EVENTS = [
  {
    day: "07",
    month: "Jun",
    title: "Monthly General Meeting",
    meta: "Saturday • 2:00 PM • Colorado Springs",
    body: "Our monthly gathering for members and prospective members to connect, plan, and grow together.",
  },
  {
    day: "16",
    month: "Aug",
    title: "Annual Cultural Celebration",
    meta: "Saturday • All Day • Colorado Springs",
    body: "A vibrant celebration of Ngemba heritage with food, music, dance, and the splendor of traditional attire.",
  },
  {
    day: "20",
    month: "Dec",
    title: "End of Year Celebration",
    meta: "Saturday Evening • Members and Family",
    body: "Our annual end-of-year gathering — mandatory for all members. A night of reflection, joy, and community.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-toghu top" aria-hidden="true" />
        <div className="hero-toghu bottom" aria-hidden="true" />
        <div className="hero-inner">
          <img
            src="/photos/logo.JPG"
            alt="NCACS logo"
            className="hero-logo"
          />
          <h1>Ngemba Cultural Association of Colorado Springs</h1>
          <p className="hero-tagline">
            Fostering Unity and Strength Through Social Engagement,
            Networking, and Collective Growth.
          </p>
          <div className="hero-buttons">
            <Link href="/membership" className="btn btn-primary">Join Us</Link>
            <a href="#welcome" className="btn btn-outline">Learn More</a>
          </div>
          <div className="hero-meta">Established 2025 — Colorado Springs, Colorado</div>
        </div>
      </section>

      {/* Welcome */}
      <section id="welcome" className="section">
        <div className="container">
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow">Akwaba — Welcome</span>
            <h2 className="section-title center">A Home Away From Home</h2>
            <p className="section-subtitle center">
              NCACS unites the Ngemba people of Colorado Springs and beyond —
              celebrating our roots in the highlands of Cameroon while building
              a vibrant, supportive community here in Colorado. Whether you are
              Ngemba by birth, by marriage, or by spirit, you belong with us.
            </p>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="stat-value">2025</div>
              <div className="stat-label">Established</div>
            </div>
            <div className="stat">
              <div className="stat-value">Colorado Springs</div>
              <div className="stat-label">Our Home in the U.S.</div>
            </div>
            <div className="stat">
              <div className="stat-value">Ngemba</div>
              <div className="stat-label">Our Shared Heritage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ background: "#0c0c0c" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="eyebrow">Our Foundation</span>
            <h2 className="section-title center">Vision, Mission, Values</h2>
          </div>

          <div className="grid grid-3">
            <article className="card">
              <h3>Our Vision</h3>
              <p>
                A united, thriving Ngemba diaspora — empowered by culture,
                bound by friendship, and engaged in the prosperity of both
                Colorado Springs and our ancestral homeland.
              </p>
            </article>
            <article className="card">
              <h3>Our Mission</h3>
              <p>
                To foster unity and strength among our members and the wider
                community through social engagement, professional networking,
                cultural preservation, and collective service.
              </p>
            </article>
            <article className="card">
              <h3>Our Values</h3>
              <p>
                Respect for tradition. Solidarity in hardship. Excellence in
                service. Generosity of spirit. Pride in our Ngemba identity
                and an open hand to all who walk with us.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Community Photos */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">In Pictures</span>
            <h2 className="section-title center">Our Community in Colorado Springs</h2>
            <p className="section-subtitle center">
              Moments of joy, tradition, and togetherness from our gatherings.
            </p>
          </div>

          <div className="photo-grid">
            {COMMUNITY_PHOTOS.map((p, i) => (
              <div className="photo-card" key={i}>
                <img src={p.src} alt={p.caption} loading="lazy" />
                <div className="photo-card-caption">{p.caption}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/gallery" className="btn btn-outline">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section" style={{ background: "#0c0c0c" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">Upcoming</span>
            <h2 className="section-title center">Events &amp; Gatherings</h2>
          </div>

          <div className="grid" style={{ gap: 16 }}>
            {UPCOMING_EVENTS.map((e, i) => (
              <article className="event-card" key={i}>
                <div className="event-date">
                  <div className="event-date-day">{e.day}</div>
                  <div className="event-date-month">{e.month}</div>
                </div>
                <div className="event-body">
                  <h3>{e.title}</h3>
                  <div className="event-meta">{e.meta}</div>
                  <p>{e.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/events" className="btn btn-outline">See All Events</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <span className="eyebrow">Join Us</span>
            <h2>Join the NCACS family.</h2>
            <p>
              Become a member, attend our gatherings, or help fund the
              charitable work we do in Colorado Springs and back home in
              Cameroon. Every hand strengthens the whole.
            </p>
            <div className="flex-buttons">
              <Link href="/membership" className="btn btn-primary">Become a Member</Link>
              <Link href="/give" className="btn btn-gold">Make a Donation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
