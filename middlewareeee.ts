// import { createMiddlewareClient } from "@supabase/ssr";
// import { NextRequest, NextResponse } from "next/server";

// // export async function middleware(req: NextRequest){
// //     const res = NextResponse.next();
// //     const supabase = createMiddlewareClient({req, res});
// //     await supabase.auth.getSession();
// //     return res;
// // }

// export async function middleware(req: NextRequest) {
//   // Check if the request is for the onboarding page, avoid redirection loop
//   if (req.nextUrl.pathname.startsWith("/onboarding")) {
//     return NextResponse.next();
//   }
//   const res = NextResponse.next();
//   const supabase = createMiddlewareClient({ req, res });

//   // Get the user session
//   const { data: session, error } = await supabase.auth.getSession();
//   console.log("Session: ",session.session?.user)
//   // If there's an error or no session, proceed (possibly handle unauthenticated access differently)
//   if (error || !session || !session.session?.user) return NextResponse.next();

// //   if (session.session.user.user_metadata.onboarding == false) {
// //     console.log(session.session.user)
// //     return res;
// //   }
//   // Check if 'onboarding' metadata is true
//   const onboardingStatus = session.session.user.user_metadata.onboarding;

//   console.log("Onboarding status: ", onboardingStatus);
//   if (onboardingStatus !== true) {
//     // Redirect to onboarding if 'onboarding' is not true
//     return NextResponse.redirect(new URL("/onboarding", req.url));
//   }

//   return res;
// }

// // Ensure the middleware is only called for relevant paths.
// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * Feel free to modify this pattern to include more paths.
//      */
//     "/((?!_next/static|_next/image|favicon.ico).*)",
//   ],
// };
