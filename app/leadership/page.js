import LeaderCard from "./LeaderCard";

export const metadata = {
  title: "Leadership",
  description:
    "Meet the leadership of the Ngemba Cultural Association of Colorado Springs — our Executive Committee, full slate of officers, and founding members.",
};

const PRESIDENT = {
  name: "Lt Col Neih McMillan Mancho",
  photo: "/photos/president.jpg",
  bio: "A distinguished leader and founding member of NCACS, Lt Col Neih McMillan Mancho brings military discipline, vision, and deep commitment to the Ngemba community in Colorado Springs. As President he provides overall strategic direction, presides over all meetings, and represents NCACS in all external matters. His leadership is rooted in service, unity, and the preservation of Ngemba cultural heritage.",
  duties: [
    "Provide overall strategic direction for the Association",
    "Preside over all general and executive meetings",
    "Represent NCACS in all external matters and engagements",
    "Champion the mission of unity, networking, and collective growth",
  ],
};

const VICE_PRESIDENT = {
  name: "Dr. Linus Akamangwa",
  photo: "/photos/vice-president.jpg",
  bio: "A founding member and respected scholar, Dr. Linus Akamangwa serves as the second in command of NCACS. He assists the President in all duties, assumes presidential responsibilities in his absence, and oversees special projects and initiatives. His dedication to education and community empowerment reflects the core values of NCACS.",
  duties: [
    "Assist the President in carrying out the duties of the office",
    "Assume presidential responsibilities in the President's absence",
    "Oversee special projects and strategic initiatives",
    "Support educational and community empowerment programs",
  ],
};

const SOCIAL_SECRETARY = {
  name: "Mr. Clement Awahmukalah",
  photo: "/photos/social-secretary.jpeg",
  bio: "A founding member of NCACS, Mr. Clement Awahmukalah is the heartbeat of our social life. He plans and organizes all social events and activities, fosters a welcoming atmosphere for all members, and maintains the hosting schedule. His warmth and dedication ensure every gathering feels like family.",
  duties: [
    "Plan and organize all NCACS social events and activities",
    "Foster a warm and welcoming atmosphere for members and guests",
    "Maintain the hosting schedule and event calendar",
    "Coordinate with hosts, vendors, and venues for gatherings",
  ],
};

const PROTOCOL_OFFICER = {
  name: "Mr. Achu Waji AwaMofor",
  photo: "/photos/protocol-officer.PNG",
  bio: "A founding member of NCACS, Mr. Achu Waji AwaMofor ensures proper conduct and decorum at all meetings and events. He advises on correct cultural and official protocols, serves as the point of contact for VIP guests, and enforces timekeeping standards. His commitment to excellence and cultural respect sets the standard for every NCACS event.",
  duties: [
    "Ensure proper conduct and decorum at all meetings and events",
    "Advise on correct cultural and official protocols",
    "Serve as the point of contact for VIP guests and dignitaries",
    "Enforce timekeeping standards across all NCACS gatherings",
  ],
};

const FOUNDING_BIH_MANCHO = {
  name: "Mrs. Bih Mancho",
  photo: "/photos/founding-bih-mancho.jpg",
  bio: "A proud founding member of NCACS, Mrs. Bih Mancho has been instrumental in establishing the Association's foundation in Colorado Springs. Her dedication to Ngemba culture, family values, and community unity is an inspiration to all members.",
  duties: [
    "Uphold the founding vision and values of NCACS",
    "Support cultural preservation and the strengthening of family bonds",
    "Mentor members and nurture the spirit of community unity",
  ],
};

const FOUNDING_OLIVER_CHEFOR = {
  name: "Mr. Oliver Chefor",
  bio: "A founding member of NCACS, Mr. Oliver Chefor brings passion and commitment to the preservation of Ngemba heritage in Colorado. His contributions to the establishment of the Association reflect the true spirit of community service.",
  duties: [
    "Uphold the founding vision and values of NCACS",
    "Champion the preservation of Ngemba heritage in Colorado",
    "Contribute to the spirit of community service and mutual support",
  ],
};

const FOUNDING_ETONDE_AKAMANGWA = {
  name: "Mrs. Etonde Akamangwa",
  photo: "/photos/founding-etonde-akamangwa.jpg",
  bio: "A founding member of NCACS, Mrs. Etonde Akamangwa exemplifies the strength and grace of Ngemba women. Her dedication to cultural preservation, community building, and the empowerment of Ngemba families in Colorado Springs is deeply valued by the entire Association.",
  duties: [
    "Uphold the founding vision and values of NCACS",
    "Champion cultural preservation and community building",
    "Support the empowerment of Ngemba families in Colorado Springs",
  ],
};

const EXECUTIVE = [
  { ...PRESIDENT, title: "President" },
  { ...VICE_PRESIDENT, title: "Vice President" },
  { name: "To be announced", title: "Secretary" },
  { ...SOCIAL_SECRETARY, title: "Social Secretary" },
];

const OFFICERS = [
  { ...PRESIDENT, title: "President" },
  { ...VICE_PRESIDENT, title: "Vice President" },
  { name: "To be announced", title: "Secretary" },
  { name: "To be announced", title: "Assistant Secretary" },
  { name: "To be announced", title: "Treasurer" },
  { name: "To be announced", title: "Financial Secretary" },
  { ...SOCIAL_SECRETARY, title: "Social Secretary" },
  { name: "To be announced", title: "Assistant Social Secretary" },
  { ...PROTOCOL_OFFICER, title: "Protocol Officer" },
  { name: "To be announced", title: "Cultural Officer", photo: "/photos/cultural-officer.jpg" },
  { name: "To be announced", title: "Public Relations Officer" },
  { name: "To be announced", title: "Auditor" },
];

const FOUNDERS = [
  { ...PRESIDENT, title: "Founding Member" },
  { ...VICE_PRESIDENT, title: "Founding Member" },
  { ...SOCIAL_SECRETARY, title: "Founding Member" },
  { ...PROTOCOL_OFFICER, title: "Founding Member" },
  { ...FOUNDING_BIH_MANCHO, title: "Founding Member" },
  { ...FOUNDING_OLIVER_CHEFOR, title: "Founding Member" },
  { ...FOUNDING_ETONDE_AKAMANGWA, title: "Founding Member" },
];

export default function LeadershipPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Service in Trust</span>
          <h1>Our Leadership Team</h1>
          <p>
            The men and women entrusted by our membership to lead, serve,
            and represent the Ngemba Cultural Association of Colorado Springs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">The Executive</span>
            <h2 className="section-title center">Executive Committee</h2>
          </div>
          <div className="grid grid-4">
            {EXECUTIVE.map((p) => <LeaderCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#0c0c0c" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">All Officers</span>
            <h2 className="section-title center">Full Slate of Officers</h2>
            <p className="section-subtitle center">
              The twelve officers serving NCACS across the executive, administrative, and cultural portfolios.
            </p>
          </div>
          <div className="grid grid-4">
            {OFFICERS.map((p, i) => <LeaderCard key={`${p.title}-${i}`} {...p} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">With Gratitude</span>
            <h2 className="section-title center">Founding Members</h2>
            <p className="section-subtitle center">
              The seven sons and daughters of the Ngemba who set NCACS in motion in 2025.
            </p>
          </div>
          <div className="grid grid-4">
            {FOUNDERS.map((p) => <LeaderCard key={p.name} {...p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
