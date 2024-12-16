import { StrapiImageFormats } from "./common";

export default interface AboutUsProps {
  documentId?: string;
  hero_title?: string;
  hero_desc?: string;
  about_section_text_1?: string;
  about_section_text_2?: string;
  our_journey?: string;
  our_mission?: string;
  our_vision?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  about_section_image: {
    formats?: StrapiImageFormats;
    alternativeText?: string | null;
    url?: string;
    name?: string;
  };
  our_speciality: OurSpeciality[];
}

interface OurSpeciality {
  id: number;
  title: string;
  content: string;
}
