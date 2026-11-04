import type { Metadata } from "next";

/**
 * Editable content for Baltimore Tech Week 2027.
 * Add confirmed sessions, exhibitors, sponsors, and partner events here.
 * Do not add a partner event until the partnership, time, and capacity are confirmed.
 * Keep dates as Wednesday–Friday until the exact 2027 dates are locked.
 * Set phase to "live" during the week to turn the homepage into the attendee view.
 */

export const site = {
  name: "Baltimore Tech Week",
  year: 2027,
  url: "https://bmoretechweek.com",
  email: "team@bmoretechweek.com",
  phase: "preview" as "preview" | "live",
  liveDay: "wednesday" as DayId,
  when: "Wednesday–Friday",
  datesNote: "Exact dates coming soon",
  where: "Baltimore, Maryland",
  tagline: "CONNECT. BUILD. OPPORTUNITY.",
  promise: "Three days in Baltimore for anyone who wants to meet, make, or find what's next.",
  idea: "4MLK is the HQ. Baltimore is the campus.",
  positioning: "Day at 4MLK. Night around the city.",
  nightLine: "Spend the day at Tech Week HQ. Explore Baltimore at night.",
};

export type DayId = "wednesday" | "thursday" | "friday";
export type DayPart = "morning" | "afternoon" | "evening";
export type Place = "hq" | "partner";

export type Pillar = {
  id: DayId;
  day: string;
  name: string;
  question: string;
  tagline: string;
  summary: string;
  purpose: string;
  programming: string[];
};

export const pillars: Pillar[] = [
  {
    id: "wednesday",
    day: "Wednesday",
    name: "Connect",
    question: "Who should I meet?",
    tagline: "Meet people.",
    summary: "Meet people.",
    purpose: "Meet the people building in Baltimore.",
    programming: [
      "Opening programming",
      "Coworking",
      "Expo",
      "Community organizations",
      "Networking",
      "Baltimore tech ecosystem conversations",
      "Meetups",
      "Featured conversations",
      "Opening reception",
      "Partner events throughout Baltimore",
    ],
  },
  {
    id: "thursday",
    day: "Thursday",
    name: "Build",
    question: "What can I build?",
    tagline: "Make something.",
    summary: "Make something.",
    purpose: "Workshops, demos, and time to build.",
    programming: [
      "AI",
      "Software engineering",
      "Product",
      "UX and design",
      "Data",
      "Cloud",
      "Creative technology",
      "Developer tools",
      "Startup demos",
      "Hands-on workshops",
      "Builder conversations",
      "Entrepreneurship",
      "Founder programming",
      "Partner events",
    ],
  },
  {
    id: "friday",
    day: "Friday",
    name: "Opportunity",
    question: "Where can this take me?",
    tagline: "Find what's next.",
    summary: "Find what's next.",
    purpose: "Jobs, founders, and what comes after the week.",
    programming: [
      "Jobs",
      "Hiring",
      "Career development",
      "Entrepreneurship",
      "Founder resources",
      "Investment",
      "Education",
      "Training",
      "Community resources",
      "Professional development",
      "Networking",
      "Closing programming",
      "Closing celebration",
    ],
  },
];

export const rhythm: { label: string; text: string }[] = [
  { label: "Morning", text: "Arrive, cowork, walk the expo." },
  { label: "Afternoon", text: "Talks and workshops." },
  { label: "Evening", text: "The main program." },
  { label: "After", text: "Partner events around the city." },
];

export const hq = {
  name: "Baltimore Tech Week HQ",
  venue: "4MLK",
  street: "4 N. Martin Luther King Jr. Blvd.",
  cityLine: "Baltimore, MD 21201",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=4+N+Martin+Luther+King+Jr+Blvd+Baltimore+MD+21201",
  holds: [
    "Registration and check-in",
    "Expo",
    "Coworking",
    "Main programming",
    "Workshops",
    "Talks",
    "Networking",
    "Sponsor experiences",
    "Selected evening programming",
  ],
};

