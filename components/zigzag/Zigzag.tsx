// import React from "react";
// import Image from "next/image";
// import FeatImage01 from "@/public/img/features-03-image-01.png";
// import FeatImage02 from "@/public/img/features-03-image-02.png";
// import FeatImage03 from "@/public/img/features-03-image-03.png";

// const Zigzag = () => {
//   return (
//     <section>
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 " >
//         <div className="py-12 md:py-20 border-t border-gray-800">
//           {/* Section header */}
//           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
//             <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
//               Reach goals that matter
//             </div>
//             <h1 className="h2 mb-4  text-gray-400">One product, unlimited solutions</h1>
//             <p className="text-xl text-gray-400">
//               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
//               officia deserunt mollit laborum — semper quis lectus nulla.
//             </p>
//           </div>

//           {/* Items */}
//           <div className="grid gap-20">
//             {/* 1st item */}
//             <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
//               {/* Image */}
//               <div
//                 className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
//                 data-aos="fade-up"
//               >
//                 <Image
//                   className="max-w-full mx-auto md:max-w-none h-auto"
//                   src={FeatImage01}
//                   width={540}
//                   height={405}
//                   alt="Features 01"
//                 />
//               </div>
//               {/* Content */}
//               <div
//                 className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
//                 data-aos="fade-right"
//               >
//                 <div className="md:pr-4 lg:pr-12 xl:pr-16">
//                   <div className="font-architects-daughter text-xl text-purple-600 mb-2">
//                     1. Create a Profile
//                   </div>
//                   {/* <h3 className="h3 mb-3">Keep projects on schedule</h3> */}
//                   <p className="text-xl text-gray-400 mb-4">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                     do eiusmod tempor incididunt ut labore et dolore magna
//                     aliqua.
//                   </p>
//                   <ul className="text-lg text-gray-400 -mb-2">
//                     <li className="flex items-center mb-2">
//                       <svg
//                         className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
//                         viewBox="0 0 12 12"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                       </svg>
//                       <span>Duis aute irure dolor in reprehenderit</span>
//                     </li>
//                     <li className="flex items-center mb-2">
//                       <svg
//                         className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
//                         viewBox="0 0 12 12"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                       </svg>
//                       <span>Excepteur sint occaecat</span>
//                     </li>
//                     <li className="flex items-center">
//                       <svg
//                         className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
//                         viewBox="0 0 12 12"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                       </svg>
//                       <span>Amet consectetur adipiscing elit</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* 2nd item */}
//             <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
//               {/* Image */}
//               <div
//                 className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
//                 data-aos="fade-up"
//               >
//                 <Image
//                   className="max-w-full mx-auto md:max-w-none h-auto"
//                   src={FeatImage02}
//                   width={540}
//                   height={405}
//                   alt="Features 02"
//                 />
//               </div>
//               {/* Content */}
//               <div
//                 className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
//                 data-aos="fade-left"
//               >
//                 <div className="md:pl-4 lg:pl-12 xl:pl-16">
//                   <div className="font-architects-daughter text-xl text-purple-600 mb-2">
//                     2. Swipe crazy on opportunities
//                   </div>
//                   {/* <h3 className="h3 mb-3">Keep projects on schedule</h3> */}
//                   <p className="text-xl text-gray-400 mb-4">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                     do eiusmod tempor incididunt ut labore et dolore magna
//                     aliqua.
//                   </p>
//                   <ul className="text-lg text-gray-400 -mb-2">
//                     <li className="flex items-center mb-2">
//                       <svg
//                         className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
//                         viewBox="0 0 12 12"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                       </svg>
//                       <span>Duis aute irure dolor in reprehenderit</span>
//                     </li>
//                     <li className="flex items-center mb-2">
//                       <svg
//                         className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
//                         viewBox="0 0 12 12"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                       </svg>
//                       <span>Excepteur sint occaecat</span>
//                     </li>
//                     <li className="flex items-center">
//                       <svg
//                         className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
//                         viewBox="0 0 12 12"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                       </svg>
//                       <span>Amet consectetur adipiscing elit</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* 3rd item */}
//             <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
//               {/* Image */}
//               <div
//                 className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
//                 data-aos="fade-up"
//               >
//                 <Image
//                   className="max-w-full mx-auto md:max-w-none h-auto"
//                   src={FeatImage03}
//                   width={540}
//                   height={405}
//                   alt="Features 03"
//                 />
//               </div>
//               {/* Content */}
//               <div
//                 className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
//                 data-aos="fade-right"
//               >
//                 <div className="md:pr-4 lg:pr-12 xl:pr-16">
//                   <div className="font-architects-daughter text-xl text-purple-600 mb-2">
//                   3. Have a convo for the position.
//                   </div>
//                   {/* <h3 className="h3 mb-3">3. Have a convo for the position.</h3> */}
//                   <p className="text-xl text-gray-400 mb-4">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                     do eiusmod tempor incididunt ut labore et dolore magna
//                     aliqua.
//                   </p>
//                   <ul className="text-lg text-gray-400 -mb-2">
//                     <li className="flex items-center mb-2">
//                       <svg
//                         className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
//                         viewBox="0 0 12 12"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                       </svg>
//                       <span>Duis aute irure dolor in reprehenderit</span>
//                     </li>
//                     <li className="flex items-center mb-2">
//                       <svg
//                         className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
//                         viewBox="0 0 12 12"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                       </svg>
//                       <span>Excepteur sint occaecat</span>
//                     </li>
//                     <li className="flex items-center">
//                       <svg
//                         className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
//                         viewBox="0 0 12 12"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                       </svg>
//                       <span>Amet consectetur adipiscing elit</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Zigzag;

