import type { CaseStudy } from "@/types/caseStudy";

export interface FeaturedProject extends CaseStudy {
  number: string;
  service: string;
  imageAlt: string;
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "luma-skincare",
    number: "01",
    title: "Luma Skincare",
    tagline: "Pure botanical radiance, scientifically refined.",
    service: "BRAND IDENTITY",
    image: "/images/selected-work/luma-skincare.jpg",
    imageAlt: "Luma Skincare luxury cosmetic pump bottle on rock with purple atmospheric mist",
    categories: ["Brand Identity", "Packaging", "Art Direction", "3D Visualization"],
    client: "Luma Skincare Co.",
    year: "2026",
    overview: "A luxury skincare identity designed around atmospheric elegance, tactile glass packaging, and deep violet minimalism.",
    challenge: "Establish a distinctive high-end brand identity in a competitive clean-beauty market while conveying clinical potency and sensory indulgence.",
    solution: "An ethereal aesthetic pairing sculptural glass bottle design with volcanic stone textures and dramatic violet ambient lighting across campaign touchpoints.",
    deliverables: ["Visual Identity System", "Custom Packaging Design", "Art Direction & 3D Renders", "Campaign Guidelines"],
    metrics: [
      { label: "Pre-order Target", value: "340%" },
      { label: "Brand Recall Lift", value: "+148%" },
    ],
    quote: {
      text: "The identity captured our philosophy with rare poise and breathtaking visual power.",
      author: "Elena Vance",
      role: "Creative Director, Luma Skincare",
    },
  },
  {
    id: "travel-tube",
    number: "02",
    title: "Travel Tube",
    tagline: "Uncharted escapes, seamlessly curated.",
    service: "WEB DESIGN",
    image: "/images/selected-work/travel-tube.jpg",
    imageAlt: "Travel Tube web platform shown on a modern laptop over rocks with purple skies",
    categories: ["Web Design", "Digital Experience", "UI/UX", "Interactive"],
    client: "Travel Tube Global",
    year: "2026",
    overview: "An immersive travel discovery web platform that brings exotic destinations to life with high-impact visuals and fluid booking journeys.",
    challenge: "Transform complex multivariant travel booking into an inspiring, frictionless editorial journey for modern explorers.",
    solution: "Engineered a content-first web experience balancing breathtaking destination cinematography with swift, micro-animated booking interactions.",
    deliverables: ["Full Web Application", "Interactive Prototype", "Design System & Tokens", "Performance Engineering"],
    metrics: [
      { label: "Conversion Lift", value: "+42%" },
      { label: "Avg. Session Length", value: "4m 12s" },
    ],
    quote: {
      text: "Our conversion rates and user time-on-page broke every studio record in the first month.",
      author: "Marcus Chen",
      role: "VP of Product, Travel Tube",
    },
  },
  {
    id: "interior-concepts",
    number: "03",
    title: "Interior Concepts",
    tagline: "Modernist spaces shaped by light and stillness.",
    service: "3D VISUALIZATION",
    image: "/images/selected-work/interior-concepts.jpg",
    imageAlt: "Interior Concepts architectural rendering of a glass pavilion with purple cove lighting and indoor tree",
    categories: ["3D Visualization", "Architectural CGI", "Spatial Design", "Lighting Direction"],
    client: "Studio Kanso Architecture",
    year: "2026",
    overview: "Photorealistic 3D architectural renders exploring the interplay of dusk illumination, panoramic glass architecture, and integrated botanical living.",
    challenge: "Convey the atmosphere and spatial harmony of a modernist glass pavilion retreat before physical construction commenced.",
    solution: "Created hyper-realistic dusk lighting environments with custom violet and amber lighting schemes highlighting organic natural materials and textures.",
    deliverables: ["Photorealistic 3D CGI", "Lighting & Atmosphere Studies", "Material Exploration", "Virtual Walkthrough"],
    metrics: [
      { label: "Client Sign-off", value: "100%" },
      { label: "Render Fidelity", value: "8K UHD" },
    ],
    quote: {
      text: "The spatial renderings felt more vivid and emotionally evocative than reality itself.",
      author: "Sora Takahashi",
      role: "Principal Architect, Studio Kanso",
    },
  },
  {
    id: "solera",
    number: "04",
    title: "Solera",
    tagline: "Culture moving at the frequency of light.",
    service: "DIGITAL MARKETING",
    image: "/images/selected-work/solera.jpg",
    imageAlt: "Solera high-fashion editorial portrait of a woman bathed in violet rim lighting",
    categories: ["Digital Marketing", "Fashion Editorial", "Social Strategy", "Motion Direction"],
    client: "Solera Studio & Sound",
    year: "2026",
    overview: "A high-impact digital campaign celebrating modern self-expression with dramatic violet rim lighting and avant-garde editorial motion.",
    challenge: "Build an international launch campaign that cuts through digital clutter and resonates with global tastemakers.",
    solution: "Bold neon-violet visual motifs, cinematic portraiture, and short-form multi-platform assets engineered for cultural virality.",
    deliverables: ["Omnichannel Launch Campaign", "Motion Graphics Suite", "Social Media Playbook", "High-conversion Creatives"],
    metrics: [
      { label: "Campaign Reach", value: "14.2M" },
      { label: "Engagement Lift", value: "+92%" },
    ],
    quote: {
      text: "Solera's digital launch dominated social feeds and repositioned our entire brand tier.",
      author: "Camille Laurent",
      role: "Head of Marketing, Solera",
    },
  },
];
