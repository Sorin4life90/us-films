export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  year: string;
  thumbnail: string;
  mediaType: "image" | "video";
  embedSrc?: string;
  summary: string;
  tags: string[];
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
};

export type ProcessStep = {
  id: string;
  title: string;
  description: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  placeholder?: boolean;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  timeline: string;
  message: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  label: string;
  href?: string;
  objectPosition?: string;
};

export type ExternalSite = {
  label: string;
  href: string;
};

export type PhotographySource = {
  site: ExternalSite;
  gallery: GalleryImage[];
};

export type SiteContent = {
  brandName: string;
  brandTag: string;
  navigation: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  featuredFilm: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    embedTitle: string;
    embedSrc: string;
  };
  selectedFilms: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
  };
  aboutSignature: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    body: string;
    cardLabel: string;
    note: string;
    quoteIndex: string;
    quoteText: string;
  };
  weddingPhotography: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    body: string;
    sources: PhotographySource[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    email: string;
    recipientEmail: string;
    phone: string;
    instagram: string;
    location: string;
    notice: string;
    projectTypes: string[];
    timelines: string[];
    successMessage: string;
  };
};
