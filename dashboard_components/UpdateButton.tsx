"use client";

import { PencilIcon } from "@heroicons/react/outline";
import { Button } from "@tremor/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/navigation";
export function UpdateButton({ id }: { id: string }) {

    const router = useRouter();
    const handleClick = () => {
      router.push(`/dashboard/jobs/${id}/edit`);
    };

    
  return (
    <>
      {/* Test */}
      {/* <Link
      href='/dashboard/jobs/[id]/edit'
      as={`/dashboard/jobs/${id}/edit`}
      key={id}
        // href={`/dashboard/jobs/${id}`}
        className="text-center font-mono text-sm text-slate-500"
      >
        <PencilIcon className="w-5" />
      </Link> */}

      <div className="space-y-1 space-x-1">
        {/* <p className="text-center font-mono text-sm text-slate-500">
        Button with icon
      </p>
      <div className="flex justify-center"> */}
        <Button  onClick={handleClick} variant="secondary" icon={PencilIcon}>
          {/* Search */}
          {/* <PencilIcon className="w-5" /> */}
        </Button>
      </div>
    </>
    // <Link
    //   href={`/dashboard/jobs/${id}`}
    //   className="rounded-md border p-2 hover:bg-gray-100"
    // >
    //   <PencilIcon className="w-5" />
    // </Link>
  );
}