export const audiences: { title: string; text: string }[] = [
  {
    title: "Builders",
    text: "Engineers, designers, product people, AI practitioners and technologists.",
  },
  {
    title: "Founders",
    text: "Startup builders, entrepreneurs and people thinking about starting.",
  },
  {
    title: "Career Builders",
    text: "Students, professionals, career changers and people looking for their next opportunity.",
  },
  {
    title: "Companies",
    text: "Employers, technology teams, startups and organizations looking to meet Baltimore's talent.",
  },
  {
    title: "Community",
    text: "Anyone curious about technology and what's being built in Baltimore.",
  },
];

export const waysIn: { href: string; title: string; text: string }[] = [
  { href: "/tickets", title: "Attend", text: "Get a pass." },
  { href: "/speak", title: "Speak", text: "Apply for a slot. Applying does not book you." },
  { href: "/sponsors", title: "Sponsor", text: "Tell us what you want to back." },
  { href: "/expo#exhibit", title: "Exhibit", text: "Ask for a table at 4MLK." },
  { href: "/host", title: "Host", text: "Propose an event in the city." },
  { href: "/volunteer", title: "Volunteer", text: "Help at HQ. No hour quota." },
  { href: "/ambassador", title: "Ambassador", text: "Tell people. No quota." },
];

