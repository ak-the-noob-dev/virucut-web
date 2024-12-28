import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsDownload } from "react-icons/bs";
import { AiOutlineLoading } from "react-icons/ai";
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

export const DownloadButton = ({
  onClick,
  isLoading,
}: {
  onClick: () => void;
  isLoading?: boolean;
}) => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.button
      className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition-all flex items-center gap-4"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
      onClick={onClick}
    >
      {showText && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: showText ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <AnimatePresence>
            <motion.span
              className="text-sm font-semibold whitespace-nowrap"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              {isLoading ? "Downloading..." : " Download Company Profile"}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      )}

      {isLoading ? (
        <div>
          <AiOutlineLoading className="animate-spin" />
        </div>
      ) : (
        <BsDownload />
      )}
    </motion.button>
  );
};
