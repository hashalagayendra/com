import type { CaseStudy } from "@/types/caseStudy";

export interface FeaturedProject extends CaseStudy {
  service: string;
  imageAlt: string;
}

// Concept projects accompanying the generated portfolio artwork.
export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "vera-concept",
    title: "VÉRA — Brand Identity",
    tagline: "Beauty lives bolder.",
    service: "Graphic design",
    image: "/images/selected-work/vera.webp",
    imageAlt: "VÉRA beauty campaign with a fashion portrait in dramatic violet light",
    categories: ["Branding", "Graphic Design"],
    client: "VÉRA · Concept project",
    year: "2026",
    overview: "A beauty identity concept pairing expressive editorial photography with a confident, oversized wordmark.",
    challenge: "Create a visual language that feels both refined and unapologetically bold.",
    solution: "A violet and black palette, sculptural typography and intimate portraiture bring the identity to life across campaign applications.",
    deliverables: ["Visual identity concept", "Art direction", "Campaign design", "Typography system"],
    metrics: [],
  },
  {
    id: "alchemie-concept",
    title: "Alchémie — Perfume Concept",
    tagline: "A study in light, texture and scent.",
    service: "3D visualization",
    image: "/images/selected-work/alchemie.webp",
    imageAlt: "Purple Alchémie perfume bottle with a gold cap among irises and reflective stone",
    categories: ["3D Visualization", "Art Direction"],
    client: "Alchémie · Concept project",
    year: "2026",
    overview: "A fragrance visualization concept exploring the contrast between delicate glass, polished gold and raw stone.",
    challenge: "Express the character of a fragrance through a single evocative product image.",
    solution: "Amethyst glass, iris petals and warm directional light create a tactile world around the bottle.",
    deliverables: ["Product visualization concept", "Material exploration", "Lighting direction", "Campaign imagery"],
    metrics: [],
  },
  {
    id: "orizon-concept",
    title: "Orizon — Travel & Hospitality",
    tagline: "Extraordinary stays, everywhere.",
    service: "Web design",
    image: "/images/selected-work/orizon.webp",
    imageAlt: "Orizon travel website on a laptop featuring a Mediterranean infinity pool at sunset",
    categories: ["Web Design", "Digital Experience"],
    client: "Orizon · Concept project",
    year: "2026",
    overview: "A hospitality website concept that puts remarkable destinations at the centre of the digital experience.",
    challenge: "Translate the feeling of arriving somewhere extraordinary into an intuitive online experience.",
    solution: "Immersive destination photography and graceful editorial typography create a clear invitation to explore.",
    deliverables: ["Website concept", "Digital art direction", "Interface design", "Responsive design direction"],
    metrics: [],
  },
  {
    id: "atelier-concept",
    title: "Atelier — Interior Living",
    tagline: "Spaces for a calmer tomorrow.",
    service: "Web design",
    image: "/images/selected-work/atelier.webp",
    imageAlt: "Atelier interior website on a monitor with a sunlit plaster arch and travertine furniture",
    categories: ["Web Design", "Art Direction"],
    client: "Atelier · Concept project",
    year: "2026",
    overview: "An interior design website concept inspired by natural materials, considered spaces and the warmth of daylight.",
    challenge: "Give a digital portfolio the same sense of calm and material richness as the interiors it presents.",
    solution: "A warm neutral palette, generous photography and expressive serif typography give every space room to breathe.",
    deliverables: ["Website concept", "Visual direction", "Editorial layout", "Responsive design direction"],
    metrics: [],
  },
];
