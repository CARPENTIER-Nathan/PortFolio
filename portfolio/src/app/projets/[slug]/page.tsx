import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SectionAnimee from "@/components/SectionAnimee";
import IconeCompetence from "@/components/IconeCompetence";
import { competencesDuProjet } from "@/data/competences";
import { projets } from "@/data/projets";
import styles from "./projet.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projets.map((projet) => ({ slug: projet.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const projet = projets.find((p) => p.slug === slug);
  if (!projet) return {};
  return {
    title: projet.titre,
    description: projet.description,
  };
}

export default async function PageProjet({ params }: PageProps) {
  const { slug } = await params;
  const projet = projets.find((p) => p.slug === slug);

  if (!projet) {
    notFound();
  }

  const competencesLiees = competencesDuProjet(projet.slug);

  return (
    <div className="section">
      <div className="conteneur conteneurEtroit">
        <SectionAnimee>
          <Link href="/projets" className={styles.retour}>
            <FaArrowLeft /> Retour aux projets
          </Link>
        </SectionAnimee>

        <SectionAnimee>
          <div className={styles.visuel}>
            <Image
              src={projet.image}
              alt={projet.titre}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
        </SectionAnimee>

        <SectionAnimee>
          <h1 className={styles.titre}>{projet.titre}</h1>
          <p className={styles.poste}>{projet.poste}</p>
        </SectionAnimee>

        <SectionAnimee delai={0.1}>
          <div className={styles.corps}>
            <section>
              <h2 className={styles.titreSection}>Contexte du projet</h2>
              <p className={styles.paragraphe}>{projet.contexte}</p>
            </section>

            <section>
              <h2 className={styles.titreSection}>Objectifs</h2>
              <ul className={styles.liste}>
                {projet.objectifs.map((objectif, i) => (
                  <li key={i} className={styles.puceListe}>
                    <span>{objectif}</span>
                  </li>
                ))}
              </ul>
            </section>

            {projet.enjeux && (
              <section>
                <h2 className={styles.titreSection}>L&apos;enjeu et les risques</h2>
                <p className={styles.paragraphe}>{projet.enjeux}</p>
              </section>
            )}

            <section>
              <h2 className={styles.titreSection}>Défis techniques</h2>
              <p className={styles.paragraphe}>{projet.defis}</p>
            </section>

            {projet.etapes && projet.etapes.length > 0 && (
              <section>
                <h2 className={styles.titreSection}>
                  Les étapes : ce que j&apos;ai fait
                </h2>
                <ul className={styles.liste}>
                  {projet.etapes.map((etape, i) => (
                    <li key={i} className={styles.puceListe}>
                      <span>{etape}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section>
              <h2 className={styles.titreSection}>Solutions apportées</h2>
              <p className={styles.paragraphe}>{projet.solutions}</p>
            </section>

            {projet.acteurs && projet.acteurs.length > 0 && (
              <section>
                <h2 className={styles.titreSection}>
                  Les acteurs et mes interactions
                </h2>
                <div className={styles.blocs}>
                  {projet.acteurs.map((acteur, i) => (
                    <p key={i} className={styles.paragraphe}>
                      <strong className={styles.etiquetteBloc}>
                        {acteur.role}.
                      </strong>{" "}
                      {acteur.interaction}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {projet.resultats &&
              (projet.resultats.pourMoi || projet.resultats.pourEntreprise) && (
                <section>
                  <h2 className={styles.titreSection}>Les résultats</h2>
                  <div className={styles.blocs}>
                    {projet.resultats.pourMoi && (
                      <div>
                        <h3 className={styles.sousTitre}>Pour moi</h3>
                        <p className={styles.paragraphe}>
                          {projet.resultats.pourMoi}
                        </p>
                      </div>
                    )}
                    {projet.resultats.pourEntreprise && (
                      <div>
                        <h3 className={styles.sousTitre}>
                          Pour le commanditaire
                        </h3>
                        <p className={styles.paragraphe}>
                          {projet.resultats.pourEntreprise}
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              )}

            {projet.lendemains &&
              (projet.lendemains.immediat ||
                projet.lendemains.aDistance ||
                projet.lendemains.aujourdhui) && (
                <section>
                  <h2 className={styles.titreSection}>
                    Les lendemains du projet
                  </h2>
                  <div className={styles.blocs}>
                    {projet.lendemains.immediat && (
                      <div>
                        <h3 className={styles.sousTitre}>Dans l&apos;immédiat</h3>
                        <p className={styles.paragraphe}>
                          {projet.lendemains.immediat}
                        </p>
                      </div>
                    )}
                    {projet.lendemains.aDistance && (
                      <div>
                        <h3 className={styles.sousTitre}>À distance</h3>
                        <p className={styles.paragraphe}>
                          {projet.lendemains.aDistance}
                        </p>
                      </div>
                    )}
                    {projet.lendemains.aujourdhui && (
                      <div>
                        <h3 className={styles.sousTitre}>Aujourd&apos;hui</h3>
                        <p className={styles.paragraphe}>
                          {projet.lendemains.aujourdhui}
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              )}

            {projet.regardCritique && (
              <section>
                <h2 className={styles.titreSection}>Mon regard critique</h2>
                <p className={styles.paragraphe}>{projet.regardCritique}</p>
              </section>
            )}

            <section>
              <h2 className={styles.titreSection}>Technologies utilisées</h2>
              <div className={styles.technologies}>
                {projet.technologies.map((tech) => (
                  <span key={tech} className="etiquette">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </SectionAnimee>

        {/* Compétences rattachées — navigation circulaire */}
        {competencesLiees.length > 0 && (
          <SectionAnimee delai={0.1}>
            <section className={styles.sectionLiee}>
              <h2 className={styles.titreSection}>
                Les compétences rattachées à cette réalisation
              </h2>

              <div className={styles.grilleCompetences}>
                {competencesLiees.map((competence) => (
                  <Link
                    key={competence.slug}
                    href={`/competences/${competence.slug}`}
                    className={styles.carteCompetence}
                  >
                    <span className={styles.pastilleCompetence}>
                      <IconeCompetence nom={competence.icone} taille={18} />
                    </span>
                    <div>
                      <h3 className={styles.nomCompetence}>{competence.nom}</h3>
                      <p
                        className={`${styles.resumeCompetence} tronque2`}
                      >
                        {competence.resume}
                      </p>
                      <span className={styles.inviteCompetence}>
                        Lire l&apos;article <FaArrowRight size={10} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </SectionAnimee>
        )}
      </div>
    </div>
  );
}
