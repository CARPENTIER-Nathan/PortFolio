"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { competencesTechniques, competencesHumaines } from "@/data/competences";
import { personnel } from "@/data/personnel";
import styles from "./BarreNavigation.module.css";

const liens = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/projets", label: "Projets" },
  { href: "/competences", label: "Compétences", sousMenu: true },
  { href: "/contact", label: "Contact" },
];

const groupesCompetences = [
  { titre: "Techniques", items: competencesTechniques },
  { titre: "Humaines", items: competencesHumaines },
];

export default function BarreNavigation() {
  const cheminActuel = usePathname();
  const [menuMobileOuvert, setMenuMobileOuvert] = useState(false);
  const [sousMenuOuvert, setSousMenuOuvert] = useState(false);

  const estActif = (href: string) =>
    href === "/" ? cheminActuel === "/" : cheminActuel.startsWith(href);

  return (
    <nav className={styles.barre}>
      <div className="conteneur">
        <div className={styles.rangee}>
          <Link href="/" className={styles.identite}>
            <span className={styles.photo}>
              <Image
                src="/images/profile.png"
                alt={`${personnel.prenom} ${personnel.nom}`}
                fill
                sizes="36px"
              />
            </span>
            <span className={styles.nom}>
              {personnel.prenom} {personnel.nom}
            </span>
          </Link>

          {/* Navigation bureau */}
          <div className={styles.liensBureau}>
            {liens.map((lien) =>
              lien.sousMenu ? (
                <div
                  key={lien.href}
                  className={styles.zoneSousMenu}
                  onMouseEnter={() => setSousMenuOuvert(true)}
                  onMouseLeave={() => setSousMenuOuvert(false)}
                >
                  <Link
                    href={lien.href}
                    className={`${styles.lien} ${
                      estActif(lien.href) ? styles.lienActif : ""
                    }`}
                  >
                    {lien.label}
                    <HiChevronDown size={16} />
                  </Link>

                  {sousMenuOuvert && (
                    <div className={styles.sousMenu}>
                      <div className={styles.panneauSousMenu}>
                        {groupesCompetences.map((groupe) => (
                          <div
                            key={groupe.titre}
                            className={styles.groupeSousMenu}
                          >
                            <p className={styles.titreGroupe}>{groupe.titre}</p>
                            {groupe.items.map((competence) => (
                              <Link
                                key={competence.slug}
                                href={`/competences/${competence.slug}`}
                                onClick={() => setSousMenuOuvert(false)}
                                className={`${styles.lienSousMenu} ${
                                  cheminActuel ===
                                  `/competences/${competence.slug}`
                                    ? styles.lienSousMenuActif
                                    : ""
                                }`}
                              >
                                {competence.nom}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={lien.href}
                  href={lien.href}
                  className={`${styles.lien} ${
                    estActif(lien.href) ? styles.lienActif : ""
                  }`}
                >
                  {lien.label}
                </Link>
              )
            )}
          </div>

          {/* Bascule mobile */}
          <button
            className={styles.boutonMobile}
            onClick={() => setMenuMobileOuvert(!menuMobileOuvert)}
            aria-label="Menu"
            aria-expanded={menuMobileOuvert}
          >
            {menuMobileOuvert ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuMobileOuvert && (
        <div className={styles.panneauMobile}>
          {liens.map((lien) => (
            <div key={lien.href}>
              <Link
                href={lien.href}
                onClick={() => setMenuMobileOuvert(false)}
                className={`${styles.lienMobile} ${
                  estActif(lien.href) ? styles.lienActif : ""
                }`}
              >
                {lien.label}
              </Link>

              {lien.sousMenu && (
                <div className={styles.sousMenuMobile}>
                  {groupesCompetences.map((groupe) => (
                    <div key={groupe.titre}>
                      <p className={styles.titreGroupe}>{groupe.titre}</p>
                      {groupe.items.map((competence) => (
                        <Link
                          key={competence.slug}
                          href={`/competences/${competence.slug}`}
                          onClick={() => setMenuMobileOuvert(false)}
                          className={styles.lienSousMenu}
                        >
                          {competence.nom}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
