import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import SectionAnimee from "@/components/SectionAnimee";
import EntreeParcours from "@/components/EntreeParcours";
import { parcoursParAnnee } from "@/data/parcours";
import styles from "./parcours.module.css";

export const metadata: Metadata = {
  title: "Parcours",
  description:
    "Mon parcours professionnel et ma formation, présentés du plus récent au plus ancien. Portfolio de Nathan CARPENTIER.",
};

export default function ParcoursPage() {
  return (
    <div className="section">
      <div className="conteneur conteneurEtroit">
        <SectionAnimee>
          <div className="entetePage">
            <h1 className="titrePage">
              Mon <span className="accent">Parcours</span>
            </h1>
            <p className="introPage">
              Mes expériences et mes formations, de la plus récente à la plus
              ancienne. Chaque étape se déplie sur le détail des missions et sur
              les réalisations et compétences qui s&apos;y rattachent.
            </p>
          </div>
        </SectionAnimee>

        {/* La frise : un axe vertical continu, les étapes groupées par année */}
        <SectionAnimee>
          <ol className={styles.frise}>
            {parcoursParAnnee.map((groupe) => (
              <li key={groupe.annee} className={styles.groupe}>
                <div className={styles.enTeteAnnee}>
                  <span className={styles.annee}>{groupe.annee}</span>
                  <span className={styles.compte}>
                    {groupe.etapes.length}{" "}
                    {groupe.etapes.length > 1 ? "étapes" : "étape"}
                  </span>
                </div>

                <ol className={styles.etapes}>
                  {groupe.etapes.map((etape) => (
                    <EntreeParcours key={etape.slug} etape={etape} />
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        </SectionAnimee>

        <SectionAnimee delai={0.1}>
          <div className={styles.fin}>
            <p className={styles.texteFin}>
              Le détail de ce que j&apos;ai construit et de ce que j&apos;ai
              appris se lit dans mes réalisations et mes compétences.
            </p>
            <div className={styles.actionsFin}>
              <Link href="/projets" className="bouton boutonPrincipal">
                Voir mes réalisations <FaArrowRight />
              </Link>
              <Link href="/competences" className="bouton boutonSecondaire">
                Voir mes compétences
              </Link>
            </div>
          </div>
        </SectionAnimee>
      </div>
    </div>
  );
}
