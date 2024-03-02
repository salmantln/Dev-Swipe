"use client";

import { Button, Card } from "@tremor/react";
import React, { useState } from "react";
import { MyQuillEditor } from "./editor/editor";

interface Skill {
  name: string;
  isSelected: boolean;
}

// Combine all skills into one array
const allSkills: Skill[] = [
  "AWS",
  "Firebase",
  "Innovative",
  "Google Cloud",
  "Heroku",
  "Microsoft Azure",
  "Share Point",
  "Angular",
  "Django",
  "Flutter",
  "Laravel",
  "Magento",
  "Next.js",
  "Node.js",
  "React",
  "Vue.js",
  "Wordpress",
  "jQuery",
  "C#",
  "C/C++",
  "Dart",
  "Go",
  "HTML/CSS",
  "java",
  "JavaScript",
  "Kotlin",
  "PHP",
  "Perl",
  "Python",
  "R",
  "Ruby",
  "Rust",
  "SQL",
  "Swift",
  "TypeScript",
  "Agile/scrum",
  "Backend",
  "Consultancy",
  "Data Science",
  "ETL",
  "Frond-end",
  "Machine Learning",
  "Security",
  "Mobile",
  "Product management",
  "CRM",
  "Docker",
  "ERP",
  "Linux",
  "No-SQL databases",
  "Office 365",
  "Power BI",
  "SQL databases",
  "Tableau",
].map((skill) => ({ name: skill, isSelected: false }));

// import { MyQuillEditor } from "../../../dashboard_components/editor/editor";

