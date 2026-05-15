export const metadata = {
  title: "Contact",
  description:
    "Get in touch with the Ngemba Cultural Association of Colorado Springs — for membership inquiries, partnerships, or general questions.",
};

const FAQS = [
  {
    q: "How do I join NCACS?",
    a: "Visit our Membership page and complete the application form. Your application will be reviewed by the Membership Admissions Committee within 30 days, after which you will be invited to your first General Meeting.",
  },
  {
    q: "What are the dues?",
    a: "Adult Membership is $200 per year. Dependents (ages 0–17) under an Adult Member are free. Honorary Membership is conferred by invitation only.",
  },
  {
    q: "Who is eligible to join?",
    a: "Persons of Ngemba origin (Bafut, Mankon, Bambili, Awing, Pinyin, Mendankwe-Nkwen, and related villages), spouses of Ngemba members, and persons of strong association with the Ngemba community are all welcome to apply.",
  },
  {
    q: "When and where do you meet?",
    a: "We hold monthly General Meetings, typically on a Saturday afternoon. Meeting locations rotate among member residences and community venues across Colorado Springs. Specific dates and locations are shared with members via our communications channels.",
  },
  {
    q: "Can my family attend events?",
    a: "Absolutely. Many of our cultural events, the Annual Cultural Celebration, family picnics, and the End of Year Celebration are explicitly family-oriented. Children and spouses are always welcome.",
  },
  {
    q: "How are donations used?",
    a: "Donations fund the two core charitable arms of NCACS — community service in Colorado Springs and development support for the Ngemba homeland in Cameroon — alongside our cultural programming. A financial report is presented annually at the General Assembly.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Reach Us</span>
          <h1>Get In Touch</h1>
          <p>
            We would love to hear from you — whether you are interested in
            membership, planning a partnership, or simply curious about the
            Ngemba community in Colorado Springs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gap: 40, gridTemplateColumns: "1fr", maxWidth: 1080, margin: "0 auto" }}>
            <form className="form" action="#" method="post">
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", marginBottom: 20 }}>Send Us a Message</h2>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="cname">Name</label>
                  <input id="cname" name="name" type="text" required placeholder="Your name" />
                </div>
                <div className="form-field">
                  <label htmlFor="cemail">Email</label>
                  <input id="cemail" name="email" type="email" required placeholder="you@example.com" />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="csubject">Subject</label>
                <input id="csubject" name="subject" type="text" required placeholder="How can we help?" />
              </div>

              <div className="form-field">
                <label htmlFor="cmessage">Message</label>
                <textarea id="cmessage" name="message" required placeholder="Your message…" />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                Send Message
              </button>
            </form>

            <div className="grid grid-3">
              <article className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>📍</div>
                <h3>Location</h3>
                <p>Colorado Springs, Colorado<br />United States</p>
              </article>
              <article className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>✉️</div>
                <h3>General Inquiries</h3>
                <p><a href="mailto:hello@ncacs.org" style={{ color: "var(--gold)" }}>hello@ncacs.org</a></p>
              </article>
              <article className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>🌐</div>
                <h3>Find Us Online</h3>
                <p>
                  <a href="#" style={{ color: "var(--gold)", marginRight: 16 }}>Facebook</a>
                  <a href="#" style={{ color: "var(--gold)" }}>Instagram</a>
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#0c0c0c" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">Common Questions</span>
            <h2 className="section-title center">Frequently Asked</h2>
          </div>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            {FAQS.map((f, i) => (
              <details className="faq-item" key={i}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
