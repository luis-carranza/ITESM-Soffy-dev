"use client";

import { SignInResource } from "@clerk/types";

interface ClerkError extends Error {
  errors?: { message: string }[];
}

const isClerkError = (error: unknown): error is ClerkError => {
  return (
    typeof error === "object" &&
    error !== null &&
    "errors" in error &&
    Array.isArray((error as ClerkError).errors) &&
    typeof (error as ClerkError).errors?.[0]?.message === "string"
  );
};

export const handleSignIn = async (
  e: React.FormEvent,
  signIn: SignInResource,
  email: string,
  password: string,
  setError: (error: string) => void
) => {
  e.preventDefault();
  setError("");

  try {
    const result = await signIn.create({
      identifier: email,
      password,
    });

    if (result.status === "complete") {
      window.location.href = "/dashboard"; // Redirect after successful login
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (isClerkError(error && error.message)) {
        setError(error.message);
      } else {
        setError(error.message || "Sign in error");
      }
    } else {
      setError("Unknown sign in error");
    }
  }
};
