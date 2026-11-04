import type { ReactNode } from "react";
import Image from "next/image";

export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-hero" id="main">
      <Image className="page-hero-plate" src="/images/harbor-night.jpg" alt="" fill priority sizes="100vw" />
      <div className="page-hero-shade" />
      <div className="page-hero-copy">
        {eyebrow ? (
          <p className="night-meta">
            <span>{eyebrow}</span>
          </p>
        ) : null}
        <h1 className="night-title-mark">{title}</h1>
        <p className="page-hero-lede">{lede}</p>
        {children ? <div className="page-hero-actions">{children}</div> : null}
      </div>
    </header>
  );
}
