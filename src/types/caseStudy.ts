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
