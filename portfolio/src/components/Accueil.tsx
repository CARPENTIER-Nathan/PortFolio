"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { personnel } from "@/data/personnel";
import styles from "./Accueil.module.css";

export default function Accueil() {
  return (
    <section className={styles.accueil}>
      <div className="conteneur">
        <div className={styles.disposition}>

          <div className={styles.texte}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.salutation}
            >
              Bonjour, je suis
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={styles.titre}
            >
              {personnel.prenom}{" "}
              <span className="accent">{personnel.nom}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={styles.sousTitre}
            >
              {personnel.titre}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={styles.description}
            >
              {personnel.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={styles.actions}
            >
              <Link href="/projets" className="bouton boutonPrincipal">
                Voir mes projets <FaArrowRight />
              </Link>
              <Link href="/contact" className="bouton boutonSecondaire">
                Me contacter
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className={styles.reseaux}
            >
              <a
                href={personnel.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.lienReseau}
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={personnel.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.lienReseau}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.cadrePhoto}
          >
            <Image
              src="/images/profile.png"
              alt={`${personnel.prenom} ${personnel.nom}`}
              fill
              sizes="(max-width: 640px) 16rem, (max-width: 1024px) 18rem, 20rem"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
