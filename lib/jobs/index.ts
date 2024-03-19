"use server";

import createSupabaseServerClient from "../supabase/server";

export async function createJob(data: any) {
  const supabase = await createSupabaseServerClient();

  // Ensure `data` contains `company_id` and other necessary fields
  const result = await supabase
    .from("job_posts")
    .insert([

        data
    //   {
    //     company_id: data.company_id, // Make sure to include this in your data
    //     title: data.jobTitle,
    //     description: data.content,
    //     location: data.jobLocation,
    //     work_experience: data.selectedOptionExperience, // Assuming your database column is named this way
    //     job_type: data.selectedOptionType,
    //     work_place: data.selectedOptionPlace,
    //     min_pay: data.minPay,
    //     max_pay: data.maxPay,
    //     skills: data.skills,
    //   },
    ])
    .single(); // Use `.single()` if inserting one row, remove it for multiple rows

  return JSON.stringify(result);
}

export async function readJob() {}

export async function deleteJob() {}
export async function updateJob() {}
