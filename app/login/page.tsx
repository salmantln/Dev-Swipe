"use client";
import { Logo } from "@/componentsV2/Logo";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "../../lib/supabase/supabaseClient";
import { cookies } from "next/headers";
// import { createRouteHandlerClient } from "@supabase/ssr";
export default function Example() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);



  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      // Redirect user or update UI

      const userId = (await supabase.auth.getUser()).data.user?.id; // Get current user's ID

      await supabase.auth.updateUser({
        data: { onboarding: false },
      });

      const {
        data: { user },
      } = await supabase.auth.getUser();

      // console.log(      updateOnboardingStatus({ userId, onboardingStatus: false }))
      console.log("User ID: ", userId);
      console.log("User Data: ", user?.user_metadata);

      if (user?.user_metadata?.onboarding === false) {
        router.push("/onboarding");
        console.log("User has onboarding: false");
      } else {
        router.push("/dashboard");
        console.log("User does not have onboarding: false");
      }
    }

    setLoading(false);
  };

  async function updateOnboardingStatus({
    userId,
    onboardingStatus,
  }: {
    userId: any;
    onboardingStatus: boolean;
  }) {
    const { data, error } = await supabase
      .from("profiles")
      .update({ onboarding: onboardingStatus })
      .eq("id", userId);

    if (error) {
      console.error("Error updating onboarding status:", error);
      return null;
    }

    return data;
  }
  // const handleLogin = async (e: any) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError(null);

  //   const { error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });
  //   if (error) setError(error.message);
  //   // const res = await supabase.auth.signInWithPassword({
  //   //   email,
  //   //   password,
  //   // });
  //   // setUser(res.data.user);
  //   router.refresh();
  //   console.log(user);
  //   setEmail("");
  //   setPassword("");
  //   setLoading(false);
  // };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=600"
            alt="Your Company"
          /> */}
          <Logo className="mx-auto h-10 w-auto" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <form className="space-y-6" action="/auth/login"> */}
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* <form className="space-y-6" action={dispatch} method="POST"> */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <div
                    onClick={() => router.push("/forgot-password")}
                    className="cursor-pointer  font-semibold text-cyan-600 hover:text-cyan-500"
                  >
                    Forgot password?
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                // onClick={() =>
                //   signIn("credentials", {
                //     email,
                //     password,
                //     redirect: true,
                //     callbackUrl: "/",
                //   })
                // }
                disabled={!email || !password}
                className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                Sign in
              </button>

              <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
              >
                {/* {errorMessage && (
                  <>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{errorMessage}</p>
                  </>
                )} */}
              </div>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don&apos;t have an account yet?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-cyan-600 hover:text-cyan-500"
            >
              Email us!
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
