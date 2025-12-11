import { GlitchText } from "./GlitchText";

export function Footer() {
  return (
    <footer className="border-t-2 border-primary/20 bg-background py-12 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <GlitchText text="BALTIMORE_TECH_WEEK" className="text-2xl mb-4" />
            <p className="text-muted-foreground max-w-md font-mono text-sm">
              Celebrating innovation, entrepreneurship, and the future of technology in Charm City. Join us for a week of events across Baltimore.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono font-bold uppercase text-primary mb-4">Explore</h4>
            <ul className="space-y-2 font-mono text-sm text-muted-foreground">
              <li><a href="/events" className="hover:text-primary transition-colors">Schedule</a></li>
              <li><a href="/speakers" className="hover:text-primary transition-colors">Speakers</a></li>
              <li><a href="/sponsors" className="hover:text-primary transition-colors">Sponsors</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-bold uppercase text-primary mb-4">Connect</h4>
            <ul className="space-y-2 font-mono text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="mailto:hello@baltimoretechweek.com" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © 2025 Baltimore Tech Week. All systems operational.
          </p>
          <div className="flex gap-4 font-mono text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary">Privacy Protocol</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
            <a href="#" className="hover:text-primary">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

