import {readUserSession} from "@/lib/actions";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { useMemo } from "react";
import { MultiSelect, MultiSelectItem } from "@tremor/react";
export default async function CreateJob() {


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

  const { data } = await readUserSession();

  console.log(data.session?.user.user_metadata);
  if (data.session?.user.user_metadata?.onboarding == false) {
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
