"use server";

// import { createRouteHandlerClient, createServerClient, type CookieOptions  } from "@supabase/auth-helpers-nextjs";
import { createServerClient, type CookieOptions } from  '@supabase/ssr';
import { cookies } from "next/headers";

export default async function createSupabaseServerClient() {
  const cookieStore = cookies();
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  return createServerClient(
    supabaseUrl,
    supabaseAnonKey,

    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.delete({ name, ...options });
        },
      },
    }
  );
}
