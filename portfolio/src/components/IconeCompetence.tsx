import { SiReact, SiDjango, SiAndroid, SiDocker } from "react-icons/si";
import {
  FaDatabase,
  FaLightbulb,
  FaTasks,
  FaSyncAlt,
  FaUsers,
  FaComments,
} from "react-icons/fa";
import type { IconType } from "react-icons";

const carteIcones: Record<string, IconType> = {
  SiReact,
  SiDjango,
  SiAndroid,
  SiDocker,
  FaDatabase,
  FaLightbulb,
  FaTasks,
  FaSyncAlt,
  FaUsers,
  FaComments,
};

export default function IconeCompetence({
  nom,
  taille = 24,
}: {
  nom: string;
  taille?: number;
}) {
  const Icone = carteIcones[nom];
  if (!Icone) return null;
  return <Icone size={taille} />;
}
