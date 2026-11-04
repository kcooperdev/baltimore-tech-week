import { getSupabase, isSupabaseConfigured } from "@/lib/supabase";

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

async function write(table: string, row: Record<string, unknown>, conflict?: string) {
  if (!isSupabaseConfigured()) {
    throw new SubmitError("We could not save that yet. Email team@bmoretechweek.com.", 503);
  }
  const query = getSupabase().from(table);
  const result = conflict
    ? await query.upsert(row, { onConflict: conflict }).select("id").single()
    : await query.insert(row).select("id").single();
  if (result.error) throw new SubmitError(result.error.message, 500);
  return result.data;
}

export async function saveSpeaker(body: Record<string, unknown>) {
  const name = text(body.name, "Full name", 120);
  const talkTitle = text(body.title, "Session title", 140);
  const description = text(body.description, "Session description", 2500);
  const format = text(body.format, "Session type", 80);
  const day = text(body.theme, "Day", 80);
  const organization = text(body.organization, "Organization", 140, false);
  const details = [description, organization && `Organization: ${organization}`].filter(Boolean).join("\n\n");
  return write("speakers", {
    year: "2027",
    name,
    email: email(body.email),
    talk_title: talkTitle,
    talk_description: details,
    topic: day,
    format,
    preferred_neighborhood: "Any",
    preferred_date: day,
    linkedin_url: "",
    website_url: "",
    portfolio_url: "",
    status: "pending",
  });
}

export async function saveVolunteer(body: Record<string, unknown>) {
  const roles = list(body.roles);
  const days = list(body.day);
  if (roles.length === 0) throw new SubmitError("Pick at least one role");
  if (days.length === 0) throw new SubmitError("Select at least one day");
  return write("volunteers", {
    year: "2027",
    name: text(body.name, "Name", 120),
    email: email(body.email),
    phone: text(body.phone, "Phone", 40, false),
    roles,
    available_dates: days,
    preferred_neighborhood: text(body.neighborhood, "Neighborhood", 80, false) || "4MLK / Westside",
    notes: text(body.help, "How you want to help", 600, false),
    status: "pending",
  });
}

export async function saveVenue(body: Record<string, unknown>) {
  const cost = text(body.cost, "Cost", 40);
  const costType = cost === "Paid" ? "Standard" : cost === "Free" ? "Free" : "Low-Cost";
  const capacity = Number(String(body.capacity ?? "").replace(/[^\d]/g, ""));
  if (!Number.isFinite(capacity) || capacity < 1 || capacity > 5000) {
    throw new SubmitError("Capacity must be between 1 and 5000");
  }
  const amenities = [
    `Event: ${text(body.concept, "Event", 180)}`,
    `Time: ${text(body.time, "Time", 80)}`,
    `Category: ${text(body.category, "Category", 80)}`,
    `Access: ${text(body.access, "Accessibility", 160)}`,
    `Provides: ${text(body.provide, "What you provide", 160)}`,
    `Needs: ${text(body.support, "What you need", 160)}`,
    `Organization: ${text(body.organization, "Organization", 140)}`,
  ];
  return write("venues", {
    year: "2027",
    name: text(body.venue, "Venue", 120),
    neighborhood: "Downtown",
    address: text(body.address, "Address", 200),
    capacity,
    available_dates: [text(body.day, "Day", 80)],
    venue_type: "hybrid",
    cost_type: costType,
    cost_amount: null,
    amenities,
    contact_name: text(body.contact, "Contact name", 120),
    contact_email: email(body.email),
    status: "pending",
  });
}

export async function saveTicket(body: Record<string, unknown>) {
  return write(
    "ticket_signups",
    {
      email: email(body.email),
      pass: text(body.pass, "Pass", 120, false) || "Updates list",
      name: text(body.name, "Name", 120, false),
      notes: "",
    },
    "email",
  );
}

export async function saveApplication(body: Record<string, unknown>) {
  const kind = text(body.kind, "Application type", 40);
  if (!["partner", "sponsor", "ambassador", "exhibitor"].includes(kind)) {
    throw new SubmitError("Application type is invalid");
  }
  const name = text(body.name, "Name", 120);
  const organization = text(body.organization, "Organization", 160, kind !== "ambassador");
  const note = text(body.note ?? body.where ?? body.showing, "Details", 2500);
  const lines = [
    `Kind: ${kind}`,
    organization && `Organization: ${organization}`,
    body.website && `Website: ${text(body.website, "Website", 300, false)}`,
    note && `Notes: ${note}`,
  ]
    .filter(Boolean)
    .join("\n");
  return write(
    "ticket_signups",
    {
      email: email(body.email),
      pass: kind,
      name,
      organization,
      notes: lines,
    },
    "email",
  );
}
