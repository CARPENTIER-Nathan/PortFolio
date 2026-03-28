import type { Metadata } from "next";
import CarteProjets from "@/components/CarteProjets";
import SectionAnimee from "@/components/SectionAnimee";
import { projets } from "@/data/projets";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Découvrez mes projets de développement web et logiciel. Portfolio de Nathan CARPENTIER.",
};

export default function ProjetsPage() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimee>
          <div className="text-center mb-16">
            <h1
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Mes <span className="gradient-text">Projets</span>
            </h1>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              Voici une sélection de projets réalisés en entreprise et en
              formation, illustrant mes compétences techniques et ma capacité à
              mener des projets de bout en bout.
            </p>
          </div>
        </SectionAnimee>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map((projet, index) => (
            <CarteProjets key={projet.slug} projet={projet} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
