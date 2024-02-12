"use client";

import Link from "next/link";
// import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  // Define navigation items for different routes
  const defaultNavigation = ["Features"];
  const companyNavigation = ["Features", "Blog", "FAQ"];

  // Determine which navigation items to display based on the current route
  const navigation = pathname.startsWith("/company")
    ? companyNavigation
    : defaultNavigation;

  return (
    // <div className="w-full bg-white">
    //   <nav className="container relative flex flex-wrap items-center justify-between pt-4 mx-auto lg:justify-between xl:px-0  ">
    //     {/* Logo  */}
    //     <Disclosure>
    //       {({ open }) => (
    //         <>
    //           <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
    //             <Link href="/">
    //               <span className="flex items-center space-x-2 text-2xl font-medium text-[#000000]  dark:text-[#000000]">
    //                 <span>
    //                   <Image
    //                     src="/img/logo.svg"
    //                     alt="N"
    //                     width="32"
    //                     height="32"
    //                     className="w-8"
    //                   />
    //                 </span>
    //                 <span>DevSwipe</span>
    //               </span>
    //             </Link>

    //             <Disclosure.Button
    //               aria-label="Toggle Menu"
    //               className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
    //             >
    //               <svg
    //                 className="w-6 h-6 fill-primary"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 24 24"
    //               >
    //                 {open && (
    //                   <path
    //                     fillRule="evenodd"
    //                     clipRule="evenodd"
    //                     d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
    //                   />
    //                 )}
    //                 {!open && (
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
    //                   />
    //                 )}
    //               </svg>
    //             </Disclosure.Button>

    //             <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
    //               <>
    //                 {navigation.map((item, index) => (
    //                   <Link
    //                     key={index}
    //                     href="/{item}"
    //                     className="w-full px-4 py-2 -ml-4 text-[#000000]  rounded-md dark:text-[#000000]  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
    //                   >
    //                     {item}
    //                   </Link>
    //                 ))}
    //                 {/* {navigation.map((item, index) => (
    //                   <Link
    //                     key={index}
    //                     href={
    //                       item === "Blog" ? "/blog" : `/${item.toLowerCase()}`
    //                     }
    //                     className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
    //                   >
    //                     {item}
    //                   </Link>
    //                 ))} */}

    //                 <Link
    //                   href="/company"
    //                   className="w-full px-6 py-2 mt-3 text-center text-[#ffffff] bg-[#000000]   rounded-md lg:ml-5"
    //                 >
    //                   Add Company
    //                 </Link>

    //                 <Link
    //                   href="/dashboard"
    //                   className="w-full px-6 py-2 mt-3 text-center text-[#ffffff] bg-[#000000]   rounded-md lg:ml-5"
    //                 >
    //                   Login
    //                 </Link>
    //               </>
    //             </Disclosure.Panel>
    //           </div>
    //         </>
    //       )}
    //     </Disclosure>

    //     {/* menu  */}
    //     <div className="hidden text-center lg:flex lg:items-center">
    //       <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
    //         {navigation.map((menu, index) => (
    //           <li className="mr-3 nav__item" key={index}>
    //             <Link
    //               href="/"
    //               className="inline-block px-4 py-2 text-lg font-normal text-[#000000]  no-underline rounded-md dark:text-[#000000]  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
    //             >
    //               {menu}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>

    //     <div className="hidden mr-3 space-x-4 lg:flex nav__item">
    //       <Link
    //         href="/company"
    //         className="px-6 py-2 text-[#ffffff] bg-[#000000]  font-semibold rounded-md md:ml-5"
    //         // className="px-6 py-2 text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-md md:ml-5"
    //       >
    //         Add Company
    //       </Link>
    //       <Link
    //          href="/dashboard"
    //         className="px-6 py-2 text-[#ffffff] bg-[#000000]  font-semibold rounded-md md:ml-5"
    //         // className="px-6 py-2 text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-md md:ml-5"
    //       >
    //         Login
    //       </Link>

    //       {/* <ThemeChanger /> */}
    //     </div>
    //   </nav>
    // </div>

    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0  ">
      <nav
        className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Image
            src="/img/logo.svg"
            alt="N"
            width="32"
            height="32"
            className="w-8"
          />
          <a
            className="flex-none text-xl font-semibold "
            href="#"
            aria-label="Brand"
          >
            DevSwipe
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block flex-shrink-0 hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            <a
              className="font-medium text-blue-600 sm:py-6 dark:text-blue-500"
              href="#"
              aria-current="page"
            >
              Landing
            </a>
            <a
              className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              href="#"
            >
              Account
            </a>
            <a
              className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              href="#"
            >
              Work
            </a>
            <a
              className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              href="#"
            >
              Blog
            </a>

            <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
              <button
                type="button"
                className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 "
              >
                Dropdown
                <svg
                  className="ms-2 w-2.5 h-2.5 text-gray-600"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>

              <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  About
                </a>
                <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                  <button
                    type="button"
                    className="w-full flex justify-between items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Sub Menu
                    <svg
                      className="sm:-rotate-90 ms-2 w-2.5 h-2.5 text-gray-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>

                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 top-0 end-full !mx-[10px]">
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      About
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      Downloads
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      Team Account
                    </a>
                  </div>
                </div>

                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Downloads
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Team Account
                </a>
              </div>
            </div>

            <a
              className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
              href="#"
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              Log in
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

Navbar.getInitialProps = async () => {
  // Fetch data from an API
  const response = await fetch("https://api.example.com/posts");
  const posts = await response.json();

  // Return the data as props
  return { posts };
};

export default Navbar;
