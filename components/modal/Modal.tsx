'use client'
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const CompanyInfoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Job Vacancy Data:", formData);
    // Add your submission logic here (e.g., send data to an API)
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-md focus:outline-none"
      >
        Post your job offer
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded bg-gray-400">
            <Dialog.Title className="text-lg text-center font-medium p-4 border-b">
            Post your job offer
            </Dialog.Title>
            <p className="mb-8 text-center">
              {/* Laat hieronder jouw gegevens achter, dan zorgen wij dat je zo snel
              mogelijk aan de slag kunt */}
              Drop down your details and we will contact you as soon as possible
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 p-4">
              {/* <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Naam*"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              /> */}

              <div className="relative w-full">
                <input
                  type="text"
                  id="name"
                  className="block px-2.5 pb-2.5 pt-4 w-full rounded-md shadow-xl appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  tabIndex={0}
                  value={formData.name}
                  onChange={handleChange}
                />
                <label className="text-neutral-500 absolute duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                  Name
                  <span aria-label="required">*</span>
                </label>
                <small></small>
              </div>

              {/* <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Bedrijf*"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              /> */}
              <div className="relative w-full">
                <input
                  type="email"
                  id="email"
                  className="block px-2.5 pb-2.5 pt-4 w-full rounded-md shadow-xl appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                />
                <label
                  // for="email"
                  className="text-neutral-500 absolute duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  {" "}
                  E-mail
                  <span aria-label="required">*</span>
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  id="company"
                  className="block px-2.5 pb-2.5 pt-4 w-full rounded-md shadow-xl appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  value={formData.company}
                  onChange={handleChange}
                />
                <label
                  // for="companyName"
                  className="text-neutral-500 absolute duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Company
                  <span aria-label="required">*</span>
                </label>
                <small></small>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  id="phoneNumber"
                  className="block px-2.5 pb-2.5 pt-4 w-full rounded-md shadow-xl appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  value={formData.phone}
                  onChange={handleChange}
                />
                <label
                  // for="phoneNumber"
                  className="text-neutral-500 absolute duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  {" "}
                  Phone
                </label>
              </div>
              {/* <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefoonnummer"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              /> */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-md focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default CompanyInfoModal;
