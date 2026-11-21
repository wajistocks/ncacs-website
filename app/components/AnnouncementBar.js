"use client";

import Link from "next/link";
import { useUpcomingEvents } from "../events/useUpcomingEvents";

export default function AnnouncementBar() {
  const events = useUpcomingEvents();
  if (events.length === 0) return null;

  return (
    <Link href="/events" className="announcement-bar">
      <span className="announcement-text">
        <strong>Upcoming:</strong> {events.map((e) => e.shortLabel).join(" · ")}
      </span>
      <span className="announcement-cta">
        <span className="announcement-dash" aria-hidden="true">— </span>View Events →
      </span>
    </Link>
  );
}
