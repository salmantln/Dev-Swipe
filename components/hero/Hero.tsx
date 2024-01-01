"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NewsletterForm } from "../newsletter-form";
import Container from "./container";

type ScrollRevealRefElement =
  | HTMLDivElement
  | HTMLHeadingElement
  | HTMLParagraphElement;

const Hero = () => {
  // const [ScrollReveal, setScrollReveal] = useState<any>(null);
  // const scrollRevealRef = useRef<ScrollRevealRefElement[]>([]);

  // useEffect(() => {
  //   import("scrollreveal").then((ScrollRevealModule) => {
  //     setScrollReveal(ScrollRevealModule.default);

  //     if (scrollRevealRef.current.length > 0) {
  //       scrollRevealRef.current.forEach((ref) =>
  //         ScrollRevealModule.default().reveal(ref, {
  //           duration: 1000,
  //           distance: "40px",
  //           easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
  //           origin: "top",
  //           interval: 150,
  //         })
  //       );
  //     }
  //   });

  //   return () => {
  //     if (ScrollReveal) {
  //       ScrollReveal.destroy();
  //     }
  //   };
  // }, []);

  // const addToScrollRevealRef = (el: ScrollRevealRefElement) => {
  //   if (el && !scrollRevealRef.current.includes(el)) {
  //     scrollRevealRef.current.push(el);
  //   }
  // };

  async function onNewsletterSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ values });
      }, 1000);
    });
  }

  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2 ">
          <div className="max-w-2xl mb-8 text-center lg:w-full lg:py-20 lg:text-left">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Swipe Your Dream
            </h1>
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-primary lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Dev Job
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Discover how our revolutionary job-swiping app can transform your
              career path. Say goodbye to the dread of Monday mornings and hello
              to a job that ignites your passion.
            </p>

            <div className="max-w-6xl mx-auto ">
              <div
              //  ref={addToScrollRevealRef}
              >
                <NewsletterForm
                  className="mx-auto mt-8 max-w-md lg:mx-0"
                  submitText="Get early access"
                  // onSubmit={subscribeUser}
                  onSubmit={onNewsletterSubmit}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src="/img/Screen  - Swipe-portrait.png"
              // src="/img/Swipe screen-portrait.png"
              alt="screenshot of Swipe Function."
              width="300"
              height="300"
              data-aos="fade-left"
              // className="w-8"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-accent font-bold">2000+</span> users
            worldwide
          </div>
        </div>
      </Container>
    </>
  );
};
export default Hero;
