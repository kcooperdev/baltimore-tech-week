import type { ApplyField } from "@/lib/apply-fields";

export const sponsorCallUrl = "https://tidycal.com/bmore-tech-week/30-minute-meeting";

export const pronouns = ["she / her", "he / him", "they / them", "Prefer not to say", "Something else"];

export const yearsAround = ["I live here now", "A few years", "Most of my life", "Visiting / elsewhere"];

export const heardAbout = [
  "Instagram",
  "LinkedIn",
  "A friend",
  "A meetup or group",
  "Campus",
  "Work",
  "Google",
  "Other",
];

export const neighborhoods = [
  "BioPark",
  "Station North",
  "Hampden",
  "Inner Harbor",
  "Harbor East",
  "Downtown",
  "4MLK / Westside",
  "Fells Point",
  "Federal Hill",
  "Mount Vernon",
  "Canton",
  "Remington",
  "Other",
];

export const sessionTypes = [
  { value: "workshop", label: "Workshop · 45–60 minutes" },
  { value: "panel", label: "Panel Discussion · 45–60 minutes" },
  { value: "techtalk", label: "Tech Talk · 20–30 minutes" },
];

export const audienceLevels = ["Beginner", "Intermediate", "Advanced", "General Audience"];

export const programNights = [
  { value: "2027-04-26", label: "Deep & MedTech · Mon · April 26" },
  { value: "2027-04-27", label: "AI · Tue · April 27" },
  { value: "2027-04-28", label: "Creative Tech · Wed · April 28" },
  { value: "2027-04-29", label: "Founders & Startups · Thu · April 29" },
  { value: "2027-04-30", label: "BTW Finale · Fri · April 30" },
  { value: "Any", label: "No preference" },
];

export const partnerNights = ["Deep & MedTech", "AI", "Creative Tech", "Founders & Startups", "BTW Finale"];

export const speakerTopics = [
  "MedTech / Biotech",
  "Life Sciences",
  "Deep Tech",
  "Artificial Intelligence",
  "Creative Technology",
  "Digital Art / Media",
  "UX / Design",
  "Hardware / Manufacturing",
  "Aerospace",
  "Software Engineering",
  "Cybersecurity",
  "Product Management",
  "Startups",
  "Entrepreneurship",
  "Venture / Funding",
  "Climate / Sustainability",
  "Careers",
  "Community Building",
  "Other",
];

export const partnerTypes = [
  "Meetup",
  "University / school",
  "Accelerator",
  "Nonprofit",
  "Coworking space",
  "Student organization",
  "Workforce / talent program",
  "Media / newsletter",
  "Other",
];

export const partnerSizes = ["Under 50 people", "50–200 people", "200–1,000 people", "1,000+ people"];

export const partnerChannels = [
  "Newsletter",
  "Instagram",
  "LinkedIn",
  "Slack / Discord",
  "In-person meetup",
  "Campus / classroom",
  "Website",
];

export const partnerHelp = [
  "Share the week with our people",
  "Host a room or satellite hang",
  "Bring volunteers",
  "Help with student tickets",
  "Introduce sponsors or speakers",
];

export const sponsorTiers = [
  { value: "supporting", label: "Supporting · $500" },
  { value: "community", label: "Community · $1,000" },
  { value: "innovation", label: "Innovation · $2,500" },
  { value: "ecosystem", label: "Ecosystem · $5,000" },
  { value: "presenting", label: "Presenting · $10,000" },
  { value: "table-night", label: "Night table only · $500" },
  { value: "table-two", label: "Two-night table only · $900" },
  { value: "table-week", label: "Week table only · $2,000" },
  { value: "unsure", label: "Not sure yet · Talk first" },
];

export const sponsorTierCopy = [
  { name: "Supporting · $500", text: "Logo and a mention. No table. Eight spots." },
  { name: "Community · $1,000", text: "Everything in Supporting, plus a table on one night. Five spots." },
  { name: "Innovation · $2,500", text: "A table on two nights and a 2-minute welcome. Three spots." },
  { name: "Ecosystem · $5,000", text: "Your name on one full night, and a space all five nights. Two spots." },
  { name: "Presenting · $10,000", text: "Baltimore Tech Week 2027, presented by your company. One spot." },
];

export const tableCopy = [
  { name: "Night table · $500", text: "One 6-foot table, two chairs, two staff passes. Eight tables a night." },
  { name: "Two-night table · $900", text: "Same setup on two nights you choose." },
  { name: "Week table · $2,000", text: "A table all five nights, plus 2 VIP week passes." },
];

export const companySizes = ["1–10", "11–50", "51–200", "201–1,000", "1,000+"];

export const sponsorDecisions = ["I can decide", "I recommend, someone else signs", "Exploring for later"];

