"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/speakers", label: "Speakers" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-background/80 backdrop-blur-md overflow-x-hidden">
      <div className="container flex h-16 items-center justify-between gap-2 sm:gap-4">
        <Link href="/" className="flex-shrink-0 min-w-0" onClick={() => setMobileMenuOpen(false)}>
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="h-8 w-8 bg-primary/20 border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors flex-shrink-0">
              <span className="font-mono font-bold">B</span>
            </div>
            <span className="font-mono font-bold tracking-tighter text-xs sm:text-sm md:text-base lg:text-xl truncate">
              <span className="hidden sm:inline">BALTIMORE</span><span className="text-primary">_TECH_WEEK</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 ml-4 xl:ml-12 flex-shrink-0">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span 
                className={cn(
                  "font-mono text-sm font-bold uppercase tracking-widest cursor-pointer hover:text-primary transition-colors whitespace-nowrap",
                  pathname === link.href ? "text-primary underline decoration-2 underline-offset-4" : "text-muted-foreground"
                )}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
          <Button variant="outline" className="font-mono uppercase border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs xl:text-sm px-3 xl:px-4 whitespace-nowrap">
            Get Updates
          </Button>
          <Button className="font-mono uppercase bg-accent text-accent-foreground hover:bg-accent/90 text-xs xl:text-sm px-3 xl:px-4 whitespace-nowrap">
            Register
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 border-2 border-primary text-primary hover:bg-primary hover:text-background transition-colors flex-shrink-0"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-primary/20 bg-background/95 backdrop-blur-md">
          <div className="container py-4 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block py-2 px-4 font-mono text-sm font-bold uppercase tracking-widest transition-colors border-l-2",
                    pathname === link.href
                      ? "text-primary border-primary bg-primary/10"
                      : "text-muted-foreground border-transparent hover:text-primary hover:border-primary/50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Buttons */}
            <div className="pt-4 border-t border-border space-y-2">
              <Button
                variant="outline"
                className="w-full font-mono uppercase border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Updates
              </Button>
              <Button
                className="w-full font-mono uppercase bg-accent text-accent-foreground hover:bg-accent/90 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

