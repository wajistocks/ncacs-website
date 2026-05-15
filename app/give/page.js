export const metadata = {
  title: "Give",
  description:
    "Support the mission of NCACS — funding charitable initiatives in Colorado Springs and development projects in the Ngemba homeland in Cameroon.",
};

const FOCUS_AREAS = [
  {
    title: "Colorado Springs Community",
    body: "Funding food security drives, support for Ngemba families navigating hardship, scholarships for our youth, and contributions to wider Colorado Springs community causes alongside our service.",
    icon: "⛰️",
  },
  {
    title: "Ngemba Race in Cameroon",
    body: "Investing in development projects across the Ngemba homeland — supporting schools, clean water, health initiatives, and the cultural institutions that have shaped us.",
    icon: "🌍",
  },
];

const IMPACTS = [
  { amount: "$50", body: "Supplies a Colorado Springs family with a hot meal during the holidays." },
  { amount: "$200", body: "Equals one Adult Member contribution — sustains our operations for a year." },
  { amount: "$500", body: "Funds books and uniforms for a child in a Ngemba village school." },
  { amount: "$1,000", body: "Underwrites a charitable engagement or a community service initiative." },
];

export default function GivePage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Generosity</span>
          <h1>Support Our Mission</h1>
          <p>
            Your gift strengthens two communities at once — our Ngemba family
            here in Colorado Springs and our brothers and sisters back home
            in the Bamenda Highlands.
          </p>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-section" style={{ maxWidth: 780, margin: "0 auto" }}>
            <span className="eyebrow">Give Today</span>
            <h2>Every Gift Matters</h2>
            <p>
              Whether you give once or monthly, your generosity directly funds
              the charitable and cultural work of NCACS.
            </p>
            <div className="flex-buttons">
              <a
                href="https://donate.stripe.com/placeholder"
                className="btn btn-gold"
                style={{ fontSize: "1.05rem", padding: "16px 36px" }}
                rel="noopener noreferrer"
              >
                ♥ Donate Now
              </a>
              <a
                href="https://donate.stripe.com/placeholder"
                className="btn btn-outline"
                rel="noopener noreferrer"
              >
                Give Monthly
              </a>
            </div>
            <p style={{ marginTop: 24, color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Secure giving powered by Stripe.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section" style={{ background: "#0c0c0c" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">Where Your Gift Goes</span>
            <h2 className="section-title center">Two Communities, One Heart</h2>
          </div>
          <div className="grid grid-2">
            {FOCUS_AREAS.map((f) => (
              <article className="card" key={f.title}>
                <div style={{ fontSize: "2.5rem", marginBottom: 16 }} aria-hidden="true">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">Impact</span>
            <h2 className="section-title center">What Your Giving Funds</h2>
          </div>
          <div className="grid grid-4">
            {IMPACTS.map((i) => (
              <article className="card" key={i.amount} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", color: "var(--gold)", marginBottom: 12 }}>
                  {i.amount}
                </div>
                <p>{i.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section" style={{ background: "#0c0c0c" }}>
        <div className="container">
          <article className="prose" style={{ textAlign: "center" }}>
            <h2>Transparency &amp; Trust</h2>
            <p>
              In accordance with our bylaws, NCACS maintains a clear and
              accountable record of all funds raised and spent. Our Treasurer
              and Auditor are charged with safeguarding member contributions
              and donations alike. A financial report is presented at the
              Annual General Assembly, and is available to members upon request.
            </p>
            <p>
              Funds are dedicated exclusively to the eight objectives set out
              in our bylaws — culture, community, member care, charity at
              home and abroad. No member or officer profits from association
              funds.
            </p>
          </article>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a
              href="https://donate.stripe.com/placeholder"
              className="btn btn-gold"
              rel="noopener noreferrer"
            >
              Make a Gift
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
