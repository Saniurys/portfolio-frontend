export interface HeroContent {
  name: string;
  lastName: string;
  portfolioTag: string;
  description: string;
  roles: string[];
  ctas: {
    explore: { label: string; href: string };
    contact: { label: string; href: string };
  };
}