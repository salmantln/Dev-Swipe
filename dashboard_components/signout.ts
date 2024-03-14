"use server"
import  createSupabaseServerClient  from "@/lib/supabase/server"; // Adjust the import path as necessary
import { redirect } from "next/navigation";

export async function signOut() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/login");
}
