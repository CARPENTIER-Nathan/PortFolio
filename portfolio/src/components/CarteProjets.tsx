"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { Projet } from "@/data/projets";
import styles from "./CarteProjets.module.css";

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
      <Link href={`/projets/${projet.slug}`} className={styles.carte}>
        <div className={styles.visuel}>
          <Image
            src={projet.image}
            alt={projet.titre}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className={styles.corps}>
          <h3 className={styles.titre}>{projet.titre}</h3>
          <p className={`${styles.description} tronque2`}>
            {projet.description}
          </p>
          <div className={styles.technologies}>
            {projet.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="etiquette">
                {tech}
              </span>
            ))}
          </div>
          <span className={styles.invite}>
            Voir le projet <FaArrowRight size={12} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