import React from "react";
import Image from "next/image";
import FeatImage01 from "@/public/img/features-03-image-01.png";
import FeatImage02 from "@/public/img/features-03-image-02.png";
import FeatImage03 from "@/public/img/features-03-image-03.png";

const Zigzag = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4  text-gray-400">
              Discover JobSwipe: Your Path to a Dream Tech Job
            </h1>
            <p className="text-2xl text-gray-400">
              Embark on a seamless job hunting journey in three easy steps with
              JobSwipe.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* Step 1 */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  src={FeatImage01}
                  width={540}
                  height={405}
                  alt="Create Profile"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                {/* <h3 className="h3 mb-3 text-gray-400">
                  Step 1: Create a Profile
                </h3> */}
                <div className="font-architects-daughter text-2xl text-blue-400 mb-2">
                  Step 1: Create a Profile
                </div>
                <p className="text-xl text-gray-400 mb-4">
                  Begin your journey by creating a detailed profile. Showcase
                  your skills, experiences, and job preferences to get matched
                  with the right opportunities.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  src={FeatImage02}
                  width={540}
                  height={405}
                  alt="Swipe on Jobs"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                {/* <h3 className="h3 mb-3 text-gray-400">Step 2: Swipe on Jobs</h3> */}
                <div className="font-architects-daughter text-2xl text-blue-400 mb-2">
                  Step 2: Swipe on Jobs
                </div>
                <p className="text-xl text-gray-400 mb-4">
                  Swipe through curated job listings. Right swipe on the jobs
                  you like and left swipe the ones you don&apos;t, making job
                  hunting efficient and enjoyable.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  src={FeatImage03}
                  width={540}
                  height={405}
                  alt="Connect with Employers"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                {/* <h3 className="h3 mb-3 text-gray-400">
                  Step 3: Connect with Employers
                </h3> */}
                <div className="font-architects-daughter text-xl text-blue-400 mb-2">
                  Step 3: Connect with Employers
                </div>
                <p className="text-xl text-gray-400 mb-4">
                  Utilize in-app messaging to directly communicate with
                  employers. Discuss opportunities and find your perfect job
                  match with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zigzag;
