import Link from "next/link";
import IconeCompetence from "./IconeCompetence";
import type { Competence } from "@/data/competences";
import styles from "./PuceCompetence.module.css";

export default function PuceCompetence({
  competence,
}: {
  competence: Competence;
}) {
  return (
    <Link href={`/competences/${competence.slug}`} className={styles.puce}>
      <span className={styles.icone}>
        <IconeCompetence nom={competence.icone} taille={16} />
      </span>
      <span className={styles.nom}>{competence.nom}</span>
    </Link>
  );
}