export const sponsorGoals = [
  "Brand in Baltimore",
  "Recruiting / talent",
  "Customers / pipeline",
  "Community support",
  "Product in front of builders",
  "A table in the room",
];

export const ambassadorChannels = [
  "Instagram",
  "LinkedIn",
  "TikTok",
  "Newsletter",
  "Campus",
  "Meetup / group",
  "Word of mouth",
  "Workplace",
];

export const ambassadorReach = [
  "A tight circle (under 50)",
  "A regular group (50–200)",
  "A wider network (200–1,000)",
  "A large audience (1,000+)",
];

const you = "You";

export const speakFields: ApplyField[] = [
  { name: "name", label: "Full name", required: true, autoComplete: "name", placeholder: "Your name", step: you },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", placeholder: "you@studio.com", step: you },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", placeholder: "410-555-0100", step: you },
  { name: "pronouns", label: "Pronouns", type: "select", options: pronouns, placeholder: "Choose pronouns", step: you },
  { name: "cityState", label: "City & state", required: true, autoComplete: "address-level1", placeholder: "Baltimore, MD", step: you },
  { name: "yearsAround", label: "Your tie to the city", type: "select", options: yearsAround, placeholder: "How you know Baltimore", step: you },
  { name: "title", label: "Professional title", required: true, placeholder: "Founder, engineer, organizer", step: you },
  { name: "company", label: "Company / organization", autoComplete: "organization", placeholder: "Studio, company, or independent", step: you },
  { name: "linkedinUrl", label: "LinkedIn", type: "url", placeholder: "https://linkedin.com/in/", step: you },
  { name: "websiteUrl", label: "Website", type: "url", placeholder: "https://", step: you },
  { name: "heardAbout", label: "How did you hear about the week?", type: "select", options: heardAbout, placeholder: "Choose one", step: you, wide: true },
  { name: "format", label: "Session type", type: "select", required: true, choices: sessionTypes, placeholder: "Choose a format", step: "The session", wide: true },
  { name: "talkTitle", label: "Session title", required: true, placeholder: "What the room is actually about", step: "The session", wide: true },
  {
    name: "description",
    label: "Session description",
    type: "textarea",
    required: true,
    minWords: 40,
    placeholder: "The conversation, the exercise, or the story.",
    hint: "What happens in the room, not a bio. At least 40 words.",
    step: "The session",
  },
  {
    name: "takeaways",
    label: "Three key takeaways",
    type: "textarea",
    required: true,
    minLines: 3,
    placeholder: "1. \n2. \n3. ",
    hint: "What people can use the next day. One per line.",
    step: "The session",
  },
  { name: "audience", label: "Audience level", type: "radio", required: true, options: audienceLevels, step: "The session" },
  {
    name: "nights",
    label: "Preferred night",
    type: "checks",
    required: true,
    choices: programNights,
    hint: "Pick every night this could live.",
    step: "Night & topics",
  },
  { name: "neighborhood", label: "Closest neighborhood", type: "select", choices: neighborhoods.map((item) => ({ value: item, label: item })), placeholder: "Choose a neighborhood", hint: "Helps us place the room.", step: "Night & topics", wide: true },
  { name: "topics", label: "Topic", type: "checks", required: true, options: speakerTopics, step: "Night & topics" },
  { name: "spokenBefore", label: "Have you spoken before?", type: "radio", required: true, choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], hint: "First rooms are welcome.", step: "Experience" },
  { name: "previousTalks", label: "Talks, articles, and links", type: "textarea", placeholder: "A meetup talk, a write-up, a deck. One per line.", step: "Experience" },
  { name: "panelist", label: "If this session isn’t selected, would you serve as a panelist?", type: "radio", required: true, choices: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], step: "Experience" },
  { name: "accessibility", label: "Accessibility accommodations", type: "textarea", placeholder: "What the room should know so you can do the work.", step: "Experience" },
  { name: "notes", label: "Anything else we should know?", type: "textarea", step: "Experience" },
];

