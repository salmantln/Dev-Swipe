import React from "react";

const Pricing = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* <!-- Pricing Card --> */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Best option for personal use & for your next project.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">$29</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            {/* <!-- List --> */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Team size: <span className="font-semibold">1 developer</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Premium support:{" "}
                  <span className="font-semibold">6 months</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Free updates: <span className="font-semibold">6 months</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-gradient-to-r from-green-400 to-blue-500 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Request Demo
            </a>
          </div>
          {/* <!-- Pricing Card --> */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Company</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Relevant for multiple users, extended & premium support.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">$99</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            {/* <!-- List --> */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Team size:{" "}
                  <span className="font-semibold">10 developers</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Premium support:{" "}
                  <span className="font-semibold">24 months</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Free updates: <span className="font-semibold">24 months</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white  bg-gradient-to-r from-green-400 to-blue-500 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Request Demo
            </a>
          </div>
          {/* <!-- Pricing Card --> */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Best for large scale uses and extended redistribution rights.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">$499</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            {/* <!-- List --> */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Team size:{" "}
                  <span className="font-semibold">100+ developers</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Premium support:{" "}
                  <span className="font-semibold">36 months</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Free updates: <span className="font-semibold">36 months</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white  bg-gradient-to-r from-green-400 to-blue-500 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </section>
    // <div classNameName="xl:container m-auto px-6 py-20 md:px-12 lg:px-20">
    //   <div classNameName="m-auto text-center lg:w-7/12">
    //     <h2 classNameName="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
    //       A Tailus Blocks subscription gives you access to our components and
    //       more.
    //     </h2>
    //   </div>
    //   <div classNameName="mt-12 grid items-center gap-6 md:grid-cols-2 lg:flex lg:space-x-8">
    //     <div classNameName="group relative md:col-span-1 lg:w-[32%]">
    //       <div
    //         aria-hidden="true"
    //         classNameName="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
    //       ></div>
    //       <div classNameName="relative space-y-8 p-8">
    //         <h3 classNameName="text-center text-3xl font-semibold text-gray-700 dark:text-white">
    //           Monthly
    //         </h3>
    //         <div classNameName="relative flex justify-around">
    //           <div classNameName="flex">
    //             <span classNameName="-ml-6 mt-2 text-3xl font-bold text-primary">
    //               $
    //             </span>
    //             <span classNameName="leading-0 text-8xl font-bold text-gray-800 dark:text-white">
    //               19
    //             </span>
    //           </div>
    //           <span classNameName="absolute right-9 bottom-2 text-xl font-bold text-primary">
    //             / Month
    //           </span>
    //         </div>
    //         <ul
    //           role="list"
    //           classNameName="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300"
    //         >
    //           <li classNameName="space-x-2">
    //             <span classNameName="font-semibold text-primary">&check;</span>
    //             <span>First premium advantage</span>
    //           </li>
    //           <li classNameName="space-x-2">
    //             <span classNameName="font-semibold text-primary">&check;</span>
    //             <span>Second premium advantage</span>
    //           </li>
    //           <li classNameName="space-x-2">
    //             <span classNameName="font-semibold text-primary">&check;</span>
    //             <span>Third advantage</span>
    //           </li>
    //         </ul>
    //         <button classNameName="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
    //           <span classNameName="relative text-base font-semibold text-white dark:text-dark">
    //             Start plan
    //           </span>
    //         </button>
    //       </div>
    //     </div>

    //     <div classNameName="group relative row-start-1 md:col-span-2 lg:w-[36%]">
    //       <div
    //         aria-hidden="true"
    //         classNameName="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
    //       ></div>
    //       <div classNameName="relative space-y-8 p-8">
    //         <h3 classNameName="text-center text-3xl font-semibold text-gray-700 dark:text-white">
    //           Annual
    //         </h3>
    //         <div classNameName="overflow-hidden">
    //           <div classNameName="-mr-20 flex items-end justify-center">
    //             <div classNameName="flex">
    //               <span classNameName="-ml-6 mt-2 text-3xl font-bold text-primary">
    //                 $
    //               </span>
    //               <span classNameName="leading-0 text-8xl font-bold text-gray-800 dark:text-white">
    //                 15
    //               </span>
    //             </div>
    //             <div classNameName="mb-2">
    //               <span classNameName="block text-xl font-bold text-gray-500 dark:text-gray-400">
    //                 .56
    //               </span>
    //               <span classNameName="block text-xl font-bold text-primary">
    //                 / Month
    //               </span>
    //             </div>
    //           </div>
    //           <div classNameName="text-center text-2xl font-medium">
    //             <span classNameName="text-gray-400 line-through">$234</span>
    //             <span classNameName="font-semibold text-gray-700 dark:text-white">
    //               $190
    //             </span>
    //           </div>
    //           <span classNameName="block text-center text-xs uppercase text-primary">
    //             BILLED YEARLY
    //           </span>
    //           <span classNameName="m-auto mt-4 block w-max rounded-full bg-gradient-to-r from-yellow-300 to-pink-300 px-4 py-1 text-sm font-medium text-yellow-900">
    //             1 Discount applied
    //           </span>
    //         </div>
    //         <ul
    //           role="list"
    //           classNameName="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300"
    //         >
    //           <li classNameName="space-x-2">
    //             <span classNameName="font-semibold text-primary">&check;</span>
    //             <span>First premium advantage</span>
    //           </li>
    //           <li classNameName="space-x-2">
    //             <span classNameName="font-semibold text-primary">&check;</span>
    //             <span>Second premium advantage</span>
    //           </li>
    //           <li classNameName="space-x-2">
    //             <span classNameName="font-semibold text-primary">&check;</span>
    //             <span>Third advantage</span>
    //           </li>
    //           <li classNameName="space-x-2">
    //             <span classNameName="font-semibold text-primary">&check;</span>
    //             <span>Fourth organizations advantage</span>
    //           </li>
    //         </ul>
    //         <button classNameName="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
    //           <span classNameName="relative text-base font-semibold text-white dark:text-dark">
    //             Start plan
    //           </span>
    //         </button>
    //       </div>
    //     </div>

    //     <div classNameName="group relative md:col-span-1 lg:w-[32%]">
    //       <div
    //         aria-hidden="true"
    //         classNameName="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
    //       ></div>
    //       <div classNameName="relative space-y-8 p-8">
    //         <h3 classNameName="text-center text-3xl font-semibold text-gray-700 dark:text-white">
    //           Free
    //         </h3>
    //         <div classNameName="relative flex justify-around">
    //           <div classNameName="flex">
    //             <span classNameName="-ml-2 mt-2 text-3xl font-bold text-primary">
    //               $
    //             </span>
    //             <span classNameName="leading-0 text-8xl font-bold text-gray-800 dark:text-white">
    //               0
    //             </span>
    //           </div>
    //         </div>
    //         <ul
    //           role="list"
    //           classNameName="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300"
    //         >
    //           <li classNameName="space-x-2">
    //             <span classNameName="font-semibold text-primary">&check;</span>
    //             <span>First premium advantage</span>
    //           </li>
    //           <li classNameName="space-x-2">
    //             <span classNameName="font-semibold text-primary">&check;</span>
    //             <span>Second premium advantage</span>
    //           </li>
    //           <li classNameName="space-x-2">
    //             <span classNameName="font-semibold text-primary">&check;</span>
    //             <span>Third advantage</span>
    //           </li>
    //         </ul>
    //         <button classNameName="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
    //           <span classNameName="relative text-base font-semibold text-sky-600 dark:text-white">
    //             Request Demo
    //           </span>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Pricing;
