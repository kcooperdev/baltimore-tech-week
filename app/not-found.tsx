import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle, Terminal } from "lucide-react";
import { CyberCard } from "@/components/CyberCard";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <CyberCard variant="glitch" className="text-center">
              <div className="space-y-8">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
                    <AlertTriangle className="relative h-16 w-16 text-primary" />
                  </div>
                </div>

                <div>
                  <h1 className="text-6xl md:text-8xl font-mono font-bold uppercase tracking-tighter mb-4">
                    <span className="text-primary">404</span>
                  </h1>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Terminal className="h-5 w-5 text-muted-foreground" />
                    <p className="font-mono text-lg uppercase tracking-widest text-muted-foreground">
                      PAGE_NOT_FOUND
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                    <br />
                    It may have been deleted or the URL might be incorrect.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link href="/">
                    <Button className="font-mono uppercase bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                      <Home className="mr-2 h-4 w-4" />
                      Return Home
                    </Button>
                  </Link>
                  <Link href="/events">
                    <Button variant="outline" className="font-mono uppercase border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
                      View Events
                    </Button>
                  </Link>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="font-mono text-xs text-muted-foreground">
                    ERROR_CODE: 404 // STATUS: NOT_FOUND // SYSTEM: OPERATIONAL
                  </p>
                </div>
              </div>
            </CyberCard>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

