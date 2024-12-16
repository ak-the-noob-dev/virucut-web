// import { StrapiImageFormats } from "./common";

export default interface HomeInterface {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  about_content: string;
  clients: {
    name: string;
    alternativeText?: string | null;
    url: string;
  }[];
  partners: {
    name: string;
    alternativeText?: string | null;
    url: string;
  }[];
  hero: {
    title: string;
    subtitle?: string;
    description: string;
    image: {
      name: string;
      alternativeText?: string | null;
      url: string;
    };
  }[];
  about_image_1: {
    name: string;
    alternativeText?: string | null;
    url: string;
  };
  about_image_2: {
    name: string;
    alternativeText?: string | null;
    url: string;
  };
}
export interface Hierarchy {
  ceo: {
    image: string;
    name: string;
    role: string;
  };
  managers: {
    image: string;
    name: string;
    role: string;
  }[];
  employees: {
    image: string;
    name: string;
    role: string;
  }[];
}

export interface FAQProps {
  q: string;
  ans: string;
}
