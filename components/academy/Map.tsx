"use client";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const AcademyMap = () => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const smoothX = useSpring(cursorX, { stiffness: 140, damping: 18 });
  const smoothY = useSpring(cursorY, { stiffness: 140, damping: 18 });

  const [label, setLabel] = useState("Export Readiness");

  const rotateX = useTransform(y, [-50, 50], [2, -2]);
  const rotateY = useTransform(x, [-50, 50], [-2, 2]);

  // 🔥 HOTSPOTS (mapped to visual nodes)
  const hotspots = [
    {
      top: "28%",
      left: "32%",
      href: "/suppliers/academy/export-readiness",
      label: "Export Readiness",
    },
    {
      top: "58%",
      left: "35%",
      href: "/suppliers/programs/virtual-consultation",
      label: "Virtual Consultation",
    },
    {
      top: "30%",
      left: "72%",
      href: "/suppliers/programs/vtrade-missions",
      label: "Trade Missions",
    },
    {
      top: "68%",
      left: "78%",
      href: "/suppliers/programs/international-showcases",
      label: "International Showcases",
    },
  ];

  // ✅ Default cursor at 01
  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const first = hotspots[0];

    const xPos = (parseFloat(first.left) / 100) * rect.width;
    const yPos = (parseFloat(first.top) / 100) * rect.height;

    cursorX.set(xPos);
    cursorY.set(yPos);
    setLabel(first.label);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    x.set(px - rect.width / 2);
    y.set(py - rect.height / 2);

    cursorX.set(px);
    cursorY.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // ✨ Magnetic effect
  const magnetize = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;

    cursorX.set(cursorX.get() + mx * 0.2);
    cursorY.set(cursorY.get() + my * 0.2);
  };

  return (
    <section className="relative py-32 px-6 bg-[#F7F9FC] overflow-hidden">
      {/* BACKGROUND (unchanged) */}
      <div className="absolute -top-40 right-[-120px] w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl opacity-60 animate-[float_18s_ease-in-out_infinite]" />
      <div className="absolute -bottom-40 left-[-120px] w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl opacity-60 animate-[float_22s_ease-in-out_infinite]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          className="relative w-full"
        >
          <div className="relative w-full h-[340px] sm:h-[420px] md:h-[500px] lg:h-[580px] xl:h-[660px]">

            {/* IMAGE */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 24, repeat: Infinity }}
              className="absolute inset-0"
            >
              <Image
                src="/images/map.png"
                alt="Academy Map"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* 🔥 HOTSPOTS */}
            {hotspots.map((spot, i) => (
              <Link key={i} href={spot.href}>
                <motion.div
                  style={{ top: spot.top, left: spot.left }}
                  onMouseEnter={() => setLabel(spot.label)}
                  onMouseMove={magnetize}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute w-24 h-24 -translate-x-1/2 -translate-y-1/2 z-40 cursor-none"
                >
                  {/* subtle pulse */}
                  <div className="w-full h-full rounded-full bg-accent/20 animate-ping" />
                </motion.div>
              </Link>
            ))}

            {/* ✨ CURSOR */}
            <motion.div
              className="pointer-events-none absolute z-50"
              style={{
                x: smoothX,
                y: smoothY,
                translateX: "-50%",
                translateY: "-50%",
              }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full
                              bg-white/80 backdrop-blur-md shadow-xl border border-black/10">
                <div className="w-2 h-2 rounded-full bg-black" />
                <span className="text-xs font-medium text-black whitespace-nowrap">
                  {label}
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};