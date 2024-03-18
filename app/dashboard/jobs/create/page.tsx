"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
export default function CreateJob() {
  
  const ClientComponent = useMemo(
    () =>
      dynamic(
        () => import("../../../../dashboard_components/client_components"),
        {
          ssr: false,
        }
      ),
    []
  );

  return (
    <>
      {/* <DetailJob /> */}

      <ClientComponent />
    </>
  );
}

// export async function getServerSideProps() {
//   const { data } = await readUserSession();

//   if (data.session?.user.user_metadata?.onboarding == false) {
//     return redirect("/onboarding");
//   }
// }