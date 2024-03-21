"use server";

import createSupabaseServerClient from "../supabase/server";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";

export async function readUserSession() {
  const supabase = await createSupabaseServerClient();

  return supabase.auth.getSession();
}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  noStore();
  const supabase = await createSupabaseServerClient();

  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  return JSON.stringify(result);
}
