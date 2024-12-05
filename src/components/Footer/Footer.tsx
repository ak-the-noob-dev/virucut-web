import Image from "next/image";
import {
  IoChatbox,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    // <section className="bg-white min-h-[80vh] flex flex-col justify-center items-center">
    <footer className="font-sans tracking-wide bg-white px-8 py-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
        <div>
          <a href="/">
            <Image
              src={process.env.BASE_URL + `/api/static/images/${"logo.png"}`}
              alt="logo"
              className="w-60 h-36"
              width={200}
              height={200}
            />
          </a>
        </div>

        {/* <div>
          <h4 className="text-blue-950 font-semibold text-lg relative max-sm:cursor-pointer">
            Our offerings{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              className="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16"
                data-original="#000000"
              ></path>
            </svg>
          </h4>

          <ul className="mt-6 space-y-5">
            <li>
              <a href="/" className="hover:text-main_green text-black text-sm">
                Offerings 1
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-main_green text-black text-sm">
                Offerings 2
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-main_green text-black text-sm">
                Offerings 3
              </a>
            </li>
          </ul>
        </div> */}

        <div className="flex flex-col">
          <h4 className="text-black font-semibold text-lg relative max-sm:cursor-pointer pb-4">
            Address{" "}
          </h4>
          <p className="text-black text-sm pb-2">
            <strong>Registered Office:</strong> SF No: 309/1A1, 1st Floor,
            Kalyani Nagar, Madura Avenue, Near St. Joseph’s College, Kovur,
            Chennai 600128, Tamil Nadu, India
          </p>
          <p className="text-black text-sm">
            <strong>Branch Office:</strong> 27/3 , Thirukumaran Nagar-1 ,
            Vilankurichi, Coimbatore-600128, Tamil Nadu, India
          </p>
        </div>
        <div>
          <h4 className="text-black font-semibold text-lg relative max-sm:cursor-pointer">
            Products{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              className="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16"
                data-original="#000000"
              ></path>
            </svg>
          </h4>
          <ul className="space-y-5 mt-6 max-sm:hidden">
            <li>
              <a href="/" className="hover:text-main_green text-black text-sm">
                All products
              </a>
            </li>
            {/* <li>
              <a href="/" className="hover:text-main_green text-black text-sm">
                Product 2
              </a>
            </li> */}
          </ul>
        </div>

        <div>
          <h4 className="text-black font-semibold text-lg relative max-sm:cursor-pointer">
            Company{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              className="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16"
                data-original="#000000"
              ></path>
            </svg>
          </h4>

          <ul className="space-y-5 mt-6 max-sm:hidden">
            <li>
              <a
                href="/about-us"
                className="hover:text-main_green text-black text-sm"
              >
                About us
              </a>
            </li>
            {/* <li>
              <a href="/" className="hover:text-main_green text-black text-sm">
                Careers
              </a>
            </li> */}
            {/* <li>
              <a href="/" className="hover:text-main_green text-black text-sm">
                Blog
              </a>
            </li> */}
            {/* <li>
              <a href="/" className="hover:text-main_green text-black text-sm">
                Portfolio
              </a>
            </li> */}
            {/* <li>
              <a href="/" className="hover:text-main_green text-black text-sm">
                Events
              </a>
            </li> */}
          </ul>
        </div>

        {/* <div>
          <h4 className="text-black font-semibold text-lg relative max-sm:cursor-pointer">
            Additional{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              className="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16"
                data-original="#000000"
              ></path>
            </svg>
          </h4>

          <ul className="space-y-5 mt-6 max-sm:hidden">
            <li>
              <a href="/" className="hover:text-main_green text-black text-sm">
                FAQ
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-main_green text-black text-sm">
                Partners
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-main_green text-black text-sm">
                Sitemap
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="hover:text-main_green text-black text-sm"
              >
                Contact
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-main_green text-black text-sm">
                News
              </a>
            </li>
          </ul>
        </div> */}

        <div>
          <h4 className="text-black font-semibold text-lg relative max-sm:cursor-pointer pb-4">
            Our socials
          </h4>
          <ul className="flex space-x-5">
            <li>
              <Link
                href="https://in.linkedin.com/in/virucut-india-private-limited-8b7625317"
                rel="noopener noreferrer"
                target="_blank"
              >
                <IoLogoLinkedin
                  style={{ fontSize: 25 }}
                  className=""
                  color="hsl(119, 85%, 37%)"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/virucut_india_private_limited/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <IoLogoInstagram
                  style={{ fontSize: 25 }}
                  color="hsl(119, 85%, 37%)"
                />
              </Link>
            </li>

            <li>
              <Link
                href={"https://twitter.com/virucutjp"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <IoLogoTwitter
                  style={{ fontSize: 25 }}
                  color="hsl(119, 85%, 37%)"
                />
              </Link>
            </li>
            <li>
              <Link
                href={"https://whatsapp.com/channel/0029Va9aJc3EKyZPtSoukJ0e"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <IoLogoWhatsapp
                  style={{ fontSize: 25 }}
                  color="hsl(119, 85%, 37%)"
                />
              </Link>
            </li>

            <li>
              <div className="tooltip" data-tip="Telegram">
                <Link
                  href={"https://t.me/virucut"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IoChatbox
                    style={{ fontSize: 25 }}
                    color="hsl(119, 85%, 37%)"
                  />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-10 border-gray-400" />

      <div className="flex flex-wrap max-md:flex-col gap-4">
        <ul className="md:flex md:space-x-6 max-md:space-y-2">
          <li>
            <a href="/" className="hover:text-main_green text-black text-sm">
              Terms of Offerings
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-main_green text-black text-sm">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-main_green text-black text-sm">
              Security
            </a>
          </li>
        </ul>

        <p className="text-black text-sm md:ml-auto">
          © VIRUCUT India Private Limited All rights reserved.
        </p>
      </div>
    </footer>
    // </section>
  );
}
