export default interface Home {
  clients: string[];
  partners: string[];
  hero: {
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
  }[];
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
