import Image from "next/image";
import { Card, CardContent } from "../DataCard/DataCard";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
const employees = [
  {
    name: "Jane Doe",
    position: "CEO & Founder",
    bio: "With over 15 years of experience in tech, Jane leads our company with vision and passion.",
    image: "/images/author.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "John Smith",
    position: "CTO",
    bio: "John&apos;s innovative approach to technology has been instrumental in our product development.",
    image: "/images/author.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Brown",
    position: "Head of Design",
    bio: "Emily&apos;s creative designs have shaped our product&apos;s user experience and brand identity.",
    image: "/images/author.jpg",
    linkedin: "#",
    twitter: "#",
  },
];

export default function Employees() {
  return (
    <div className="flex">
      <section
        id="team"
        className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center items-center"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {employees.map((employee) => (
              <Card key={employee.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={employee.image}
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
                    <p className="text-sm">{employee.bio}</p>
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
