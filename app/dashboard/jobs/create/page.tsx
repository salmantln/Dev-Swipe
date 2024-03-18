import readUserSession from "@/lib/actions";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { useMemo } from "react";
export default async function CreateJob() {
  const { data } = await readUserSession();

  console.log(data.session?.user.user_metadata);

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

  if (!data.session?.user.user_metadata?.onboarding) {
    return redirect("/onboarding");
  } else if (!data.session) {
    return redirect("/login");
  }

  return (
    <>
      {/* <DetailJob /> */}

      <ClientComponent />
    </>
  );
}
