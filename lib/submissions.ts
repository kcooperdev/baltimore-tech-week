const LIVE = "https://www.bmoretechweek.com";

export class SubmitError extends Error {
  status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.name = "SubmitError";
    this.status = status;
  }
}

function text(value: unknown, label: string, max = 500, required = true) {
  const next = String(value ?? "").trim();
  if (!next) {
    if (required) throw new SubmitError(`${label} is required`);
    return "";
  }
  if (next.length > max) throw new SubmitError(`${label} is too long`);
  return next;
}

function email(value: unknown) {
  const next = text(value, "Email", 200).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next)) throw new SubmitError("Valid email is required");
  return next;
}

function list(value: unknown) {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  const one = String(value ?? "").trim();
  return one ? [one] : [];
}

/** The live database accepts the April 2027 week. The public days are April 27–29. */
function datesFor(value: unknown) {
  const map: Record<string, string> = {
    tuesday: "2027-04-27",
    wednesday: "2027-04-28",
    thursday: "2027-04-29",
  };
  const dates = list(value)
    .map((item) => {
      const key = item.toLowerCase();
      return Object.entries(map).find(([day]) => key.startsWith(day))?.[1] ?? "";
    })
    .filter(Boolean);
  return dates.length ? dates : ["2027-04-27", "2027-04-28", "2027-04-29"];
}

function sessionFormat(value: string) {
  const next = value.toLowerCase();
  if (next.startsWith("panel")) return "panel";
  if (next.startsWith("workshop")) return "workshop";
  if (next.startsWith("fireside")) return "fireside";
  return "techtalk";
}

async function forward(path: string, body: Record<string, unknown>) {
  const response = await fetch(`${LIVE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const payload = (await response.json().catch(() => ({}))) as { error?: string; id?: string };
  if (!response.ok) throw new SubmitError(payload.error || "Could not save that.", response.status);
  return payload;
}

export async function saveSpeaker(body: Record<string, unknown>) {
  const name = text(body.name, "Full name", 120);
  const talkTitle = text(body.title, "Session title", 140);
  const description = text(body.description, "Session description", 2500);
  const format = sessionFormat(text(body.format, "Session type", 80));
  const day = text(body.theme, "Day", 80);
  const organization = text(body.organization, "Organization", 140, false);
  const payload = {
    name,
    email: email(body.email),
    phone: "",
    company: organization,
    title: organization || "Speaker",
    cityState: "Baltimore, MD",
    talkTitle,
    talkDescription: description,
    takeaways: description.slice(0, 600),
    format,
    preferredNights: ["Any"],
    preferredNeighborhood: "Any",
    topics: ["Other"],
    audienceLevel: "General Audience",
    spokenBefore: "no",
    panelistFallback: "no",
    previousTalks: "",
    accessibility: "",
    notes: `Day: ${day}`,
    linkedinUrl: "",
    websiteUrl: "",
  };
  return forward("/api/speakers", payload);
}

const volunteerRoles: Record<string, string> = {
  "Check-in": "check-in",
  "Set up": "set-up",
  Breakdown: "breakdown",
};

export async function saveVolunteer(body: Record<string, unknown>) {
  const roles = list(body.roles).map((role) => volunteerRoles[role] ?? role);
  const days = datesFor(body.day);
  if (roles.length === 0) throw new SubmitError("Pick at least one role");
  const payload = {
    name: text(body.name, "Name", 120),
    email: email(body.email),
    phone: text(body.phone, "Phone", 40, false),
    roles,
    availableDates: days,
    preferredNeighborhood: "4MLK / Westside",
    notes: text(body.help, "How you want to help", 600, false),
  };
  return forward("/api/volunteers", payload);
}

export async function saveVenue(body: Record<string, unknown>) {
  const cost = text(body.cost, "Cost", 40);
  const costType = cost === "Paid" ? "Standard" : cost === "Not sure" ? "Low-Cost" : "Free";
  const capacity = Number(String(body.capacity ?? "").replace(/[^\d]/g, ""));
  if (!Number.isFinite(capacity) || capacity < 1 || capacity > 5000) {
    throw new SubmitError("Capacity must be between 1 and 5000");
  }
  const concept = text(body.concept, "Event", 180);
  const street = text(body.address, "Address", 160);
  const when = text(body.time, "Time", 40, false);
  const organization = text(body.organization, "Organization", 80, false);
  const contact = text(body.contact, "Contact name", 80);
  const payload = {
    name: text(body.venue, "Venue", 120),
    neighborhood: "Downtown",
    address: `${street} — ${when} — ${concept}`.slice(0, 200),
    capacity,
    availableDates: datesFor(body.day),
    venueType: "hybrid",
    costType,
    costAmount: costType === "Free" ? "" : "1",
    amenities: [],
    contactName: `${contact}${organization ? `, ${organization}` : ""}`.slice(0, 120),
    contactEmail: email(body.email),
  };
  return forward("/api/venues", payload);
}

export async function saveTicket(body: Record<string, unknown>) {
  const payload = {
    email: email(body.email),
    pass: text(body.pass, "Pass", 120, false) || "Updates list",
    name: text(body.name, "Name", 120, false),
  };
  return forward("/api/tickets", payload);
}

export async function saveApplication(body: Record<string, unknown>) {
  const kind = text(body.kind, "Application type", 40);
  const mapped = kind === "exhibitor" ? "partner" : kind;
  if (!["partner", "sponsor", "ambassador"].includes(mapped)) throw new SubmitError("Application type is invalid");
  const name = text(body.name, "Name", 120);
  const organization = text(body.organization, "Organization", 160, mapped !== "ambassador");
  const note = text(body.note ?? body.where ?? body.showing, "Details", 2000);
  const payload = {
    kind: mapped,
    name,
    email: email(body.email),
    organization,
    role: mapped === "ambassador" ? "Ambassador" : mapped === "sponsor" ? "Sponsor" : "Partner",
    website: text(body.website, "Website", 300, false),
    pass: mapped === "sponsor" ? "Talk first" : mapped === "ambassador" ? "Ambassador" : "Partner",
    notes: [`Kind: ${kind}`, organization && `Organization: ${organization}`, note].filter(Boolean).join("\n"),
  };
  return forward("/api/apply", payload);
}
