import Image from "next/image";
import HeroButton from "../Buttons/Buttons";
import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";

export default function HeroCard() {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow ">
      {/*  dark:bg-gray-800 dark:border-gray-700 */}
      <a href="#">
        <Image
          className="rounded-t-lg"
          src="/images/offerings-1.png"
          alt="offerings-1.png"
          width={350}
          height={300}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>

        <HeroButton className="" buttonText="Learn More" />
      </div>
    </div>
  );
}

interface Props {
  className?: string;
  buttonText?: string;
  href?: string;
  children?: React.ReactNode;
  //   onClick?: () => void;
  serviceName?: string;
  serviceInfo?: string;
  imagePath?: string;
}
export function Card2({ serviceName, serviceInfo, imagePath }: Props) {
  // console.log(imagePath);
  return (
    <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full py-6 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4 h-max[550px]">
      <div className="flex items-center gap-2 px-6">
        <h3 className="text-xl text-gray-800 font-bold flex-1">
          {serviceName ? serviceName : "Our Services"}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          className="cursor-pointer fill-blue-600 shrink-0"
          viewBox="0 0 64 64"
        >
          <path
            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
            data-original="#000000"
          ></path>
        </svg>
      </div>

      <div className="min-h-[300px]">
        <Image
          src={
            imagePath && imagePath != "" ? imagePath : "/images/offerings-1.png"
          }
          className="w-full my-6 object-fill"
          width={300}
          height={300}
          alt="offerings-1.png"
        />
      </div>

      <div className="px-6">
        <p className="text-sm text-gray-600 leading-relaxed">
          {serviceInfo && serviceInfo != ""
            ? serviceInfo
            : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor."}
        </p>

        <div className="mt-8 flex items-center flex-wrap gap-4">
          {/* <h3 className="text-xl text-gray-800 font-bold flex-1">$12.90</h3> */}
          <HeroButton className="" buttonText="Learn More" />
        </div>
      </div>
    </div>
  );
}

interface CardWithBackImage {
  className?: string;
  buttonText?: string;
  href?: string; // URL to redirect to
  children?: React.ReactNode;
  onClick?: () => void;
  productName?: string;
  productInfo?: string;
  imagePath?: string;
  cardKey?: number; // renamed prop for key
}

export function CardWithBackImage({
  href,
  productName,
  imagePath,
}: CardWithBackImage) {
  return (
    <div className="relative grid w-[350px] h-[450px] flex-col items-end justify-center overflow-hidden rounded-lg bg-white mx-2 gap-5">
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div className="relative text-center p-6 px-6 py-14 md:px-12">
        <h2 className="mb-6 text-3xl font-medium text-white">
          {productName || "Product Name"}
        </h2>
        <Link href={href || "#"} className="">
          <h5 className="mb-4 text-xl font-semibold text-slate-300 cursor-pointer hover:text-green-600">
            Know More
          </h5>
        </Link>
      </div>
    </div>
  );
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
