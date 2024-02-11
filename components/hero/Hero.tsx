"use client";

import Image from "next/image";
import { NewsletterForm } from "../newsletter-form";
import Container from "./container";

type ScrollRevealRefElement =
  | HTMLDivElement
  | HTMLHeadingElement
  | HTMLParagraphElement;

const Hero = () => {

  async function onNewsletterSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ values });
      }, 1000);
    });
  }

  return (
    <>

(https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80)
      <Container className="flex flex-wrap  ">
        <div className="flex items-center w-full lg:w-1/2 "  >
          <div className="max-w-2xl mb-8 text-center lg:w-full lg:py-20 lg:text-left">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-[#50d71e] lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
              Swipe Your Dream
            </h1>
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-[#50d71e] lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
              Tech Jobs
            </h1>
            <p className="py-5 text-xl leading-normal text-[#50d71e] lg:text-xl xl:text-2xl ">
              Hand-picked jobs reachable in with a single swipe. Anonyms till
              the match. No resume&apos;s and motivation letters. Top companies
              only.
            </p>

            <div className="max-w-6xl mx-auto ">
              <div
              //  ref={addToScrollRevealRef}
              >
                <NewsletterForm
                  className="mx-auto mt-8 max-w-md lg:mx-0 "
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
            Trusted by <span className="text-accent font-bold">2000+</span>{" "}
            users worldwide
          </div>
        </div>
      </Container>
    </>
  );
};
export default Hero;
