"use client";

import { PencilIcon } from "@heroicons/react/outline";
import { Button } from "@tremor/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
