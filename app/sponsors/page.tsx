"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CyberCard } from "@/components/CyberCard";
import { Button } from "@/components/ui/button";
import { Building2, Globe, Mail, ArrowRight, Star } from "lucide-react";

const sponsorTiers = {
  platinum: [
    {
      id: 1,
      name: "TechVenture Capital",
      logo: "TVC",
      description: "Leading venture capital firm investing in early-stage tech startups across the Mid-Atlantic region.",
      website: "techventure.capital",
      category: "Venture Capital"
    },
    {
      id: 2,
      name: "CloudScale Technologies",
      logo: "CST",
      description: "Enterprise cloud solutions provider helping businesses scale with cutting-edge infrastructure.",
      website: "cloudscale.io",
      category: "Cloud Services"
    },
    {
      id: 3,
      name: "InnovateNow",
      logo: "IN",
      description: "B2B SaaS platform revolutionizing how teams collaborate and innovate.",
      website: "innovatenow.com",
      category: "SaaS"
    }
  ],
  gold: [
    {
      id: 4,
      name: "DataDriven Inc",
      logo: "DD",
      description: "AI-powered analytics platform transforming how companies make data-driven decisions.",
      website: "datadriven.io",
      category: "Analytics"
    },
    {
      id: 5,
      name: "SecureNet Systems",
      logo: "SNS",
      description: "Cybersecurity solutions protecting critical infrastructure and enterprise networks.",
      website: "securenet.systems",
      category: "Cybersecurity"
    },
    {
      id: 6,
      name: "BioInnovate Labs",
      logo: "BIL",
      description: "Biotechnology company developing next-generation therapeutics using AI and machine learning.",
      website: "bioinnovate.com",
      category: "Biotech"
    },
    {
      id: 7,
      name: "RoboTech Solutions",
      logo: "RTS",
      description: "Autonomous systems and robotics solutions for industrial and commercial applications.",
      website: "robotech.io",
      category: "Robotics"
    }
  ],
  silver: [
    {
      id: 8,
      name: "CodeForge Development",
      logo: "CFD",
      description: "Custom software development and consulting services.",
      category: "Development"
    },
    {
      id: 9,
      name: "Digital Nexus",
      logo: "DN",
      description: "Digital transformation consulting for mid-market companies.",
      category: "Consulting"
    },
    {
      id: 10,
      name: "Quantum Computing Labs",
      logo: "QCL",
      description: "Research and development in quantum computing applications.",
      category: "Research"
    },
    {
      id: 11,
      name: "MobileFirst Solutions",
      logo: "MFS",
      description: "Mobile app development and enterprise mobility solutions.",
      category: "Mobile"
    },
    {
      id: 12,
      name: "DevOps Dynamics",
      logo: "DD",
      description: "CI/CD pipelines and infrastructure automation services.",
      category: "DevOps"
    },
    {
      id: 13,
      name: "AI Solutions Group",
      logo: "ASG",
      description: "Machine learning consulting and custom AI implementations.",
      category: "AI Services"
    }
  ],
  community: [
    {
      id: 14,
      name: "Baltimore Tech Hub",
      logo: "BTH",
      description: "Community organization supporting Baltimore's tech ecosystem.",
      category: "Community"
    },
    {
      id: 15,
      name: "Charm City Coders",
      logo: "CCC",
      description: "Local developer meetup and networking group.",
      category: "Community"
    },
    {
      id: 16,
      name: "Women Who Code Baltimore",
      logo: "WWC",
      description: "Supporting women in technology careers.",
      category: "Community"
    },
    {
      id: 17,
      name: "Baltimore Startup Founders",
      logo: "BSF",
      description: "Network of entrepreneurs and startup founders.",
      category: "Community"
    }
  ]
};

