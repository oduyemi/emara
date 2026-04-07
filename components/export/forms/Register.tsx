"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { User, Mail, Lock, Building2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function RegisterForm() {
  const t = useTranslations("auth.register");
  const router = useRouter();

  const [form, setForm] = useState({
    fname: "",
    lname: "",
    company: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const [fname, ...rest] = form.fname.split(" ");
      const lname = rest.join(" ") || " ";
      const ROLE = "supplier" as const;

      await axios.post(
        "/api/auth/register",
        {
          fname,
          lname,
          email: form.email,
          password: form.password,
          role: ROLE, 
        },
        { withCredentials: true }
      );

      // Redirect to onboarding
      router.push("/suppliers/login");
    } catch (err: any) {
      setError(err?.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto w-full mt-4">
      <div className="bg-white border border-[var(--color-surface-border)] rounded-3xl shadow-xl p-10">

        <div className="flex justify-center mb-2">
          <Link href="/suppliers">
            <Image src="/images/logo/logofix.png" alt="Emara" height={120} width={120} />
          </Link>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold text-secondary">{t("title")}</h1>
          <p className="text-sm text-muted">{t("subtitle")}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <label className="text-sm font-medium text-secondary">{t("name")}</label>
            <div className="relative mt-2">
              <User size={18} className="absolute left-3 top-3.5 text-muted" />
              <input
                type="text"
                value={form.fname}
                onChange={(e) => handleChange("fname", e.target.value)}
                className="w-full pl-10 py-3 rounded-xl border"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label className="text-sm font-medium text-secondary">{t("company")}</label>
            <div className="relative mt-2">
              <Building2 size={18} className="absolute left-3 top-3.5 text-muted" />
              <input
                type="text"
                value={form.company}
                onChange={(e) => handleChange("company", e.target.value)}
                className="w-full pl-10 py-3 rounded-xl border"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-secondary">{t("email")}</label>
            <div className="relative mt-2">
              <Mail size={18} className="absolute left-3 top-3.5 text-muted" />
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full pl-10 py-3 rounded-xl border"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-secondary">{t("password")}</label>
            <div className="relative mt-2">
              <Lock size={18} className="absolute left-3 top-3.5 text-muted" />
              <input
                type="password"
                value={form.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className="w-full pl-10 py-3 rounded-xl border"
              />
            </div>
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Button */}
          <button disabled={loading} className="w-full btn-primary py-3">
            {loading ? "Loading..." : t("registerButton")}
          </button>

        </form>

        <p className="text-center text-sm mt-8">
          <Link href="/suppliers/login">{t("login")}</Link>
        </p>
      </div>
    </div>
  );
}