"use client";

import { Button } from "@/components/ui/button";
import { CyberCard } from "@/components/CyberCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Calendar, MapPin, Terminal } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b-2 border-primary/20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
        <Image
              src="/images/hero-bg.png" 
              alt="Baltimore Cyberpunk Cityscape" 
              fill
              className="object-cover opacity-40"
          priority
        />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            <div className="absolute inset-0 bg-[url('/images/event-grid-bg.png')] opacity-20 mix-blend-overlay" />
          </div>

          <div className="container relative z-10 pt-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 border border-primary/50 bg-primary/10 px-4 py-1 rounded-full backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-sm text-primary font-bold tracking-widest">SYSTEM_ONLINE // OCT 13-19, 2025</span>
              </div>
              
              <div className="space-y-2">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-mono font-bold uppercase tracking-tighter leading-none">
                  <span className="block text-foreground drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">BALTIMORE</span>
                  <span className="block text-primary drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">TECH_WEEK</span>
          </h1>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-mono leading-relaxed">
                A decentralized celebration of innovation, startups, and culture across Charm City.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Button size="lg" className="h-14 px-8 text-lg font-mono uppercase bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
                  Get Tickets <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-mono uppercase border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
                  Host Event
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-20 border-b border-border bg-card/50">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Events", value: "50+" },
                { label: "Attendees", value: "5K+" },
                { label: "Speakers", value: "100+" },
                { label: "Venues", value: "20+" },
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-2">
                  <div className="text-4xl md:text-6xl font-mono font-bold text-primary tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Events Preview */}
        <section className="py-24 relative overflow-hidden">
          <div className="container">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-mono font-bold uppercase tracking-tight mb-4">
                  Featured <span className="text-primary">Events</span>
                </h2>
                <p className="text-muted-foreground font-mono">Curated experiences across the city.</p>
              </div>
              <Button variant="link" className="text-primary font-mono uppercase hidden md:flex">
                View Full Schedule <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "AI & Robotics Summit",
                  date: "Oct 13 • 9:00 AM",
                  location: "Port Covington",
                  type: "Conference",
                  color: "border-primary"
                },
                {
                  title: "Charm City Hackathon",
                  date: "Oct 14 • 6:00 PM",
                  location: "ETC Baltimore",
                  type: "Hackathon",
                  color: "border-accent"
                },
                {
                  title: "BioTech Showcase",
                  date: "Oct 15 • 2:00 PM",
                  location: "Johns Hopkins Tech Ventures",
                  type: "Demo Day",
                  color: "border-primary"
                }
              ].map((event, i) => (
                <CyberCard key={i} variant={i === 1 ? "glitch" : "default"} className="h-full flex flex-col justify-between group cursor-pointer">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="inline-block px-2 py-1 text-xs font-mono uppercase border border-border text-muted-foreground">
                        {event.type}
                      </span>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors -rotate-45 group-hover:rotate-0 duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold font-mono leading-tight group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                  </div>
                  <div className="mt-8 space-y-2 border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  </div>
                </CyberCard>
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Button variant="outline" className="w-full font-mono uppercase border-primary text-primary">
                View Full Schedule
              </Button>
            </div>
          </div>
        </section>

        {/* Neighborhoods / Map Teaser */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-mono font-bold uppercase tracking-tight">
                  City-Wide <span className="text-accent">Takeover</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From the historic cobblestones of Fells Point to the innovation hubs of Port Covington, Tech Week activates every corner of Baltimore.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {["Fells Point", "Inner Harbor", "Port Covington", "Remington", "Federal Hill", "Canton"].map((hood) => (
                    <div key={hood} className="flex items-center gap-2 font-mono text-sm text-primary">
                      <Terminal className="h-4 w-4" />
                      {hood}
                    </div>
                  ))}
                </div>

                <Button className="font-mono uppercase bg-primary text-primary-foreground hover:bg-primary/90">
                  Explore Venues
                </Button>
              </div>
              
              <div className="relative aspect-square lg:aspect-video bg-background border-2 border-primary/30 p-2">
                <div className="absolute inset-0 bg-[url('/images/event-grid-bg.png')] opacity-50" />
                <div className="relative h-full w-full bg-background/50 flex items-center justify-center border border-primary/20">
                  <div className="text-center space-y-4">
                    <MapPin className="h-12 w-12 text-accent mx-auto animate-bounce" />
                    <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">Interactive Map Loading...</p>
                  </div>
                </div>
                
                {/* Decorative UI elements */}
                <div className="absolute top-4 right-4 flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-primary/50 rounded-full" />
                  <div className="w-2 h-2 bg-primary/20 rounded-full" />
                </div>
                <div className="absolute bottom-4 left-4 font-mono text-xs text-primary/50">
                  LAT: 39.2904° N // LNG: 76.6122° W
                </div>
              </div>
            </div>
        </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-mono font-bold uppercase tracking-tight">
                Don't Miss a <span className="text-primary">Glitch</span>
              </h2>
              <p className="text-xl text-muted-foreground font-mono">
                Subscribe for schedule drops, VIP event access, and daily briefings.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="ENTER_EMAIL_ADDRESS" 
                  className="flex-1 h-12 px-4 bg-background border-2 border-border focus:border-primary outline-none font-mono text-sm placeholder:text-muted-foreground/50 transition-colors"
                />
                <Button type="submit" className="h-12 px-8 font-mono uppercase bg-primary text-primary-foreground hover:bg-primary/90">
                  Subscribe
                </Button>
              </form>
            </div>
        </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
