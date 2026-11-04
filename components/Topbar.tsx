"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  const path = href.split("#")[0];
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function Topbar({
  scene = false,
  inertBar = false,
}: {
  scene?: boolean;
  inertBar?: boolean;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [involved, setInvolved] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setInvolved(false);
  }

  return (
    <header className={scene ? "topbar" : "topbar site-topbar"} inert={inertBar ? true : undefined}>
      <button
        type="button"
        className="topbar-burger"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 7h14M5 12h14M5 17h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
      <nav className="topbar-links topbar-desktop" aria-label="Primary">
        {nav.primary.map((item) => (
          <span key={item.href} className="topbar-corner-item">
            <Link className="harbor-link" href={item.href} aria-current={isCurrent(pathname, item.href) ? "page" : undefined}>
              {item.label}
            </Link>
          </span>
        ))}
        <span className="topbar-corner-item topbar-dropdown">
          <button
            type="button"
            className="harbor-link topbar-dropdown-btn"
            aria-expanded={involved}
            onClick={() => setInvolved((value) => !value)}
          >
            Get Involved
            <svg className="topbar-caret" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <div className={involved ? "topbar-dropdown-menu is-open" : "topbar-dropdown-menu"} role="menu">
            {nav.involved.map((item) => (
              <Link key={item.href} role="menuitem" className="topbar-dropdown-item" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </span>
      </nav>
      {open ? (
        <div className="topbar-drawer-layer">
          <button type="button" className="topbar-drawer-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />
          <div className="topbar-drawer" role="dialog" aria-label="Menu">
            <p className="topbar-drawer-brand">
              Baltimore
              <br />
              <span>Tech</span> Week
            </p>
            <p className="topbar-drawer-meta">
              {site.when} · {site.year}
            </p>
            {nav.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="topbar-drawer-link"
                aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <p className="topbar-drawer-label">Get Involved</p>
            {nav.involved.map((item) => (
              <Link key={item.href} href={item.href} className="topbar-drawer-link" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
