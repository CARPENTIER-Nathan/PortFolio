import Accueil from "@/components/Accueil";
import SectionAnimee from "@/components/SectionAnimee";
import CarteProjets from "@/components/CarteProjets";
import { projets } from "@/data/projets";
import { competencesTechniques } from "@/data/competences";
import PuceCompetence from "@/components/PuceCompetence";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Accueil />

      {/* Projets en vedette */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionAnimee>
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Mes <span className="gradient-text">Projets</span>
              </h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Découvrez une sélection de mes réalisations les plus
                significatives
              </p>
            </div>
          </SectionAnimee>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projets.slice(0, 3).map((projet, index) => (
              <CarteProjets key={projet.slug} projet={projet} index={index} />
            ))}
          </div>

          <SectionAnimee className="text-center mt-12">
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors"
            >
              Voir tous les projets <FaArrowRight />
            </Link>
          </SectionAnimee>
        </div>
      </section>

      {/* Aperçu des compétences */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionAnimee>
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Mes <span className="gradient-text">Compétences</span>
              </h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Technologies et outils que je maîtrise
              </p>
            </div>
          </SectionAnimee>

          <SectionAnimee>
            <div className="flex flex-wrap justify-center gap-4">
              {competencesTechniques.flatMap((cat) =>
                cat.competences.map((competence) => (
                  <PuceCompetence key={competence.nom} competence={competence} />
                ))
              )}
            </div>
          </SectionAnimee>

          <SectionAnimee className="text-center mt-12">
            <Link
              href="/competences"
              className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors"
            >
              Voir toutes mes compétences <FaArrowRight />
            </Link>
          </SectionAnimee>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="py-20 bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionAnimee>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Travaillons ensemble
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
              Vous avez un projet en tête ? N&apos;hésitez pas à me contacter
              pour en discuter.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Me contacter <FaArrowRight />
            </Link>
          </SectionAnimee>
        </div>
      </section>
    </>
  );
}
