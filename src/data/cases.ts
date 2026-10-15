export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  categories: string[];
  image: string;
  client: string;
  year: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "hayday",
    title: "Hay Day",
    tagline: "World's most loved farming game",
    categories: ["Branding", "Design", "Marketing", "Launches"],
    image: "/images/hayday.jpg",
    client: "Supercell",
    year: "2024",
    overview:
      "Hay Day turned 10, and Supercell entrusted Bou to create a decade-anniversary brand milestone that honoured long-time players while attracting modern mobile gamers through cozy social storytelling and limited merchandise.",
    challenge:
      "How do you reinvigorate a legendary mobile classic without alienating its dedicated fanbase of over 100 million active farmers?",
    solution:
      "We crafted an immersive multi-channel campaign celebrating the warmth, humor, and cozy vibes of the countryside. From interactive digital experiences to bespoke anniversary kits and global launch events.",
    deliverables: [
      "10th Anniversary Identity System",
      "Global Creator Launch Campaign",
      "Experiential Pop-Up Concepts",
      "Social-First Motion & Video Series",
    ],
    metrics: [
      { label: "Global Impressions", value: "85M+" },
      { label: "Re-engagement Lift", value: "+34%" },
      { label: "App Store Feature", value: "#1 Global" },
    ],
    quote: {
      text: "Working with Bou was effortless. Their insight-driven creativity and deep understanding of the game made the idea an instant standout.",
      author: "Supercell Team",
      role: "Global Marketing Lead, Hay Day",
    },
  },
  {
    id: "kuvaspace",
    title: "Kuva Space",
    tagline: "Pioneering planetary intelligence company",
    categories: ["Branding", "Design", "Web Development"],
    image: "/images/kuvaspace.jpg",
    client: "Kuva Space",
    year: "2024",
    overview:
      "Kuva Space operates hyperspectral nanosatellites that monitor biodiversity, carbon capture, and national security from low Earth orbit. Bou spearheaded their comprehensive global rebrand and interactive digital headquarters.",
    challenge:
      "Translate complex space technology and astrophysics into an accessible, authoritative, and awe-inspiring brand identity that speaks to investors, defense partners, and environmental agencies.",
    solution:
      "A clean, cosmic design system anchored by real-time orbital data visualizations, interactive spectral light simulations, and high-performance WebGL web architecture.",
    deliverables: [
      "Full Corporate Rebrand & Design System",
      "Custom Typography & Iconography",
      "Interactive 3D Satellite Experience",
      "Investor Pitch System & Brand Guidelines",
    ],
    metrics: [
      { label: "Seed Funding Closed", value: "€16.6M" },
      { label: "Session Duration Lift", value: "+210%" },
      { label: "Global Press Features", value: "40+" },
    ],
    quote: {
      text: "Bou captured the scale of our vision instantly. They transformed deep-tech space science into a world-class brand identity.",
      author: "Jarkko Antila",
      role: "CEO, Kuva Space",
    },
  },
  {
    id: "polyai",
    title: "PolyAI",
    tagline: "Elevating the world's most lifelike voice AI",
    categories: ["Branding", "Design", "Marketing", "Web Development"],
    image: "/images/polyai.jpg",
    client: "PolyAI London",
    year: "2024",
    overview:
      "PolyAI powers voice assistants that sound unmistakably human for global enterprise leaders including Caesars, FedEx, and Marriott. Bou redesigned their brand identity and web flagship to bridge warmth and cutting-edge NLP.",
    challenge:
      "Cut through the crowded noise of generic AI tech and emphasize genuine conversational empathy, reliability, and enterprise scale.",
    solution:
      "We established a tactile, retro-futuristic creative direction pairing timeless telecom hardware with ultra-modern typography and interactive acoustic voice sample testing widgets.",
    deliverables: [
      "Brand Positioning & Voice Guidelines",
      "Interactive Voice Playground Experience",
      "Enterprise Sales Collateral & Deck System",
      "High-Performance Next.js Web Platform",
    ],
    metrics: [
      { label: "Series C Valuation", value: "$500M" },
      { label: "Enterprise Inquiries", value: "+148%" },
      { label: "Web Conversion Rate", value: "4.8%" },
    ],
    quote: {
      text: "Bou brought our voice agents to life visually. The contrast between retro warmth and next-gen intelligence hit the exact sweet spot.",
      author: "Nikola Mrkšić",
      role: "Co-Founder & CEO, PolyAI",
    },
  },
  {
    id: "mergemansion",
    title: "Merge Mansion",
    tagline: "“Please make this into a Netflix series”",
    categories: ["Marketing", "Design", "PR & Communications", "Web Development"],
    image: "/images/mergemansion.jpg",
    client: "Metacore",
    year: "2023 - 2024",
    overview:
      "The mystery of Grandma Ursula captured the internet. Bou collaborated with Metacore on viral storytelling, celebrity stunt PR campaigns (featuring Pedro Pascal and Kathy Bates), and community activations.",
    challenge:
      "Sustain cultural momentum for a mobile narrative sensation and continuously expand lore beyond digital screens into real-world pop culture.",
    solution:
      "Bespoke mystery ARG campaigns, cryptic teaser drops, high-fashion editorial merchandise, and experiential detective pop-ups that engaged millions of detective fans worldwide.",
    deliverables: [
      "Global PR & Narrative Campaign Strategy",
      "Influencer & Celebrity PR Box Kits",
      "Interactive Detective Dossier Microsites",
      "Custom Promotional Assets & Social Stunts",
    ],
    metrics: [
      { label: "Global Video Views", value: "250M+" },
      { label: "Media Placements", value: "1,200+" },
      { label: "Social Trend Status", value: "#1 Worldwide" },
    ],
    quote: {
      text: "Bou has been an invaluable partner in our growth journey since the very beginning.",
      author: "Metacore Leadership",
      role: "Executive Team",
    },
  },
  {
    id: "polestar",
    title: "Polestar",
    tagline: "The premium electric performance car brand",
    categories: ["PR & Communications", "Marketing"],
    image: "/images/polestar.jpg",
    client: "Polestar Automotive",
    year: "2023 - 2024",
    overview:
      "Polestar required a Nordic-rooted, uncompromising design ethos for its flagship EV debuts and lifestyle brand activations across Scandinavia and the UK. Bou developed holistic PR, launch strategies, and cultural partnerships.",
    challenge:
      "Stand apart from legacy luxury car manufacturers with a progressive, design-led vision that champions sustainability and zero compromise performance.",
    solution:
      "Architectural launch showcases, curated editorial content partnerships with modern design institutions, and VIP test-drive experiences.",
    deliverables: [
      "Nordic Launch Activation Strategy",
      "Architectural Press Day Experiences",
      "High-Impact Key Opinion Leader Seeding",
      "Sustainably Crafted Event Architecture",
    ],
    metrics: [
      { label: "Editorial Reach", value: "45M+" },
      { label: "VIP Conversion Rate", value: "28%" },
      { label: "Earned Media Value", value: "€3.8M" },
    ],
    quote: {
      text: "Bou’s unconventionally holistic approach to PR is exactly what brands like Polestar need.",
      author: "Polestar Nordic",
      role: "Head of Communications",
    },
  },
  {
    id: "rovio",
    title: "Rovio",
    tagline: "Mobile gaming icon and home of Angry Birds",
    categories: ["PR & Communications", "Launches"],
    image: "/images/rovio.jpg",
    client: "Rovio Entertainment (SEGA)",
    year: "2023",
    overview:
      "Following Rovio's landmark acquisition by SEGA, Bou engineered high-profile communications, corporate PR narratives, and global brand milestones that celebrated Rovio's legacy as a Finnish tech titan.",
    challenge:
      "Communicate a monumental multi-million euro cross-continental acquisition with elegance, cultural pride, and future-forward strategic clarity.",
    solution:
      "A strategic communications matrix orchestrating synchronous announcements across global financial press, gaming media, and employee internal townhalls.",
    deliverables: [
      "International M&A PR Playbook",
      "Executive Messaging & Q&A Playbook",
      "Global Press Release & Media Distribution",
      "Celebratory Internal Visual Collateral",
    ],
    metrics: [
      { label: "Top-Tier Articles", value: "350+" },
      { label: "Tone Sentiment", value: "98% Positive" },
      { label: "Global Readership", value: "120M+" },
    ],
    quote: {
      text: "If you’re launching something new or executing high-stakes communication, do it with Bou. Period.",
      author: "Rovio Comms Team",
      role: "Corporate Communications",
    },
  },
];
