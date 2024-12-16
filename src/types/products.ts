export interface ProductSingleViewLimitProps {
  bgColor: string;
  reverseImage: boolean;
  productName: string;
  image: string;
  desc: string;
}

export interface Product {
  categoryName: string;
  documentId: string;
  categoryId: string;
  image: {
    url?: string;
    alternativeText?: string;
    name?: string;
  };
  id: string;
  desc?: string;
  subcategories?: {
    name?: string;
    desc?: string;
    image: {
      documentId: string;
      url?: string;
      alternativeText?: string;
      name?: string;
    };
    items: {
      name: string;
      desc?: string;
      image: {
        url?: string;
        alternativeText?: string;
        name?: string;
      };
    }[];
  }[];
}
export interface SubCategories {
  subCategories: SubCategory[];
}

export interface Products {
  products: Product[];
}

export interface ProductSubItem {
  name: string;
  image?: string;
  desc?: string;
}

export interface SubCategory {
  name: string;
  image: string;
  desc?: string;
  items?: ProductSubItem[];
}
export interface ProductsList {
  categoryName: string;
  categoryId: string;
  documentId: string;
  desc?: string;
  image: {
    url?: string;
    alternativeText?: string;
  };
}
