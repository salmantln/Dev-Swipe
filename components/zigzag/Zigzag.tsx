import React from "react";
import Image from "next/image";
import FeatImage01 from "@/public/img/Screen - Characters-portrait.png";
import FeatImage02 from "@/public/img/Screen  - Swipe-portrait.png";
import FeatImage03 from "@/public/img/Screen - Chat-portrait.png";
// import FeatImage01 from "@/public/img/features-03-image-01.png";
// import FeatImage02 from "@/public/img/features-03-image-02.png";
// import FeatImage03 from "@/public/img/features-03-image-03.png";

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
                  width={350}
                  height={405}
                  alt="Create Profile"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="font-architects-daughter text-2xl text-primary mb-2">
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
                  width={350}
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
                <div className="font-architects-daughter text-2xl   text-primary mb-2">
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
                  width={350}
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
                <div className="font-architects-daughter text-2xl  text-primary mb-2">
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
