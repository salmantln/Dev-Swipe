import React, { useState } from "react";
import { Card } from "@tremor/react";
import FileUpload from "../dashboard_components/file-upload.component";

export const CompanyDashboard = () => {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  });

  const updateUploadedFiles = (files: any) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    //logic to create new user...
  };

  return (
    <>
      <p className="mb-2 text-sm font-semibold text-cyan-600">
        Company details
      </p>
      <Card className="mx-auto" decoration="top" decorationColor="cyan">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="grid grid-cols-2 gap-6">
            <div className=" sm:col-span-1">
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

            <div className=" sm:col-span-1">
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-gray-700"
              >
                Glassdoor link
                <span className="text-sm text-red-500 font-black">●</span>
              </label>{" "}
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                />
              </div>{" "}
            </div>{" "}
          </div>
          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              Who are we
              <span className="text-sm text-red-500 font-black">●</span>
            </label>{" "}
            <div className="mt-1">
              <textarea
                rows={5}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>{" "}
          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              Company&apos;s mission
              <span className="text-sm text-red-500 font-black">●</span>
            </label>{" "}
            <div className="mt-1">
              <textarea
                rows={5}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>{" "}
          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              Company&apos;s culture and values
              <span className="text-sm text-red-500 font-black">●</span>
            </label>{" "}
            <div className="mt-1">
              <textarea
                rows={5}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>{" "}
          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              Impressions (photo&apos;s and video&apos;s)
              <span className="text-sm text-red-500 font-black">●</span>
            </label>{" "}
            <div className="mt-1">
              {/* File uploaded */}
              <form onSubmit={handleSubmit} method="POST">
                <FileUpload
                  accept=".jpg,.png,.jpeg"
                  label="Profile Image(s)"
                  multiple
                  updateFilesCb={updateUploadedFiles}
                />
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 font-medium rounded-md text-white border-cyan-700 bg-cyan-700 hover:bg-cyan-800 active:bg-cyan-900 focus:bg-cyan-700"
                >
                  Upload company profile
                </button>
                </div>
              </form>
             
            </div>
          </div>{" "}
        </div>
      </Card>
    </>
  );
};
