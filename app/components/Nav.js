"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/culture", label: "Culture" },
  { href: "/events", label: "Events" },
  { href: "/membership", label: "Membership" },
  { href: "/give", label: "Give" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo" aria-label="NCACS home">
          <img src="https://res.cloudinary.com/dksshweet/image/upload/v1778866815/logo_cyurqz.jpg" alt="NCACS logo" className="nav-logo-img" />
          <span className="nav-logo-text">NCACS</span>
        </Link>

        <nav>
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/give" className="nav-donate desktop-only">Donate</Link>
            </li>
          </ul>
        </nav>

        <Link href="/give" className="nav-donate" style={{ display: "none" }}>Donate</Link>

        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <div
        className={`nav-backdrop ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      />
      <aside className={`nav-mobile ${open ? "open" : ""}`} aria-hidden={!open}>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href}>{l.label}</Link>
        ))}
        <Link href="/give" className="nav-donate">Donate</Link>
      </aside>
    </header>
  );
}
