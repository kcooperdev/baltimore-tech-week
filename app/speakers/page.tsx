"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CyberCard } from "@/components/CyberCard";
import { Twitter, Linkedin, Globe, Mail } from "lucide-react";

const speakers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Chief AI Officer",
    company: "TechVision Labs",
    bio: "Leading researcher in machine learning and neural networks with 15+ years of experience. Former Google AI researcher.",
    image: "https://i.pravatar.cc/300?img=1",
    topics: ["Artificial Intelligence", "Machine Learning", "Neural Networks"],
    social: {
      twitter: "@sarahchenai",
      linkedin: "sarah-chen-ai",
      website: "sarahchen.ai"
    }
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Founder & CEO",
    company: "RoboTech Solutions",
    bio: "Serial entrepreneur building the next generation of autonomous systems. Y Combinator alum.",
    image: "https://i.pravatar.cc/300?img=12",
    topics: ["Robotics", "Autonomous Systems", "Entrepreneurship"],
    social: {
      twitter: "@mrodriguez",
      linkedin: "michael-rodriguez",
      website: "robotech.io"
    }
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    title: "Research Director",
    company: "Johns Hopkins University",
    bio: "Pioneering work in CRISPR gene editing and personalized medicine. Published 100+ papers in top journals.",
    image: "https://i.pravatar.cc/300?img=5",
    topics: ["Biotechnology", "Gene Editing", "Personalized Medicine"],
    social: {
      twitter: "@emilywatsonbio",
      linkedin: "emily-watson-phd",
      website: "jhu.edu"
    }
  },
  {
    id: 4,
    name: "Jennifer Martinez",
    title: "VP of Engineering",
    company: "CloudScale Technologies",
    bio: "Engineering leader scaling teams from startup to IPO. Passionate advocate for diversity in tech.",
    image: "https://i.pravatar.cc/300?img=9",
    topics: ["Engineering Leadership", "Cloud Computing", "Diversity & Inclusion"],
    social: {
      twitter: "@jenmartinez",
      linkedin: "jennifer-martinez",
      website: "cloudscale.io"
    }
  },
  {
    id: 5,
    name: "David Lee",
    title: "Blockchain Architect",
    company: "Decentralized Systems",
    bio: "Building decentralized infrastructure for the next web. Ethereum core contributor.",
    image: "https://i.pravatar.cc/300?img=15",
    topics: ["Blockchain", "Web3", "Cryptocurrency"],
    social: {
      twitter: "@davidleebtc",
      linkedin: "david-lee-blockchain",
      website: "decentralized.systems"
    }
  },
  {
    id: 6,
    name: "Dr. James Park",
    title: "Senior Research Scientist",
    company: "MIT CSAIL",
    bio: "Expert in computer vision and deep learning. Inventor of breakthrough image recognition algorithms.",
    image: "https://i.pravatar.cc/300?img=20",
    topics: ["Computer Vision", "Deep Learning", "Image Recognition"],
    social: {
      twitter: "@jamesparkai",
      linkedin: "james-park-phd",
      website: "csail.mit.edu"
    }
  },
  {
    id: 7,
    name: "Rachel Kim",
    title: "Chief Product Officer",
    company: "InnovateNow",
    bio: "Product strategist with track record of launching successful B2B SaaS platforms. Former Amazon PM.",
    image: "https://i.pravatar.cc/300?img=33",
    topics: ["Product Strategy", "SaaS", "User Experience"],
    social: {
      twitter: "@rachelkim",
      linkedin: "rachel-kim-cpo",
      website: "innovatenow.com"
    }
  },
  {
    id: 8,
    name: "Dr. Robert Kim",
    title: "Co-Founder",
    company: "BioInnovate Labs",
    bio: "Transforming drug discovery with AI-powered platforms. Raised $50M+ in Series B funding.",
    image: "https://i.pravatar.cc/300?img=47",
    topics: ["Biotech", "Drug Discovery", "AI in Healthcare"],
    social: {
      twitter: "@robertkimbio",
      linkedin: "robert-kim-phd",
      website: "bioinnovate.com"
    }
  },
  {
    id: 9,
    name: "Alex Chen",
    title: "Senior Developer Advocate",
    company: "Ethereum Foundation",
    bio: "Educating developers on Web3 technologies. Host of popular blockchain podcast with 100K+ listeners.",
    image: "https://i.pravatar.cc/300?img=51",
    topics: ["Web3", "Developer Relations", "Smart Contracts"],
    social: {
      twitter: "@alexchenweb3",
      linkedin: "alex-chen-dev",
      website: "ethereum.org"
    }
  },
  {
    id: 10,
    name: "Dr. Amanda Foster",
    title: "Chief Data Officer",
    company: "DataDriven Inc",
    bio: "Data science leader helping Fortune 500 companies leverage AI. Former Netflix data scientist.",
    image: "https://i.pravatar.cc/300?img=68",
    topics: ["Data Science", "Big Data", "Analytics"],
    social: {
      twitter: "@amandafoster",
      linkedin: "amanda-foster-phd",
      website: "datadriven.io"
    }
  },
  {
    id: 11,
    name: "Dr. Lisa Thompson",
    title: "Principal Investigator",
    company: "NIH National Cancer Institute",
    bio: "Leading cancer research using computational biology. Recipient of prestigious research awards.",
    image: "https://i.pravatar.cc/300?img=27",
    topics: ["Computational Biology", "Cancer Research", "Bioinformatics"],
    social: {
      twitter: "@lisathompson",
      linkedin: "lisa-thompson-phd",
      website: "nih.gov"
    }
  },
  {
    id: 12,
    name: "Marcus Johnson",
    title: "CTO",
    company: "SecureNet Systems",
    bio: "Cybersecurity expert protecting critical infrastructure. Former NSA security researcher.",
    image: "https://i.pravatar.cc/300?img=32",
    topics: ["Cybersecurity", "Infrastructure Security", "Threat Intelligence"],
    social: {
      twitter: "@marcusjohnson",
      linkedin: "marcus-johnson-cto",
      website: "securenet.systems"
    }
  }
];

export default function SpeakersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-20 border-b-2 border-primary/20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-mono font-bold uppercase tracking-tighter mb-6">
                Featured <span className="text-primary">Speakers</span>
              </h1>
              <p className="text-xl text-muted-foreground font-mono leading-relaxed">
                Learn from industry leaders, researchers, and innovators shaping the future of technology.
              </p>
            </div>
          </div>
        </section>

        {/* Speakers Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakers.map((speaker) => (
                <CyberCard key={speaker.id} variant="default" className="h-full flex flex-col">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start gap-4">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-20 h-20 rounded-sm border-2 border-primary object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold font-mono mb-1">
                          {speaker.name}
                        </h3>
                        <p className="text-sm font-mono text-primary mb-1">
                          {speaker.title}
                        </p>
                        <p className="text-xs font-mono text-muted-foreground">
                          {speaker.company}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {speaker.bio}
                    </p>

                    <div className="space-y-2">
                      <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        Topics
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {speaker.topics.map((topic, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs font-mono border border-border bg-card text-primary"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-4">
                      {speaker.social.twitter && (
                        <a
                          href={`https://twitter.com/${speaker.social.twitter.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Twitter"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                      {speaker.social.linkedin && (
                        <a
                          href={`https://linkedin.com/in/${speaker.social.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {speaker.social.website && (
                        <a
                          href={`https://${speaker.social.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Website"
                        >
                          <Globe className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </CyberCard>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

