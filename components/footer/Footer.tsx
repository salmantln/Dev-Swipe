import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <div className="max-w-full xl:max-w-full mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-white">
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <span>
                <Image
                  src="/img/logo.svg"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                />
              </span>
              <span>DevSwipe</span>
            </span>
          </Link>

          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-md text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Privacy Policy
              </a>
            </li>

            <li>
              <a
                href="/"
                className="text-md text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Partners
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a
              href="/"
              className="text-md text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              © DevSwipe Ltd. {currentYear}
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
