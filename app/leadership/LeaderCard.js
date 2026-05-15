"use client";

import { useEffect, useState } from "react";

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-3.31 0-8 1.67-8 5v1a1 1 0 001 1h14a1 1 0 001-1v-1c0-3.33-4.69-5-8-5z" />
  </svg>
);

const HONORIFICS = /^(Lt\s*Col|Lt|Col|Mr\.?|Mrs\.?|Ms\.?|Dr\.?|Prof\.?|Hon\.?|Rev\.?)\s+/i;

function getInitials(name) {
  if (!name) return "?";
  let stripped = name;
  while (HONORIFICS.test(stripped)) {
    stripped = stripped.replace(HONORIFICS, "");
  }
  const parts = stripped.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function LeaderCard({ name, title, photo, bio, duties }) {
  const [open, setOpen] = useState(false);
  const isPlaceholder = name === "To be announced";
  const initials = getInitials(name);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleOpen = () => {
    if (isPlaceholder) return;
    setOpen(true);
  };

  return (
    <>
      <article
        className={`leader-card ${isPlaceholder ? "" : "leader-card-clickable"}`}
        onClick={handleOpen}
        role={isPlaceholder ? undefined : "button"}
        tabIndex={isPlaceholder ? undefined : 0}
        aria-haspopup={isPlaceholder ? undefined : "dialog"}
        onKeyDown={(e) => {
          if (isPlaceholder) return;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpen();
          }
        }}
      >
        <div className="leader-photo">
          {photo ? (
            <img src={photo} alt={name} loading="lazy" />
          ) : isPlaceholder ? (
            <PersonIcon />
          ) : (
            <span className="leader-initials">{initials}</span>
          )}
        </div>
        <h3 className="leader-name">{name}</h3>
        <div className="leader-title">{title}</div>
        {!isPlaceholder && (
          <div className="leader-expand-hint" aria-hidden="true">
            View profile →
          </div>
        )}
      </article>

      {open && (
        <div
          className="leader-modal"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${name} profile`}
        >
          <div
            className="leader-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="leader-modal-close"
              onClick={() => setOpen(false)}
              aria-label="Close profile"
              type="button"
            >
              ✕
            </button>

            <div className="leader-modal-header">
              <div className="leader-modal-photo">
                {photo ? (
                  <img src={photo} alt={name} />
                ) : (
                  <span className="leader-initials leader-initials-lg">
                    {initials}
                  </span>
                )}
              </div>
              <div className="leader-modal-titles">
                <h2 className="leader-modal-name">{name}</h2>
                <div className="leader-modal-title">{title}</div>
              </div>
            </div>

            <div className="leader-modal-body">
              {bio && (
                <section className="leader-modal-section">
                  <h3>Biography</h3>
                  <p>{bio}</p>
                </section>
              )}

              {duties && duties.length > 0 && (
                <section className="leader-modal-section">
                  <h3>Duties &amp; Responsibilities</h3>
                  <ul className="leader-modal-duties">
                    {duties.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
