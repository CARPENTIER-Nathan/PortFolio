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
import styles from "./contact.module.css";

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
    <div className="section">
      <div className="conteneur conteneurEtroit">
        <SectionAnimee>
          <div className="entetePage">
            <h1 className="titrePage">
              Me <span className="accent">Contacter</span>
            </h1>
            <p className="introPage">
              Vous avez une question ou souhaitez collaborer ? N&apos;hésitez
              pas à me contacter via mes coordonnées ci-dessous.
            </p>
          </div>
        </SectionAnimee>

        <SectionAnimee>
          <div className={styles.liste}>
            {infosContact.map((info) => (
              <div key={info.label} className={styles.fiche}>
                <span className="pastilleIcone">{info.icone}</span>
                <div>
                  <p className={styles.libelle}>{info.label}</p>
                  {info.lien ? (
                    <a href={info.lien} className={styles.valeur}>
                      {info.valeur}
                    </a>
                  ) : (
                    <p className={styles.valeur}>{info.valeur}</p>
                  )}
                </div>
              </div>
            ))}

            <div className={styles.blocReseaux}>
              <p className={styles.libelle}>Réseaux sociaux</p>
              <div className={styles.reseaux}>
                {liensReseaux.map((reseau) => (
                  <a
                    key={reseau.label}
                    href={reseau.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.lienReseau}
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
