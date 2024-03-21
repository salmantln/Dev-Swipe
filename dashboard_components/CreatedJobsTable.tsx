// "use client"

import {
  Button,
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
import Link from "next/link";
import { UpdateJob } from "./EditButton";

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
                <TableCell>
                  <Button color="sky" variant="light">
                    {job.title}
                  </Button>
                </TableCell>
                <TableCell>{`€${job.min_pay} - €${job.max_pay}`}</TableCell>
                <TableCell>
                  {new Date(job.date_created).toLocaleDateString()}
                </TableCell>
                {/* <TableCell>{job.date_created}</TableCell> */}
                <TableCell>
                  <Switch checked={job.active} />
                </TableCell>
                <TableCell>
                  <UpdateJob  id={job.id} />
                  {/* <Link   href={`/dashboard/jobs/${job.id}`}  id={job.id}>Edit</Link> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
