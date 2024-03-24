// import React, { useState } from "react";
// import { LogoutIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";
// import DeleteConfirmationModal from "./modals";

// export function DeleteJobButton({ id }: { id: string }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleDelete = async (job: any) => {
//     // await deleteJob(jobId);
//     setIsModalOpen(false);
//     // Add any additional logic needed post-deletion, like refreshing the job list
//   };

//   return (
//     <>
//       <button
//         className="rounded-md border p-2 hover:bg-gray-100"
//         onClick={() => setIsModalOpen(true)}
//       >
//         <span className="sr-only">Delete</span>
//         <TrashIcon className="w-5" />
//       </button>
//       <DeleteConfirmationModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onConfirm={handleDelete}
//         job={job.id}
//       />
//     </>
//   );
// }
