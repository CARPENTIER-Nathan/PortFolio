import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaGamepad,
  FaMicrochip,
  FaLaptopCode,
} from "react-icons/fa";
import { GiJapan } from "react-icons/gi";
import type { IconType } from "react-icons";
import SectionAnimee from "@/components/SectionAnimee";
import TexteRiche from "@/components/TexteRiche";
import { presentation } from "@/data/presentation";
import { personnel } from "@/data/personnel";
import { trouverCompetence } from "@/data/competences";
import styles from "./apropos.module.css";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Mes valeurs, mon projet professionnel, mes qualités humaines et mes centres d'intérêt. Portfolio de Nathan CARPENTIER.",
};

const carteIcones: Record<string, IconType> = {
  FaGamepad,
  FaMicrochip,
  FaLaptopCode,
  GiJapan,
};

export default function AProposPage() {
  const { titreAccroche, accroche, valeurs, projet, qualites, interets } =
    presentation;

  return (
    <div className="section">
      <div className="conteneur">
        <SectionAnimee>
          <div className="entetePage">
            <h1 className="titrePage">
              À <span className="accent">propos</span>
            </h1>
            <p className="introPage">
              Ce qui oriente ma façon de travailler, où je veux aller, et ce
              qui me tient en dehors du code.
            </p>
          </div>
        </SectionAnimee>

        <div className={styles.disposition}>
          {/* Photo, maintenue visible pendant le défilement */}
          <aside className={styles.colonnePhoto}>
            <div className={styles.photo}>
              <Image
                src="/images/profile.png"
                alt={`${personnel.prenom} ${personnel.nom}`}
                fill
                sizes="(max-width: 768px) 192px, 224px"
                priority
              />
            </div>
          </aside>

          {/* Colonne défilante */}
          <article className={styles.contenu}>
            <SectionAnimee>
              <div className={styles.accroche}>
                <h2 className={styles.titreAccroche}>{titreAccroche}</h2>
                {accroche.map((paragraphe, i) => (
                  <p key={i}><TexteRiche texte={paragraphe} /></p>
                ))}
              </div>
            </SectionAnimee>

          {/* 1. Mes valeurs */}
          <SectionAnimee delai={0.05}>
            <section className={styles.section}>
              <h2 className={styles.titreSection}>Mes valeurs</h2>

              <div className={styles.valeurs}>
                {valeurs.map((valeur) => (
                  <div key={valeur.titre} className={styles.valeur}>
                    <h3 className={styles.titreValeur}>{valeur.titre}</h3>
                    <p className={styles.paragraphe}><TexteRiche texte={valeur.texte} /></p>
                  </div>
                ))}
              </div>
            </section>
          </SectionAnimee>

          {/* 2. Mon projet professionnel et personnel */}
          <SectionAnimee delai={0.05}>
            <section className={styles.section}>
              <h2 className={styles.titreSection}>
                Mon projet professionnel et personnel
              </h2>
              <p className={styles.paragraphe}><TexteRiche texte={projet.intro} /></p>

              <div className={styles.etapes}>
                {[
                  { horizon: "À court terme", texte: projet.courtTerme },
                  { horizon: "Professionnel", texte: projet.professionnel },
                  { horizon: "Sur le plan personnel", texte: projet.personnel },
                ]
                  // un horizon non rédigé ne doit pas laisser un bloc vide
                  .filter((etape) => etape.texte.trim() !== "")
                  .map((etape) => (
                    <div key={etape.horizon} className={styles.etape}>
                      <span className={styles.horizon}>{etape.horizon}</span>
                      <p className={styles.paragraphe}>
                        <TexteRiche texte={etape.texte} />
                      </p>
                    </div>
                  ))}
              </div>
            </section>
          </SectionAnimee>

          {/* 3. Mes principales qualités humaines */}
          <SectionAnimee delai={0.05}>
            <section className={styles.section}>
              <h2 className={styles.titreSection}>
                Mes principales qualités humaines
              </h2>
              <p className={styles.introSection}>
                Chacune fait l&apos;objet d&apos;un article détaillé, avec ses
                éléments de preuve et son autocritique.
              </p>

              <div className={styles.qualites}>
                {qualites.map((qualite) => {
                  const competence = trouverCompetence(qualite.competenceSlug);

                  return (
                    <div key={qualite.titre} className={styles.qualite}>
                      <h3 className={styles.titreQualite}>{qualite.titre}</h3>
                      <p className={styles.texteQualite}><TexteRiche texte={qualite.texte} /></p>
                      {competence && (
                        <Link
                          href={`/competences/${competence.slug}`}
                          className={styles.lienQualite}
                        >
                          Voir la compétence : {competence.nom}{" "}
                          <FaArrowRight size={10} />
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </SectionAnimee>

          {/* 4. Mes centres d'intérêt */}
          <SectionAnimee delai={0.05}>
            <section className={styles.section}>
              <h2 className={styles.titreSection}>Mes centres d&apos;intérêt</h2>
              <p className={styles.introSection}>
                Ce qui m&apos;occupe en dehors du code, et ce que j&apos;ai
                envie de découvrir.
              </p>

              <div className={styles.interets}>
                {interets.map((interet) => {
                  const Icone = carteIcones[interet.icone];

                  return (
                    <div key={interet.titre} className={styles.interet}>
                      <span className={styles.iconeInteret}>
                        {Icone && <Icone size={20} />}
                      </span>
                      <div>
                        <h3 className={styles.titreInteret}>
                          {interet.titre}
                        </h3>
                        <p className={styles.texteInteret}><TexteRiche texte={interet.texte} /></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </SectionAnimee>

          {/* Fin d'article */}
          <SectionAnimee delai={0.05}>
            <div className={styles.fin}>
              <p className={styles.texteFin}>
                La suite se lit dans mes réalisations et dans le détail de mes
                compétences.
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
          </article>
        </div>
      </div>
    </div>
  );
}
