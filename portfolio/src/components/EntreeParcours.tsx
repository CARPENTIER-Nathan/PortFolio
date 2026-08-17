"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaBriefcase, FaCertificate, FaChevronDown, FaGraduationCap } from "react-icons/fa";
import type { Etape } from "@/data/parcours";
import { formaterPeriode } from "@/data/parcours";
import { projets } from "@/data/projets";
import { competences } from "@/data/competences";
import styles from "./EntreeParcours.module.css";

const icones = {
  experience: FaBriefcase,
  formation: FaGraduationCap,
  certification: FaCertificate,
};

/** Initiales du lieu, affichées tant qu'aucun logo n'est fourni. */
function initiales(lieu: string): string {
  return lieu
    .split(/\s+/)
    .slice(0, 2)
    .map((mot) => mot[0])
    .join("")
    .toUpperCase();
}

export default function EntreeParcours({ etape }: { etape: Etape }) {
  const [ouvert, setOuvert] = useState(false);
  const idDetail = useId();

  const Icone = icones[etape.type];
  const enCours = etape.fin === null;

  const projetsLies = (etape.projets ?? [])
    .map((slug) => projets.find((projet) => projet.slug === slug))
    .filter((projet) => projet !== undefined);

  const competencesLiees = (etape.competences ?? [])
    .map((slug) => competences.find((competence) => competence.slug === slug))
    .filter((competence) => competence !== undefined);

  // Une certification n'a qu'un niveau de lecture : date et intitulé.
  const detaillable =
    etape.type !== "certification" &&
    ((etape.detail && etape.detail.length > 0) ||
      projetsLies.length > 0 ||
      competencesLiees.length > 0 ||
      Boolean(etape.responsabilite));

  const logo = etape.logo ? (
    <Image src={etape.logo} alt={etape.lieu} fill sizes="72px" />
  ) : (
    <span className={styles.initiales}>{initiales(etape.lieu)}</span>
  );

  return (
    <li className={styles.entree}>
      {/* Repère sur l'axe */}
      <span className={`${styles.point} ${enCours ? styles.pointActif : ""}`}>
        <Icone size={12} />
      </span>

      <div className={`${styles.bloc} ${ouvert ? styles.blocOuvert : ""}`}>
        {/* 1er niveau de lecture */}
        <div className={styles.enTete}>
          <span className={styles.logo}>
            {etape.siteLieu ? (
              <a
                href={etape.siteLieu}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Site de ${etape.lieu}`}
                className={styles.lienLogo}
              >
                {logo}
              </a>
            ) : (
              logo
            )}
          </span>

          <div className={styles.identite}>
            <p className={styles.periode}>
              <span className={styles.mois}>{formaterPeriode(etape)}</span>
              {enCours && <span className={styles.badge}>En cours</span>}
            </p>
            <h3 className={styles.intitule}>{etape.intitule}</h3>
            <p className={styles.lieu}>
              {etape.siteLieu ? (
                <a
                  href={etape.siteLieu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.lienLieu}
                >
                  {etape.lieu}
                </a>
              ) : (
                etape.lieu
              )}
              {etape.ville && (
                <span className={styles.ville}>· {etape.ville}</span>
              )}
              {etape.statut && <span className={styles.statut}>{etape.statut}</span>}
            </p>
            {etape.resultat && (
              <p className={styles.resultat}>{etape.resultat}</p>
            )}
          </div>

          {detaillable && (
            <button
              type="button"
              onClick={() => setOuvert(!ouvert)}
              aria-expanded={ouvert}
              aria-controls={idDetail}
              className={styles.bascule}
            >
              {ouvert ? "Replier" : "En savoir plus"}
              <FaChevronDown
                size={12}
                className={`${styles.chevron} ${ouvert ? styles.chevronOuvert : ""}`}
              />
            </button>
          )}
        </div>

        {/* 2e niveau de lecture */}
        {detaillable && (
          <AnimatePresence initial={false}>
            {ouvert && (
              <motion.div
                id={idDetail}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={styles.zoneDetail}
              >
                <div className={styles.detail}>
                  {etape.responsabilite && (
                    <p className={styles.responsabilite}>
                      <strong className={styles.etiquetteBloc}>Responsabilité.</strong>{" "}
                      {etape.responsabilite}
                    </p>
                  )}

                  {etape.detail?.map((paragraphe, i) => (
                    <p key={i} className={styles.paragraphe}>
                      {paragraphe}
                    </p>
                  ))}

                  {projetsLies.length > 0 && (
                    <div className={styles.rattachements}>
                      <h4 className={styles.titreRattachement}>
                        Les réalisations rattachées
                      </h4>
                      <div className={styles.liens}>
                        {projetsLies.map((projet) => (
                          <Link
                            key={projet.slug}
                            href={`/projets/${projet.slug}`}
                            className={styles.lienRattachement}
                          >
                            {projet.titre} <FaArrowRight size={10} />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {competencesLiees.length > 0 && (
                    <div className={styles.rattachements}>
                      <h4 className={styles.titreRattachement}>
                        Les compétences rattachées
                      </h4>
                      <div className={styles.liens}>
                        {competencesLiees.map((competence) => (
                          <Link
                            key={competence.slug}
                            href={`/competences/${competence.slug}`}
                            className={styles.lienRattachement}
                          >
                            {competence.nom} <FaArrowRight size={10} />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </li>
  );
}
