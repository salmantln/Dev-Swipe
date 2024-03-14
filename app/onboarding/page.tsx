"use client";

import FileUpload from "@/dashboard_components/file-upload.component";
import { supabase } from "@/lib/supabase/supabaseClient";
import { CameraIcon, UserCircleIcon } from "@heroicons/react/solid";
import { Card } from "@tremor/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Example() {
  const router = useRouter(); // For navigation after successful submission
  
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  });
  const [descriptionTouched, setDescriptionTouched] = useState(false);
  const [showDescriptionError, setShowDescriptionError] = useState(false);
  const handleBlur = (e: any) => {
    // Set descriptionTouched to true if the description is empty when the user leaves the field
    if (e.target.name === "description" && e.target.value.trim() === "") {
      setDescriptionTouched(true);
    }
  };

  const [state, setState] = useState({
    company_name: "",
    glassdoor_link: "",
    city: "",
    company_size: "",
    country: "",
    description: "",
    mission: "",
    culture_and_values: "",
    company_image: "",
    cover_image: "",
    contact_firstname: "",
    contact_lastname: "",
    impression_images: [],
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    // Check if the description is being cleared
    if (name === "description") {
      setShowDescriptionError(value.trim().length === 0);
    }

    setState((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const updateUploadedFiles = (files: any) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

    const submitCompanyInfo = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); // Prevent the form from reloading the page
  
      const user = supabase.auth.getUser(); // Corrected way to get the current user
  
      if (!user) {
        console.error("User not authenticated");
        return; // Early return if no user is authenticated
      }
  
      try {
        console.log(state);
        const { data, error } = await supabase
          .from("companies") // Make sure your table name is correct
          .insert([
            {
              id: (await user).data.user?.id, // Assuming 'user_id' column exists to link the company info to the user
              ...state, // Spread the state object to match the columns in your table
            },
          ]);
  
        if (error) throw error;
  
        // Redirect or show a success message
        console.log("Company info saved:", data);
        await supabase.auth.updateUser({
          data: { onboarding: true },
        });
        router.push('/dashboard'); // Navigate to the dashboard
      } catch (error) {
        console.error("Failed to save company info:", error);
      }
    };

  // };

  return (
    <>
      <div className="mx-auto max-w-3xl py-24 px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <Card className="" decoration="top" decorationColor="cyan">
          <form onSubmit={submitCompanyInfo}>
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
                      htmlFor="company_name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Company Name
                    </label>
                    <div className="mt-2">
                      <input
                        required
                        value={state.company_name}
                        onChange={handleChange}
                        type="text"
                        name="company_name"
                        id="company_name"
                        autoComplete="given-company"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="glassdoor_link"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Glassdoor Link
                    </label>
                    <div className="mt-2">
                      <input
                        value={state.glassdoor_link}
                        onChange={handleChange}
                        type="text"
                        name="glassdoor_link"
                        id="glassdoor_link"
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
                        required
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
                        required
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
                      htmlFor="company_size"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Company Size
                    </label>
                    <div className="mt-2">
                      <select
                        id="company_size"
                        name="company_size"
                        onChange={handleChange}
                        value={state.company_size}
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
                        required
                        value={state.description}
                        onChange={handleChange}
                        id="description"
                        name="description"
                        // onBlur={handleBlur} // Add onBlur event handler
                        placeholder="Example, your company activities..."
                        maxLength={255} // Ensure users cannot exceed the limit
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-red-600">
                      {showDescriptionError && (
                        <p className="mt-3 text-sm leading-6 text-red-600">
                          You must enter the description.
                        </p>
                      )}
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
                        required
                        value={state.mission}
                        onChange={handleChange}
                        placeholder="What is the main goal of the company"
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
                      htmlFor="culture_and_values"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Culture and core values
                    </label>
                    <div className="mt-2">
                      <textarea
                        value={state.culture_and_values}
                        onChange={handleChange}
                        placeholder="How is the culture of the workspace like"
                        id="culture_and_values"
                        name="culture_and_values"
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
                      htmlFor="company_image"
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
                      htmlFor="cover_image"
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
                            htmlFor="cover_image"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-cyan-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-600 focus-within:ring-offset-2 hover:text-cyan-500"
                          >
                            <span>Upload a file</span>
                            <input
                              value={state.cover_image}
                              onChange={handleChange}
                              id="cover_image"
                              name="cover_image"
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
                      htmlFor="contact_firstname"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        required
                        value={state.contact_firstname}
                        onChange={handleChange}
                        type="text"
                        placeholder="Jan or J."
                        name="contact_firstname"
                        id="contact_firstname"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="contact_lastname"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        required
                        value={state.contact_lastname}
                        onChange={handleChange}
                        placeholder="Do"
                        type="text"
                        name="contact_lastname"
                        id="contact_lastname"
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
    </>
  );
}
