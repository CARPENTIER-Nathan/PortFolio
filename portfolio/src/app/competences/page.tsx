import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import SectionAnimee from "@/components/SectionAnimee";
import IconeCompetence from "@/components/IconeCompetence";
import {
  competencesTechniques,
  competencesHumaines,
  type Competence,
} from "@/data/competences";
import styles from "./competences.module.css";

export const metadata: Metadata = {
  title: "Compétences",
  description:
    "Mes dix compétences techniques et humaines, chacune détaillée dans un article dédié. Portfolio de Nathan CARPENTIER.",
};

const groupes = [
  {
    titre: "Compétences techniques",
    intro:
      "Les savoir-faire d'ingénierie sur lesquels reposent mes réalisations.",
    items: competencesTechniques,
  },
  {
    titre: "Compétences humaines",
    intro:
      "Les compétences transversales qui conditionnent la qualité de mon travail technique.",
    items: competencesHumaines,
  },
];

function CarteCompetence({
  competence,
  delai,
}: {
  competence: Competence;
  delai: number;
}) {
  return (
    <SectionAnimee delai={delai}>
      <Link href={`/competences/${competence.slug}`} className={styles.carte}>
        <div className={styles.entete}>
          <span className="pastilleIcone">
            <IconeCompetence nom={competence.icone} taille={24} />
          </span>
          <div>
            <h3 className={styles.nom}>{competence.nom}</h3>
            <p className={styles.categorie}>{competence.categorie}</p>
          </div>
        </div>

        <p className={styles.resume}>{competence.resume}</p>

        <div className={styles.blocNiveau}>
          <div className={styles.ligneNiveau}>
            <span className={styles.libelleNiveau}>Niveau de maîtrise</span>
            <span className={styles.valeurNiveau}>{competence.niveau}%</span>
          </div>
          <div
            className={styles.jauge}
            role="meter"
            aria-valuenow={competence.niveau}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Niveau de maîtrise : ${competence.nom}`}
          >
            <div
              className={styles.remplissage}
              style={{ width: `${competence.niveau}%` }}
            />
          </div>
        </div>

        <span className={styles.invite}>
          Lire l&apos;article <FaArrowRight size={12} />
        </span>
      </Link>
    </SectionAnimee>
  );
}

export default function CompetencesPage() {
  return (
    <div className="section">
      <div className="conteneur">
        <SectionAnimee>
          <div className="entetePage">
            <h1 className="titrePage">
              Mes <span className="accent">Compétences</span>
            </h1>
            <p className="introPage">
              Dix compétences, réparties entre savoir-faire techniques et
              compétences humaines. Chacune fait l&apos;objet d&apos;un article
              détaillé : ma définition, mes éléments de preuve, mon autocritique
              et mon évolution.
            </p>
          </div>
        </SectionAnimee>

        {groupes.map((groupe) => (
          <section key={groupe.titre} className={styles.groupe}>
            <SectionAnimee>
              <h2 className={styles.titreGroupe}>{groupe.titre}</h2>
              <p className={styles.introGroupe}>{groupe.intro}</p>
            </SectionAnimee>

            <div className="grille">
              {groupe.items.map((competence, index) => (
                <CarteCompetence
                  key={competence.slug}
                  competence={competence}
                  delai={index * 0.05}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
