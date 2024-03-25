"use client";
import { Button } from "@tremor/react";
import React from "react";
import { RiArrowRightLine, RiArrowLeftLine } from "@remixicon/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogoutIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { signOut } from "./signout";
import { deleteJob } from "@/lib/jobs";

export const BackButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard/jobs");
  };

  return (
    <Button
      icon={RiArrowLeftLine}
      onClick={handleClick}
      iconPosition="left"
      variant="light"
    >
      Back to jobs
    </Button>
  );
};

export function UpdateJob({ id, title }: { id: string; title: string }) {
  return (
    <Link
      href={`/dashboard/jobs/${id}`}
      className="font-semibold leading-6 text-sky-600 hover:text-sky-500"
    >
      {title}
    </Link>
  );
}

export function UpdateButton({ id }: { id: string }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/dashboard/jobs/${id}/edit`);
  };

  return (
    <>
      <div className="space-y-1 space-x-1">
        <Button
          onClick={handleClick}
          variant="secondary"
          icon={PencilIcon}
          tooltip="Edit the job post"
        ></Button>
      </div>
    </>
  );
}

export async function SignOutButton() {
  return (
    <>
      <form action={signOut}>
        <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          {/* <LinkIcon className="w-6" /> */}
          <LogoutIcon className="w-6" />
          <p className="hidden md:block">Sign out</p>
        </button>
      </form>
    </>
  );
}

// export function DeleteJobButton({ id }: { id: string }) {
//   // const deleteJobWithId = deleteJob.bind(null, id);

//   return (
//     // <form action={deleteJobWithId}>
//       <button className="rounded-md border p-2 hover:bg-gray-100">
//         <span className="sr-only">Delete</span>
//         <TrashIcon className="w-5" />
//       </button>
//     // </form>
//   );
// }

export function DeleteJobButton({ id, onOpenModal }: { id: string; onOpenModal: () => void }) {
  return (
    <button onClick={onOpenModal} className="rounded-md border p-2 hover:bg-gray-100">
      <span className="sr-only">Delete</span>
      <TrashIcon className="w-5" />
    </button>
  );
}
