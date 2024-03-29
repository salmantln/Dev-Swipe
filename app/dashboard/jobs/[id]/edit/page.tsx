import { EditForm } from "@/dashboard_components/EditForm";
import { fetchJobById } from "@/lib/jobs";
import { notFound } from "next/navigation";
import React from "react";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: job } = await fetchJobById(id);

  if (!job) {
    notFound();
  }
  // console.log("JOB: ", job);
  return (
    <>
      <EditForm job={job} />
    </>
  );
}

// export default Page
