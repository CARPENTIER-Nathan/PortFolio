"use client";

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
import type { Competence } from "@/data/competences";

const carteIcones: Record<string, React.ReactNode> = {
  SiHtml5: <SiHtml5 size={16} />,
  SiJavascript: <SiJavascript size={16} />,
  SiTypescript: <SiTypescript size={16} />,
  SiReact: <SiReact size={16} />,
  SiNextdotjs: <SiNextdotjs size={16} />,
  SiTailwindcss: <SiTailwindcss size={16} />,
  SiNodedotjs: <SiNodedotjs size={16} />,
  SiPython: <SiPython size={16} />,
  SiDjango: <SiDjango size={16} />,
  SiPhp: <SiPhp size={16} />,
  SiOpenjdk: <SiOpenjdk size={16} />,
  SiWordpress: <SiWordpress size={16} />,
  SiMysql: <SiMysql size={16} />,
  SiSqlite: <SiSqlite size={16} />,
  SiGit: <SiGit size={16} />,
  SiDocker: <SiDocker size={16} />,
  SiLinux: <SiLinux size={16} />,
  SiAndroidstudio: <SiAndroidstudio size={16} />,
  VscVscode: <VscVscode size={16} />,
};

export default function PuceCompetence({ competence }: { competence: Competence }) {
  return (
    <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-violet-200 transition-all duration-200">
      <span className="text-violet-600">{carteIcones[competence.icone]}</span>
      <span className="text-sm font-medium text-gray-700">{competence.nom}</span>
    </div>
  );
}
