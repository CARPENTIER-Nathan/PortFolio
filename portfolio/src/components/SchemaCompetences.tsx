import Link from "next/link";
import {
  competences,
  competencesClassees,
  type Competence,
} from "@/data/competences";
import styles from "./SchemaCompetences.module.css";

/** Graduations de l'échelle, en pourcentage. */
const REPERES = [0, 25, 50, 75, 100];

const LIBELLES: Record<Competence["domaine"], string> = {
  technique: "Technique",
  humaine: "Humaine",
};

function moyenne(liste: Competence[]): number {
  return Math.round(
    liste.reduce((total, competence) => total + competence.niveau, 0) /
      liste.length
  );
}

export default function SchemaCompetences() {
  /* Classement décroissant, tous domaines confondus. L'étendue des niveaux
     restant modeste, la seule longueur des barres discrimine mal : l'ordre
     vertical porte donc autant la hiérarchie que la barre elle-même. */
  const classees = competencesClassees;

  const domaines = (["technique", "humaine"] as const).map((domaine) => {
    const liste = competences.filter((c) => c.domaine === domaine);
    return { domaine, libelle: LIBELLES[domaine], liste, moyenne: moyenne(liste) };
  });

  return (
    <section className={styles.schema} aria-labelledby="titre-schema">
      <div className={styles.entete}>
        <h2 id="titre-schema" className={styles.titre}>
          Vue d&apos;ensemble
        </h2>
        <p className={styles.intro}>
          Mes dix compétences sur une même échelle, classées de la plus solide à
          la plus perfectible. Chaque barre mène à l&apos;article détaillé de la
          compétence.
        </p>
      </div>

      <ul className={styles.legende}>
        {domaines.map(({ domaine, libelle, liste, moyenne: valeur }) => (
          <li key={domaine} className={styles.elementLegende}>
            <span className={styles.puce} data-domaine={domaine} />
            <span className={styles.libelleLegende}>
              {libelle}s <span className={styles.compteLegende}>({liste.length})</span>
            </span>
            <span className={styles.moyenne}>moyenne {valeur}%</span>
          </li>
        ))}
      </ul>

      <ol className={styles.barres}>
        {classees.map((competence, rang) => (
          <li key={competence.slug}>
            <Link
              href={`/competences/${competence.slug}`}
              className={styles.ligne}
            >
              <span className={styles.identite}>
                <span className={styles.rang}>{rang + 1}</span>
                <span className={styles.nom}>{competence.nom}</span>
                {/* Le domaine est écrit, pas seulement porté par la couleur :
                    le schéma reste lisible en daltonisme comme à l'impression. */}
                <span
                  className={styles.domaine}
                  data-domaine={competence.domaine}
                >
                  {LIBELLES[competence.domaine]}
                </span>
              </span>

              <span className={styles.piste} aria-hidden="true">
                <span
                  className={styles.remplissage}
                  data-domaine={competence.domaine}
                  style={{ width: `${competence.niveau}%` }}
                />
              </span>

              <span className={styles.valeur}>{competence.niveau}%</span>
            </Link>
          </li>
        ))}
      </ol>

      {/* Échelle explicite : sans elle, la longueur des barres ne se rapporte
          à rien et l'écart entre deux compétences n'est pas interprétable. */}
      <div className={styles.echelle} aria-hidden="true">
        <span className={styles.graduations}>
          {REPERES.map((repere) => (
            <span key={repere}>{repere}</span>
          ))}
        </span>
      </div>
    </section>
  );
}
