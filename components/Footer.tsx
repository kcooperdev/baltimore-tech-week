import Image from "next/image";
import Link from "next/link";
import { hq, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="harbor-footer">
      <div className="harbor-footer-inner">
        <Link href="/" className="harbor-footer-brand">
          <Image src="/images/baltimore-badge.png" alt="" width={84} height={84} />
          <span>
            Baltimore
            <span>Tech Week</span>
          </span>
        </Link>
        <nav className="harbor-footer-nav" aria-label="Footer">
          {nav.primary.map((item) => (
            <Link key={item.href} href={item.href} className="harbor-footer-link">
              {item.label}
            </Link>
          ))}
          <Link href="/get-involved" className="harbor-footer-link">
            Get Involved
          </Link>
        </nav>
        <div className="harbor-footer-meta">
          <div>
            <p>{site.idea}</p>
            <p>
              {site.when} · {site.year} · {site.datesNote}
            </p>
          </div>
          <div>
            <p>
              {hq.name}
              <br />
              {hq.venue}
              <br />
              {hq.street}
              <br />
              {hq.cityLine}
            </p>
            <p>
              <a href={hq.mapsUrl} target="_blank" rel="noreferrer">
                Directions to 4MLK
              </a>
            </p>
          </div>
          <div>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>
              <a href="https://www.instagram.com/baltimoretechweekhq">Instagram</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/company/baltimore-tech-week-2027">LinkedIn</a>
            </p>
            <p>
              <Link href="/conduct">Code of Conduct</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
