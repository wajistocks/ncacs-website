export const metadata = {
  title: "Membership",
  description:
    "Join the Ngemba Cultural Association of Colorado Springs. Adult, Dependent, and Honorary membership tiers — apply today.",
};

const TIERS = [
  {
    name: "Adult Member",
    price: "$200",
    period: "per year",
    featured: false,
    benefits: [
      "Full voting rights at General Assembly",
      "Eligible to hold office",
      "Member care during celebrations and bereavements",
      "Invitations to all member events",
      "Mandatory attendance at End of Year Celebration",
      "Participation in charitable engagements",
    ],
  },
  {
    name: "Adult Member (Family)",
    price: "$200",
    period: "per year",
    featured: true,
    badge: "Most Popular",
    benefits: [
      "All Adult Member benefits",
      "Dependents (ages 0–17) included free",
      "Family member care and recognition",
      "Children invited to cultural events",
      "Strong voice in shaping the future",
    ],
  },
  {
    name: "Dependent Member",
    price: "Free",
    period: "ages 0–17",
    featured: false,
    benefits: [
      "Under an active Adult Member",
      "Welcome at all family-friendly events",
      "Cultural events and youth programs",
      "Member care recognition",
      "Pathway to Adult Membership at 18",
    ],
  },
  {
    name: "Honorary Member",
    price: "By Invitation",
    period: "lifetime",
    featured: false,
    benefits: [
      "Conferred by the Executive Committee",
      "Recognition of significant contribution",
      "Lifetime standing in the association",
      "Welcome at all NCACS events",
      "Voice — without obligation to office",
    ],
  },
];

const STEPS = [
  {
    n: "1",
    title: "Submit Your Application",
    body: "Complete the application form below with your details, village of origin, and a brief note about your interest in joining.",
  },
  {
    n: "2",
    title: "Welcome Conversation",
    body: "A member of the Membership Admissions Committee will reach out within 14 days to welcome you and answer any questions.",
  },
  {
    n: "3",
    title: "Review by the Committee",
    body: "Applications are formally reviewed by the Membership Admissions Committee, who deliberate within 30 days of receipt.",
  },
  {
    n: "4",
    title: "Induction",
    body: "Upon approval, you will be invited to your first General Meeting and formally inducted into the NCACS family.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Belonging</span>
          <h1>Join the NCACS Family</h1>
          <p>
            Whether you are Ngemba by birth, by marriage, or by spirit —
            there is a place for you at our table. Three pathways to membership,
            one welcoming community.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 28 }}>
            {TIERS.map((t) => (
              <div key={t.name} className={`tier-card ${t.featured ? "featured" : ""}`}>
                {t.badge && <div className="tier-badge">{t.badge}</div>}
                <h3 className="tier-name">{t.name}</h3>
                <div className="tier-price">{t.price}</div>
                <div className="tier-period">{t.period}</div>
                <ul className="tier-benefits">
                  {t.benefits.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <a href="#apply" className={`btn ${t.featured ? "btn-primary" : "btn-outline"}`}>
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="section" style={{ background: "#0c0c0c" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">The Process</span>
            <h2 className="section-title center">How to Apply</h2>
          </div>
          <div className="grid grid-4">
            {STEPS.map((s) => (
              <article className="card" key={s.n} style={{ textAlign: "center" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: "var(--orange)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px",
                  fontFamily: "var(--serif)", fontSize: "1.5rem", color: "#fff", fontWeight: 700,
                }}>
                  {s.n}
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">Apply Now</span>
            <h2 className="section-title center">Membership Application</h2>
            <p className="section-subtitle center">
              Take the first step toward joining the NCACS family.
            </p>
          </div>

          <form className="form" action="#" method="post">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" required placeholder="Your full name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" />
              </div>
              <div className="form-field">
                <label htmlFor="village">Village of Origin</label>
                <select id="village" name="village" required defaultValue="">
                  <option value="" disabled>Select your village</option>
                  <option>Bafut</option>
                  <option>Mankon</option>
                  <option>Bambili</option>
                  <option>Awing</option>
                  <option>Pinyin</option>
                  <option>Mendankwe-Nkwen</option>
                  <option>Other Ngemba village</option>
                  <option>Family ties / by marriage</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="dob">Date of Birth</label>
                <input id="dob" name="dob" type="date" />
              </div>
              <div className="form-field">
                <label htmlFor="referral">How did you hear about us?</label>
                <input id="referral" name="referral" type="text" placeholder="A friend, an event, online…" />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Brief Note</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us a little about yourself and why you wish to join NCACS."
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              Submit Application
            </button>

            <p className="form-note">
              Applications are reviewed by the Membership Admissions Committee
              within 30 days of receipt.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
