"use client";
import { updateActiveJob } from "@/lib/jobs";
import { Switch } from "@tremor/react";
import React, { useState } from "react";

export const SwitchButton = ({
  job,
  isActive,
}: {
  job: { id: any; active: boolean }; // Adjusted type to reflect `job` being an object
  isActive: boolean;
}) => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(isActive);


  const updateItem = updateActiveJob.bind(null, job, isSwitchOn);
  const handleSwitchChange = async () => {
    // Update the local state for the switch
    setIsSwitchOn(!isSwitchOn);

    // Use the bound function for updating the job's active status
    const updateItem = updateActiveJob.bind(null, job, !isSwitchOn);
    // Execute the bound function
    const result = await updateItem();

    // Check for errors in the result and handle accordingly
    // if (result?.error) {
    //   console.error("Failed to update job active status:", result.error);
    //   // Optionally revert the switch state if the update fails
    //   setIsSwitchOn(isSwitchOn);
    // }
  };

  return (
    <form action={updateItem}>
      <Switch checked={isSwitchOn} onChange={handleSwitchChange} />
    </form>
  );
};
