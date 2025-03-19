"use client";

import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <SignUp
        appearance={{
          elements: {
            form: {
              backgroundColor: "bg-[#E29C8B]",
              borderColor: "border-gray-800",
              borderRadius: "rounded-md",
              padding: "p-6",
            },
            input: {
              backgroundColor: "bg-green-100",
              borderColor: "border-gray-200",
              focusBorderColor: "border-gray-300",
              errorBorderColor: "border-red-500",
              color: "text-gray-900",
              placeholderColor: "placeholder-gray-500",
            },
            button: {
              backgroundColor: "bg-blue-600",
              color: "text-white",
              hoverBackgroundColor: "bg-blue-700",
              hoverColor: "text-white",
            },
            error: {
              color: "text-red-500",
            },
          },
        }}
      />
    </div>
  );
};

export default Page;
