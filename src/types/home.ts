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
