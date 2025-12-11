"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CyberCard } from "@/components/CyberCard";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, ArrowRight, Filter } from "lucide-react";
import { useState } from "react";

const events = [
  {
    id: 1,
    title: "AI & Robotics Summit",
    date: "Oct 13, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Port Covington Innovation Center",
    address: "1500 Whetstone Way, Baltimore, MD 21230",
    type: "Conference",
    attendees: "500+",
    description: "Explore the future of artificial intelligence and robotics with industry leaders, hands-on workshops, and cutting-edge demonstrations.",
    speakers: ["Dr. Sarah Chen", "Michael Rodriguez", "Dr. James Park"],
    price: "Free",
    category: "Technology"
  },
  {
    id: 2,
    title: "Charm City Hackathon",
    date: "Oct 14-15, 2025",
    time: "6:00 PM - 6:00 PM (24hr)",
    location: "ETC Baltimore",
    address: "101 N Haven St, Baltimore, MD 21224",
    type: "Hackathon",
    attendees: "200+",
    description: "A 24-hour coding marathon where developers, designers, and entrepreneurs come together to build innovative solutions for Baltimore.",
    speakers: ["Tech Mentors", "Industry Judges"],
    price: "Free",
    category: "Hackathon"
  },
  {
    id: 3,
    title: "BioTech Showcase",
    date: "Oct 15, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Johns Hopkins Tech Ventures",
    address: "3400 N Charles St, Baltimore, MD 21218",
    type: "Demo Day",
    attendees: "300+",
    description: "Showcase of groundbreaking biotech startups and research from Baltimore's world-renowned institutions.",
    speakers: ["Dr. Emily Watson", "Dr. Robert Kim", "Dr. Lisa Thompson"],
    price: "Free",
    category: "Biotech"
  },
  {
    id: 4,
    title: "Startup Pitch Night",
    date: "Oct 16, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Impact Hub Baltimore",
    address: "10 E North Ave, Baltimore, MD 21202",
    type: "Pitch Event",
    attendees: "150+",
    description: "Watch local startups pitch their ideas to investors and compete for funding opportunities.",
    speakers: ["VC Panel", "Angel Investors"],
    price: "$25",
    category: "Startup"
  },
  {
    id: 5,
    title: "Women in Tech Leadership Panel",
    date: "Oct 17, 2025",
    time: "11:00 AM - 1:00 PM",
    location: "University of Baltimore",
    address: "1420 N Charles St, Baltimore, MD 21201",
    type: "Panel Discussion",
    attendees: "200+",
    description: "Inspiring conversation with Baltimore's leading women in technology about career growth, leadership, and innovation.",
    speakers: ["Jennifer Martinez", "Dr. Amanda Foster", "Rachel Kim"],
    price: "Free",
    category: "Community"
  },
  {
    id: 6,
    title: "Blockchain & Web3 Workshop",
    date: "Oct 17, 2025",
    time: "3:00 PM - 6:00 PM",
    location: "Spark Baltimore",
    address: "8 Market Pl, Baltimore, MD 21202",
    type: "Workshop",
    attendees: "100+",
    description: "Hands-on workshop exploring blockchain technology, smart contracts, and the future of decentralized applications.",
    speakers: ["David Lee", "Alex Chen"],
    price: "$50",
    category: "Technology"
  },
  {
    id: 7,
    title: "Tech Career Fair",
    date: "Oct 18, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Baltimore Convention Center",
    address: "1 W Pratt St, Baltimore, MD 21201",
    type: "Career Fair",
    attendees: "1000+",
    description: "Connect with top tech companies in Baltimore. Bring your resume and network with hiring managers from leading organizations.",
    speakers: ["Recruiters", "HR Teams"],
    price: "Free",
    category: "Career"
  },
  {
    id: 8,
    title: "Closing Night Celebration",
    date: "Oct 19, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "American Visionary Art Museum",
    address: "800 Key Hwy, Baltimore, MD 21230",
    type: "Networking",
    attendees: "500+",
    description: "Celebrate the end of Tech Week with food, drinks, music, and networking. Open to all attendees.",
    speakers: ["DJ Set", "Live Music"],
    price: "$30",
    category: "Networking"
  }
];

const categories = ["All", "Technology", "Hackathon", "Biotech", "Startup", "Community", "Career", "Networking"];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-20 border-b-2 border-primary/20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-mono font-bold uppercase tracking-tighter mb-6">
                Event <span className="text-primary">Schedule</span>
              </h1>
              <p className="text-xl text-muted-foreground font-mono leading-relaxed">
                Join us for a week of innovation, networking, and discovery across Baltimore's tech ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-8 border-b border-border bg-card/30 sticky top-16 z-40 backdrop-blur-sm">
          <div className="container">
            <div className="flex items-center gap-4 overflow-x-auto">
              <Filter className="h-5 w-5 text-primary shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-4 py-2 font-mono text-sm uppercase tracking-widest border-2 transition-all whitespace-nowrap
                    ${selectedCategory === category
                      ? "border-primary text-primary bg-primary/10"
                      : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredEvents.map((event) => (
                <CyberCard key={event.id} variant={event.id === 2 ? "glitch" : "default"} className="h-full flex flex-col">
                  <div className="flex-1 space-y-6">
                    <div className="flex items-start justify-between">
                      <span className="inline-block px-3 py-1 text-xs font-mono uppercase border-2 border-primary text-primary bg-primary/10">
                        {event.type}
                      </span>
                      <span className="font-mono text-sm font-bold text-accent">
                        {event.price}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-3xl font-bold font-mono mb-4 leading-tight hover:text-primary transition-colors">
                        {event.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    <div className="space-y-3 border-t border-border pt-4">
                      <div className="flex items-center gap-3 text-sm font-mono">
                        <Calendar className="h-4 w-4 text-primary shrink-0" />
                        <span>{event.date}</span>
                        <Clock className="h-4 w-4 text-primary shrink-0 ml-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-start gap-3 text-sm font-mono">
                        <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">{event.location}</div>
                          <div className="text-muted-foreground text-xs">{event.address}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm font-mono">
                        <Users className="h-4 w-4 text-primary shrink-0" />
                        <span>{event.attendees} expected</span>
                      </div>
                    </div>

                    {event.speakers && event.speakers.length > 0 && (
                      <div className="pt-4 border-t border-border">
                        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                          Featured Speakers
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {event.speakers.map((speaker, idx) => (
                            <span key={idx} className="px-2 py-1 text-xs font-mono border border-border bg-card">
                              {speaker}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <Button className="w-full font-mono uppercase bg-primary text-primary-foreground hover:bg-primary/90">
                      Register Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CyberCard>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl font-mono text-muted-foreground">
                  No events found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

