import { ApplyForm } from "@/components/ApplyForm";
import { partnerFields } from "@/lib/involve";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Community Partners",
  "Partner with Baltimore Tech Week for free. For meetups, schools, accelerators, nonprofits, and student groups.",
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
              Partnership is free for meetups, schools, accelerators, nonprofits, and student groups. You already have a circle. We want them in the rooms.
            </p>
            <ul className="side-notes">
              <li>Logo and a listing on this page</li>
              <li>Your name when the week opens and closes</li>
              <li>A thank-you with the other community partners</li>
              <li>A link that counts the people you send</li>
            </ul>
            <p className="plain-lede">What you share: the week, at least once. Include it in your newsletter if you send one. Point your people here.</p>
          </header>
          <ApplyForm
            endpoint="/api/apply"
            extra={{ kind: "partner" }}
            submitLabel="Submit partnership"
            successTitle="Thanks. We have your partner application."
            successBody="If the fit is right, we will write you about listing, shout-outs, and the link you can share. Community partner is free. No invoice."
            fields={partnerFields}
          />
        </div>
      </div>
    </main>
  );
}
