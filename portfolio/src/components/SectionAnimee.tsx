"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionAnimeeProps {
  children: ReactNode;
  className?: string;
  delai?: number;
}

export default function SectionAnimee({
  children,
  className = "",
  delai = 0,
}: SectionAnimeeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delai, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
