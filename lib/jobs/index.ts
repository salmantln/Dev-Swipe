"use server";

import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import createSupabaseServerClient from "../supabase/server";

export async function createJob(data: any) {
  const supabase = await createSupabaseServerClient();

  // Ensure `data` contains `company_id` and other necessary fields
  const result = await supabase.from("job_posts").insert([data]).single();

  revalidatePath("/dashboard/jobs");
  return JSON.stringify(result);
}

export async function readJob() {
  const supabase = await createSupabaseServerClient();
  const response = await supabase.from("job_posts").select("*");
  console.log("Raw response:", response);
  return response;
}

export async function deleteJob() {}
export async function updateJob() {}
