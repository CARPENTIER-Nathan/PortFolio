import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import SectionAnimee from "@/components/SectionAnimee";
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

            <section>
              <h2 className={styles.titreSection}>Défis techniques</h2>
              <p className={styles.paragraphe}>{projet.defis}</p>
            </section>

            <section>
              <h2 className={styles.titreSection}>Solutions apportées</h2>
              <p className={styles.paragraphe}>{projet.solutions}</p>
            </section>

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
      </div>
    </div>
  );
}
