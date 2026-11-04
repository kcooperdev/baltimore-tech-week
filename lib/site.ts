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
  promise: "Be in the room.",
  idea: "4MLK is the HQ. Baltimore is the campus.",
  positioning: "Three days with the people building Baltimore. Day at 4MLK. Night around the city.",
  nightLine: "Spend the day at Tech Week HQ. Explore Baltimore at night.",
  forLine: "For the people who will actually show up.",
  spread: "A week spreads when someone you trust says, come with me.",
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
    tagline: "Meet the people you keep meaning to meet.",
    summary: "Meet the people you keep meaning to meet.",
    purpose: "Put a name to the work happening in this city.",
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
    tagline: "Make something before you leave.",
    summary: "Make something before you leave.",
    purpose: "Workshops and demos. Leave with something you made.",
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
    tagline: "Walk out with a next step.",
    summary: "Walk out with a next step.",
    purpose: "Jobs, founders, and the conversation that starts the next thing.",
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
  { label: "Morning", text: "Arrive. Cowork. Walk the floor." },
  { label: "Afternoon", text: "Talks and workshops. Stay for one." },
  { label: "Evening", text: "The program people came for." },
  { label: "After", text: "The city. A pass is not a ticket to every night." },
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
    title: "You build",
    text: "Engineers, designers, founders, and anyone making the thing.",
  },
  {
    title: "You hire",
    text: "Companies that want Baltimore in the room, not on a slide.",
  },
  {
    title: "You tell people",
    text: "The week spreads when you bring the room you already have.",
  },
];

export const waysIn: { href: string; title: string; text: string }[] = [
  { href: "/tickets", title: "Attend", text: "Get the pass. From $29. Checkout opens later." },
  { href: "/speak", title: "Speak", text: "Teach what you know. Applying is not a booking." },
  { href: "/sponsors", title: "Sponsor", text: "Be where your people already want to be." },
  { href: "/expo#exhibit", title: "Exhibit", text: "A table at HQ. We list you after the space is real." },
  { href: "/host", title: "Host", text: "Your event, your room. We send people if we accept it." },
  { href: "/volunteer", title: "Volunteer", text: "Help people find the room. No quota." },
  { href: "/ambassador", title: "Ambassador", text: "Tell the rooms you are already in." },
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
  { title: "The room", text: "HQ is where people spend the day. Be there." },
  { title: "The floor", text: "A table beats a logo on a slide." },
  { title: "The work", text: "Back a talk or a workshop people came to use." },
  { title: "The story", text: "A moment worth telling someone else about." },
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
  "Be in the room. Baltimore Tech Week 2027 is three days, Wednesday through Friday, at 4MLK by day and around the city at night. Passes from $29. Exact dates coming soon.";
