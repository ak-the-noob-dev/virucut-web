const urls = {
  aboutUs: "/api/about?populate=*",
  home: "/api/home?populate[fields][0]=about_content&populate[clients][populate][fields][0]=url&populate[clients][populate][fields][1]=alternativeText&populate[partners][populate][fields][0]=url&populate[partners][populate][fields][1]=alternativeText&populate[hero][populate]=*&populate[about_image_1][populate][fields][0]=url&populate[about_image_1][populate][fields][1]=alternativeText&populate[about_image_2][populate][fields][0]=url&populate[about_image_2][populate][fields][1]=alternativeText",
  employees: "/api/employee?populate=*",
  faq: "/api/faqs?populate=*",
  careers: "/api/careers?populate=*",
  companyProfilePdf:
    "/uploads/VIPL_Company_Profile_Final_Rev_10_fda038744a.pdf",
  products: (categoryId: string) =>
    `/api/products?filters[categoryId][$eq]=${categoryId}&fields[0]=categoryName&fields[1]=categoryId&fields[2]=desc&populate[image][fields][0]=url&populate[image][fields][1]=alternativeText&populate[image][fields][2]=name&populate[subcategories][populate][fields][0]=name&populate[subcategories][populate][fields][1]=desc&populate[subcategories][populate][image][fields][0]=url&populate[subcategories][populate][image][fields][1]=alternativeText&populate[subcategories][populate][image][fields][2]=name&populate[subcategories][populate][items][populate][fields][0]=name&populate[subcategories][populate][items][populate][fields][1]=desc&populate[subcategories][populate][items][populate][image][fields][0]=url&populate[subcategories][populate][items][populate][image][fields][1]=alternativeText&populate[subcategories][populate][items][populate][image][fields][2]=name`,
  productsList:
    "/api/products?sort[0]=createdAt:asc&fields[0]=categoryName&fields[1]=categoryId&fields[2]=desc&populate[image][fields][0]=url&populate[image][fields][1]=alternativeText",
};

export default urls;
