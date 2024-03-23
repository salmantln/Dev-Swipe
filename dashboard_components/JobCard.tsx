"use client";

import { Card } from "@tremor/react";
import React, { useState } from "react";

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
  const [initialSkills, setInitialSkills] = useState(skills);

  // const handleSkillClick = async (skill: any) => {
  //     const newIsSelected = !skill.isSelected;
  //     const success = await updateSkillStatus(skill.id, newIsSelected);

  //     if (success) {
  //         setInitialSkills({currentSkills : any} =>
  //         currentSkills.map(s =>
  //           s.id === skill.id ? { ...s, isSelected: newIsSelected } : s
  //         )
  //       );
  //     }
  //   };
  // Format the date.
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };
  //   console.log(props.skills);
  return (
    <Card className="sm:col-span-1 lg:col-span-1">
      <div className="flex items-start gap-4">
        {/* Image */}
        <img
          className="inline-block h-[100px] w-[100px] rounded-lg"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt="Image Description"
        />
        <div className="flex flex-col justify-start">
          <div className="mb-2">
            {" "}
            {/* Control width more explicitly if needed */}
            {active ? (
              <span className="inline-block py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                Active
              </span>
            ) : (
              <span className="inline-block py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Inactive
              </span>
            )}
          </div>
          <span className="inline-block text-sm font-medium">
            Job created {formatDate(date_created)}
          </span>
          {/* Skills mapping */}
        </div>
      </div>

      <p className="text-2xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        {title}
      </p>

      <p className="text-2xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        Searched skills:
      </p>

      <div className="flex flex-wrap gap-2">
        {skills
          .filter((skill) => skill.isSelected)
          .map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-800 text-white dark:border-gray-500 text-gray-800"
            >
              {skill.name}
            </span>
          ))}
      </div>
    </Card>
  );
};

export default JobCard;
