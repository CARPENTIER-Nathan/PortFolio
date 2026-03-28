"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  icon?: ReactNode;
}

export default function SkillBar({ name, level, icon }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          {icon && <span className="text-gray-600">{icon}</span>}
          <span className="text-sm font-medium text-gray-700">{name}</span>
        </div>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>
      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400"
        />
      </div>
    </div>
  );
}
