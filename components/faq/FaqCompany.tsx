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
      question: "How can DevSwipe improve our recruitment process?",
      answer:
        "Our app simplifies sourcing by offering a pool of pre-screened candidates with tech and design expertise, reducing the time and resources spent on finding suitable talent.",
    },
    {
      question:
        "Can I integrate the app with my linkedin of my HR and other departments?",
      answer:
        "Yes. We want it easy to and efficient as possible for everybody. So You can connect your Linkedin with the app and get notified.",
    },
    {
      question: "What features does DevSwipe offer for companies?",
      answer:
        "We offer detailed candidate profiles, skills assessments, integration with Linkedin and the ability to directly contact potential hires. Our platform also provides analytics to track the success of your listings.",
    },
    {
      question: "Is there a cost associated with using DevSwipe?",
      answer: "DevSwipe is currently free to use!",
    },
  ];

  return (
    <Container className="!p-0">
      <div className="w-full  p-2 mx-auto rounded-2xl"           data-aos="fade-bottom">
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
};

export default FaqCompany;
