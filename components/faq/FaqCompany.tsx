import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

import Container from "../hero/container";

const FaqCompany = () => {
  const faqData = [
    {
      question: "What is DevSwipe?",
      answer:
        "DevSwipe is a mobile application designed to simplify the job search process in the tech and development sectors. It uses a swipe-based interface to connect job seekers with relevant job opportunities efficiently.",
    },
    {
      question: "How does the swipe feature work?",
      answer:
        "Job seekers can swipe right on job listings they are interested in and swipe left on those they are not. This intuitive interface makes job searching faster and more user-friendly.",
    },
    {
      question: "Is DevSwipe free to use?",
      answer:
        " Yes, DevSwipe is free for job seekers. There may be premium features available for enhanced functionality, which recruiters can subscribe to.",
    },
    {
      question: "What kind of jobs can I find on DevSwipe?",
      answer:
        "DevSwipe specializes in tech and development roles, ranging from entry-level positions to senior roles as well as internships in various tech industries like UI UX, Software engineering and development and much more",
    },
  ];

  return (
    <Container className="!p-0">
          <h3 className="text-2xl text-center font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
             Frequent asked Questions:
            </h3>
      <div className="w-full max-w-4xl p-2 mx-auto rounded-2xl">
        {faqData.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-900 hover:bg-gray-500 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-white">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-gradient-to-r from-green-400 to-blue-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-900 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FaqCompany;
