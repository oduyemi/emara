"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Mail, UserPlus } from "lucide-react";

interface Props {
  tier: string;
}

export default function RecommendedNextSteps({ tier }: Props) {
  const steps = getSteps(tier);

  return (
    <div className="space-y-6">
      <h4 className="text-lg font-semibold">
        Recommended Next Steps
      </h4>

      <div className="grid md:grid-cols-2 gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -3 }}
            className="p-6 border border-neutral-800 rounded-xl bg-neutral-950 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white">
                {step.icon}
                <span className="font-medium">{step.title}</span>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed">
                {step.description}
              </p>
            </div>

            <Link
              href={step.href}
              className="mt-5 inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300"
            >
              Continue
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function getSteps(tier: string) {
  if (tier === "Emerging Exporter") {
    return [
      {
        title: "Contact Emara Advisors",
        description:
          "Your business may need additional preparation before exporting. Our advisors can guide you on certifications, production readiness, and export documentation.",
        href: "/contact",
        icon: <Mail size={18} />,
      },
      {
        title: "Follow the Beginner Export Roadmap",
        description:
          "Explore the step-by-step roadmap designed for companies starting their export journey.",
        href: "/supplier/academy/roadmap/new-exporters",
        icon: <Compass size={18} />,
      },
    ];
  }

  if (tier === "Developing Exporter") {
    return [
      {
        title: "Register Your Supplier Account",
        description:
          "Create your Emara supplier profile to begin onboarding and prepare your business for international buyers.",
        href: "/register",
        icon: <UserPlus size={18} />,
      },
      {
        title: "Follow the Export Readiness Roadmap",
        description:
          "Discover the recommended steps to strengthen your capabilities and move toward active exporting.",
        href: "/supplier/academy/roadmap",
        icon: <Compass size={18} />,
      },
    ];
  }

  if (tier === "Export Ready") {
    return [
      {
        title: "Start Supplier Onboarding",
        description:
          "Complete your supplier onboarding to become visible to global buyers on the Emara platform.",
        href: "/suppliers/onboarding",
        icon: <UserPlus size={18} />,
      },
      {
        title: "Explore Export Programs",
        description:
          "Access Emara programs designed to help suppliers scale their export operations and reach international markets.",
        href: "/suppliers/programs",
        icon: <Compass size={18} />,
      },
    ];
  }

  return [
    {
      title: "Access the Advanced Export Roadmap",
      description:
        "Follow the roadmap designed for experienced exporters looking to expand into new international markets.",
      href: "/supplier/academy/roadmap/experienced-exporters",
      icon: <Compass size={18} />,
    },
    {
      title: "Join the Emara Supplier Network",
      description:
        "Complete your onboarding and connect with global buyers actively sourcing from Africa.",
      href: "/suppliers/onboarding",
      icon: <UserPlus size={18} />,
    },
  ];
}