// import React from 'react'
// import ClientComponent from '../../../dashboard_components/client_components'
import { CreatedJobsTable } from "@/dashboard_components/CreatedJobsTable";
import { DetailJob } from "@/dashboard_components/DetailJob";
import dynamic from "next/dynamic";
import { useState, useMemo } from "react";

export default function JobPostPage() {
  const ClientComponent = useMemo(
    () =>
      dynamic(() => import("../../../dashboard_components/client_components"), {
        ssr: false,
      }),
    []
  );

  return (
    <>
      {/* <ClientComponent /> */}

      <DetailJob />
      {/* <div className="flex flex-col items-baseline space-y-4">
        <CreatedJobsTable />
        <button
          type="submit"
          className=" inline-flex justify-center py-2 px-4 font-medium rounded-md text-white border-cyan-700 bg-cyan-700 hover:bg-cyan-800 active:bg-cyan-900 focus:bg-cyan-700"
        >
          Create a job
        </button>
      </div> */}
    </>
  );
}
