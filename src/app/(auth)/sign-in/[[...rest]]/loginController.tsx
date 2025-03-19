"use client";

import { SignInResource } from "@clerk/types";

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
      const clerkError = (error as any)?.errors?.[0]?.message;
      setError(clerkError || error.message || "Sign in error");
    } else {
      setError("Unknown sign in error");
    }
  }
};
