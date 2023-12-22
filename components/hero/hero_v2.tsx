import { NewsletterForm } from "@/components/newsletter-form";
import { cn } from "@/utils/cn";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "scrollreveal";
import {toast} from "react-toastify";

type ScrollRevealRefElement =
  | HTMLDivElement
  | HTMLHeadingElement
  | HTMLParagraphElement;

function HeroV2({
  className,
  content,
  illustration,
  title,
}: {
  className?: string;
  content: string;
  illustration?: ReactNode;
  title: string;
}) {
  const scrollRevealRef = useRef<ScrollRevealRefElement[]>([]);

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const {ref, inView} = useInView({threshold: 0.5});
  const inputRef = useRef(null);

  const subscribeUser = async (e: any) => {
    e.preventDefault();
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
  };

  useEffect(() => {
    if (scrollRevealRef.current.length > 0) {
      scrollRevealRef.current.map((ref) =>
        ScrollReveal().reveal(ref, {
          duration: 1000,
          distance: "40px",
          easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
          origin: "top",
          interval: 150,
        })
      );
    }

    return () => ScrollReveal().destroy();
  }, []);

  function onNewsletterSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ values });
      }, 1000);
    });
  }

  const addToScrollRevealRef = (el: ScrollRevealRefElement) => {
    scrollRevealRef.current.push(el);
  };

  return (
    <section
      className={cn("text-center lg:w-full lg:py-20 lg:text-left", className)}
    >
      <div className="hero mx-auto w-full max-w-6xl px-6">
        <div className="hero-inner relative lg:flex">
          <div className="hero-copy pb-16 pt-10 lg:min-w-[40rem] lg:pr-20 lg:pt-16">
            <div className="mx-auto w-full max-w-3xl">
              <h1
                className="mb-4 mt-0 text-4xl font-bold md:text-5xl "
                ref={addToScrollRevealRef}
              >
                {title}
              </h1>
              <p
                className="prose prose-xl m-auto text-gray-500"
                ref={addToScrollRevealRef}
              >
                {content}
              </p>
            </div>

            <div ref={addToScrollRevealRef}>
              <NewsletterForm
                className="mx-auto mt-8 max-w-md lg:mx-0"
                submitText="Get early access"
                onSubmit={onNewsletterSubmit}
              />
            </div>
          </div>

          {!!illustration && (
            <div className="relative -mx-6 py-10 lg:mx-0 lg:p-0">
              {illustration}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroV2;
