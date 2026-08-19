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
    <div className="section">
      <div className="conteneur">
        <SectionAnimee>
          <div className="entetePage">
            <h1 className="titrePage">
              Mes <span className="accent">Projets</span>
            </h1>
            <p className="introPage">
              Voici une sélection de projets réalisés en entreprise et en
              formation, illustrant mes compétences techniques et ma capacité à
              mener des projets de bout en bout.
            </p>
          </div>
        </SectionAnimee>

        <div className="grilleCentree">
          {projets.map((projet, index) => (
            <CarteProjets key={projet.slug} projet={projet} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
