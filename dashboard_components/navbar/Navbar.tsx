import React, { useState } from "react";
import Image from "next/image";

const DashboardNavbarV2 = () => {
  // State to manage the visibility of the dropdown menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
        aria-label="Global"
      >
        <div className="me-5 lg:me-0 lg:hidden">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Brand"
          >
            Brand
          </a>
        </div>

        <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <div className="sm:hidden">
            <button
              type="button"
              className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>

          <div className="hidden sm:block">
            <label htmlFor="icon" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <svg
                  className="flex-shrink-0 h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <input
                type="text"
                id="icon"
                name="icon"
                className="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-end gap-2">
            <button
              type="button"
              className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </button>
            <button
              type="button"
              className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-offcanvas="#hs-offcanvas-right"
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </button>

            <div className="hs-dropdown relative inline-flex">
              {/* Button to toggle the dropdown */}
              <button
                id="hs-dropdown-with-header"
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                onClick={toggleDropdown} // Toggle the visibility of the dropdown menu
              >
                <img
                  className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Image Description"
                />
              </button>
              <div
                className={`hs-dropdown-menu transition-[opacity,margin] duration-300 ${
                  isDropdownOpen ? "block opacity-100" : "hidden opacity-0"
                } absolute right-0 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700`}
                aria-labelledby="hs-dropdown-with-header"
              >
                <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Signed in as
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                    james@site.com
                  </p>
                </div>
                <div className="mt-2 py-2 first:pt-0 last:pb-0">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    <svg
                      className="flex-shrink-0 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                    </svg>
                    Newsletter
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    <svg
                      className="flex-shrink-0 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                      <path d="M3 6h18" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    Purchases
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    <svg
                      className="flex-shrink-0 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                      <path d="M12 12v9" />
                      <path d="m8 17 4 4 4-4" />
                    </svg>
                    Downloads
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="#"
                  >
                    <svg
                      className="flex-shrink-0 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    Team Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DashboardNavbarV2;

// const DashboardNavbar = () => {
//   return (
//     // <>
//     //  <nav classNameName="bg-gray-800 ">
//     //     <div classNameName="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//     //       <div classNameName="relative flex h-16 items-center justify-between">
//     //         <div classNameName="absolute inset-y-0 left-0 flex items-center sm:hidden">
//     //           <button
//     //             type="button"
//     //             classNameName="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//     //             aria-controls="mobile-menu"
//     //             aria-expanded="false"
//     //           >
//     //             <span classNameName="absolute -inset-0.5"></span>
//     //             <span classNameName="sr-only">Open main menu</span>

//     //             <svg
//     //               classNameName="block h-6 w-6"
//     //               fill="none"
//     //               viewBox="0 0 24 24"
//     //               stroke-width="1.5"
//     //               stroke="currentColor"
//     //               aria-hidden="true"
//     //             >
//     //               <path
//     //                 stroke-linecap="round"
//     //                 stroke-linejoin="round"
//     //                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//     //               />
//     //             </svg>

//     //             <svg
//     //               classNameName="hidden h-6 w-6"
//     //               fill="none"
//     //               viewBox="0 0 24 24"
//     //               stroke-width="1.5"
//     //               stroke="currentColor"
//     //               aria-hidden="true"
//     //             >
//     //               <path
//     //                 stroke-linecap="round"
//     //                 stroke-linejoin="round"
//     //                 d="M6 18L18 6M6 6l12 12"
//     //               />
//     //             </svg>
//     //           </button>
//     //         </div>
//     //         <div classNameName="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//     //           <div classNameName="flex flex-shrink-0 items-center">
//     //             {/* <img classNameName="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"> */}
//     //           </div>
//     //           <div classNameName="hidden sm:ml-6 sm:block">
//     //             <div classNameName="flex space-x-4">
//     //               <a
//     //                 href="#"
//     //                 classNameName="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
//     //                 aria-current="page"
//     //               >
//     //                 Dashboard
//     //               </a>
//     //               <a
//     //                 href="#"
//     //                 classNameName="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
//     //               >
//     //                 Team
//     //               </a>
//     //               <a
//     //                 href="#"
//     //                 classNameName="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
//     //               >
//     //                 Projects
//     //               </a>
//     //               <a
//     //                 href="#"
//     //                 classNameName="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
//     //               >
//     //                 Calendar
//     //               </a>
//     //             </div>
//     //           </div>
//     //         </div>
//     //         <div classNameName="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//     //           <button
//     //             type="button"
//     //             classNameName="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//     //           >
//     //             <span classNameName="absolute -inset-1.5"></span>
//     //             <span classNameName="sr-only">View notifications</span>
//     //             <svg
//     //               classNameName="h-6 w-6"
//     //               fill="none"
//     //               viewBox="0 0 24 24"
//     //               stroke-width="1.5"
//     //               stroke="currentColor"
//     //               aria-hidden="true"
//     //             >
//     //               <path
//     //                 stroke-linecap="round"
//     //                 stroke-linejoin="round"
//     //                 d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
//     //               />
//     //             </svg>
//     //           </button>

//     //           <div classNameName="relative ml-3">
//     //             <div>
//     //               <button
//     //                 type="button"
//     //                 classNameName="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//     //                 id="user-menu-button"
//     //                 aria-expanded="false"
//     //                 aria-haspopup="true"
//     //               >
//     //                 <span classNameName="absolute -inset-1.5"></span>
//     //                 <span classNameName="sr-only">Open user menu</span>
//     //                 {/* <img classNameName="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
//     //               </button>
//     //             </div>

//     //             {/* <div classNameName="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
//     //         <a href="#" classNameName="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
//     //         <a href="#" classNameName="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
//     //         <a href="#" classNameName="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
//     //       </div> */}
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>

//     //     <div classNameName="sm:hidden" id="mobile-menu">
//     //       <div classNameName="space-y-1 px-2 pb-3 pt-2">
//     //         <a
//     //           href="#"
//     //           classNameName="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
//     //           aria-current="page"
//     //         >
//     //           Dashboard
//     //         </a>
//     //         <a
//     //           href="#"
//     //           classNameName="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
//     //         >
//     //           Team
//     //         </a>
//     //         <a
//     //           href="#"
//     //           classNameName="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
//     //         >
//     //           Projects
//     //         </a>
//     //         <a
//     //           href="#"
//     //           classNameName="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
//     //         >
//     //           Calendar
//     //         </a>
//     //       </div>
//     //     </div>
//     //   </nav>
//     // </>

//     <>

// <nav className="bg-white border-gray-200 dark:bg-gray-900">
//   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//   <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
//   <Image width={10} height={10} src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
//       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//   </a>
//   <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//       <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
//         <span className="sr-only">Open user menu</span>
//         <Image width={10} height={10} className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
//       </button>
//       <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
//         <div className="px-4 py-3">
//           <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
//           <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
//         </div>
//         <ul className="py-2" aria-labelledby="user-menu-button">
//           <li>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
//           </li>
//           <li>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
//           </li>
//           <li>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
//           </li>
//           <li>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
//           </li>
//         </ul>
//       </div>
//       <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
//         <span className="sr-only">Open main menu</span>
//         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//   </div>
//   <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
//     <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//       <li>
//         <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//       </li>
//     </ul>
//   </div>
//   </div>
// </nav>

//     </>
//   );
// };

// export default DashboardNavbar;
