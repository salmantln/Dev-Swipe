import { cn } from "@/utils/cn";
import type { ChangeEvent, FormEvent } from "react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

function NewsletterForm({
  className,
  onSubmit,
  submitText = "Submit",
}: {
  className?: string;
  onSubmit: (email: string) => Promise<any>;
  submitText?: string;
}) {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  // const {ref, inView} = useInView({threshold: 0.5});
  const inputRef = useRef(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = await onSubmit(email);
    console.log(email);
    console.log(result);
    setEmail("");

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/", {
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).finally(() => {
        setIsSubmitting(false);
      });

      if (res.ok) {
        // Show a success message
        toast.success("You have successfully subscribed!");
        setEmail(""); // Reset the email state
      } else {
        // Show an error message
        toast.error(
          "An error occurred while subscribing. Please try again later."
        );
      }
    } catch (error) {
      // Show an error message
      toast.error(
        "An error occurred while subscribing. Please try again later."
      );
    }

    setSuccess(true);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "newsletter-form is-revealing flex flex-col gap-2 sm:flex-row",
        className
      )}
    >
      <div className="mr-2 flex-shrink flex-grow">
        <label className="hidden" htmlFor="email" aria-hidden="true">
          Email
        </label>
        <input
          required
          placeholder="Your best email&hellip;"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          autoComplete="off"
          className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
        />
        {success && (
          <div className="mt-2 text-xs italic text-gray-500">
            Email submitted successfully!
          </div>
        )}
      </div>

      <div className="control">
        <button
          className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap  rounded-md md:ml-5 border-0 bg-secondary  px-7 py-4 text-center font-medium leading-4 text-[#ffffff] no-underline shadow-lg"
          // className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-green-400 to-blue-500 px-7 py-4 text-center font-medium leading-4 text-white no-underline shadow-lg"
          type="submit"
        >
          {submitText}
        </button>
      </div>
    </form>
  );
}

export default NewsletterForm;
