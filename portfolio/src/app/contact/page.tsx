import type { Metadata } from "next";
import SectionAnimee from "@/components/SectionAnimee";
import { personnel } from "@/data/personnel";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Nathan CARPENTIER pour vos projets de développement web et logiciel.",
};

const infosContact = [
  {
    icone: <FaEnvelope size={20} />,
    label: "Email",
    valeur: personnel.email,
    lien: `mailto:${personnel.email}`,
  },
  {
    icone: <FaPhone size={20} />,
    label: "Téléphone",
    valeur: personnel.telephone,
    lien: `tel:${personnel.telephone}`,
  },
  {
    icone: <FaMapMarkerAlt size={20} />,
    label: "Localisation",
    valeur: personnel.localisation,
    lien: null,
  },
];

const liensReseaux = [
  {
    icone: <FaLinkedin size={24} />,
    label: "LinkedIn",
    lien: personnel.linkedin,
  },
  {
    icone: <FaGithub size={24} />,
    label: "GitHub",
    lien: personnel.github,
  },
];

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimee>
          <div className="text-center mb-16">
            <h1
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Me <span className="gradient-text">Contacter</span>
            </h1>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              Vous avez une question ou souhaitez collaborer ? N&apos;hésitez
              pas à me contacter via mes coordonnées ci-dessous.
            </p>
          </div>
        </SectionAnimee>

        <SectionAnimee>
          <div className="space-y-6">
            {infosContact.map((info) => (
              <div key={info.label} className="gradient-border p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center text-white shrink-0">
                    {info.icone}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    {info.lien ? (
                      <a
                        href={info.lien}
                        className="text-lg text-gray-900 font-medium hover:text-violet-600 transition-colors"
                      >
                        {info.valeur}
                      </a>
                    ) : (
                      <p className="text-lg text-gray-900 font-medium">
                        {info.valeur}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="gradient-border p-6">
              <p className="text-sm text-gray-400 mb-4">Réseaux sociaux</p>
              <div className="flex gap-4">
                {liensReseaux.map((reseau) => (
                  <a
                    key={reseau.label}
                    href={reseau.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5 transition-all duration-200"
                    aria-label={reseau.label}
                  >
                    {reseau.icone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </SectionAnimee>
      </div>
    </div>
  );
}
