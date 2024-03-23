import React from "react";
import { notFound } from "next/navigation";
import { fetchJobById } from "@/lib/jobs";
import { Card } from "@tremor/react";
import AppliedTable from "@/dashboard_components/AppliedTable";
import JobCard from "@/dashboard_components/JobCard";
import { BackButton } from "@/dashboard_components/BackButton";
import { UpdateButton } from "@/dashboard_components/UpdateButton";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const { data: job } = await fetchJobById(id);

  // console.log("DATA: ", job);

  if (!job) {
    notFound();
  }

  const data = [
    {
      name: "Unique visitors",
      stat: "10,450",
      change: "-12.5%",
      changeType: "negative",
    },
    {
      name: "Reactions",
      stat: "56.1%",
      change: "+1.8%",
      changeType: "positive",
    },
    {
      name: "Matches",
      stat: "5.2min",
      change: "+19.7%",
      changeType: "positive",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <p className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
              {item.name}
            </p>
            <div className="mt-2 flex items-baseline space-x-2.5">
              <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.stat}
              </p>
              <span
                className={classNames(
                  item.changeType === "positive"
                    ? "text-emerald-700 dark:text-emerald-500"
                    : "text-red-700 dark:text-red-500",
                  "text-tremor-default font-medium"
                )}
              >
                {item.change}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-between py-4">
        <div>
          <BackButton />
        </div>
        <div>
          <UpdateButton id={id} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <JobCard
          title={job.title}
          date_created={job.date_created}
          active={job.active}
          skills={job.skills}
        />
        <Card className="sm:col-span-2 lg:col-span-2">
          <AppliedTable />
        </Card>
      </div>
    </>
  );
}
