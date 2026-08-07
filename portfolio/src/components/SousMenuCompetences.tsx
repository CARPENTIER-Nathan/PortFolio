"use client";

import Link from "next/link";
import { competencesTechniques, competencesHumaines } from "@/data/competences";
import IconeCompetence from "./IconeCompetence";
import styles from "./SousMenuCompetences.module.css";

const groupes = [
  { titre: "Compétences techniques", items: competencesTechniques },
  { titre: "Compétences humaines", items: competencesHumaines },
];

export default function SousMenuCompetences({
  slugActuel,
}: {
  slugActuel?: string;
}) {
  return (
    <nav aria-label="Sous-menu des compétences" className={styles.sousMenu}>
      {groupes.map((groupe) => (
        <div key={groupe.titre}>
          <h2 className={styles.titreGroupe}>{groupe.titre}</h2>
          <ul className={styles.liste}>
            {groupe.items.map((competence) => {
              const actif = competence.slug === slugActuel;
              return (
                <li key={competence.slug}>
                  <Link
                    href={`/competences/${competence.slug}`}
                    aria-current={actif ? "page" : undefined}
                    className={`${styles.lien} ${
                      actif ? styles.lienActif : ""
                    }`}
                  >
                    <span className={styles.icone}>
                      <IconeCompetence nom={competence.icone} taille={16} />
                    </span>
                    {competence.nom}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
