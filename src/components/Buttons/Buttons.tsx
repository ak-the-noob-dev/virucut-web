import Link from "next/link";

interface Props {
  className?: string;
  buttonText?: string;
  onclick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  children?: React.ReactNode;
  asChild?: boolean;
  href?: string;
}

export default function HeroButton({
  className,
  buttonText,
  onclick,
  href,
}: Props) {
  className = `${className} relative inline-block px-4 py-2 font-medium group`;

  if (href) {
    // Return the Link component properly here
    return (
      <Link href={href} className={className}>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-green-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-main_green group-hover:bg-main_green"></span>
        <span className="relative text-black group-hover:text-white">
          {buttonText != undefined && buttonText !== ""
            ? buttonText
            : "Checkout Our Products"}
        </span>
      </Link>
    );
  }

  // Return a regular anchor element when no href is provided
  return (
    <a href="#" className={className} onClick={onclick}>
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-green-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-main_green group-hover:bg-main_green"></span>
      <span className="relative text-black group-hover:text-white">
        {buttonText != undefined && buttonText !== ""
          ? buttonText
          : "Checkout Our Products"}
      </span>
    </a>
  );
}
