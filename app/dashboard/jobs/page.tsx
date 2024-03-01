// import React from 'react'
// import ClientComponent from '../../../dashboard_components/client_components'

"use client";
import { CreatedJobsTable } from "@/dashboard_components/CreatedJobsTable";
import { DetailJob } from "@/dashboard_components/DetailJob";
import dynamic from "next/dynamic";
import { useState, useMemo } from "react";

import { useRouter } from "next/navigation";
import { PlusIcon } from "@heroicons/react/outline";
import Link from "next/link";
export default function JobPostPage() {
  const router = useRouter();
  const ClientComponent = useMemo(
    () =>
      dynamic(() => import("../../../dashboard_components/client_components"), {
        ssr: false,
      }),
    []
  );

  return (
    <>
      {/* <p className="mb-2 text-sm font-semibold text-cyan-600">Jobs</p> */}
      <h1 className=" mb-4 text-xl md:text-2xl text-cyan-600">Jobs</h1>
      {/* <ClientComponent /> */}

      {/* <DetailJob /> */}
      <div className="flex flex-col items-baseline space-y-4">
        {/* <CreatedJobsTable /> */}

        <div className="rt-Flex rt-r-display-flex rt-r-fd-column rt-r-ai-center rt-r-jc-start rt-r-gap-6">
          <h1 className="rt-Heading rt-r-size-4 font-bold">
            Er zijn momenteel geen banen aangemaakt.
          </h1>
          <span className="rt-Text">
            Maak een nieuwe baan aan door op de knop hieronder te klikken. Begin
            vandaag met het vinden van de juiste kandidaat!
          </span>
        </div>
        {/* <button
          type="button"
          onClick={() => router.push("/test/create")}
          className=" inline-flex justify-center py-2 px-4 font-medium rounded-md text-white border-cyan-700 bg-cyan-700 hover:bg-cyan-800 active:bg-cyan-900 focus:bg-cyan-700"
        >
          Create a job
        </button> */}

        <Link
          href="/dashboard/jobs/create"
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <span className="hidden md:block">Create a job</span>{" "}
          <PlusIcon className="h-5 md:ml-4" />
        </Link>
      </div>
    </>
  );
}
