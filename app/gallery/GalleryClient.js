"use client";

import { useState, useEffect } from "react";

const CULTURAL_MOMENTS_CAPTION =
  "Celebrating Ngemba heritage and community unity in Colorado Springs.";

const PHOTOS = [
  {
    src: "https://res.cloudinary.com/dksshweet/image/upload/v1778964451/community2_f7jdlm.jpg",
    caption: CULTURAL_MOMENTS_CAPTION,
    category: "cultural",
    badge: "Cultural Moments",
  },
  {
    src: "https://res.cloudinary.com/dksshweet/image/upload/v1778964455/community3_vycprv.jpg",
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
    src: "https://res.cloudinary.com/dksshweet/image/upload/v1778964452/community6_h41car.jpg",
    caption: CULTURAL_MOMENTS_CAPTION,
    category: "cultural",
    badge: "Cultural Moments",
  },
  { src: "/photos/community7.jpg", caption: "Royal robes", category: "attire" },
  {
    src: "https://res.cloudinary.com/dksshweet/image/upload/v1778964454/community8_corcy9.jpg",
    caption: "Traditional dance",
    category: "cultural",
  },
  {
    src: "https://res.cloudinary.com/dksshweet/image/upload/v1778964454/community9_avoruu.jpg",
    caption: "Embroidered attire",
    category: "attire",
  },
  { src: "/photos/community10.jpg", caption: "Community elders", category: "gatherings" },
  {
    src: "https://res.cloudinary.com/dksshweet/image/upload/v1778964455/community11_ckvr53.jpg",
    caption: "Cultural display",
    category: "cultural",
  },
  {
    src: "https://res.cloudinary.com/dksshweet/image/upload/v1778964456/community12_wijh2n.jpg",
    caption: "Members together",
    category: "gatherings",
  },
  {
    src: "https://res.cloudinary.com/dksshweet/image/upload/v1778964457/community13_yafkfb.jpg",
    caption: "Drumming and song",
    category: "cultural",
  },
  {
    src: "https://res.cloudinary.com/dksshweet/image/upload/v1778964458/community14_jgm5tt.jpg",
    caption: "In our colors",
    category: "attire",
  },
  {
    src: "https://res.cloudinary.com/dksshweet/image/upload/v1778964464/community15_lr236q.jpg",
    caption: "Joyful gathering",
    category: "gatherings",
  },
  {
    src: "https://res.cloudinary.com/dksshweet/image/upload/v1778964461/f1652ce9-3473-471a-beab-89f672b7e695_qknsql.jpg",
    caption: "Ngemba family",
    category: "gatherings",
  },
  {
    src: "https://res.cloudinary.com/dksshweet/image/upload/v1778965015/fc730eed-ba30-44c4-9f68-a6b0a304eb1a_fmiws8.jpg",
    caption: "Traditional attire",
    category: "attire",
  },
  { src: "/photos/community18.JPG", caption: "Cultural moment", category: "cultural" },
  { src: "/photos/community20.JPG", caption: "Community spirit", category: "gatherings" },
  {
    src: "https://res.cloudinary.com/dksshweet/image/upload/v1778964717/community21_rfp7lp.jpg",
    caption: "Celebrating together",
    category: "cultural",
  },
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

      <div className="photo-grid photo-grid-masonry">
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
