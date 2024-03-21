import { CreatedJobsTable } from "@/dashboard_components/CreatedJobsTable";
import { readUserSession } from "@/lib/actions";
import { readJob } from "@/lib/jobs";
import { supabase } from "@/lib/supabase/supabaseClient";
import { PlusIcon } from "@heroicons/react/outline";
import dynamic from "next/dynamic";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useMemo } from "react";

export default async function JobPostPage() {
  // const router = useRouter();
  const ClientComponent = useMemo(
    () =>
      dynamic(() => import("../../../dashboard_components/client_components"), {
        ssr: false,
      }),
    []
  );
  const session = supabase.auth.getSession();

  if (session) {
    console.log("User is authenticated", session);
  } else {
    console.log("User is not authenticated");
  }

  const { data } = await readUserSession();
  const { data: jobs } = await readJob();
  
  console.log(data.session?.user.user_metadata);

  if (!data.session?.user.user_metadata?.onboarding) {
    return redirect("/onboarding");
  } else if (!data.session) {
    return redirect("/login");
  }

  return (
    <>
      {/* <p className="mb-2 text-sm font-semibold text-cyan-600">Jobs</p> */}
      <h1 className=" mb-4 text-xl md:text-2xl text-cyan-600">Jobs</h1>

      <div className="flex flex-col items-baseline space-y-4">
        {jobs && jobs.length > 0 ? (
          <CreatedJobsTable />
        ) : (
          <div className="rt-Flex rt-r-display-flex rt-r-fd-column rt-r-ai-center rt-r-jc-start rt-r-gap-6">
            <h1 className="rt-Heading rt-r-size-4 font-bold">
              Er zijn momenteel geen banen aangemaakt.
            </h1>
            <span className="rt-Text">
              Maak een nieuwe baan aan door op de knop hieronder te klikken.
              Begin vandaag met het vinden van de juiste kandidaat!
            </span>
          </div>
        )}
        {/* <CreatedJobsTable  hasJobs={jobs}/>
        

        <div className="rt-Flex rt-r-display-flex rt-r-fd-column rt-r-ai-center rt-r-jc-start rt-r-gap-6">
          <h1 className="rt-Heading rt-r-size-4 font-bold">
            Er zijn momenteel geen banen aangemaakt.
          </h1>
          <span className="rt-Text">
            Maak een nieuwe baan aan door op de knop hieronder te klikken. Begin
            vandaag met het vinden van de juiste kandidaat!
          </span>
        </div> */}

        <Link
          href="/dashboard/jobs/create"
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <span className="hidden md:block">Create a job</span>{" "}
          <PlusIcon className="h-5 md:ml-4" />
        </Link>
      </div>
    </>
  );
}
// function readJob(): { data: any } | PromiseLike<{ data: any }> {
//   throw new Error("Function not implemented.");
// }
