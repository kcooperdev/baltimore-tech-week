import type { Metadata } from "next";

/**
 * Editable content for Baltimore Tech Week 2027.
 * Add confirmed sessions, exhibitors, sponsors, and partner events here.
 * Do not add a partner event until the partnership, time, and capacity are confirmed.
 * The week is Wednesday, April 28 through Friday, April 30, 2027.
 * Set phase to "live" during the week to turn the homepage into the attendee view.
 */

export const site = {
  name: "Baltimore Tech Week",
  year: 2027,
  url: "https://bmoretechweek.com",
  email: "team@bmoretechweek.com",
  phase: "preview" as "preview" | "live",
  liveDay: "wednesday" as DayId,
  dates: "April 28–30, 2027",
  when: "Wednesday–Friday",
  where: "Baltimore, Maryland",
  tagline: "CONNECT. BUILD. OPPORTUNITY.",
  promise: "Be in the room.",
  idea: "4MLK is the HQ. Baltimore is the campus.",
  positioning: "Three days with the people building Baltimore. Day at 4MLK. Night around the city.",
};

export type DayId = "wednesday" | "thursday" | "friday";
export type DayPart = "morning" | "afternoon" | "evening";
export type Place = "hq" | "partner";

export type DayStopKind = "hq" | "pause" | "city";

export type DayPlace = {
  name: string;
  line: string;
  href?: string;
};

export type DayStop = {
  id: string;
  when: string;
  where: string;
  title: string;
  text: string;
  kind: DayStopKind;
  places?: DayPlace[];
};

export type Pillar = {
  id: DayId;
  day: string;
  date: string;
  name: string;
  question: string;
  tagline: string;
  summary: string;
  purpose: string;
  stops: DayStop[];
};

export const pillars: Pillar[] = [
  {
    id: "wednesday",
    day: "Wednesday",
    date: "April 28",
    name: "Connect",
    question: "Who should I meet?",
    tagline: "Meet the people building Baltimore.",
    summary: "Meet the people building Baltimore.",
    purpose: "Put a name to the work happening here.",
    stops: [
      {
        id: "wed-open",
        when: "10am–12pm",
        where: "4MLK",
        title: "Check-in and expo",
        text: "",
        kind: "hq",
      },
      {
        id: "wed-floor",
        when: "12–4pm",
        where: "4MLK",
        title: "Community and talks",
        text: "",
        kind: "hq",
      },
      {
        id: "wed-break",
        when: "4–5pm",
        where: "",
        title: "Break",
        text: "",
        kind: "pause",
      },
      {
        id: "wed-night",
        when: "5–9pm",
        where: "4MLK",
        title: "Opening night",
        text: "",
        kind: "hq",
      },
      {
        id: "wed-city",
        when: "After 9",
        where: "City",
        title: "City night",
        text: "",
        kind: "city",
        places: [
          {
            name: "Jerk At Nite",
            line: "Not confirmed",
            href: "/around-baltimore#jerk-at-nite",
          },
        ],
      },
    ],
  },
  {
    id: "thursday",
    day: "Thursday",
    date: "April 29",
    name: "Build",
    question: "What can I create?",
    tagline: "Workshops, demos, and startups.",
    summary: "Workshops, demos, and startups.",
    purpose: "Leave with something you made.",
    stops: [
      {
        id: "thu-open",
        when: "10am–12pm",
        where: "4MLK",
        title: "Coworking and expo",
        text: "",
        kind: "hq",
      },
      {
        id: "thu-floor",
        when: "12–4pm",
        where: "4MLK",
        title: "Workshops and demos",
        text: "AI, product, data, creative tech",
        kind: "hq",
      },
      {
        id: "thu-break",
        when: "4–5pm",
        where: "",
        title: "Break",
        text: "",
        kind: "pause",
      },
      {
        id: "thu-night",
        when: "5–9pm",
        where: "4MLK",
        title: "Build night",
        text: "",
        kind: "hq",
      },
      {
        id: "thu-city",
        when: "Evening",
        where: "City",
        title: "City night",
        text: "",
        kind: "city",
        places: [
          {
            name: "Spark Baltimore",
            line: "Founders",
            href: "/around-baltimore#spark",
          },
          {
            name: "1023 W Baltimore St Art Gallery",
            line: "Creative tech",
            href: "/around-baltimore#gallery",
          },
        ],
      },
    ],
  },
  {
    id: "friday",
    day: "Friday",
    date: "April 30",
    name: "Opportunity",
    question: "Where can this take me?",
    tagline: "Jobs, funding, and a next step.",
    summary: "Jobs, funding, and a next step.",
    purpose: "A job, a cofounder, a room you go back to.",
    stops: [
      {
        id: "fri-open",
        when: "10am–12pm",
        where: "4MLK",
        title: "Coworking and employers",
        text: "",
        kind: "hq",
      },
      {
        id: "fri-floor",
        when: "12–4pm",
        where: "4MLK",
        title: "Jobs, classes, and funding",
        text: "",
        kind: "hq",
      },
      {
        id: "fri-close",
        when: "4–5pm",
        where: "4MLK",
        title: "Closing",
        text: "",
        kind: "hq",
      },
      {
        id: "fri-city",
        when: "After 5",
        where: "City",
        title: "City night",
        text: "",
        kind: "city",
        places: [
          {
            name: "Around the city",
            line: "Food and music",
            href: "/around-baltimore",
          },
          {
            name: "Jerk At Nite",
            line: "Not confirmed",
            href: "/around-baltimore#jerk-at-nite",
          },
        ],
      },
    ],
  },
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
    focus: "Thursday night · founders",
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
    focus: "Thursday night · creative tech",
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
    focus: "A possible social · Wednesday or Friday",
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
  "Be in the room. Baltimore Tech Week is April 28–30, 2027, Wednesday through Friday, at 4MLK by day and around the city at night. Passes from $29.";
