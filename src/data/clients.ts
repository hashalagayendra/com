export interface ClientQuote {
  id: string;
  quote: string;
  author: string;
  role: string;
  brand: string;
  caseLink?: string;
}

export const CLIENT_QUOTES: ClientQuote[] = [
  {
    id: "polestar",
    quote: "Bou’s unconventionally holistic approach to PR is exactly what brands like Polestar need.",
    author: "Martin Jonsson",
    role: "Brand Director",
    brand: "Polestar",
    caseLink: "polestar",
  },
  {
    id: "hayday",
    quote: "Working with Bou was effortless. Their insight-driven creativity and deep understanding of the game made the idea an instant standout.",
    author: "Camilla Ramos",
    role: "Marketing Lead",
    brand: "Supercell",
    caseLink: "hayday",
  },
  {
    id: "helsinki",
    quote: "Whenever we need a fresh new perspective for branding Helsinki internationally, it’s Bou whom we call.",
    author: "Anu Syrmä",
    role: "Brand Director",
    brand: "City of Helsinki",
  },
  {
    id: "mergemansion",
    quote: "Bou has been an invaluable partner in our growth journey since the very beginning.",
    author: "Mikael Hed",
    role: "Strategic Advisor",
    brand: "Merge Mansion (Metacore)",
    caseLink: "mergemansion",
  },
  {
    id: "klarna",
    quote: "A world-class brand like us needs a world-class agency like Bou.",
    author: "David Sandström",
    role: "Chief Marketing Officer",
    brand: "Klarna",
  },
  {
    id: "finnishdesign",
    quote: "You can imagine how high our standards are for great design. Bou keeps matching and exceeding those.",
    author: "Teemu Kiiski",
    role: "Managing Director",
    brand: "Finnish Design Shop",
  },
  {
    id: "aiven",
    quote: "Bou delivered. The team was well-organized and adapted as our needs evolved – exactly what you want in a rebrand partner.",
    author: "Oskari Saarenmaa",
    role: "Co-Founder",
    brand: "Aiven",
  },
];

export interface ClientLogo {
  name: string;
  category: string;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Supercell", category: "Gaming" },
  { name: "Polestar", category: "Automotive" },
  { name: "Wolt", category: "Tech & Delivery" },
  { name: "Klarna", category: "Fintech" },
  { name: "OnePlus", category: "Consumer Electronics" },
  { name: "Slush", category: "Global Startup Event" },
  { name: "Rovio", category: "Entertainment" },
  { name: "Aiven", category: "Cloud Infrastructure" },
  { name: "Finnish Design Shop", category: "Nordic Design & Retail" },
  { name: "PolyAI", category: "Artificial Intelligence" },
  { name: "Kuva Space", category: "Space Technology" },
  { name: "Metacore", category: "Mobile Entertainment" },
];
