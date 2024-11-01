// import Image from "next/image";

import { Card2 } from "../DataCard/DataCard";

export default function Services() {
  return (
    <section className="bg-blue-100 min-h-[80vh] flex flex-col justify-center items-center">
      <div className="md:p-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-verdana">
          Our Product Verticals
        </h2>
      </div>
      <div className="flex md:flex-wrap md:flex-row justify-center items-center gap-3 p-12">
        {[
          {
            serviceName: "Machining",
            imagePath: `/images/service1.jpg`,
            serviceInfo: "",
          },
          {
            serviceName: "Work Holding",
            imagePath: `/images/service2.jpg`,
            serviceInfo: "",
          },
          {
            serviceName: "Spindle Holding",
            imagePath: `/images/service3.jpg`,
            serviceInfo: "",
          },
          {
            serviceName: "Fabrication",
            imagePath: `/images/service4.jpg`,
            serviceInfo: "",
          },
          {
            serviceName: "De-Burring",
            imagePath: `/images/service5.jpg`,
            serviceInfo: "",
          },
          {
            serviceName: "Fine Polishing",
            imagePath: `/images/service6.jpg`,
            serviceInfo: "",
          },
          {
            serviceName: "Sales After Service",
            imagePath: `/images/service7.jpg`,
            serviceInfo: "",
          },
          {
            serviceName: "Storage",
            imagePath: `/images/service8.jpg`,
            serviceInfo: "",
          },
        ].map((item, index) => {
          return (
            <div
              className="flex justify-center items-center shadow-sm "
              key={index}
            >
              <Card2
                serviceInfo=""
                serviceName={item.serviceName}
                imagePath={item.imagePath}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
