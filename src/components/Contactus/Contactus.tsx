"use client";
import React from "react";

export default function ContactUsFormWithMap() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    company: "",
    phone: "",
  });
  const [status, setStatus] = React.useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Access form data using the name attribute
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(JSON.stringify(formData));
      const res = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          company: "",
          phone: "",
        });
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (err: unknown) {
      setStatus(`Something went wrong : ${String(err)}`);
    }
  };

  return (
    <section
      id="contact-us"
      className="w-full min-h-[80vh] bg-white flex md:flex-col md:items-center md:justify-center items-center"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-20 mb-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] bg-blue-100 mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-blue-400 before:h-full max-md:before:hidden">
        <div>
          <h2 className="text-gray-800 text-3xl font-extrabold">
            Get In Touch
          </h2>
          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            Have a specific inquiry or looking to explore new opportunities? Our
            experienced team is ready to engage with you.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mt-8">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              />
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />
              </div>
              <input
                type="number"
                name="phone"
                placeholder="Phone No."
                value={formData.phone}
                onChange={handleChange}
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Message"
                className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Send Message
            </button>

            {status && <p className="text-sm text-gray-500 mt-4">{status}</p>}
          </form>

          <ul className="mt-4 flex flex-wrap justify-center gap-6">
            <li className="flex items-center text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                viewBox="0 0 479.058 479.058"
              >
                <path
                  d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                  data-original="#000000"
                />
              </svg>
              <a href="#" className="text-sm ml-4">
                <strong>inquiry@virucut.in</strong>
              </a>
            </li>
            <li className="flex items-center text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                viewBox="0 0 482.6 482.6"
              >
                <path
                  d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.2 0-23.6 4.9-33.6 14.2l-27.7 26.7c-2.3 2.3-5.2 3.7-8.4 3.7h-.2c-12.3-.2-40.7-9.4-79.6-48.3-38.9-38.9-48.1-67.3-48.3-79.6-.1-3.2 1.2-6.1 3.7-8.4l27.5-28.6c10.6-10.1 15.5-22.1 14.2-35.2-1.2-12.9-7-25-16.2-35.2l-60.2-60.2c-21.6-21.6-49.7-21.6-71.3 0-14.6 14.6-28.9 29.4-42.5 45.2l-.2.2c-22.8 24.3-30.9 53.5-24.3 85.3 17.9 86.8 64.9 166.8 132.5 234.4 67.6 67.6 147.6 114.5 234.4 132.5 31.8 6.6 61.1-1.5 85.3-24.3l.2-.2c15.8-13.7 30.6-28 45.2-42.6 21.4-21.5 21.4-49.7 0-71.3l-60.2-60.2c-21.6-21.6-49.7-21.6-71.3 0l-27.6 26.7c-2.3 2.3-5.2 3.7-8.4 3.7h-.2c-12.3-.2-40.7-9.4-79.6-48.3-38.9-38.9-48.1-67.3-48.3-79.6-.1-3.2 1.2-6.1 3.7-8.4l27.5-28.6c10.6-10.1 15.5-22.1 14.2-35.2-1.2-12.9-7-25-16.2-35.2l-60.2-60.2c-21.6-21.6-49.7-21.6-71.3 0l-28.3 28.2c-11.8 11.9-23.6 23.9-36.5 35.7-7.4 6.9-8.6 19-2.7 27.6 47.4 67.5 96 136.8 195.4 237.3z"
                  data-original="#000000"
                />
              </svg>
              <a href="#" className="text-sm ml-4">
                <strong>+91 9853647892</strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="z-10 relative h-full max-md:min-h-[350px]">
          <iframe
            src="https://maps.google.com/maps?q=virucut&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
