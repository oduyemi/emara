"use client";
import { motion } from "framer-motion";

export const StepWrapper = ({ children, shake }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      // animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      animate={shake ? { x: [-6, 6, -4, 4, 0] } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};