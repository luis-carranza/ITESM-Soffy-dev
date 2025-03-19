"use client";

//import { SignIn } from "@clerk/nextjs";
import SignIn from "@/components/sign-in-component";

export default function Home() {
  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <SignIn />
    </div>
  );
}
