// "use client"

import {
  Card,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

import { readJob } from "@/lib/jobs";

export const CreatedJobsTable = async () => {
// export const CreatedJobsTable = async ({hasJobs}:{hasJobs: boolean}) => {
  const { data: jobs } = await readJob();
  console.log("Read jobs: ", jobs);

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
            {jobs?.map((job, index) => (
              <TableRow key={index}>
                <TableCell>{job.title}</TableCell>
                <TableCell>{`${job.min_pay} - ${job.max_pay}`}</TableCell>
                <TableCell>{/* Display date created */}</TableCell>
                <TableCell>
                  <Switch checked={job.active} />
                </TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
