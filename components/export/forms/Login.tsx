"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuth, MeResponse } from "../../../app/context/auth.context"; 

export const LoginForm = () => {
  const t = useTranslations("auth.login");
  const router = useRouter();
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post<MeResponse>(
        "/api/auth/login/supplier",
        { email, password },
        { withCredentials: true }
      );

      setUser(response.data.user);
      router.push("/suppliers/dashboard");
    } catch (err: any) {
      if (err.response?.status === 403) {
        setError("Access denied: Suppliers only");
      } else {
        setError("Invalid credentials");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto w-full mt-16">
      <div className="bg-white rounded-3xl shadow-xl p-10">

        <div className="flex justify-center mb-8">
          <Image src="/images/logo/logofix.png" alt="Emara" height={120} width={120} />
        </div>

        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold">{t("title")}</h1>
          <p className="text-sm text-muted">{t("subtitle")}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="email"
            placeholder={t("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="password"
            placeholder={t("password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-xl"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button disabled={loading} className="w-full btn-primary py-3">
            {loading ? "Loading..." : t("loginButton")}
          </button>

        </form>

        <p className="text-center mt-8">
          <Link href="/suppliers/register">{t("register")}</Link>
        </p>
      </div>
    </div>
  );
};