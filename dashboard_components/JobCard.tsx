"use client";

import { Card } from "@tremor/react";
import React from "react";

// Define the TypeScript interfaces if you're using TypeScript
interface Skill {
  name: string;
  isSelected: boolean;
}

interface JobCardProps {
  title: string;
  date_created: string;
  active: boolean;
  skills: Skill[];
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  date_created,
  active,
  skills,
}) => {
  // Format the date.
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };
  //   console.log(props.skills);
  return (
    <Card className="sm:col-span-1 lg:col-span-1">
      <img
        className="inline-block size-[100px] rounded-lg"
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt="Image Description"
      />
      <p className="text-2xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        {title} - {formatDate(date_created)} - {active ? "Active" : "Inactive"}
      </p>
      <p className="text-2xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        Searched skills:
      </p>
      {/* {props.skills} */}
      {/* {skills.map((skill, index) => (
        <div key={index}>{skill.name}</div>
      ))} */}
      {skills.map((skill: any, index: number) => {
        console.log(typeof skill); // Temporary log
        return (
            <span 
            key={index} 
            className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${
              skill.isSelected 
                ? 'bg-gray-800 text-sky-500 dark:bg-white dark:text-sky-800' 
                : 'border border-gray-800 text-red-800 dark:border-gray-200 dark:text-red-800'
            }`}
          >
            {skill.name}
          </span>
        );
      })}
    </Card>
  );
};

export default JobCard;
