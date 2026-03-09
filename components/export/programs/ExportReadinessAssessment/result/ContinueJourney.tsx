"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, GraduationCap, Rocket } from "lucide-react";

export default function ContinueJourney() {
  const items = [
    {
      title: "Export Roadmap",
      description:
        "Follow the structured roadmap designed to guide suppliers through the export journey.",
      href: "/supplier/academy/roadmap",
      icon: <Compass size={18} />,
    },
    {
      title: "Emara Academy",
      description:
        "Build your export capabilities through courses, webinars, and workshops.",
      href: "/supplier/academy",
      icon: <GraduationCap size={18} />,
    },
    {
      title: "Export Programs",
      description:
        "Join Emara programs designed to help African suppliers reach global markets.",
      href: "/suppliers/programs",
      icon: <Rocket size={18} />,
    },
  ];

  return (
    <div className="space-y-6">

      <h4 className="text-lg font-semibold">
        Continue Your Export Journey
      </h4>

      <div className="grid md:grid-cols-3 gap-4">

        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -3 }}
            className="p-6 border border-neutral-800 rounded-xl bg-neutral-950"
          >

            <div className="flex items-center gap-2 mb-3">
              {item.icon}
              <span className="font-medium">{item.title}</span>
            </div>

            <p className="text-sm text-neutral-400 mb-4">
              {item.description}
            </p>

            <Link
              href={item.href}
              className="text-sm text-emerald-400 hover:text-emerald-300"
            >
              Explore →
            </Link>

          </motion.div>
        ))}

      </div>
    </div>
  );
}