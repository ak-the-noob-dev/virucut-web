"use client";
import Image from "next/image";
import { IoCheckmarkCircle } from "react-icons/io5";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full min-h-[80vh] bg-white flex md:flex-col md:items-center md:justify-center items-center md:pb-10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="relative h-[500px] md:h-[600px]">
            <div className="absolute bottom-0 left-0 w-4/5 h-4/5 bg-white p-4 shadow-xl rounded-lg">
              <Image
                alt="About Us Image 1"
                className="rounded object-cover w-full h-full"
                height="560"
                src="/images/aboutus-banner-1.jpg"
                width="450"
              />
            </div>
            <div className="absolute top-10 left-[40%] w-1/2 h-1/2 bg-white p-2 shadow-xl rounded-lg -rotate-3">
              <Image
                alt="About Us Image 3"
                className="rounded object-cover w-full h-full"
                height="300"
                src="/images/aboutus-banner-2.jpg"
                width="250"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-verdana">
                About us
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At VIRUCUT India, we are driven by a commitment to quality,
                precision, and innovation. We provide tailored solutions in
                industrial tooling, designed to enhance productivity and
                performance across industries. With a focus on excellence, we
                are your trusted partner in success.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { title: "Innovation", description: "Pushing boundaries" },
                { title: "Quality", description: "Exceeding expectations" },
                { title: "Integrity", description: "Honest and transparent" },
                { title: "Collaboration", description: "Working together" },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <IoCheckmarkCircle className="mt-0.5 h-5 w-5 text-green-500" />
                  <div className="space-y-1">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="flex md:items-center md:h-16 md:mt-12 text-sm border-l border-black text-cadet leading-7 pl-4 bg-orange-100">
              Streamline your workflow, boost productivity, and achieve your
              goals faster than ever before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutUsPage() {
  // const handleNavTo = (id: string): void => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     window.scrollTo({
  //       top: element.offsetTop,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <>
      <section className="relative bg-gradient-to-b from-purple-500 to-indigo-700 text-white py-48">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-6xl font-extrabold"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Your Productive Partner
          </motion.h1>
          <motion.p
            className="mt-4 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Delivering precision-engineered tools and innovative solutions to
            drive your business forward.
          </motion.p>
        </div>
      </section>

      {/* About Us Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-gray-800 text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="text-lg text-gray-600 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p>
                At{" "}
                <span className="font-semibold text-gray-900">
                  VIRUCUT India
                </span>
                , we focus on providing tailored industrial solutions through
                precision, quality, and innovation.
              </p>
              <p>
                Our tools and systems are crafted to enhance productivity,
                making us a trusted partner across industries. We are dedicated
                to bringing the best engineering solutions to the table.
              </p>
            </motion.div>
            <motion.div
              className="rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                width={500}
                height={500}
                src="/images/hero3.jpg"
                alt="Industrial Tools and Solutions"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <motion.h3
            className="text-3xl font-bold text-gray-800 text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Journey
          </motion.h3>

          <motion.p
            className="text-lg text-gray-600 max-w-4xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Established in 2018, VIRUCUT India Private Limited has rapidly
            evolved into a leader in industrial tooling solutions, offering
            innovative products that improve productivity and performance across
            various sectors.
          </motion.p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-2xl font-bold text-gray-800">Quality</h4>
              <p className="text-gray-600">
                We ensure excellence in every solution we provide, from
                precision tools to complete system designs.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-2xl font-bold text-gray-800">Innovation</h4>
              <p className="text-gray-600">
                We embrace cutting-edge technologies to deliver innovative
                solutions that meet the unique needs of our clients.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-2xl font-bold text-gray-800">Precision</h4>
              <p className="text-gray-600">
                Our commitment to precision ensures that every product and
                solution is designed to perfection.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h3
            className="text-3xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Mission
          </motion.h3>
          <motion.p
            className="mt-4 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            To deliver comprehensive, cutting-edge industrial solutions that
            foster our customers&apos; growth and ensure the highest level of
            product excellence.
          </motion.p>

          <motion.h3
            className="text-3xl font-bold mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Vision
          </motion.h3>
          <motion.p
            className="mt-4 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            To broaden our brand presence across industries, empowering
            businesses of all sizes to thrive with innovative, reliable
            solutions.
          </motion.p>
        </div>
      </section>
      {/* Employee Profiles */}
    </>
  );
}