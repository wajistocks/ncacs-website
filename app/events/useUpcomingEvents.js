"use client";

import { useSyncExternalStore } from "react";
import { EVENTS_2026, upcomingEvents } from "./eventsData";

// The site is statically generated, so filtering at build time alone would
// freeze the list. The server snapshot uses build time; the browser re-checks
// against the visitor's clock after hydration and once a minute.
const ids = (now) => upcomingEvents(now).map((e) => e.id).join(",");

function subscribe(onChange) {
  const t = setInterval(onChange, 60_000);
  return () => clearInterval(t);
}

export function useUpcomingEvents() {
  const key = useSyncExternalStore(subscribe, () => ids(Date.now()), () => ids(Date.now()));
  const keep = new Set(key ? key.split(",") : []);
  return EVENTS_2026.filter((e) => keep.has(e.id));
}
