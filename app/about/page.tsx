"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CyberCard } from "@/components/CyberCard";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Target, Heart, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Events", value: "50+", icon: Calendar },
  { label: "Attendees", value: "5,000+", icon: Users },
  { label: "Speakers", value: "100+", icon: Users },
  { label: "Venues", value: "20+", icon: MapPin },
];

const values = [
  {
    title: "Innovation",
    description: "Celebrating cutting-edge technology and forward-thinking solutions that drive progress.",
    icon: "💡"
  },
  {
    title: "Community",
    description: "Building connections and fostering collaboration among Baltimore's tech ecosystem.",
    icon: "🤝"
  },
  {
    title: "Diversity",
    description: "Creating an inclusive environment where everyone can thrive and contribute.",
    icon: "🌈"
  },
  {
    title: "Growth",
    description: "Supporting career development and entrepreneurial success in technology.",
    icon: "🚀"
  }
];

const team = [
  {
    name: "Alexandra Chen",
    role: "Event Director",
    bio: "10+ years organizing tech conferences and community events."
  },
  {
    name: "Marcus Williams",
    role: "Community Lead",
    bio: "Building Baltimore's tech community since 2018."
  },
  {
    name: "Sarah Johnson",
    role: "Partnerships Manager",
    bio: "Connecting startups with opportunities and resources."
  },
  {
    name: "David Park",
    role: "Technical Director",
    bio: "Ensuring seamless experiences for all attendees."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-20 border-b-2 border-primary/20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-mono font-bold uppercase tracking-tighter mb-6">
                About <span className="text-primary">Tech Week</span>
              </h1>
              <p className="text-xl text-muted-foreground font-mono leading-relaxed">
                Baltimore Tech Week is a decentralized celebration of innovation, entrepreneurship, and technology across Charm City.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 border-b border-border">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-mono font-bold uppercase tracking-tight mb-6">
                  Our <span className="text-primary">Mission</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Baltimore Tech Week brings together developers, entrepreneurs, investors, and innovators for a week-long celebration of technology and innovation. Our mission is to showcase Baltimore's thriving tech ecosystem, foster meaningful connections, and inspire the next generation of tech leaders.
                  </p>
                  <p>
                    From the historic neighborhoods of Fells Point to the innovation hubs of Port Covington, Tech Week activates every corner of the city with events, workshops, networking opportunities, and thought-provoking discussions.
                  </p>
                  <p>
                    Whether you're a seasoned professional, a startup founder, a student, or simply curious about technology, Baltimore Tech Week has something for everyone.
                  </p>
                </div>
              </div>
              <CyberCard variant="neon" className="h-full">
                <div className="space-y-6">
                  <Target className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-2xl font-mono font-bold uppercase mb-4">
                      What We Do
                    </h3>
                    <ul className="space-y-3 font-mono text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Organize 50+ events across Baltimore</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Connect startups with investors and mentors</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Showcase local tech talent and innovation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Provide learning and career development opportunities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>Build a stronger, more connected tech community</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CyberCard>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 border-b border-border bg-card/30">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="text-center space-y-3">
                    <Icon className="h-8 w-8 text-primary mx-auto" />
                    <div className="text-4xl md:text-6xl font-mono font-bold text-primary tracking-tighter">
                      {stat.value}
                    </div>
                    <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 border-b border-border">
          <div className="container">
            <h2 className="text-4xl font-mono font-bold uppercase tracking-tight mb-12 text-center">
              Our <span className="text-primary">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <CyberCard key={i} variant="default" className="h-full text-center">
                  <div className="space-y-4">
                    <div className="text-5xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-mono font-bold uppercase">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </CyberCard>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 border-b border-border">
          <div className="container">
            <h2 className="text-4xl font-mono font-bold uppercase tracking-tight mb-12 text-center">
              Our <span className="text-primary">Team</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <CyberCard key={i} variant="default" className="h-full">
                  <div className="space-y-4">
                    <div className="w-20 h-20 border-2 border-primary bg-primary/10 flex items-center justify-center font-mono font-bold text-2xl mx-auto">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-mono font-bold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm font-mono text-primary mb-2">
                        {member.role}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </CyberCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container">
            <CyberCard variant="glitch" className="max-w-3xl mx-auto text-center">
              <div className="space-y-6">
                <Heart className="h-12 w-12 text-accent mx-auto" />
                <div>
                  <h2 className="text-3xl font-mono font-bold uppercase mb-4">
                    Join the <span className="text-primary">Movement</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Baltimore Tech Week is a community-driven event. Whether you want to host an event, volunteer, or get involved, we'd love to hear from you.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/events">
                    <Button className="font-mono uppercase bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                      View Events <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" className="font-mono uppercase border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
                    <Mail className="mr-2 h-4 w-4" />
                    Get Involved
                  </Button>
                </div>
              </div>
            </CyberCard>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

