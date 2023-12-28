import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

import Container from "../hero/container";

const Faq = () => {
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
      <div className="w-full  p-2 mx-auto rounded-2xl">
        {faqData.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-[#ffffff] rounded-lg bg-secondary hover:bg-primary hover:text-secondary focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-white">
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
  // <div className="w-full px-4 pt-16">
  //   <div className="w-10/12 max-w-screen-2xl mx-auto flex flex-col mt-20 md:mt-40 rounded-2xl  p-2">
  //     {/* <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2"> */}
  //     <Disclosure>
  //       {({ open }) => (
  //         <>
  //           <Disclosure.Button
  //             className="flex w-full justify-between rounded-lg
  //           bg-purple-100 px-4 py-2 text-left
  //           text-sm font-medium text-purple-900
  //           hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
  //           >
  //             <span>What is your refund policy?</span>
  //             <PlusIcon
  //               className={`${
  //                 open ? "rotate-180 transform" : ""
  //               } h-5 w-5 text-purple-500`}
  //             />
  //           </Disclosure.Button>

  //           <Transition
  //             enter="transition duration-100 ease-out"
  //             enterFrom="transform scale-95 opacity-0"
  //             enterTo="transform scale-100 opacity-100"
  //             leave="transition duration-75 ease-out"
  //             leaveFrom="transform scale-100 opacity-100"
  //             leaveTo="transform scale-95 opacity-0"
  //           >
  //             <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
  //               If you&apos;re unhappy with your purchase for any reason,
  //               email us within 90 days and we&apos;ll refund you in full, no
  //               questions asked.
  //             </Disclosure.Panel>
  //           </Transition>
  //         </>
  //       )}
  //     </Disclosure>
  //     <Disclosure as="div" className="mt-2">
  //       {({ open }) => (
  //         <>
  //           <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
  //             <span>Do you offer technical support?</span>
  //             <PlusIcon
  //               className={`${
  //                 open ? "rotate-180 transform" : ""
  //               } h-5 w-5 text-purple-500`}
  //             />
  //           </Disclosure.Button>
  //           <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
  //             No.
  //           </Disclosure.Panel>
  //         </>
  //       )}
  //     </Disclosure>
  //   </div>
  // </div>
  // );
};

export default Faq;