export const nav = {
  primary: [
    { href: "/the-week", label: "The Week" },
    { href: "/schedule", label: "Schedule" },
    { href: "/expo", label: "Expo" },
    { href: "/around-baltimore", label: "Around Baltimore" },
    { href: "/tickets", label: "Tickets" },
  ],
  involved: [
    { href: "/speak", label: "Speak" },
    { href: "/sponsors", label: "Sponsor" },
    { href: "/expo#exhibit", label: "Exhibit" },
    { href: "/host", label: "Host an Event" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/ambassador", label: "Ambassador" },
  ],
};

export type ScheduleItem = {
  id: string;
  day: DayId;
  time: string;
  title: string;
  description: string;
  speakers: string[];
  venue: string;
  category: string;
  registration: string;
  place: Place;
  part: DayPart;
};

/** Confirmed sessions only. Leave empty until programming is set. */
export const schedule: ScheduleItem[] = [];

export type Exhibitor = {
  name: string;
  url?: string;
};

/** Confirmed exhibitors only. */
export const exhibitors: Exhibitor[] = [];

export type SponsorPackage = {
  id: string;
  name: string;
  price?: string;
  summary: string;
  includes: string[];
};

/**
 * Approved sponsorship packages.
 * Add a package only after the price and benefits are signed off.
 */
export const sponsorPackages: SponsorPackage[] = [];

export const sponsorSurfaces: { title: string; text: string }[] = [
  { title: "Tech Week HQ", text: "Be present where people spend the day." },
  { title: "Expo", text: "Meet attendees looking for organizations, products, and resources." },
  { title: "Programming", text: "Support talks, workshops, and conversations." },
  { title: "Experiences", text: "Host a moment people will actually remember." },
  { title: "Community access", text: "Reach builders, founders, students, and companies in one place." },
  { title: "Partner programming", text: "Show up alongside official events around the city, where it fits." },
  { title: "Brand visibility", text: "Be seen across the week, on site and in the city." },
];

export type TicketWindow = {
  id: string;
  name: string;
  price: number;
};

export const generalAdmission = {
  name: "General Admission",
  windows: [
    { id: "early", name: "Early Bird", price: 29 },
    { id: "general", name: "General Admission", price: 49 },
    { id: "late", name: "Late Registration", price: 69 },
  ] satisfies TicketWindow[],
  access: [
    "Three-day Baltimore Tech Week admission",
    "Expo",
    "Main programming",
    "Talks",
    "Workshops",
    "Networking areas",
    "Eligible partner experiences, where a pass applies",
  ],
};

export const vip = {
  name: "VIP",
  price: 99,
  access: [
    "Everything included in General Admission",
    "Priority entry",
    "Preferred or reserved seating, where seating is reserved",
    "VIP check-in",
    "VIP networking experience",
    "A limited Baltimore Tech Week item",
    "A possible food or drink benefit, if one is confirmed",
  ],
};

export const partnerFilters = [
  "All",
  "Connect",
  "Build",
  "Opportunity",
  "Networking",
  "Startups",
  "Creative Tech",
  "Careers",
  "Community",
] as const;

export type PartnerFilter = (typeof partnerFilters)[number];

export type PartnerEvent = {
  id: string;
  name: string;
  host: string;
  venue: string;
  neighborhood: string;
  date: string;
  time: string;
  description: string;
  category: Exclude<PartnerFilter, "All">;
  capacity: string;
  ticket: string;
  rsvpUrl?: string;
  day?: DayId;
};

/** Confirmed partner events only. */
export const partnerEvents: PartnerEvent[] = [];

export type ExploringVenue = {
  id: string;
  name: string;
  neighborhood: string;
  address: string;
  focus: string;
  categories: Exclude<PartnerFilter, "All">[];
  possible: string[];
};

/**
 * Venues in conversation. These are not confirmed Tech Week events.
 * Move a venue into `partnerEvents` only after details are confirmed.
 */
export const exploringVenues: ExploringVenue[] = [
  {
    id: "spark",
    name: "Spark Baltimore",
    neighborhood: "Downtown",
    address: "8 Market Place, Baltimore, MD 21202",
    focus: "Startups + Founders",
    categories: ["Startups", "Connect"],
    possible: [
      "Founders",
      "Entrepreneurship",
      "Startups",
      "Founder networking",
      "Startup ecosystem conversations",
    ],
  },
  {
    id: "gallery",
    name: "1023 W Baltimore St Art Gallery",
    neighborhood: "Poppleton",
    address: "1023 W Baltimore St, Baltimore, MD 21223",
    focus: "Creative Tech",
    categories: ["Creative Tech", "Build", "Community"],
    possible: [
      "Art and technology",
      "Design",
      "Creative technology",
      "Digital experiences",
      "Creator technology",
      "Interactive showcases",
    ],
  },
  {
    id: "jerk-at-nite",
    name: "Jerk At Nite",
    neighborhood: "Downtown",
    address: "21 N Eutaw St, Baltimore, MD 21201",
    focus: "Tech Week Social",
    categories: ["Networking", "Community"],
    possible: [
      "Networking",
      "Social gathering",
      "Food",
      "Community",
      "After-hours programming",
      "Closing celebration",
    ],
  },
];

export const speakerFormats = [
  "Talks",
  "Panels",
  "Workshops",
  "Fireside conversations",
  "Demonstrations",
];

export const hostInvitees = [
  "Startups",
  "Companies",
  "Restaurants",
  "Coworking spaces",
  "Universities",
  "Community organizations",
  "Meetups",
  "Creative spaces",
  "Tech organizations",
];

export const ambassadorChannels = [
  "Campuses",
  "Companies",
  "Neighborhoods",
  "Community groups",
  "Slack and Discord communities",
  "Professional networks",
  "Social media",
  "Personal networks",
];

export const expoParticipants = [
  "Technology companies",
  "Startups",
  "Universities",
  "Community organizations",
  "Employers",
  "Education and training organizations",
  "Sponsors",
  "Technology products",
];

export function formatPrice(amount: number) {
  return `$${amount}`;
}

export function pageMeta(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} · Baltimore Tech Week 2027`,
      description,
    },
    twitter: {
      title: `${title} · Baltimore Tech Week 2027`,
      description,
    },
  };
}

export const homeDescription =
  "Baltimore Tech Week 2027 is three days, Wednesday through Friday. Daytime at 4MLK. Evenings around Baltimore. Exact dates coming soon.";
