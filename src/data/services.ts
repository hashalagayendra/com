export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "marketing",
    name: "Marketing",
    description:
      "Strategic, creative, and performance-led brand activations that build enduring momentum. We craft campaigns that capture cultural attention and convert interest into loyal brand advocates.",
    capabilities: [
      "Integrated Campaign Strategy",
      "Creative Concepts & Art Direction",
      "Paid Media & Performance Growth",
      "Creator & Influencer Ecosystems",
      "Content Engines & Social Strategy",
      "Experiential & Pop-up Activations",
    ],
  },
  {
    id: "design",
    name: "Design",
    description:
      "Uncompromising visual systems and digital product design that define category leaders. We turn complex propositions into crystal-clear, unforgettable aesthetics.",
    capabilities: [
      "Visual Identity Systems",
      "Design Systems & Token Architecture",
      "UI/UX & Product Design",
      "Motion Graphics & 3D Visuals",
      "Packaging & Editorial Print",
      "Brand Guidelines & Toolkits",
    ],
  },
  {
    id: "communications",
    name: "Communications & PR",
    description:
      "High-stakes narrative design, tier-one global media relations, and crisis advisory. We tell stories that command the headlines of the world's most influential publications.",
    capabilities: [
      "Global PR & Media Relations",
      "Strategic Narrative Architecture",
      "Executive Profiling & Thought Leadership",
      "Funding & M&A Announcement Campaigns",
      "Crisis Preparedness & Advisory",
      "Event PR & Keynote Production",
    ],
  },
  {
    id: "development",
    name: "Web Development",
    description:
      "State-of-the-art web applications, headless commerce, and interactive digital flagships built with Next.js, WebGL, and flawless performance benchmarks.",
    capabilities: [
      "Custom Next.js & React Architecture",
      "Interactive 3D & Creative Coding",
      "Headless CMS (Sanity, Strapi, Contentful)",
      "High-Conversion eCommerce",
      "Speed & Core Web Vitals Optimization",
      "Full Stack API & Cloud Infrastructure",
    ],
  },
  {
    id: "launches",
    name: "Launches",
    description:
      "From zero-day stealth debuts to milestone product drops. We synchronize PR, marketing, web development, and influencer seeding for maximum debut impact.",
    capabilities: [
      "Go-To-Market Masterplanning",
      "Global Stealth-to-Public Debuts",
      "Product Drop & Hype Architecture",
      "Waitlist & Viral Growth Loops",
      "Press Embargo Orchestration",
      "Synchronous Multi-Market Rollouts",
    ],
  },
  {
    id: "branding",
    name: "Branding",
    description:
      "Holistic brand building from the bedrock up. We unearth your singular truth and translate it into a brand world that resonates globally.",
    capabilities: [
      "Brand Positioning & Naming",
      "Audience Archetypes & Market Research",
      "Tone of Voice & Verbal Identity",
      "Mission, Vision & Core Values",
      "Brand Architecture & Portfolio Strategy",
      "Internal Brand Culture Enablement",
    ],
  },
];
