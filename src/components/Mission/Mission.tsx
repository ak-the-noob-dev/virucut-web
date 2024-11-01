import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/DataCard/DataCard";
// import { Book, Target, Eye, Award } from "lucide-react"
import { IoBook, IoEye, IoMedal } from "react-icons/io5";

export default function CompanyInfo() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold text-center mb-8">About Our Company</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center space-x-4">
            <IoBook className="w-8 h-8 text-primary" />
            <CardTitle className="text-xl font-bold font-verdana">
              Our Story
            </CardTitle>
          </CardHeader>
          <CardContent className="text-justify">
            <p className="pb-4">
              Founded in June 2018, VRV A2Z Solutions aimed to deliver reliable
              tooling solutions. In early 2023, we rebranded as VIRUCUT India
              Private Limited to unify our offerings and enhance customer
              experience. At VIRUCUT India, we offer top-quality products and
              exceptional productivity, focusing on tailored solutions for our
              clients. Our product range includes:
            </p>
            <ul className="list-disc list-inside pb-4">
              <li>Cutting Tools: Standard and specialized options</li>
              <li>CNC Tool Holding Systems: Precision solutions</li>
              <li>CNC Turning & Turn Mill Centers</li>
              <li>Office and Work Storage Systems</li>
              <li>Machine Tool Accessories</li>
              <li>Coated & Bonded Abrasives</li>
              <li>CNon-Woven Products</li>
            </ul>

            <p>
              We are equipped with state-of-the-art office technology and modern
              communication systems, ensuring seamless interaction with our
              principals and timely service delivery. Our contemporary
              facilities enable us to offer prompt feedback and exceptional
              service, providing added value to all our customers.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-x-4">
            <IoBook className="w-8 h-8 text-primary" />
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our mission is to deliver comprehensive industrial solutions
              utilizing cutting-edge technologies to foster our customers&apos;
              growth and ensure the excellence of their products.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-x-4">
            <IoEye className="w-8 h-8 text-primary" />
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our vision is to broaden our brand presence across all sectors,
              empowering businesses of all sizes, from micro to large-scale
              enterprises.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-x-4">
            <IoMedal className="w-8 h-8 text-primary" />
            <CardTitle>Quality Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We are dedicated to delivering innovative industrial solutions
              that empower businesses of all sizes. We commit to continuous
              improvement and uphold the highest quality standards. Our goal is
              to ensure customer satisfaction and foster lasting partnerships.
              Together, we drive success through excellence.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