export default function SponsorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-20 border-b-2 border-primary/20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-mono font-bold uppercase tracking-tighter mb-6">
                Our <span className="text-primary">Sponsors</span>
              </h1>
              <p className="text-xl text-muted-foreground font-mono leading-relaxed mb-8">
                Baltimore Tech Week is made possible by the generous support of our sponsors. These organizations are committed to building a stronger tech community in Charm City.
              </p>
              <Button className="font-mono uppercase bg-accent text-accent-foreground hover:bg-accent/90">
                Become a Sponsor <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Platinum Sponsors */}
        <section className="py-16 border-b border-border">
          <div className="container">
            <div className="flex items-center gap-3 mb-8">
              <Star className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-mono font-bold uppercase tracking-tight">
                Platinum Sponsors
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sponsorTiers.platinum.map((sponsor) => (
                <CyberCard key={sponsor.id} variant="neon" className="h-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 border-2 border-primary bg-primary/10 flex items-center justify-center font-mono font-bold text-xl">
                        {sponsor.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-mono">{sponsor.name}</h3>
                        <p className="text-xs font-mono text-muted-foreground uppercase">
                          {sponsor.category}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {sponsor.description}
                    </p>
                    {sponsor.website && (
                      <a
                        href={`https://${sponsor.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:underline"
                      >
                        <Globe className="h-4 w-4" />
                        {sponsor.website}
                      </a>
                    )}
                  </div>
                </CyberCard>
              ))}
            </div>
          </div>
        </section>

        {/* Gold Sponsors */}
        <section className="py-16 border-b border-border">
          <div className="container">
            <h2 className="text-3xl font-mono font-bold uppercase tracking-tight mb-8">
              Gold Sponsors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsorTiers.gold.map((sponsor) => (
                <CyberCard key={sponsor.id} variant="default" className="h-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 border-2 border-primary bg-primary/10 flex items-center justify-center font-mono font-bold text-sm">
                        {sponsor.logo}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold font-mono">{sponsor.name}</h3>
                        <p className="text-xs font-mono text-muted-foreground uppercase">
                          {sponsor.category}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {sponsor.description}
                    </p>
                    {sponsor.website && (
                      <a
                        href={`https://${sponsor.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono text-primary hover:underline"
                      >
                        <Globe className="h-3 w-3" />
                        Visit Website
                      </a>
                    )}
                  </div>
                </CyberCard>
              ))}
            </div>
          </div>
        </section>

        {/* Silver Sponsors */}
        <section className="py-16 border-b border-border">
          <div className="container">
            <h2 className="text-3xl font-mono font-bold uppercase tracking-tight mb-8">
              Silver Sponsors
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {sponsorTiers.silver.map((sponsor) => (
                <CyberCard key={sponsor.id} variant="default" className="h-full">
                  <div className="space-y-3 text-center">
                    <div className="w-16 h-16 border-2 border-primary bg-primary/10 flex items-center justify-center font-mono font-bold text-sm mx-auto">
                      {sponsor.logo}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold font-mono mb-1">{sponsor.name}</h3>
                      <p className="text-xs font-mono text-muted-foreground uppercase">
                        {sponsor.category}
                      </p>
                    </div>
                  </div>
                </CyberCard>
              ))}
            </div>
          </div>
        </section>

        {/* Community Partners */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-mono font-bold uppercase tracking-tight mb-8">
              Community Partners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sponsorTiers.community.map((sponsor) => (
                <CyberCard key={sponsor.id} variant="default" className="h-full">
                  <div className="space-y-3 text-center">
                    <div className="w-14 h-14 border-2 border-accent bg-accent/10 flex items-center justify-center font-mono font-bold text-xs mx-auto">
                      {sponsor.logo}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold font-mono mb-1">{sponsor.name}</h3>
                      <p className="text-xs font-mono text-muted-foreground">
                        {sponsor.description}
                      </p>
                    </div>
                  </div>
                </CyberCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 border-t border-border bg-card/30">
          <div className="container">
            <CyberCard variant="neon" className="max-w-3xl mx-auto text-center">
              <div className="space-y-6">
                <Building2 className="h-12 w-12 text-primary mx-auto" />
                <div>
                  <h2 className="text-3xl font-mono font-bold uppercase mb-4">
                    Join Our <span className="text-primary">Sponsor</span> Community
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Support Baltimore's tech ecosystem and connect with thousands of developers, entrepreneurs, and innovators. Multiple sponsorship tiers available.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="font-mono uppercase bg-primary text-primary-foreground hover:bg-primary/90">
                    View Sponsorship Packages
                  </Button>
                  <Button variant="outline" className="font-mono uppercase border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Us
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

