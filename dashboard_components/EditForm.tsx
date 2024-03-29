"use client";
import React, { useRef, useState } from "react";
import { MultiSelect, MultiSelectItem } from "@tremor/react";
import AutoComplete from "react-google-autocomplete";
import { Select, SelectItem } from "@tremor/react";

export const EditForm = ({ job }: { job: any }) => {
  const [selectedSkillOptions, setSelectedSkillOptions] = useState<string[]>(
    []
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [jobLocation, setJobLocation] = useState("");

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE || "";

  const [formData, setFormData] = useState({
    title: job.title || "",
    description: job.description || "",
    location: job.location || "",
    work_experience: job.work_experience || "",
    job_type: job.job_type || "",
    work_place: job.work_place || "",
    min_pay: job.min_pay || "",
    max_pay: job.max_pay || "",
    skills: job.skills || [],
    active: job.active || "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleValueChange = (value: string[]) => {
    if (value.length > 5) {
      // If more than 5 options are selected, show an error and do not update selected options
      setErrorMessage("You can only select up to 5 options");
    } else {
      // Update selected options and clear any error message
      setSelectedSkillOptions(value);
      setErrorMessage("");
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would compile form data, including selectedJob and otherField
    const formData = {
      // selectedJob,
      // otherField,
      // Include other fields as needed
    };

    console.log("Submitting form with data:", formData);
    // Submit formData to a server or handle as needed
  };

  const options = [
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
    "Java",
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
    "Agile/Scrum",
    "Backend",
    "Consultancy",
    "Data Science",
    "ETL",
    "Front-end",
    "Machine Learning",
    "Security",
    "Mobile",
    "Product Management",
    "CRM",
    "Docker",
    "ERP",
    "Linux",
    "No-SQL Databases",
    "Office 365",
    "Power BI",
    "SQL Databases",
    "Tableau",
  ];

  return (
    <>
      <h1 className=" mb-4 text-xl md:text-2xl text-cyan-600">Update job</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="title"
                  className="block text-m font-medium leading-6 text-gray-900"
                >
                  Job title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Location
                </label>
                <div className="mt-2">
                  <AutoComplete
                    defaultValue={formData.location}
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300 pac-target-input"
                    apiKey={apiKey}
                    onPlaceSelected={(place) => {
                      setJobLocation(place.formatted_address);
                      console.log(place.formatted_address);
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Estimated work experience
                </label>
                <div className="mt-2">
                  {/* <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  /> */}
                  <Select
                    // id="work_experience"
                    name="work_experience"
                    value={formData.work_experience}
                    // value={value}
                    // onValueChange={setValue}
                    // onChange={handleInputChange}
                    onChange={(e) => {
                      console.log(e);
                      setFormData({ ...formData, work_experience: e });
                    }}
                    className="mt-2"
                  >
                    <SelectItem value="< 1">Less than 1 year</SelectItem>
                    <SelectItem value="1 - 2">1 - 2 years</SelectItem>
                    <SelectItem value="2 - 4">2 - 4 years</SelectItem>
                    <SelectItem value="4 - 7">4 - 7 years</SelectItem>
                    <SelectItem value="7 - 10">7 - 10 years</SelectItem>
                    <SelectItem value="10 - 15">10 - 15 years</SelectItem>
                    <SelectItem value="15+">15+ years</SelectItem>
                  </Select>
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="job_type"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Type of job
                </label>
                <div className="mt-2">
                  {/* <input
                    type="text"
                    name="city"
                    id="city"
                    onChange={handleInputChange}
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  /> */}
                  <Select
                    name="job_type"
                    value={formData.job_type}
                    // value={value}
                    // onValueChange={handleInputChange}
                    // onChange={handleInputChange}
                    onChange={(e) => {
                      console.log(e);
                      setFormData({ ...formData, job_type: e });
                    }}
                    className="mt-2"
                  >
                    <SelectItem value="Fulltime">Fulltime</SelectItem>
                    <SelectItem value="Parttime">Parttime</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                    <SelectItem value="Temporary">Temporary</SelectItem>
                  </Select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Type of workplace
                </label>
                <div className="mt-2">
                  {/* <Select
                    id="work_place"
                    name="work_place"
                    value={formData.work_place}
                    // value={value}
                    // onValueChange={setValue}
                    onChange={handleInputChange}
                    className="mt-2"
                  >
                    <SelectItem value="On Site">On Site</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                  </Select> */}
                  <Select
                    name="work_place"
                    value={formData.work_place}
                    // onChange={handleInputChange}
                    // onValueChange={handleInputChange}
                    onChange={(e) => {
                      console.log(e);
                      setFormData({ ...formData, work_place: e });
                    }}
                    className="mt-2"
                  >
                    <SelectItem value="On Site">On Site</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6"></div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  // htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Min Salary
                </label>
                <div className="mt-2">
                  <Select
                    // id="min_pay"
                    name="min_pay"
                    value={formData.min_pay}
                    // value={value}
                    // onValueChange={setValue}
                    // onChange={handleInputChange}
                    onChange={(e) => {
                      console.log(e);
                      setFormData({ ...formData, min_pay: e });
                    }}
                    className="mt-2"
                  >
                    <SelectItem value="10">USD 10k per year</SelectItem>
                    <SelectItem value="20">USD 20k per year</SelectItem>
                    <SelectItem value="30">USD 30k per year</SelectItem>
                    <SelectItem value="40">USD 40k per year</SelectItem>
                    <SelectItem value="50">USD 50k per year</SelectItem>
                    <SelectItem value="60">USD 60k per year</SelectItem>
                    <SelectItem value="70">USD 70k per year</SelectItem>
                    <SelectItem value="80">USD 80k per year</SelectItem>
                    <SelectItem value="90">USD 90k per year</SelectItem>
                    <SelectItem value="100">USD 100k per year</SelectItem>
                    <SelectItem value="110">USD 110k per year</SelectItem>
                    <SelectItem value="120">USD 120k per year</SelectItem>
                    <SelectItem value="130">USD 130k per year</SelectItem>
                    <SelectItem value="140">USD 140k per year</SelectItem>
                    <SelectItem value="150">USD 150k per year</SelectItem>
                    <SelectItem value="160">USD 160k per year</SelectItem>
                    <SelectItem value="170">USD 170k per year</SelectItem>
                    <SelectItem value="180">USD 180k per year</SelectItem>
                    <SelectItem value="190">USD 190k per year</SelectItem>
                    <SelectItem value="200">USD 200k per year</SelectItem>
                    <SelectItem value="210">USD 210k per year</SelectItem>
                    <SelectItem value="220">USD 220k per year</SelectItem>
                    <SelectItem value="230">USD 230k per year</SelectItem>
                    <SelectItem value="240">USD 240k per year</SelectItem>
                    <SelectItem value="250">USD 250k per year</SelectItem>
                    <SelectItem value="260">USD 260k per year</SelectItem>
                    <SelectItem value="270">USD 270k per year</SelectItem>
                    <SelectItem value="280">USD 280k per year</SelectItem>
                    <SelectItem value="290">USD 290k per year</SelectItem>
                    <SelectItem value="300">USD 300k per year</SelectItem>
                    <SelectItem value="310">USD 310k per year</SelectItem>
                    <SelectItem value="320">USD 320k per year</SelectItem>
                    <SelectItem value="330">USD 330k per year</SelectItem>
                    <SelectItem value="340">USD 340k per year</SelectItem>
                    <SelectItem value="350">USD 350k per year</SelectItem>
                    <SelectItem value="360">USD 360k per year</SelectItem>
                    <SelectItem value="370">USD 370k per year</SelectItem>
                    <SelectItem value="380">USD 380k per year</SelectItem>
                    <SelectItem value="390">USD 390k per year</SelectItem>
                    <SelectItem value="400">USD 400k per year</SelectItem>
                    <SelectItem value="500">USD 500k per year</SelectItem>
                    <SelectItem value="600">USD 600k per year</SelectItem>
                    <SelectItem value="700">USD 700k per year</SelectItem>
                    <SelectItem value="800">USD 800k per year</SelectItem>
                    <SelectItem value="900">USD 900k per year</SelectItem>
                  </Select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Max Salary
                </label>
                <div className="mt-2">
                  <Select
                    // id="min_pay"
                    name="max_pay"
                    value={formData.max_pay}
                    // value={value}
                    // onValueChange={setValue}
                    // onChange={handleInputChange}
                    onChange={(e) => {
                      console.log(e);
                      setFormData({ ...formData, max_pay: e });
                    }}
                    className="mt-2"
                  >
                    <SelectItem value="10">USD 10k per year</SelectItem>
                    <SelectItem value="20">USD 20k per year</SelectItem>
                    <SelectItem value="30">USD 30k per year</SelectItem>
                    <SelectItem value="40">USD 40k per year</SelectItem>
                    <SelectItem value="50">USD 50k per year</SelectItem>
                    <SelectItem value="60">USD 60k per year</SelectItem>
                    <SelectItem value="70">USD 70k per year</SelectItem>
                    <SelectItem value="80">USD 80k per year</SelectItem>
                    <SelectItem value="90">USD 90k per year</SelectItem>
                    <SelectItem value="100">USD 100k per year</SelectItem>
                    <SelectItem value="110">USD 110k per year</SelectItem>
                    <SelectItem value="120">USD 120k per year</SelectItem>
                    <SelectItem value="130">USD 130k per year</SelectItem>
                    <SelectItem value="140">USD 140k per year</SelectItem>
                    <SelectItem value="150">USD 150k per year</SelectItem>
                    <SelectItem value="160">USD 160k per year</SelectItem>
                    <SelectItem value="170">USD 170k per year</SelectItem>
                    <SelectItem value="180">USD 180k per year</SelectItem>
                    <SelectItem value="190">USD 190k per year</SelectItem>
                    <SelectItem value="200">USD 200k per year</SelectItem>
                    <SelectItem value="210">USD 210k per year</SelectItem>
                    <SelectItem value="220">USD 220k per year</SelectItem>
                    <SelectItem value="230">USD 230k per year</SelectItem>
                    <SelectItem value="240">USD 240k per year</SelectItem>
                    <SelectItem value="250">USD 250k per year</SelectItem>
                    <SelectItem value="260">USD 260k per year</SelectItem>
                    <SelectItem value="270">USD 270k per year</SelectItem>
                    <SelectItem value="280">USD 280k per year</SelectItem>
                    <SelectItem value="290">USD 290k per year</SelectItem>
                    <SelectItem value="300">USD 300k per year</SelectItem>
                    <SelectItem value="310">USD 310k per year</SelectItem>
                    <SelectItem value="320">USD 320k per year</SelectItem>
                    <SelectItem value="330">USD 330k per year</SelectItem>
                    <SelectItem value="340">USD 340k per year</SelectItem>
                    <SelectItem value="350">USD 350k per year</SelectItem>
                    <SelectItem value="360">USD 360k per year</SelectItem>
                    <SelectItem value="370">USD 370k per year</SelectItem>
                    <SelectItem value="380">USD 380k per year</SelectItem>
                    <SelectItem value="390">USD 390k per year</SelectItem>
                    <SelectItem value="400">USD 400k per year</SelectItem>
                    <SelectItem value="500">USD 500k per year</SelectItem>
                    <SelectItem value="600">USD 600k per year</SelectItem>
                    <SelectItem value="700">USD 700k per year</SelectItem>
                    <SelectItem value="800">USD 800k per year</SelectItem>
                    <SelectItem value="900">USD 900k per year</SelectItem>
                  </Select>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Skills (Select max of 5)
                </label>
                <div className="mt-2">
                  <MultiSelect
                    errorMessage={errorMessage}
                    onValueChange={(e) => {
                      console.log(e);
                      setFormData({ ...formData, skills: e });
                    }}
                    onChange={(e) => {
                      console.log(e);
                      setFormData({ ...formData, skills: e });
                    }}
                    value={formData.skills}
                  >
                    {options.sort().map((option, index) => (
                      <MultiSelectItem key={index} value={option}>
                        {option}
                      </MultiSelectItem>
                    ))}
                  </MultiSelect>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Job description
                </label>
                <div className="mt-2">
                  <textarea
                    // id="about"
                    name="description"
                    rows={5}
                    onChange={handleInputChange}
                    value={formData.description}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about yourself.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};
