import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="https://res.cloudinary.com/dksshweet/image/upload/v1778866815/logo_cyurqz.jpg" alt="NCACS logo" />
              <div>
                <div className="footer-brand-text">NCACS</div>
                <div style={{ color: "var(--gold)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>Est. 2025</div>
              </div>
            </div>
            <p className="footer-motto">
              Fostering Unity and Strength Through Social Engagement,
              Networking, and Collective Growth.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/leadership">Leadership</Link></li>
              <li><Link href="/culture">Culture</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4>Engage</h4>
            <ul>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/membership">Membership</Link></li>
              <li><Link href="/give">Give</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li style={{ color: "var(--text-soft)" }}>Colorado Springs, CO</li>
              <li><a href="mailto:hello@ncacs.org">hello@ncacs.org</a></li>
              <li><a href="#" aria-label="Facebook">Facebook</a></li>
              <li><a href="#" aria-label="Instagram">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 Ngemba Cultural Association of Colorado Springs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
