import { ApplyForm } from "@/components/ApplyForm";
import { partnerFields } from "@/lib/involve";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Community Partners",
  "Free for meetups, schools, accelerators, nonprofits, and student groups that already gather people in Baltimore.",
);

export default function PartnersPage() {
  return (
    <main className="plain-page">
      <div className="page-top">
        <div className="week-wrap split">
          <header id="main">
            <p className="week-kicker">Community partner · Free</p>
            <h1>Partner</h1>
            <p className="plain-lede">
              Free for meetups, schools, accelerators, nonprofits, and student groups. You already have people who show up for you. Send them.
            </p>
            <ul className="side-notes">
              <li>Your logo on this page.</li>
              <li>Your name when the week starts, and when it ends.</li>
              <li>A thank-you next to the other groups.</li>
              <li>A link that counts who you sent.</li>
            </ul>
            <p className="plain-lede">Tell them once. Put it in the newsletter if you have one. Use the link so we can see they came from you.</p>
          </header>
          <ApplyForm
            endpoint="/api/apply"
            extra={{ kind: "partner" }}
            submitLabel="Submit partnership"
            successTitle="Thanks. We have your partner application."
            successBody="If we list you, we will send the details and the link. It is free."
            fields={partnerFields}
          />
        </div>
      </div>
    </main>
  );
}
