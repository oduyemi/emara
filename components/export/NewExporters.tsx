"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, TrendingUp } from "lucide-react";


export default function NewExporters() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      
      {/* subtle decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-slate-200 rounded-3xl p-10 md:p-14 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm mb-5">
                <Globe size={16} />
                New to Exporting?
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Start Your Global Export Journey
              </h2>

              <p className="text-slate-600 text-lg mb-8 max-w-xl">
                Register as a supplier and access international buyers,
                export resources, and the tools needed to grow globally.
              </p>

              <Link
                href="/suppliers/register"
                className="inline-flex items-center gap-3 btn-primary font-semibold px-7 py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
              >
                Become an Exporter
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right Feature Cards */}
            <div className="grid gap-5">

              <div className="flex gap-4 items-start bg-slate-50 p-5 rounded-xl border border-slate-100">
                <TrendingUp className="text-secondary mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Expand Internationally
                  </h4>
                  <p className="text-sm text-slate-600">
                    Connect with verified global buyers actively looking for suppliers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-slate-50 p-5 rounded-xl border border-slate-100">
                <Globe className="text-secondary mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Clear Export Roadmap
                  </h4>
                  <p className="text-sm text-slate-600">
                    Follow a structured guide designed for first-time exporters.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}