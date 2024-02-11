// 'use client'

// import { authenticate } from '@/app/actions'
// import { useFormState, useFormStatus } from 'react-dom'

// export default function Page() {
//   const [errorMessage, dispatch] = useFormState(authenticate, undefined)

//   return (
//     <form action={dispatch}>
//       <input type="email" name="email" placeholder="Email" required />
//       <input type="password" name="password" placeholder="Password" required />
//       <div>{errorMessage && <p>{errorMessage}</p>}</div>
//       <LoginButton />
//     </form>
//   )
// }

// function LoginButton() {
//   const { pending } = useFormStatus()

//   return (
//     <button aria-disabled={pending} type="submit">
//       Login
//     </button>
//   )
// }

// import { headers } from "next/headers";

// const LoginPage = async ({
//   searchParams,
// }: {
//   searchParams: { error?: string };
// }) => {
//   const csrfToken = await fetch(`${process.env.serverURL}/api/auth/csrf`, {
//     headers: headers(),
//   })
//     .then((res) => res.json())
//     .then((csrfTokenObject) => csrfTokenObject?.csrfToken);

//   return (
//     //using TailwindCSS classes btw.
//     <main className="flex flex-col items-center mt-2">
//       <form
//         method="POST"
//         action={`${process.env.serverURL}/api/auth/callback/credentials`}
//         className="flex flex-col group gap-2"
//       >
//         <input
//           className="outline-none focus:border-b border-black"
//           required
//           placeholder="login"
//           name="login"
//         />

//         <input
//           className="outline-none focus:border-b border-black"
//           required
//           placeholder="password"
//           name="password"
//           type="password"
//         />

//         <input hidden value={csrfToken} name="csrfToken" readOnly />

//         <button
//           className="outline-none 
//             focus:underline focus:decoration-red-600 
//             focus:group-valid:decoration-green-600"
//         >
//           submit
//         </button>
//       </form>

//       {searchParams.error && (
//         <p className="text-red-600 text-center capitalize">login failed.</p>
//       )}
//     </main>
//   );
// };

// export default LoginPage;

// pages/login.js

// Create a new Client Component (e.g., LoginForm.js)

'use client'
// Remember you must use an AuthProvider for 
// client components to useSession
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import UserCard from '../../components/UserCard/UserCard'

export default function ClientPage() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/dashboard')
        }
    })

    return (
        <section className="flex flex-col gap-6">
            <UserCard user={session?.user} pagetype={"Client"} />
        </section>
    )
}