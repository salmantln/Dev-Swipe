import createSupabaseServerClient from "@/lib/supabase/server";
import { LogoutIcon } from "@heroicons/react/outline";
import { redirect } from "next/navigation";
import { signOut } from "../dashboard_components/signout"; // Adjust the import path as necessary

export async function SignOutButton() {
  //   const logout = async () => {
  //     "use server";
  //     const supabase = await createSupabaseServerClient();

  //     await supabase.auth.signOut();
  //     redirect("/login");
  //   };

  return (
    <>
      <form action={signOut}>
        <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          {/* <LinkIcon className="w-6" /> */}
          <LogoutIcon className="w-6" />
          <p className="hidden md:block">Sign out</p>
        </button>
      </form>
    </>
  );
}
