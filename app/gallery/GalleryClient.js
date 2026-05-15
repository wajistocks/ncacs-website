"use client";

import { useState, useEffect } from "react";

const CULTURAL_MOMENTS_CAPTION =
  "Celebrating Ngemba heritage and community unity in Colorado Springs.";

const PHOTOS = [
  {
    src: "/photos/community2.jpg",
    caption: CULTURAL_MOMENTS_CAPTION,
    category: "cultural",
    badge: "Cultural Moments",
  },
  {
    src: "/photos/community3.jpg",
    caption: CULTURAL_MOMENTS_CAPTION,
    category: "cultural",
    badge: "Cultural Moments",
  },
  {
    src: "/photos/community5.jpg",
    caption: CULTURAL_MOMENTS_CAPTION,
    category: "cultural",
    badge: "Cultural Moments",
  },
  {
    src: "/photos/community6.jpg",
    caption: CULTURAL_MOMENTS_CAPTION,
    category: "cultural",
    badge: "Cultural Moments",
  },
  { src: "/photos/community7.jpg", caption: "Royal robes", category: "attire" },
  { src: "/photos/community8.jpg", caption: "Traditional dance", category: "cultural" },
  { src: "/photos/community9.jpg", caption: "Embroidered attire", category: "attire" },
  { src: "/photos/community10.jpg", caption: "Community elders", category: "gatherings" },
  { src: "/photos/community11.jpg", caption: "Cultural display", category: "cultural" },
  { src: "/photos/community12.jpg", caption: "Members together", category: "gatherings" },
  { src: "/photos/community13.jpeg", caption: "Drumming and song", category: "cultural" },
  { src: "/photos/community14.jpeg", caption: "In our colors", category: "attire" },
  { src: "/photos/community15.jpeg", caption: "Joyful gathering", category: "gatherings" },
  { src: "/photos/community16.JPG", caption: "Ngemba family", category: "gatherings" },
  { src: "/photos/community17.JPG", caption: "Traditional attire", category: "attire" },
  { src: "/photos/community18.JPG", caption: "Cultural moment", category: "cultural" },
  { src: "/photos/community20.JPG", caption: "Community spirit", category: "gatherings" },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "cultural", label: "Cultural Events" },
  { key: "gatherings", label: "Community Gatherings" },
  { key: "attire", label: "Traditional Attire" },
];

export default function GalleryClient() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);

  const visible = filter === "all" ? PHOTOS : PHOTOS.filter((p) => p.category === filter);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <>
      <div className="filter-tabs">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`filter-tab ${filter === f.key ? "active" : ""}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="photo-grid">
        {visible.map((p, i) => (
          <button
            key={`${p.src}-${i}`}
            className="photo-card"
            onClick={() => setActive(p)}
            aria-label={`View ${p.badge || p.caption}`}
            style={{ display: "block", padding: 0, width: "100%" }}
          >
            {p.badge && <span className="photo-badge">{p.badge}</span>}
            <img src={p.src} alt={p.badge || p.caption} loading="lazy" />
            <div className="photo-card-caption">{p.caption}</div>
          </button>
        ))}
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <button
            className="lightbox-close"
            onClick={(e) => { e.stopPropagation(); setActive(null); }}
            aria-label="Close"
          >
            ✕
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.badge || active.caption} />
            <div className="lightbox-meta">
              {active.badge && <span className="photo-badge">{active.badge}</span>}
              <p>{active.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
