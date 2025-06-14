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
  noStore();
  const supabase = await createSupabaseServerClient();
  const response = await supabase.from("job_posts").select("*");
  // console.log("Raw response:", response);
  return response;
}

export async function fetchJobById(id: string) {
  noStore();
  const supabase = await createSupabaseServerClient();

  // Use the .eq() method to fetch the job post with the specific ID
  const { data, error } = await supabase
    .from("job_posts")
    .select("*")
    .eq("id", id)
    .single();

  // console.log("Fetched job post:", data, "Error:", error);

  return { data, error };
}
export async function deleteJob(id: string) {
  const supabase = await createSupabaseServerClient();
  await supabase.from("job_posts").delete().eq("id", id);

  revalidatePath("/dashboard/jobs");
}

export async function updateActiveJob(id: any, isActive: boolean) {
  // Ensure createSupabaseServerClient correctly initializes and returns a Supabase client instance.
  const supabase = await createSupabaseServerClient();
  
  const { data, error } = await supabase
    .from("job_posts")
    .update({ active: isActive }) // Correctly pass isActive as a boolean
    .eq("id", id);

  // Logging the response for debugging purposes
  console.log("Update response:", data);
  if (error) {
    console.error("Update error:", error);
  }

  // Assuming revalidatePath is a function you've defined to refresh or navigate after update
  revalidatePath("/dashboard/jobs");
}

export async function updateJob(id: string, updated: any) {
  const supabase = await createSupabaseServerClient();

  // Use the spread operator to directly pass all key-value pairs from `updated`
  const { data, error } = await supabase
    .from("job_posts")
    .update([updated])
    .eq("id", id);

  if (error) {
    console.error("Update error:", error);
    return { error };
  }

  console.log("Updated successfully:", [updated]);
  // Optionally, perform further actions like navigation or state updates
  revalidatePath(`/dashboard/jobs/${id}/edit`);
  return { data };
}
