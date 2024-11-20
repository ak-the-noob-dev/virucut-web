export interface ProductSingleViewLimitProps {
  bgColor: string;
  reverseImage: boolean;
  productName: string;
}

export interface Product {
  category: string;
  image: string;
  id: string;
  desc?: string;
  subcategories?: SubCategory[];
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