const ClientComponent = () => {
  const [isRemote, setIsRemote] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [placeholder, setPlaceholder] = useState("");
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState(false); // Loading state
  const [jobTitle, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [content, setContent] = useState("");
  const [skills, setSkills] = useState<Skill[]>(allSkills);

  const handleCheckboxChange = (event: any) => {
    setIsRemote(event.target.checked);
  };

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value); // Set the selected option
  };

  const handleRemoveOption = () => {
    setSelectedOption(""); // Reset the selected option
  };

  const handleSelectChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (!selectedOptions.includes(value)) {
      setSelectedOptions([...selectedOptions, value]); // Add the selected option
    }
  };

  const handleRemoveOption2 = (optionToRemove: string) => {
    setSelectedOptions(
      selectedOptions.filter((option) => option !== optionToRemove)
    ); // Remove the selected option
  };

  const handleListItemClick = (placeholderValue: string) => {
    setPlaceholder(placeholderValue);
  };

  const handleJobTitleChange = (event: any) => {
    setJobTitle(event.target.value);
  };

  const handleLocationChange = (event: any) => {
    setJobLocation(event.target.value);
  };

  const handleContentChange = (event: any) => {
    setContent(event.target.value);
  };

  const handleFetchData = async () => {
    setLoading(true);
    const apiEndpoint = "/api/test"; // Your API endpoint
    try {
      const response = await fetch(apiEndpoint, {
        next: {
          revalidate: 0,
        },
        // method: "GET",
        // headers: {
        //   accept: "application/json",
        // },
      });
      const responseData = await response.json();

      if (response.ok) {
        setJobTitle(responseData.jobTitle);
        setJobLocation(responseData.location);
        setContent(responseData.contentHTML);

        // const plainText: string = stripHtmlTags(content);
        // console.log("Plain Text: " + plainText);
        console.log("Response Title: " + jobTitle);
        console.log("Response Location: " + jobLocation);
        console.log("Response Content: " + content);
        setLoading(false);
        setData(responseData);
      } else {
        setError(responseData.message || "Failed to fetch data");
      }
    } catch (error) {
      setError("Error occurred while fetching data");
    } finally {
      setLoading(false); // Stop loading regardless of outcome
    }
  };

  const stripHtmlTags = (htmlText: string): string => {
    const regExp: RegExp = new RegExp("<[^>]*>", "g");
    return htmlText.replace(regExp, "");
  };

  const handleCheckboxChange2 = (index: number) => {
    const newSkills = [...skills];
    const selectedCount = newSkills.filter((skill) => skill.isSelected).length;

    // If trying to select more than 5, ignore
    if (selectedCount >= 5 && !newSkills[index].isSelected) return;

    newSkills[index].isSelected = !newSkills[index].isSelected;
    setSkills(newSkills);
  };
  return (
    <>
      <h1 className=" mb-4 text-xl md:text-2xl text-cyan-600">Job posts</h1>
      <Card className="mx-auto" decoration="top" decorationColor="cyan">
        {/* <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="grid grid-cols-2 gap-6">
            
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name
                <span className="text-sm text-red-500 font-black">●</span>
              </label>{" "}
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                />
              </div>{" "}
            </div>{" "}
            <div className="col-span-1 sm:col-span-1">
              <label
                htmlFor="company-website"
                className="block text-sm font-medium text-gray-700"
              >
                Company Website
                <span className="text-sm text-red-500 font-black">●</span>
              </label>{" "}
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                />
              </div>{" "}
            </div>
          </div>{" "}
          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              Company Tagline{" "}
              <span className="text-xs font-light">
                e.g. A to-do app htmlFor cats
              </span>
            </label>{" "}
            <div className="mt-1">
              <textarea
                rows={1}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>{" "}
          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              Company InhtmlFormation
            </label>{" "}
            <div className="mt-1">
              <textarea
                rows={3}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>{" "}
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-1 sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Company Logo
              </label>{" "}
              <div className="mt-1 flex items-start">
                <div className="flex-shrink-0 h-14 w-14">
                  <a target="_blank" rel="nofollow noopener">
                    <img
                      src="https://storage.googleapis.com/echojobs.io/static/logos/1644105214-company-default-image.jpg"
                      className="h-14 w-14 rounded-full ring-2 ring-gray-200"
                    />
                  </a>
                </div>{" "}
                <div className="flex flex-col ml-3 w-full">
                  <label htmlFor="file-upload">
                    <span className="w-3/5 inline-flex justify-center py-2 px-4 border border-transparent rounded-md text-sm text-white border-cyan-700 bg-cyan-700 hover:bg-cyan-800 active:bg-cyan-900 focus:bg-cyan-700">
                      <span className="-ml-1 mr-2 h-5 w-5">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="upload"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="svg-inline--fa fa-upload"
                        >
                          <path
                            fill="currentColor"
                            d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                            className=""
                          ></path>
                        </svg>
                      </span>
                      Choose file
                    </span>{" "}
                    <input id="file-upload" type="file" className="sr-only" />
                  </label>{" "}
                  <span className="ml-0.5 mt-0.5 text-xs text-gray-500">
                    Image up to 2MB
                  </span>{" "}
                </div>
              </div>
            </div>{" "}
            <div className="col-span-1 sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Company Email
                <span className="text-sm text-red-500 font-black">●</span>{" "}
                <span className="ml-2 text-xs text-gray-500 font-normal">
                  htmlFor managing job post
                </span>
              </label>{" "}
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                />
                <button
                  type="submit"
                  className="w-2/5 inline-flex items-center px-1 rounded-r-md text-white text-sm border-cyan-700 bg-cyan-700 hover:bg-cyan-800 active:bg-cyan-900 focus:bg-cyan-700"
                >
                  <span className="mx-auto">Verify email </span>
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Here is the abnner htmlFor ATS's */}
        <div className="bg-cyan-200 px-6 pb-10 pt-8 border-y border-dashed text-sm">
          <div className="flex flex-row">
            <div className="w-1/4 my-auto p-1 text-right">
              <span className="text-lg font-normal">
                {" "}
                Using ATS? Import here:{" "}
              </span>
            </div>
            <div className="w-fit my-auto pl-4">
              <ul className="flex flex-col md:flex-row flex-wrap list-none border-b-0">
                <li
                  role="presentation"
                  className="flex-grow mx-3 text-center"
                  onClick={() =>
                    handleListItemClick(
                      "https://boards.greenhouse.io/COMPANY/jobs/JOB_ID"
                    )
                  }
                >
                  <div
                    title="greenhouse"
                    className="flex-shrink-0 h-12 w-12 grayscale cursor-pointer hover:grayscale-0 active:grayscale-50"
                  >
                    <img
                      src="https://storage.googleapis.com/echojobs.io/static/logos/greenhouse-com.png"
                      alt="greenhouse"
                      className="h-12 w-12 rounded-full hover:border-2"
                    />
                  </div>
                </li>{" "}
                <li
                  role="presentation"
                  className="flex-grow mx-3 text-center"
                  onClick={() =>
                    handleListItemClick(
                      "https://jobs.lever.co/COMPANY/JOB_UUID"
                    )
                  }
                >
                  <div
                    title="lever"
                    className="flex-shrink-0 h-12 w-12 grayscale cursor-pointer hover:grayscale-0 active:grayscale-50"
                  >
                    <img
                      src="https://storage.googleapis.com/echojobs.io/static/logos/lever-co.png"
                      alt="lever"
                      className="h-12 w-12 rounded-full hover:border-2"
                    />
                  </div>
                </li>{" "}
                <li
                  role="presentation"
                  className="flex-grow mx-3 text-center"
                  onClick={() =>
                    handleListItemClick(
                      "https://apply.workable.com/COMPANY/j/JOB_ID"
                    )
                  }
                >
                  <div
                    title="workable"
                    className="flex-shrink-0 h-12 w-12 grayscale cursor-pointer hover:grayscale-0 active:grayscale-50"
                  >
                    <img
                      src="https://storage.googleapis.com/echojobs.io/static/logos/workable.svg"
                      alt="workable"
                      className="h-12 w-12 rounded-full bg-white hover:border-2"
                    />
                  </div>
                </li>{" "}
                <li
                  role="presentation"
                  className="flex-grow mx-3 text-center"
                  onClick={() =>
                    handleListItemClick(
                      "https://jobs.jobvite.com/COMPANY/job/JOB_ID"
                    )
                  }
                >
                  <div
                    title="breezy"
                    className="flex-shrink-0 h-12 w-12 grayscale cursor-pointer hover:grayscale-0 active:grayscale-50"
                  >
                    <img
                      src="https://storage.googleapis.com/echojobs.io/static/logos/breezy-hr.png"
                      alt="breezy"
                      className="h-12 w-12 rounded-full hover:border-2"
                    />
                  </div>
                </li>
                <li
                  role="presentation"
                  className="flex-grow mx-3 text-center"
                  onClick={() =>
                    handleListItemClick(
                      "https://COMPANY.breezy.hr/p/JOB_HANDLE"
                    )
                  }
                >
                  <div
                    title="jobvite"
                    className="flex-shrink-0 h-12 w-12 grayscale cursor-pointer hover:grayscale-0 active:grayscale-50"
                  >
                    <img
                      src="https://storage.googleapis.com/echojobs.io/static/logos/jobvite-com.png"
                      alt="jobvite"
                      className="h-12 w-12 rounded-full hover:border-2"
                    />
                  </div>
                </li>{" "}
                <li
                  role="presentation"
                  className="flex-grow mx-3 text-center"
                  onClick={() =>
                    handleListItemClick(
                      "https://jobs.smartrecruiters.com/COMPANY/JOB_HANDLE"
                    )
                  }
                >
                  <div
                    title="smartrecruiters"
                    className="flex-shrink-0 h-12 w-12 grayscale cursor-pointer hover:grayscale-0 active:grayscale-50"
                  >
                    <img
                      src="https://storage.googleapis.com/echojobs.io/static/logos/smartrecruiters-com.png"
                      alt="smartrecruiters"
                      className="h-12 w-12 rounded-full hover:border-2"
                    />
                  </div>
                </li>{" "}
                <li
                  role="presentation"
                  className="flex-grow mx-3 text-center"
                  onClick={() =>
                    handleListItemClick(
                      "https://COMPANY.recruitee.com/o/JOB_HANDLE"
                    )
                  }
                >
                  <div
                    title="recruitee"
                    className="flex-shrink-0 h-12 w-12 grayscale cursor-pointer hover:grayscale-0 active:grayscale-50"
                  >
                    <img
                      src="https://storage.googleapis.com/echojobs.io/static/logos/recruitee-com.png"
                      alt="recruitee"
                      className="h-12 w-12 rounded-full hover:border-2"
                    />
                  </div>
                </li>{" "}
                <li
                  role="presentation"
                  className="flex-grow mx-3 text-center"
                  onClick={() =>
                    handleListItemClick(
                      "https://COMPANY.hire.trakstar.com/jobs/JOB_ID"
                    )
                  }
                >
                  <div
                    title="trakstar"
                    className="flex-shrink-0 h-12 w-12 grayscale cursor-pointer hover:grayscale-0 active:grayscale-50"
                  >
                    <img
                      src="https://storage.googleapis.com/echojobs.io/static/logos/trakstar.svg"
                      alt="trakstar"
                      className="h-12 w-12 rounded-full bg-white hover:border-2"
                    />
                  </div>
                </li>{" "}
                <li
                  role="presentation"
                  className="flex-grow mx-3 text-center"
                  onClick={() =>
                    handleListItemClick(
                      "https://YOUR_COMPANY_CAREER.com/jobs/JOB_ID"
                    )
                  }
                >
                  <div
                    title="teamtailor"
                    className="flex-shrink-0 h-12 w-12 grayscale cursor-pointer hover:grayscale-0 active:grayscale-50"
                  >
                    <img
                      src="https://storage.googleapis.com/echojobs.io/static/logos/teamtailor.jpeg"
                      alt="teamtailor"
                      className="h-12 w-12 rounded-full bg-white hover:border-2"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>{" "}
          <div className="mt-6 flex rounded-md shadow-sm">
            <input
              type="text"
              placeholder={placeholder}
              className="focus:outline-none flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
            />{" "}
            <button
              type="submit"
              onClick={handleFetchData}
              className="w-1/5 inline-flex items-center px-16 rounded-r-md text-white text-sm border-cyan-700 bg-cyan-700 hover:bg-cyan-800 active:bg-cyan-900 focus:bg-cyan-700"
            >
              {/* <span className="mx-auto">Import</span> */}
              {loading ? (
                // Replace "Loading..." with your loading icon component or element
                // <span className="mx-auto">Loading...</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="spinner"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="mr-2 h-5 w-5 animate-spin svg-inline--fa fa-spinner"
                >
                  <path
                    fill="currentColor"
                    d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
                    className=""
                  ></path>
                </svg>
              ) : (
                <span className="mx-auto">Import</span>
              )}
            </button>
            {error && <p>Error: {error}</p>}
          </div>
        </div>

        {/* Description Section */}

        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              Job Title
              <span className="text-sm text-red-500 font-black">●</span>{" "}
              <span className="text-xs font-light text-amber-600">
                Be aware we only accept <i>software engineering</i> related jobs
              </span>
            </label>{" "}
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                value={jobTitle}
                onChange={handleJobTitleChange}
                type="text"
                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
              />
            </div>{" "}
          </div>
          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              Glassdoor link
              <span className="text-sm text-red-500 font-black">●</span>{" "}
              <span className="text-xs font-light text-amber-600">
                Be aware we only accept <i>software engineering</i> related jobs
              </span>
            </label>{" "}
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                // value={jobTitle}
                onChange={handleJobTitleChange}
                type="text"
                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
              />
            </div>{" "}
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1 sm:col-span-1">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
                <span className="text-sm text-red-500 font-black">●</span>
              </label>{" "}
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  value={jobLocation}
                  onChange={handleLocationChange}
                  type="text"
                  placeholder="City or region"
                  autoComplete="off"
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300 pac-target-input"
                />
              </div>{" "}
              <div className="mt-1 flex">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-cyan-600 border-gray-300 rounded"
                    onChange={handleCheckboxChange}
                    checked={isRemote}
                  />
                </div>
                <div className="ml-2 text-xs my-auto">
                  <label htmlFor="remote" className="font-medium text-gray-700">
                    This is a remote position
                  </label>
                </div>
              </div>
              {isRemote && (
                <span className="px-1.5 py-0.5 my-1 ml-0 mr-2 inline-flex text-xs font-normal rounded border-2 text-black">
                  Remote
                  <span
                    className="ml-1 pl-1.5 cursor-pointer"
                    onClick={() => setIsRemote(false)}
                  >
                    x
                  </span>
                </span>
              )}
              {jobLocation && (
                <span className="px-1.5 py-0.5 my-1 ml-0 mr-2 inline-flex text-xs font-normal rounded border-2 text-black">
                  {jobLocation}
                  <span
                    className="ml-1 pl-1.5 cursor-pointer"
                    onClick={() => setJobLocation("")} // Clear the jobLocation state
                  >
                    x
                  </span>
                </span>
              )}
            </div>

            <div className="col-span-1 sm:col-span-1">
              <label
                htmlFor="Seniority"
                className="block text-sm font-medium text-gray-700"
              >
                Estimated work experience
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <select
                  value={selectedOption}
                  onChange={handleSelectChange}
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option disabled={true} value="">
                    Not selected
                  </option>
                  <option>Less than 1 year</option>
                  <option>1 - 2 years</option>
                  <option>2 - 4 years</option>
                  <option>4 - 7 years</option>
                  <option>7 - 10 years</option>
                  <option>10 - 15 years</option>
                  <option>15+ years</option>
                </select>
              </div>
              {selectedOption && (
                <span
                  className="px-1.5 py-0.5 my-1 ml-0 mr-2 inline-flex text-xs font-normal rounded border-2 text-black"
                  onClick={handleRemoveOption}
                >
                  {selectedOption}
                  <span className="ml-1 pl-1.5 cursor-pointer">x</span>
                </span>
              )}
              <div className="mt-1 flex flex-wrap min-h-fit"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1 sm:col-span-1">
              <label
                htmlFor="Seniority"
                className="block text-sm font-medium text-gray-700"
              >
                Type of job
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                {/* <select className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"> */}
                <select
                  value={selectedOption}
                  onChange={handleSelectChange}
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option disabled={true} value="">
                    Not selected
                  </option>

                  <option>Fulltime</option>
                  <option>Parttime</option>
                  <option>Internship</option>
                  <option>Temporary</option>
                </select>
              </div>
              {selectedOption && (
                <span
                  className="px-1.5 py-0.5 my-1 ml-0 mr-2 inline-flex text-xs font-normal rounded border-2 text-black"
                  onClick={handleRemoveOption}
                >
                  {selectedOption}
                  <span className="ml-1 pl-1.5 cursor-pointer">x</span>
                </span>
              )}
              <div className="mt-1 flex flex-wrap min-h-fit"></div>
            </div>

            {/* <div className="col-span-1 sm:col-span-1">
              <label
                htmlFor="Seniority"
                className="block text-sm font-medium text-gray-700"
              >
                Does it have a screening
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <select
                  // value={selectedOption}
                  onChange={handleSelectChange}
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option disabled={true} value="">
                    Not selected
                  </option>

                  <option>Yes</option>
                  <option>No</option>
                  <option>Optional</option>
                </select>
              </div>
              {selectedOption && (
                <span
                  className="px-1.5 py-0.5 my-1 ml-0 mr-2 inline-flex text-xs font-normal rounded border-2 text-black"
                  onClick={handleRemoveOption}
                >
                  {selectedOption}
                  <span className="ml-1 pl-1.5 cursor-pointer">x</span>
                </span>
              )}
              <div className="mt-1 flex flex-wrap min-h-fit"></div>
            </div> */}

            <div className="col-span-1 sm:col-span-1">
              <label
                htmlFor="Seniority"
                className="block text-sm font-medium text-gray-700"
              >
                Type of workplace
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <select
                  value={selectedOption}
                  onChange={handleSelectChange}
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option disabled={true} value="">
                    Not selected
                  </option>
                  <option>On Site</option>
                  <option>Remote</option>
                  <option>Hybride</option>
                </select>
              </div>
              {selectedOption && (
                <span
                  className="px-1.5 py-0.5 my-1 ml-0 mr-2 inline-flex text-xs font-normal rounded border-2 text-black"
                  onClick={handleRemoveOption}
                >
                  {selectedOption}
                  <span className="ml-1 pl-1.5 cursor-pointer">x</span>
                </span>
              )}
              <div className="mt-1 flex flex-wrap min-h-fit"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="col-span-1 sm:col-span-1 w-2/3">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Pay Bands
                <span className="text-sm text-red-500 font-black">●</span>{" "}
                <span className="text-xs font-light text-amber-600"></span>
              </label>{" "}
              <div className="mt-1 flex">
                <div className="flex flex-col w-1/2">
                  <select className="block overflow-auto w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option disabled={true} selected={true} value="">
                      Min pay in USD
                    </option>{" "}
                    <option value="10">USD 10k per year</option>
                    <option value="20">USD 20k per year</option>
                    <option value="30">USD 30k per year</option>
                    <option value="40">USD 40k per year</option>
                    <option value="50">USD 50k per year</option>
                    <option value="60">USD 60k per year</option>
                    <option value="70">USD 70k per year</option>
                    <option value="80">USD 80k per year</option>
                    <option value="90">USD 90k per year</option>
                    <option value="100">USD 100k per year</option>
                    <option value="110">USD 110k per year</option>
                    <option value="120">USD 120k per year</option>
                    <option value="130">USD 130k per year</option>
                    <option value="140">USD 140k per year</option>
                    <option value="150">USD 150k per year</option>
                    <option value="160">USD 160k per year</option>
                    <option value="170">USD 170k per year</option>
                    <option value="180">USD 180k per year</option>
                    <option value="190">USD 190k per year</option>
                    <option value="200">USD 200k per year</option>
                    <option value="210">USD 210k per year</option>
                    <option value="220">USD 220k per year</option>
                    <option value="230">USD 230k per year</option>
                    <option value="240">USD 240k per year</option>
                    <option value="250">USD 250k per year</option>
                    <option value="260">USD 260k per year</option>
                    <option value="270">USD 270k per year</option>
                    <option value="280">USD 280k per year</option>
                    <option value="290">USD 290k per year</option>
                    <option value="300">USD 300k per year</option>
                    <option value="310">USD 310k per year</option>
                    <option value="320">USD 320k per year</option>
                    <option value="330">USD 330k per year</option>
                    <option value="340">USD 340k per year</option>
                    <option value="350">USD 350k per year</option>
                    <option value="360">USD 360k per year</option>
                    <option value="370">USD 370k per year</option>
                    <option value="380">USD 380k per year</option>
                    <option value="390">USD 390k per year</option>
                    <option value="400">USD 400k per year</option>
                    <option value="500">USD 500k per year</option>
                    <option value="600">USD 600k per year</option>
                    <option value="700">USD 700k per year</option>
                    <option value="800">USD 800k per year</option>
                    <option value="900">USD 900k per year</option>
                  </select>{" "}
                </div>{" "}
                <p className="mx-3">-</p>{" "}
                <div className="flex flex-col w-1/2">
                  <select className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option disabled={true} selected={true} value="">
                      Max pay in USD
                    </option>{" "}
                    <option value="10">USD 10k per year</option>
                    <option value="20">USD 20k per year</option>
                    <option value="30">USD 30k per year</option>
                    <option value="40">USD 40k per year</option>
                    <option value="50">USD 50k per year</option>
                    <option value="60">USD 60k per year</option>
                    <option value="70">USD 70k per year</option>
                    <option value="80">USD 80k per year</option>
                    <option value="90">USD 90k per year</option>
                    <option value="100">USD 100k per year</option>
                    <option value="110">USD 110k per year</option>
                    <option value="120">USD 120k per year</option>
                    <option value="130">USD 130k per year</option>
                    <option value="140">USD 140k per year</option>
                    <option value="150">USD 150k per year</option>
                    <option value="160">USD 160k per year</option>
                    <option value="170">USD 170k per year</option>
                    <option value="180">USD 180k per year</option>
                    <option value="190">USD 190k per year</option>
                    <option value="200">USD 200k per year</option>
                    <option value="210">USD 210k per year</option>
                    <option value="220">USD 220k per year</option>
                    <option value="230">USD 230k per year</option>
                    <option value="240">USD 240k per year</option>
                    <option value="250">USD 250k per year</option>
                    <option value="260">USD 260k per year</option>
                    <option value="270">USD 270k per year</option>
                    <option value="280">USD 280k per year</option>
                    <option value="290">USD 290k per year</option>
                    <option value="300">USD 300k per year</option>
                    <option value="310">USD 310k per year</option>
                    <option value="320">USD 320k per year</option>
                    <option value="330">USD 330k per year</option>
                    <option value="340">USD 340k per year</option>
                    <option value="350">USD 350k per year</option>
                    <option value="360">USD 360k per year</option>
                    <option value="370">USD 370k per year</option>
                    <option value="380">USD 380k per year</option>
                    <option value="390">USD 390k per year</option>
                    <option value="400">USD 400k per year</option>
                    <option value="500">USD 500k per year</option>
                    <option value="600">USD 600k per year</option>
                    <option value="700">USD 700k per year</option>
                    <option value="800">USD 800k per year</option>
                    <option value="900">USD 900k per year</option>
                  </select>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
          <label
            htmlFor="company-name"
            className="block text-sm font-medium text-gray-700"
          >
            Job description
            <span className="text-sm text-red-500 font-black">●</span>
          </label>{" "}
          {/* Skills */}
          <div className="flex flex-col justify-start gap-4">
            {skills.map((skill, index) => (
              <label key={skill.name} className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  checked={skill.isSelected}
                  onChange={() => handleCheckboxChange2(index)}
                />
                <span className="ml-2 text-gray-700">{skill.name}</span>
              </label>
            ))}
          </div>
          <MyQuillEditor description1={content} />
          {/* <EditorV2 /> */}
          <div className="px-4 py-3  text-right sm:px-6">
            <div className="mt-6 flex justify-end gap-4">
              {/* <Link
                href="/dashboard/invoices"
                className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
              >
                Cancel
              </Link> */}
              <Button variant="secondary">Cancel</Button>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 font-medium rounded-md text-white border-cyan-700 bg-cyan-700 hover:bg-cyan-800 active:bg-cyan-900 focus:bg-cyan-700"
              >
                Create Job
              </button>
              {/* <Button type="submit">Create Invoice</Button> */}
            </div>
            {/* <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 font-medium rounded-md text-white border-cyan-700 bg-cyan-700 hover:bg-cyan-800 active:bg-cyan-900 focus:bg-cyan-700"
            >
              Continue to Preview
            </button> */}
          </div>
        </div>
      </Card>
    </>

    // <EditorV2/>
  );
};
export default ClientComponent;
