import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Accueil from "@/components/Accueil";
import SectionAnimee from "@/components/SectionAnimee";
import CarteProjets from "@/components/CarteProjets";
import PuceCompetence from "@/components/PuceCompetence";
import { projets } from "@/data/projets";
import { competences } from "@/data/competences";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Accueil />

      {/* Projets en vedette */}
      <section className="section sectionGrise">
        <div className="conteneur">
          <SectionAnimee>
            <div className={styles.enteteSection}>
              <h2 className={styles.titreSection}>
                Mes <span className="accent">Projets</span>
              </h2>
              <p className={styles.introSection}>
                Découvrez une sélection de mes réalisations les plus
                significatives
              </p>
            </div>
          </SectionAnimee>

          <div className="grille">
            {projets.slice(0, 3).map((projet, index) => (
              <CarteProjets key={projet.slug} projet={projet} index={index} />
            ))}
          </div>

          <SectionAnimee className={styles.centre}>
            <Link href="/projets" className="lienFleche">
              Voir tous les projets <FaArrowRight />
            </Link>
          </SectionAnimee>
        </div>
      </section>

      {/* Aperçu des compétences */}
      <section className="section">
        <div className="conteneur">
          <SectionAnimee>
            <div className={styles.enteteSection}>
              <h2 className={styles.titreSection}>
                Mes <span className="accent">Compétences</span>
              </h2>
              <p className={styles.introSection}>
                Dix compétences techniques et humaines, chacune détaillée dans
                un article dédié
              </p>
            </div>
          </SectionAnimee>

          <SectionAnimee>
            <div className={styles.puces}>
              {competences.map((competence) => (
                <PuceCompetence key={competence.slug} competence={competence} />
              ))}
            </div>
          </SectionAnimee>

          <SectionAnimee className={styles.centre}>
            <Link href="/competences" className="lienFleche">
              Voir toutes mes compétences <FaArrowRight />
            </Link>
          </SectionAnimee>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className={styles.appel}>
        <div className="conteneur">
          <SectionAnimee>
            <h2 className={styles.titreAppel}>Travaillons ensemble</h2>
            <p className={styles.texteAppel}>
              Vous avez un projet en tête ? N&apos;hésitez pas à me contacter
              pour en discuter.
            </p>
            <Link href="/contact" className={styles.boutonAppel}>
              Me contacter <FaArrowRight />
            </Link>
          </SectionAnimee>
        </div>
      </section>
    </>
  );
}