export const partnerFields: ApplyField[] = [
  { name: "name", label: "Your name", required: true, autoComplete: "name", step: you },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", placeholder: "you@group.org", step: you },
  { name: "title", label: "Your role", required: true, placeholder: "Organizer, advisor, founder", step: you },
  { name: "phone", label: "Phone", type: "tel", step: you },
  { name: "pronouns", label: "Pronouns", type: "select", options: pronouns, placeholder: "Choose pronouns", step: you },
  { name: "heardAbout", label: "How did you hear about the week?", type: "select", options: heardAbout, placeholder: "Choose one", step: you, wide: true },
  { name: "organization", label: "Organization", required: true, autoComplete: "organization", step: "Your group" },
  { name: "type", label: "What kind of group?", type: "select", required: true, options: partnerTypes, placeholder: "Choose one", step: "Your group" },
  { name: "size", label: "About how many people?", type: "select", required: true, options: partnerSizes, placeholder: "Choose one", step: "Your group" },
  { name: "neighborhood", label: "Home neighborhood", type: "select", options: neighborhoods, placeholder: "Choose one", step: "Your group" },
  { name: "website", label: "Website", type: "url", placeholder: "https://", step: "Your group" },
  { name: "instagram", label: "Instagram", placeholder: "@yourgroup", step: "Your group" },
  { name: "audience", label: "Who do you gather?", type: "textarea", placeholder: "Students, founders, operators, neighbors.", step: "Your group" },
  { name: "channels", label: "Where can you share the week?", type: "checks", required: true, options: partnerChannels, step: "How you’ll help" },
  { name: "help", label: "How do you want to help?", type: "checks", required: true, options: partnerHelp, step: "How you’ll help" },
  { name: "nights", label: "Nights you could show up", type: "checks", options: partnerNights, hint: "Optional. Helps us plan shout-outs and rooms.", step: "How you’ll help" },
  { name: "notes", label: "Anything else we should know?", type: "textarea", step: "How you’ll help" },
];

export const sponsorFields: ApplyField[] = [
  { name: "name", label: "Your name", required: true, autoComplete: "name", step: you },
  { name: "email", label: "Work email", type: "email", required: true, autoComplete: "email", placeholder: "you@company.com", step: you },
  { name: "title", label: "Role / title", required: true, placeholder: "Partnerships, founder, marketing", step: you },
  { name: "phone", label: "Phone", type: "tel", hint: "We’ll use this only if the calendar invite bounces.", step: you },
  { name: "heardAbout", label: "How did you hear about the week?", type: "select", options: heardAbout, placeholder: "Choose one", step: you, wide: true },
  { name: "organization", label: "Company", required: true, autoComplete: "organization", step: "Company & tier" },
  { name: "website", label: "Website", type: "url", placeholder: "https://", step: "Company & tier" },
  { name: "size", label: "Company size", type: "select", options: companySizes, placeholder: "Choose one", step: "Company & tier" },
  { name: "decision", label: "Who decides?", type: "select", required: true, options: sponsorDecisions, placeholder: "Choose one", step: "Company & tier" },
  { name: "tier", label: "Which tier are you looking at?", type: "select", required: true, choices: sponsorTiers, placeholder: "Choose a tier", hint: "You can change this on the call.", step: "Company & tier", wide: true },
  { name: "goals", label: "What do you want out of the week?", type: "checks", required: true, options: sponsorGoals, step: "Company & tier" },
  {
    name: "booked",
    label: "Did you book a time?",
    type: "radio",
    required: true,
    choices: [
      { value: "yes", label: "Yes, I booked a time" },
      { value: "no", label: "I need help finding a time" },
    ],
    step: "Book a call",
  },
  { name: "notes", label: "Anything the call should cover?", type: "textarea", placeholder: "If you still need a time, say which week works.", step: "Book a call" },
];

export const ambassadorFields: ApplyField[] = [
  { name: "name", label: "Your name", required: true, autoComplete: "name", step: you },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", step: you },
  { name: "city", label: "City", required: true, placeholder: "Baltimore, MD", step: you },
  { name: "pronouns", label: "Pronouns", type: "select", options: pronouns, placeholder: "Choose pronouns", step: you },
  { name: "yearsAround", label: "Your tie to the city", type: "select", options: yearsAround, placeholder: "How you know Baltimore", step: you },
  { name: "neighborhood", label: "Neighborhood you move through", type: "select", options: neighborhoods, placeholder: "Choose one", step: you },
  { name: "organization", label: "School, workplace, or group", placeholder: "Optional", step: you },
  { name: "title", label: "What you do there", placeholder: "Student, organizer, engineer", step: you },
  { name: "phone", label: "Phone", type: "tel", step: you },
  { name: "heardAbout", label: "How did you hear about the week?", type: "select", options: heardAbout, placeholder: "Choose one", step: you, wide: true },
  { name: "channels", label: "Where will you share?", type: "checks", required: true, options: ambassadorChannels, step: "Get the word out" },
  { name: "reach", label: "About how many people can you reach?", type: "select", required: true, options: ambassadorReach, placeholder: "Choose one", step: "Get the word out", wide: true },
  {
    name: "why",
    label: "How will you get the word out?",
    type: "textarea",
    required: true,
    minWords: 12,
    hint: "A campus Slack, a Sunday dinner, a story you already tell. Be specific.",
    step: "Get the word out",
  },
  { name: "notes", label: "Anything else?", type: "textarea", step: "Get the word out" },
];
