import React from "react";
import { notFound } from 'next/navigation';
import { fetchJobById } from "@/lib/jobs";
export default async function Page({ params }: { params: { id: string } }) {

  const id = params.id;
  const [job,]  = await Promise.all([
      fetchJobById(id),
      // fetchCustomers(),
    ]);

  if (!job) {
      notFound();
  }


  return <div>My Post: {params.id}</div>
}
