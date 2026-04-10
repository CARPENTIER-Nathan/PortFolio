import type { Metadata } from "next";
import SectionAnimee from "@/components/SectionAnimee";
import { competencesTechniques, competencesHumaines } from "@/data/competences";
import {
  FaUsers,
  FaComments,
  FaTasks,
  FaLightbulb,
  FaSyncAlt,
} from "react-icons/fa";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiPhp,
  SiOpenjdk,
  SiWordpress,
  SiMysql,
  SiSqlite,
  SiGit,
  SiDocker,
  SiLinux,
  SiAndroidstudio,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const metadata: Metadata = {
  title: "Compétences",
  description:
    "Mes compétences techniques et humaines. Portfolio de Nathan CARPENTIER.",
};

const carteIconesTech: Record<string, React.ReactNode> = {
  SiHtml5: <SiHtml5 size={28} />,
  SiJavascript: <SiJavascript size={28} />,
  SiTypescript: <SiTypescript size={28} />,
  SiReact: <SiReact size={28} />,
  SiNextdotjs: <SiNextdotjs size={28} />,
  SiTailwindcss: <SiTailwindcss size={28} />,
  SiNodedotjs: <SiNodedotjs size={28} />,
  SiPython: <SiPython size={28} />,
  SiDjango: <SiDjango size={28} />,
  SiPhp: <SiPhp size={28} />,
  SiOpenjdk: <SiOpenjdk size={28} />,
  SiWordpress: <SiWordpress size={28} />,
  SiMysql: <SiMysql size={28} />,
  SiSqlite: <SiSqlite size={28} />,
  SiGit: <SiGit size={28} />,
  SiDocker: <SiDocker size={28} />,
  SiLinux: <SiLinux size={28} />,
  SiAndroidstudio: <SiAndroidstudio size={28} />,
  VscVscode: <VscVscode size={28} />,
};

const carteIconesHumaines: Record<string, React.ReactNode> = {
  FaUsers: <FaUsers size={24} />,
  FaComments: <FaComments size={24} />,
  FaTasks: <FaTasks size={24} />,
  FaLightbulb: <FaLightbulb size={24} />,
  FaSyncAlt: <FaSyncAlt size={24} />,
};

export default function CompetencesPage() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimee>
          <div className="text-center mb-16">
            <h1
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Mes <span className="gradient-text">Compétences</span>
            </h1>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              Un aperçu de mes compétences techniques et humaines, développées
              au fil de ma formation et de mes expériences professionnelles.
            </p>
          </div>
        </SectionAnimee>

        {/* Compétences techniques par catégorie */}
        {competencesTechniques.map((categorie, indexCat) => (
          <div key={categorie.nom} className="mb-16">
            <SectionAnimee>
              <h2
                className="text-2xl font-bold mb-8 gradient-text"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {categorie.nom}
              </h2>
            </SectionAnimee>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categorie.competences.map((competence, index) => (
                <SectionAnimee
                  key={competence.nom}
                  delai={(indexCat * 0.05) + (index * 0.05)}
                >
                  <div className="gradient-border p-5 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center text-white shrink-0">
                        {carteIconesTech[competence.icone]}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">
                          {competence.nom}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                          {competence.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SectionAnimee>
              ))}
            </div>
          </div>
        ))}

        {/* Compétences humaines */}
        <SectionAnimee>
          <h2
            className="text-2xl font-bold mb-8 gradient-text"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Compétences Humaines
          </h2>
        </SectionAnimee>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencesHumaines.map((competence, index) => (
            <SectionAnimee key={competence.nom} delai={index * 0.05}>
              <div className="gradient-border p-5 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center text-white shrink-0">
                    {carteIconesHumaines[competence.icone]}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {competence.nom}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                      {competence.description}
                    </p>
                  </div>
                </div>
              </div>
            </SectionAnimee>
          ))}
        </div>
      </div>
    </div>
  );
}
