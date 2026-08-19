import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight, FaLink } from "react-icons/fa";
import SectionAnimee from "@/components/SectionAnimee";
import SousMenuCompetences from "@/components/SousMenuCompetences";
import IconeCompetence from "@/components/IconeCompetence";
import { competences, trouverCompetence } from "@/data/competences";
import { projets } from "@/data/projets";
import styles from "./competence.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return competences.map((competence) => ({ slug: competence.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const competence = trouverCompetence(slug);
  if (!competence) return {};
  return {
    title: competence.nom,
    description: competence.resume,
  };
}

export default async function PageCompetence({ params }: PageProps) {
  const { slug } = await params;
  const competence = trouverCompetence(slug);

  if (!competence) {
    notFound();
  }

  const realisationsLiees = competence.projets
    .map((slugProjet) => projets.find((p) => p.slug === slugProjet))
    .filter((p) => p !== undefined);

  return (
    <div className="section">
      <div className="conteneur">
        <SectionAnimee>
          <Link href="/competences" className={styles.retour}>
            <FaArrowLeft /> Retour aux compétences
          </Link>
        </SectionAnimee>

        <div className={styles.disposition}>
          {/* Sous-menu des compétences */}
          <aside className={styles.colonneMenu}>
            <div className={styles.menuCollant}>
              <SousMenuCompetences slugActuel={competence.slug} />
            </div>
          </aside>

          {/* Article */}
          <article className={styles.article}>
            <SectionAnimee>
              <header>
                <div className={styles.enteteArticle}>
                  <span className={styles.pastilleGrande}>
                    <IconeCompetence nom={competence.icone} taille={28} />
                  </span>
                  <div>
                    <p className={styles.domaine}>
                      {competence.domaine === "technique"
                        ? "Compétence technique"
                        : "Compétence humaine"}
                    </p>
                    <h1 className={styles.titre}>{competence.nom}</h1>
                  </div>
                </div>

                <p className={styles.resume}>{competence.resume}</p>

                {competence.technologies && (
                  <div className={styles.technologies}>
                    {competence.technologies.map((techno) => (
                      <span key={techno} className="etiquette">
                        {techno}
                      </span>
                    ))}
                  </div>
                )}
              </header>
            </SectionAnimee>

            {/* 1. Ma définition */}
            <SectionAnimee delai={0.05}>
              <section className={styles.section}>
                <h2 className={styles.titreSection}>Ma définition</h2>
                <div className={styles.paragraphes}>
                  {competence.definition.map((paragraphe, i) => (
                    <p key={i} className={styles.paragraphe}>
                      {paragraphe}
                    </p>
                  ))}
                </div>

                <div className={styles.encart}>
                  <h3 className={styles.titreEncart}>
                    Cette compétence aujourd&apos;hui
                  </h3>
                  <p className={styles.paragraphe}>{competence.actualite}</p>
                </div>
              </section>
            </SectionAnimee>

            {/* 2. Mes éléments de preuve */}
            <SectionAnimee delai={0.05}>
              <section className={styles.section}>
                <h2 className={styles.titreSection}>Mes éléments de preuve</h2>

                <div className={styles.anecdotes}>
                  {competence.anecdotes.map((anecdote, i) => {
                    const projetLie = anecdote.projetSlug
                      ? projets.find((p) => p.slug === anecdote.projetSlug)
                      : undefined;

                    return (
                      <div key={i} className={styles.anecdote}>
                        <h3 className={styles.titreAnecdote}>
                          {anecdote.titre}
                        </h3>

                        <div className={styles.corpsAnecdote}>
                          <div>
                            <h4 className={styles.intituleBloc}>Le contexte</h4>
                            <p className={styles.paragraphe}>
                              {anecdote.contexte}
                            </p>
                          </div>
                          <div>
                            <h4 className={styles.intituleBloc}>
                              Ce que j&apos;ai fait
                            </h4>
                            <p className={styles.paragraphe}>
                              {anecdote.action}
                            </p>
                          </div>
                          <div>
                            <h4 className={styles.intituleBloc}>Le résultat</h4>
                            <p className={styles.paragraphe}>
                              {anecdote.resultat}
                            </p>
                          </div>
                          <div>
                            <h4 className={styles.intituleBloc}>
                              Ma valeur ajoutée
                            </h4>
                            <p className={styles.paragraphe}>
                              {anecdote.valeurAjoutee}
                            </p>
                          </div>
                        </div>

                        {projetLie && (
                          <Link
                            href={`/projets/${projetLie.slug}`}
                            className={styles.lienPreuve}
                          >
                            <FaLink size={12} />
                            Voir la réalisation : {projetLie.titre}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </SectionAnimee>

            {/* 3. Mon autocritique */}
            <SectionAnimee delai={0.05}>
              <section className={styles.section}>
                <h2 className={styles.titreSection}>Mon autocritique</h2>

                <div className={styles.blocs}>
                  <div>
                    <h3 className={styles.sousTitre}>Mon niveau de maîtrise</h3>
                    <p className={styles.paragraphe}>
                      {competence.autocritique.maitrise}
                    </p>
                  </div>

                  <div>
                    <h3 className={styles.sousTitre}>
                      Sa place dans mon profil
                    </h3>
                    <p className={styles.paragraphe}>
                      {competence.autocritique.importance}
                    </p>
                  </div>

                  {competence.autocritique.acquisition && (
                    <div>
                      <h3 className={styles.sousTitre}>
                        Ma vitesse d&apos;acquisition
                      </h3>
                      <p className={styles.paragraphe}>
                        {competence.autocritique.acquisition}
                      </p>
                    </div>
                  )}

                  <div>
                    <h3 className={styles.sousTitre}>
                      Mon recul et mes limites
                    </h3>
                    <p className={styles.paragraphe}>
                      {competence.autocritique.recul}
                    </p>
                  </div>
                </div>
              </section>
            </SectionAnimee>

            {/* 4. Mon évolution */}
            <SectionAnimee delai={0.05}>
              <section className={styles.section}>
                <h2 className={styles.titreSection}>
                  Mon évolution dans cette compétence
                </h2>

                <div className={styles.blocs}>
                  <div>
                    <h3 className={styles.sousTitre}>
                      Le niveau que je vise à moyen terme
                    </h3>
                    <p className={styles.paragraphe}>
                      {competence.evolution.objectif}
                    </p>
                  </div>

                  <div>
                    <h3 className={styles.sousTitre}>
                      Mes formations en cours et à venir
                    </h3>
                    <ul className={styles.listePuces}>
                      {competence.evolution.formations.map((formation, i) => (
                        <li key={i} className={styles.puceListe}>
                          <span>{formation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </SectionAnimee>

            {/* 5. Réalisations rattachées — navigation circulaire */}
            <SectionAnimee delai={0.05}>
              <section className={styles.sectionLiee}>
                <h2 className={styles.titreSection}>
                  Les réalisations rattachées à cette compétence
                </h2>
                <div className={styles.grilleRealisations}>
                  {realisationsLiees.map((projet) => (
                    <Link
                      key={projet.slug}
                      href={`/projets/${projet.slug}`}
                      className={styles.carteRealisation}
                    >
                      <div className={styles.vignette}>
                        <Image
                          src={projet.image}
                          alt={projet.titre}
                          fill
                          sizes="80px"
                        />
                      </div>
                      <div>
                        <h3 className={styles.titreRealisation}>
                          {projet.titre}
                        </h3>
                        <p
                          className={`${styles.descriptionRealisation} tronque2`}
                        >
                          {projet.description}
                        </p>
                        <span className={styles.inviteRealisation}>
                          Voir la réalisation <FaArrowRight size={10} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </SectionAnimee>
          </article>
        </div>
      </div>
    </div>
  );
}
