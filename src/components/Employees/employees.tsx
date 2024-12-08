import Image from "next/image";
import { Card, CardContent } from "../DataCard/DataCard";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
const employees = [
  {
    name: "Vijayakanth V",
    position: "Managing Director",
    bio: "Vijayakanth has more than a decade of experience in the mechanical industry, focusingon cutting tools and inserts An experienced professional with over 8 years in Tool Data Management, Fixture Servicing, and 2.5 years in cutting tools sales and application. He specializes in tooling selection, fixture maintenance, and process optimization. He has a strong track record of reducing costs, improving efficiency, and implementing innovative solutions to meet customer needs.",
    image: "vijayakanth.webp",
    linkedin: "#",
    twitter: "#",
  },
  // {
  //   name: "Janakiram V",
  //   position: "Product Development Manager",
  //   bio: "",
  //   image: "janikiraman.webp",
  //   linkedin: "#",
  //   twitter: "#",
  // },
];

export default function Employees() {
  return (
    <div className="flex">
      <section
        id="team"
        className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center items-center"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 font-verdana">
            Meet Our Team
          </h2>
          <div className="flex flex-col md:flex-row lg:flex-row gap-8 justify-center">
            {employees.map((employee) => (
              <Card key={employee.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={
                      process.env.BASE_URL +
                      `/api/static/images/${employee.image}`
                    }
                    alt={employee.name}
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-xl">{employee.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {employee.position}
                    </p>
                    <p className="text-sm" style={{ width: "400px" }}>
                      {employee.bio}
                    </p>
                    <div className="flex space-x-4 pt-2">
                      <Link
                        href={employee.linkedin}
                        className="text-muted-foreground hover:text-primary"
                      >
                        <IoLogoLinkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
