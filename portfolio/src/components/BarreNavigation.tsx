"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { competencesTechniques, competencesHumaines } from "@/data/competences";
import { projets } from "@/data/projets";
import { personnel } from "@/data/personnel";
import styles from "./BarreNavigation.module.css";

interface GroupeSousMenu {
  titre: string;
  items: { slug: string; nom: string }[];
}

interface Lien {
  href: string;
  label: string;
  groupes?: GroupeSousMenu[];
}

const liens: Lien[] = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/parcours", label: "Parcours" },
  {
    href: "/projets",
    label: "Projets",
    groupes: [
      {
        titre: "Réalisations",
        items: projets.map((projet) => ({
          slug: projet.slug,
          nom: projet.titre,
        })),
      },
    ],
  },
  {
    href: "/competences",
    label: "Compétences",
    groupes: [
      {
        titre: "Techniques",
        items: competencesTechniques.map((competence) => ({
          slug: competence.slug,
          nom: competence.nom,
        })),
      },
      {
        titre: "Humaines",
        items: competencesHumaines.map((competence) => ({
          slug: competence.slug,
          nom: competence.nom,
        })),
      },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export default function BarreNavigation() {
  const cheminActuel = usePathname();
  const [menuMobileOuvert, setMenuMobileOuvert] = useState(false);
  // href du lien dont le sous-menu est déployé, null si aucun
  const [sousMenuOuvert, setSousMenuOuvert] = useState<string | null>(null);

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
              lien.groupes ? (
                <div
                  key={lien.href}
                  className={styles.zoneSousMenu}
                  onMouseEnter={() => setSousMenuOuvert(lien.href)}
                  onMouseLeave={() => setSousMenuOuvert(null)}
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

                  {sousMenuOuvert === lien.href && (
                    <div className={styles.sousMenu}>
                      <div className={styles.panneauSousMenu}>
                        {lien.groupes.map((groupe) => (
                          <div
                            key={groupe.titre}
                            className={styles.groupeSousMenu}
                          >
                            <p className={styles.titreGroupe}>{groupe.titre}</p>
                            {groupe.items.map((item) => (
                              <Link
                                key={item.slug}
                                href={`${lien.href}/${item.slug}`}
                                onClick={() => setSousMenuOuvert(null)}
                                className={`${styles.lienSousMenu} ${
                                  cheminActuel === `${lien.href}/${item.slug}`
                                    ? styles.lienSousMenuActif
                                    : ""
                                }`}
                              >
                                {item.nom}
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

              {lien.groupes && (
                <div className={styles.sousMenuMobile}>
                  {lien.groupes.map((groupe) => (
                    <div key={groupe.titre}>
                      <p className={styles.titreGroupe}>{groupe.titre}</p>
                      {groupe.items.map((item) => (
                        <Link
                          key={item.slug}
                          href={`${lien.href}/${item.slug}`}
                          onClick={() => setMenuMobileOuvert(false)}
                          className={styles.lienSousMenu}
                        >
                          {item.nom}
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
