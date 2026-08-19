import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { personnel } from "@/data/personnel";
import styles from "./PiedDePage.module.css";

const liensNavigation = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/parcours", label: "Parcours" },
  { href: "/projets", label: "Projets" },
  { href: "/competences", label: "Compétences" },
  { href: "/contact", label: "Contact" },
];

export default function PiedDePage() {
  return (
    <footer className={styles.pied}>
      <div className="conteneur">
        <div className={styles.colonnes}>

          <div>
            <h3 className={styles.marque}>
              {personnel.prenom} {personnel.nom}
            </h3>
            <p className={styles.titrePoste}>{personnel.titre}</p>
          </div>

          <div>
            <h4 className={styles.titreColonne}>Navigation</h4>
            <ul className={styles.liste}>
              {liensNavigation.map((lien) => (
                <li key={lien.href}>
                  <Link href={lien.href} className={styles.lien}>
                    {lien.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.titreColonne}>Contact</h4>
            <div className={styles.liste}>
              <a href={`mailto:${personnel.email}`} className={styles.lien}>
                <FaEnvelope /> {personnel.email}
              </a>
              <a href={`tel:${personnel.telephone}`} className={styles.lien}>
                <FaPhone /> {personnel.telephone}
              </a>
            </div>
            <div className={styles.reseaux}>
              <a
                href={personnel.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.lien}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={personnel.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.lien}
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.mentions}>
          &copy; {new Date().getFullYear()} {personnel.prenom}{" "}
          {personnel.nom}. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
