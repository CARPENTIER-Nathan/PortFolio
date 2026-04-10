"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { Projet } from "@/data/projets";

interface CarteProjetProps {
  projet: Projet;
  index: number;
}

export default function CarteProjets({ projet, index }: CarteProjetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/projets/${projet.slug}`} className="group block">
        {/* Outer = gradient background acting as border */}
        <div className="rounded-2xl p-[2px] bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400 hover:p-[3px] hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all duration-300">
          {/* Inner = always solid white */}
          <div className="bg-white rounded-[14px] overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={projet.image}
                alt={projet.titre}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3
                className="text-xl font-bold text-gray-900 group-hover:text-violet-600 transition-colors"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {projet.titre}
              </h3>
              <p className="mt-2 text-gray-500 text-sm line-clamp-2">
                {projet.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {projet.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-violet-50 to-pink-50 text-violet-700 border border-violet-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-violet-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Voir le projet <FaArrowRight size={12} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
