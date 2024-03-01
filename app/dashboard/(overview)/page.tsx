import React from "react";

export default function DefaultDashboard() {
  return (
    <>
      <main>
        <h1 className=" mb-4 text-xl md:text-2xl">Dashboard</h1>
        <div className="w-full h-full col-start-1 row-start-3 row-end-12">
          <span className="block text-base text-gray-900 ">
            Welcome to DevSwipe. On this dashboard you can:
          </span>
          <ul className="list-disc pl-5 space-y-2">
            {/* <li>Alle vacatures die door jou zijn aangemaakt.</li> */}
            <li>All job post created by you.</li>
            {/* <li>Alle reacties op jouw vacatures.</li> */}
            <li>All reactions on you job posts</li>
            {/* <li>Alle professionals waarmee jij een match hebt.</li> */}
            <li>All the professionals where you have a match with.</li>
            {/* <li>Andere berichtgeving met betrekking tot jouw account.</li> */}
            <li>Other notifications regarding your account.</li>
          </ul>
          <span className="block text-base text-gray-900  mt-4">
            Questions? Let us know via 
            {/* Vragen? Laat het ons weten via */}
            <a
              href="mailto:devswipe.app@gmail.com"
              className="text-blue-500 hover:text-blue-600"
            >
              devswipe.app@gmail.com
            </a>
            .
          </span>
        </div>

        {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"></div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8"></div> */}
      </main>
    </>
  );
}
