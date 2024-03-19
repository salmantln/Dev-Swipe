import {readUserSession} from "@/lib/actions";
import { redirect } from "next/navigation";
import React from "react";

const ProfilePage = async () => {
  const { data } = await readUserSession();

  console.log(data.session?.user.user_metadata)

  if (!data.session?.user.user_metadata?.onboarding) {
    return redirect("/onboarding");
  } else if (!data.session) {
    return redirect("/login");
  }


  return <div>ProfilePage</div>;
};

export default ProfilePage;

