export interface ProductSingleViewLimitProps {
  bgColor: string;
  reverseImage: boolean;
  productName: string;
  image: string;
  desc: string;
  file: {
    url?: string;
    name?: string;
    alternativeText?: string;
  };
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
  catalog: {
    url?: string;
    name?: string;
    alternativeText?: string;
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
    catalog: {
      url?: string;
      name?: string;
      alternativeText?: string;
    };
    items: {
      name: string;
      desc?: string;
      image: {
        url?: string;
        alternativeText?: string;
        name?: string;
      };
      catalog: {
        url?: string;
        name?: string;
        alternativeText?: string;
      };
    }[];
  }[];
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
