"use client";
import { Button } from "@tremor/react";
import React from "react";
import { RiArrowRightLine, RiArrowLeftLine } from "@remixicon/react";
import { useRouter } from "next/navigation";
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

// import { useRouter } from 'next/router';
// import { Button } from '@tremor/react';
// import React from 'react';
// import { RiArrowLeftLine } from '@remixicon/react';

// export const BackButton = () => {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push('/dashboard/jobs');
//   };

//   return (
//     <Button  icon={<RiArrowLeftLine />} iconPosition="left" variant="light">
//       View more
//     </Button>
//   );
// };
