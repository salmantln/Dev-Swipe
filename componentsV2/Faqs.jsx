import Link from "next/link";

import { Container } from "@/componentsV2/Container";

const faqs = [
  [
    {
      question: "How does DevSwipe work?",
      answer:
        "DevSwipe uses advanced algorithms to match job seekers with relevant job postings based on their skills, experience, and preferences. Simply create a profile, upload your resume, and start swiping through job listings to find your perfect match.",
    },
    {
      question: "I have liked a job post, now what?",
      answer:
        "Once you like a job post, your profile will be shared with the employer. If they find your profile to be a good fit, they'll reach out to you directly through the app to initiate the interview process.",
    },
    {
      question: "Is it free for me to job hunt on DevSwipe?",
      answer:
        "Yes, DevSwipe is free for job seekers! Our goal is to connect talented individuals with their dream jobs without any barriers.",
    },
  ],
  [
    {
      question: "Do employers see my personal information?",
      answer:
        "Employers will only see the professional information you choose to share on your profile, such as your work experience, skills, and education. Your contact information is kept private until you decide to share it.",
    },
    {
      question: "Where is DevSwipe based?",
      answer:
        "DevSwipe is a global platform with our headquarters located in the tech heart of Amsterdam. We serve users and companies from all around the world.",
    },
    {
      question: "Is there any age limit to use DevSwipe?",
      answer:
        "As you can also do your internship via DevSwipe, there is no age limit. However, companies can reject you when they think you look unprofessional",
    },
  ],
  [
    {
      question: "Can I use DevSwipe for remote job searches?",
      answer:
        "Absolutely! DevSwipe offers a wide range of job listings, including remote, part-time, and freelance opportunities. You can filter your job search to find remote positions that suit your lifestyle.",
    },
    {
      question: "How do I ensure my profile stands out to employers?",
      answer:
        "Make sure to complete your profile with detailed work experience, skills, and a professional photo. Regularly updating your profile and being active on the platform increases your visibility to potential employers.",
    },
    {
      question: "How do I become a featured job seeker?",
      answer:
        "Featured job seekers are selected based on their active engagement on the platform and the completeness of their profile. Keep your profile up to date and interact with job postings regularly to increase your chances.",
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{" "}
            <Link
              href="mailto:devswipe.app@gmail.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
