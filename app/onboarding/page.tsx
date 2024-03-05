"use client";

import FileUpload from "@/dashboard_components/file-upload.component";
import { CameraIcon, UserCircleIcon } from "@heroicons/react/solid";
import { Card } from "@tremor/react";
import { ChangeEvent, useState } from "react";
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { db } from "../../lib/firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";

export default function Example() {
  // const [companyName, setCompanyName] = useState("");
  // const [glassdoorLink, setGlassdoorLink] = useState("");
  // const [city, setCity] = useState("");
  // const [country, setCountry] = useState("");
  // const [description, setDescription] = useState("");
  // const [mission, setMission] = useState("");
  // const [culture, setCulture] = useState("");
  // const [companyImage, setCompanyImage] = useState("");
  // const [companyCoverImage, setCompanyCoverImage] = useState("");
  // const [contactFirstname, setContactFirstname] = useState("");
  // const [contactLastname, setContactLastname] = useState("");
  // const [impressionImages, setImpressionImages] = useState([]);

  const [state, setState] = useState({
    companyName: "",
    glassdoorLink: "",
    city: "",
    companySize: "",
    country: "",
    description: "",
    mission: "",
    culture: "",
    companyImage: "",
    companyCoverImage: "",
    contactFirstname: "",
    contactLastname: "",
    impressionImages: [],
  });

  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });

  // const handleChange = (evt: any) => {
  //   const { name, value, type, checked } = evt.target;
  //   setState((prevState) => ({
  //     ...prevState,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  });

  const updateUploadedFiles = (files: any) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    //logic to create new user...
  };

  const submitCompanyInfo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // This prevents the page reload

    // const jobPostData = {
    //   companyName: companyName,
    //   glassdoorLink: glassdoorLink,
    //   city: city,
    //   country: country,
    //   // companySize: companySize,
    //   description: description,
    //   mission: mission,
    //   culture: culture,
    //   companyImage: companyImage,
    //   companyCoverImage: companyCoverImage,
    //   contactFirstname: contactFirstname,
    //   contactLastname: contactLastname,
    //   impressionImages: impressionImages,
    // };
    // Your form submission logic here
    try {
      const docRef = await addDoc(collection(db, "Company"), state);
      console.log("Document written with ID: ", docRef);
      // Attempt to save to Firestore
      // Redirect or show a success message upon success
    } catch (error) {
      // Handle the error
      console.error("Document Error:", error);
    }
  };

  return (
    <div className="mx-auto max-w-3xl py-24 px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Card className="" decoration="top" decorationColor="cyan">
        <form onSubmit={submitCompanyInfo} method="POST">
          {/* <form onSubmit={submitCompanyInfo}> */}
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h1 className="text-base font-semibold leading-7 text-gray-900">
                Onboarding
              </h1>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Company Name
                  </label>
                  <div className="mt-2">
                    <input
                      value={state.companyName}
                      onChange={handleChange}
                      type="text"
                      name="companyName"
                      id="companyName"
                      autoComplete="given-company"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="glassdoorLink"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Glassdoor Link
                  </label>
                  <div className="mt-2">
                    <input
                      value={state.glassdoorLink}
                      onChange={handleChange}
                      type="text"
                      name="glassdoorLink"
                      id="glassdoorLink"
                      // autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      value={state.city}
                      onChange={handleChange}
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <input
                      value={state.country}
                      onChange={handleChange}
                      type="text"
                      name="country"
                      id="country"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* company size */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="companySize"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Company Size
                  </label>
                  <div className="mt-2">
                    <select
                      id="companySize"
                      name="companySize"
                      onChange={handleChange}
                      value={state.companySize}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="0-1">0-1</option>
                      <option value="2-10">2-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="501-1000">501-1000</option>
                      <option value="1001-5000">1001-5000</option>
                      <option value="5001-10.000">5001-10.000</option>
                      <option value="10.000+">10.000+</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Who are we as a company?
                  </label>
                  <div className="mt-2">
                    <textarea
                      value={state.description}
                      onChange={handleChange}
                      id="description"
                      name="description"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about yourself.
                  </p>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Mission
                  </label>
                  <div className="mt-2">
                    <textarea
                      value={state.mission}
                      onChange={handleChange}
                      id="mission"
                      name="mission"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about yourself.
                  </p>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Culture and core values
                  </label>
                  <div className="mt-2">
                    <textarea
                      value={state.culture}
                      onChange={handleChange}
                      id="culture"
                      name="culture"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about yourself.
                  </p>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Company image
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon
                      className="h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <CameraIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-cyan-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-600 focus-within:ring-offset-2 hover:text-cyan-500"
                        >
                          <span>Upload a file</span>
                          <input
                            value={state.companyCoverImage}
                            onChange={handleChange}
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Contact of company
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                The person who will contact with the job seekers.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      value={state.contactFirstname}
                      onChange={handleChange}
                      type="text"
                      placeholder="Jan or J."
                      name="contactFirstname"
                      id="contactFirstname"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="contactLastname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      value={state.contactLastname}
                      onChange={handleChange}
                      placeholder="Do"
                      type="text"
                      name="contactLastname"
                      id="contactLastname"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-full py-10">
                <FileUpload
                  accept=".jpg,.png,.jpeg"
                  label="Impression of company Image(s)"
                  multiple
                  updateFilesCb={updateUploadedFiles}
                />
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
              className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            >
              Save
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}
