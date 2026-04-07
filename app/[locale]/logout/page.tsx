"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuth } from "@/app/context/auth.context";
import Image from "next/image";

export default function LogoutPage() {
  const router = useRouter();
  const { setUser } = useAuth();

  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post("/api/auth/logout", {}, { withCredentials: true });
      } catch (err) {
        console.error("Logout failed:", err);
      } finally {
        setUser(null);
        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 1500); 
      }
    };

    logout();
  }, [router, setUser]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 px-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 text-center space-y-6">
        
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/images/logo/logofix.png"
            alt="Emara"
            width={100}
            height={100}
            className="opacity-90"
          />
        </div>

        {/* Animated Loader */}
        <div className="flex justify-center">
          <div className="relative h-12 w-12">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-black border-t-transparent animate-spin"></div>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">
            Signing you out
          </h2>
          <p className="text-sm text-gray-500">
            Please wait while we securely log you out of your account…
          </p>
        </div>

        {/* Subtle progress bar */}
        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-black animate-[loading_1.5s_ease-in-out_infinite] w-1/2"></div>
        </div>

      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(50%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}