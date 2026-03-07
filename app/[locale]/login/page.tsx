import Link from "next/link"
import { ShoppingCart, Factory, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function SignPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-[#F4F7FB] via-white to-white overflow-hidden">

      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0F233F]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl w-full relative">

        {/* Brand */}
        <div className="flex flex-col items-center text-center mb-14">

          <Link href="/" className="mb-6">
            <Image
              src="/images/logo/logofix.png"
              alt="Emara"
              height={120}
              width={120}
              className="object-contain"
              priority
            />
          </Link>

          <h1 className="text-3xl md:text-4xl font-semibold text-[#0F233F] mb-3">
            Welcome to Emara
          </h1>

          <p className="text-gray-600 max-w-xl text-sm md:text-base">
            Access your account or continue to the platform based on your role.
          </p>

        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Buyer */}
          <Link
            href="/buyers/login"
            className="group relative bg-white border border-gray-200 rounded-2xl p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >

            {/* Gradient Hover Border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-[#0F233F]/10 to-blue-400/10" />

            <div className="relative flex flex-col h-full">

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-105 transition">
                <ShoppingCart className="text-[#0F233F]" size={28} />
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-[#0F233F] mb-2">
                Buyer Login
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                Source verified African suppliers, request quotes, and manage
                procurement workflows across trusted export partners.
              </p>

              {/* CTA */}
              <div className="mt-auto flex items-center text-sm font-medium text-[#0F233F]">
                Continue as Buyer
                <ArrowRight
                  size={16}
                  className="ml-2 transition group-hover:translate-x-1"
                />
              </div>

            </div>
          </Link>

          {/* Supplier */}
          <Link
            href="/suppliers/login"
            className="group relative bg-white border border-gray-200 rounded-2xl p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >

            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-[#0F233F]/10 to-blue-400/10" />

            <div className="relative flex flex-col h-full">

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-105 transition">
                <Factory className="text-[#0F233F]" size={28} />
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-[#0F233F] mb-2">
                Supplier Login
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                Manage your supplier profile, respond to buyer requests, and
                expand your export reach across international markets.
              </p>

              {/* CTA */}
              <div className="mt-auto flex items-center text-sm font-medium text-[#0F233F]">
                Continue as Supplier
                <ArrowRight
                  size={16}
                  className="ml-2 transition group-hover:translate-x-1"
                />
              </div>

            </div>
          </Link>

        </div>

        {/* Secondary CTA */}
        <div className="text-center mt-14 text-sm text-gray-500">
          Don’t have a supplier account?{" "}
          <Link
            href="/suppliers/onboarding"
            className="font-medium text-[#0F233F] hover:underline"
          >
            Register your company
          </Link>
        </div>

      </div>
    </div>
  )
}