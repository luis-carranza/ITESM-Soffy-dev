"use client";

import Image from "next/image.js";
import { useSignIn, useSession } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { handleSignIn } from "@/app/(auth)/sign-in/[[...rest]]/loginController";
import { Eye, EyeOff } from "lucide-react";

const SignIn = () => {
  const { signIn, isLoaded } = useSignIn();
  const [email, setEmail] = useState("");
  const { isSignedIn } = useSession();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Redirect to dashboard if session exists
  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-[radial-gradient(circle,_#f1d5cd,_#E29C8B)] border-white border-[20px]">
      <div className="flex flex-col items-center justify-center bg-white text-xl p-1 rounded-lg shadow-2xl w-100 h-130 text-center ">
        {/* Error Banner  */}
        {errorMessage && (
          <div className="flex bg-red-100 text-red-700 rounded mt-0 p-1 items-center justify-center mb-4">
            {errorMessage}
          </div>
        )}
        <div className="flex items-center justify-center mb-4 mt-4">
          <Image
            src="/SoffyLogoTrans.png" // Replace with your logo file path
            alt="Fundación Soffy"
            width={180}
            height={120}
          />
        </div>
        <h2 className="text-2xl font-light mb-15">Iniciar Sesión</h2>
        <form
          onSubmit={(e) =>
            handleSignIn(e, signIn, email, password, setErrorMessage)
          }
          className="space-y-4 items-center justify-center"
        >
          <input
            id="email"
            type="email"
            placeholder="email de usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-1 px-4 border-3   border-[#013E5A] rounded-full focus:outline-none font-light"
          />
          <div className="relative w-full">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-1 px-4 border-3 border-[#013E5A] rounded-full focus:outline-none font-light"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-[#1A3B53]"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          </div>
          <button
            type="submit"
            className="bg-[#1A3B53] text-white py-2 px-6 rounded-full hover:bg-[#163042] transition mt-10"
          >
            Acceder
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
