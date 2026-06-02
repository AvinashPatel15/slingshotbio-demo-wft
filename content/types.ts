import type { NavigationLink } from "../contentMap";

export type LogoStripItem = {
  name: string;
  src: string;
  width: number;
  height: number;
};

export type StudyMetaItem = {
  icon: string;
  text: string;
  alt: string;
};

export type ComparisonColumn = {
  title: string;
  description: string;
  variant: "muted" | "accent";
  items: Array<{
    title: string;
    description: string;
  }>;
};

export type ProductCard = {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  href: string;
  sizeOptions?: string[];
};

export type ProductStep = {
  id:
    | "instrument-standardization"
    | "spectral-unmixing"
    | "immunophenotyping"
    | "quantitative-antigen-density";
  title: string;
  iconSrc: string;
  products: ProductCard[];
};

export type TestimonialSlide = {
  quote: string;
  author: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  logoSrc: string;
  logoAlt: string;
  href: string;
};

export type BiomarkerTag = {
  label: string;
  x: number;
  y: number;
  isGhost?: boolean;
};

export type BiomarkerRing = {
  src: string;
  size: number;
};

export type BiomarkerDot = {
  src: string;
  orbitSize: number;
  angle: number;
  duration: number;
  reverse?: boolean;
};

export type ResourceCard = {
  kind: "Blog" | "Education";
  title: string;
  imageSrc: string;
  meta: string;
  href: string;
  cta: "Read Article" | "Watch Now";
};

export type FooterLinkGroup = {
  heading: string;
  links: NavigationLink[];
};

export type FooterSocialLink = {
  label: string;
  href: string;
  iconSrc: string;
};
