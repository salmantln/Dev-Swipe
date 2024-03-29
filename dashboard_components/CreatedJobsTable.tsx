// "use client";

import { readJob } from "@/lib/jobs";
import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow
} from "@tremor/react";
import React from "react";
import { UpdateJob } from "./EditButton";
import { SwitchButton } from "./SwitchButton";
import { UpdateButton } from "./UpdateButton";
import MyModal from "./modals";

export const CreatedJobsTable = async () => {
  // export const CreatedJobsTable = async ({hasJobs}:{hasJobs: boolean}) => {
  // const [isSwitchOn, setIsSwitchOn] = React.useState<boolean>(false);
  const { data: jobs } = await readJob();




  return (
    <div className="flex-auto w-full">
      <Card>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Title</TableHeaderCell>
              <TableHeaderCell>Salary Range</TableHeaderCell>
              <TableHeaderCell>Date Created</TableHeaderCell>
              <TableHeaderCell>Active</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs?.map((job, index) => {
         
              return (
                <TableRow key={index}>
                  <TableCell>
                    <Button color="sky" variant="light">
                      <UpdateJob id={job.id} title={job.title} />
                      {/* {job.title} */}
                    </Button>
                  </TableCell>
                  <TableCell>{`€${job.min_pay} - €${job.max_pay}`}</TableCell>
                  <TableCell>
                    {new Date(job.date_created).toLocaleDateString()}
                  </TableCell>
                  {/* <TableCell>{job.date_created}</TableCell> */}
                  <TableCell>
                  
                      {/* <Switch
                        checked={job.active}
                        onChange={async () => {
                          await updateActiveJob(job.id, !job.active);
                          // Optionally, trigger a re-fetch or state update to reflect the change in UI
                        }}
                      /> */}
                      <SwitchButton job={job.id} isActive={job.active} />
                    
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-3">
                      <UpdateButton id={job.id} />
                      {/* <DeleteJobButton id={job.id} /> */}
                      <MyModal id={job.id} />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {/* {isModalOpen && (
        <DeleteConfirmationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          jobId={currentJobId}
          // onConfirm={handleDelete} // Define your deletion logic here or within the modal
        />
      )} */}
      </Card>
    </div>
  );
};
