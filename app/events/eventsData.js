function directionsUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export const FLYER_SRC = "/images/cultural-night-flyer.jpg";

// Upcoming events, in date order.
export const EVENTS_2026 = [
  {
    id: "hot-meals-outreach",
    // Hidden after the end of the event day (Mountain Time).
    endsAt: "2026-11-26T23:59:59-07:00",
    weekday: "Thursday",
    shortLabel: "Hot Meals Outreach, Nov 26",
    time: "11:00 AM",
    note: "In partnership with Caring Matters Industries",
    day: "26",
    month: "Nov",
    year: "2026",
    title: "Charitable Outreach: Hot Meals",
    meta: "Thursday, November 26, 2026 • Meal service begins at 11:00 AM",
    venue: "Sanctuary Church",
    address: "1930 W Colorado Avenue, Colorado Springs, CO 80904",
    directions: directionsUrl("Sanctuary Church, 1930 W Colorado Avenue, Colorado Springs, CO 80904"),
    body: "NCACS has partnered with Caring Matters Industries to provide hot meals to people in need in our community. Members, families and friends are welcome to join us and serve.",
    summary: "Serving hot meals to people in need with Caring Matters Industries at Sanctuary Church.",
  },
  {
    id: "cultural-night",
    endsAt: "2026-12-05T23:59:59-07:00",
    weekday: "Saturday",
    shortLabel: "End of Year Cultural Night, Dec 5",
    time: "6:00 PM MST",
    note: "Tickets from $25 · Traditional Wear",
    day: "05",
    month: "Dec",
    year: "2026",
    title: "End of Year Cultural Night",
    meta: "Saturday, December 5, 2026 • 6:00 PM MST",
    venue: "Alta Hotel, 4th Floor",
    address: "2886 S Circle Dr, Colorado Springs, CO 80906",
    directions: directionsUrl("Alta Hotel, 2886 S Circle Dr, Colorado Springs, CO 80906"),
    tagline: "Celebrating Our Culture · Strengthening Our Community · Building Our Future",
    summary: "Celebrating Our Culture · Strengthening Our Community · Building Our Future. Alta Hotel, 4th Floor.",
    dressCode: "Traditional Wear",
    tickets: [
      { name: "General Admission", price: "$25", detail: "Per person" },
      {
        name: "Gold Table (VIP)",
        price: "$800",
        detail: "10 people • 2 premium liquor, 2 bottles of wine, assorted sodas and waters",
      },
      {
        name: "Silver Table (VIP)",
        price: "$500",
        detail: "5 people • 1 premium liquor, 1 wine, 6 beers, 10 assorted sodas and waters",
      },
    ],
    hasFlyer: true,
    ticketsCta: true,
  },
];

export function upcomingEvents(now = Date.now()) {
  return EVENTS_2026.filter((e) => new Date(e.endsAt).getTime() >= now);
}
