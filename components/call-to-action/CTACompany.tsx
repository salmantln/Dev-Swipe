import React from "react";
import Image from "next/image";

const CTACompany = () => {
  return (
    // <!-- Features -->
    <div
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      data-aos="fade-left"
    >
      <div className="relative p-6 md:p-16">
        {/* <!-- Grid --> */}
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
              Getting a new colleague is{" "}
              <span className="text-accent">easy! </span>
            </h2>
            {/* <!-- Tab Navs --> */}
            <nav
              className="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
            >
              <button
                type="button"
                className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-secondary p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-secondary dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active"
                id="tabs-with-card-item-1"
                data-hs-tab="#tabs-with-card-1"
                aria-controls="tabs-with-card-1"
                role="tab"
              >
                <span className="flex">
                  <svg
                    className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-accent text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
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
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                  </svg>
                  <span className="grow ms-6">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                      Create Your profile
                    </span>
                    <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                      Set up your profile effortlessly to customize your
                      experience and access personalized job matches.
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="hs-tab-active:bg-secondary hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-secondary p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                id="tabs-with-card-item-2"
                data-hs-tab="#tabs-with-card-2"
                aria-controls="tabs-with-card-2"
                role="tab"
              >
                <span className="flex">
                  <svg
                    className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-accent text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
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
                    <path d="m12 14 4-4" />
                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                  </svg>
                  <span className="grow ms-6">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                      Match with Ideal Candidates
                    </span>
                    <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                      Discover top talent quickly with our smart matching
                      system, tailored to connect you with ideal candidates.
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="hs-tab-active:bg-secondary hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-bg-secondary p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                id="tabs-with-card-item-3"
                data-hs-tab="#tabs-with-card-3"
                aria-controls="tabs-with-card-3"
                role="tab"
              >
                <span className="flex">
                  <svg
                    className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-accent text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
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
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
                  <span className="grow ms-6">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                      Chat, Plan & succeed
                    </span>
                    <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                      Streamline your recruitment process with our integrated
                      communication tools. Plan and execute successful hiring
                      strategies effortlessly.
                    </span>
                  </span>
                </span>
              </button>
            </nav>
            {/* <!-- End Tab Navs --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="lg:col-span-6">
            <div className="relative">
              {/* <!-- Tab Content --> */}
              <div>
                <div
                  id="tabs-with-card-1"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-1"
                >
                  <Image
                    className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                    src="/img/photo-1598929213452-52d72f63e307.jpeg"
                    alt="Image Description"
                    width={600}
                    height={600}
                  />
                </div>

                <div
                  id="tabs-with-card-2"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-2"
                >
                  <Image
                    className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                    src="/img/photo-1665686306574-1ace09918530.jpeg"
                    alt="Image Description"
                    width={600}
                    height={600}
                  />
                </div>

                <div
                  id="tabs-with-card-3"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-3"
                >
                  <Image
                    className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                    src="/img/photo-1605629921711-2f6b00c6bbf4.jpeg"
                    alt="Image Description"
                    width={600}
                    height={600}
                  />
                </div>
              </div>
              {/* <!-- End Tab Content --> */}

              {/* <!-- SVG Element --> */}
              <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                <svg
                  className="w-16 h-auto text-primary"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              {/* <!-- End SVG Element --> */}
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}

        {/* <!-- Background Color --> */}
        <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
          <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
        </div>
        {/* <!-- End Background Color --> */}
      </div>
    </div>
  );
};

export default CTACompany;
