import Image from "next/image";
import Link from "next/link";

import { Button } from "@/componentsV2/Button";
import { Container } from "@/componentsV2/Container";
import { TextField } from "@/componentsV2/Fields";
import { Logomark } from "@/componentsV2/Logo";
import { NavLinks } from "@/componentsV2/NavLinks";
import qrCode from "@/images/qr-code.svg";
import { cn } from "@/utils/cn";

import { useState } from "react";

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      setIsSubmitting(true); // Set loading state

      const res = await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (res.ok) {
        // Show success message
        setSuccess(true);
        setEmail(""); // Reset email field
        toast.success("You have successfully subscribed!");
      } else {
        // Show error message
        toast.error(
          "An error occurred while subscribing. Please try again later."
        );
      }
    } catch (error) {
      // Show error message
      toast.error(
        "An error occurred while subscribing. Please try again later."
      );
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  }

  function handleChange(event) {
    setEmail(event.target.value);
  }

  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logomark className="h-10 w-10 flex-none fill-cyan-500" />
              <div className="ml-4">
                <p className="text-base font-semibold">DevSwipe</p>
                <p className="mt-1 text-sm">Developer jobs within reach.</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" />
              <Image
                src={qrCode}
                alt="DevSwipe QR Playstore Apple Store"
                unoptimized
              />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Download the app
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Scan the QR code to download the app from the App Store & Play
                Store.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <form
          method="POST"
            onSubmit={handleSubmit}
            className={cn(
              "newsletter-form is-revealing  flex-col gap-2 sm:flex-row flex w-full justify-center md:w-auto"
            )}
          >
            <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
              value={email}
              onChange={handleChange}
            />
            <Button type="submit" color="cyan" className="ml-4 flex-none">
              <span className="hidden lg:inline">Join our newsletter</span>
              <span className="lg:hidden">Join newsletter</span>
            </Button>
            {success && (
              <div className="mt-2 text-xs italic text-gray-500">
                Email submitted successfully!
              </div>
            )}
          </form>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
