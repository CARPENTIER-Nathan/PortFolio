import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import SectionAnimee from "@/components/SectionAnimee";
import { projets } from "@/data/projets";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projets.map((projet) => ({ slug: projet.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimee>
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium mb-8"
          >
            <FaArrowLeft /> Retour aux projets
          </Link>
        </SectionAnimee>

        <SectionAnimee>
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-8">
            <Image
              src={projet.image}
              alt={projet.titre}
              fill
              className="object-cover"
            />
          </div>
        </SectionAnimee>

        <SectionAnimee>
          <h1
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {projet.titre}
          </h1>
          <p className="mt-2 text-lg text-violet-600 font-medium">
            {projet.poste}
          </p>
        </SectionAnimee>

        <SectionAnimee delai={0.1}>
          <div className="mt-8 space-y-8">
            {/* Contexte */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Contexte du projet
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {projet.contexte}
              </p>
            </div>

            {/* Objectifs */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Objectifs
              </h2>
              <ul className="space-y-2">
                {projet.objectifs.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 shrink-0" />
                    <span className="text-gray-600">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Défis techniques */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Défis techniques
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {projet.defis}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Solutions apportées
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {projet.solutions}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Technologies utilisées
              </h2>
              <div className="flex flex-wrap gap-3">
                {projet.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-50 to-pink-50 text-violet-700 font-medium border border-violet-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SectionAnimee>
      </div>
    </div>
  );
}
