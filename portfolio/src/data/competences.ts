export interface Competence {
  nom: string;
  description: string;
  icone: string;
}

export interface CategorieCompetence {
  nom: string;
  competences: Competence[];
}

export const competencesTechniques: CategorieCompetence[] = [
  {
    nom: "Frontend",
    competences: [
      {
        nom: "HTML5 / CSS3",
        description: "Structure et mise en forme des pages web, sémantique, accessibilité et animations CSS.",
        icone: "SiHtml5",
      },
      {
        nom: "JavaScript",
        description: "Langage de programmation dynamique pour créer des interfaces interactives côté client.",
        icone: "SiJavascript",
      },
      {
        nom: "TypeScript",
        description: "Sur-ensemble typé de JavaScript, apportant robustesse et maintenabilité au code.",
        icone: "SiTypescript",
      },
      {
        nom: "React",
        description: "Bibliothèque JavaScript pour construire des interfaces utilisateur composables et réactives.",
        icone: "SiReact",
      },
      {
        nom: "Next.js",
        description: "Framework React avec rendu côté serveur, routage et optimisation des performances.",
        icone: "SiNextdotjs",
      },
      {
        nom: "Tailwind CSS",
        description: "Framework CSS utilitaire pour un développement rapide et un design cohérent.",
        icone: "SiTailwindcss",
      },
    ],
  },
  {
    nom: "Backend",
    competences: [
      {
        nom: "Node.js",
        description: "Environnement d'exécution JavaScript côté serveur pour des applications performantes.",
        icone: "SiNodedotjs",
      },
      {
        nom: "Python",
        description: "Langage polyvalent utilisé pour le scripting, l'automatisation et le développement web.",
        icone: "SiPython",
      },
      {
        nom: "Java",
        description: "Langage orienté objet robuste pour des applications d'entreprise et des systèmes distribués.",
        icone: "SiOpenjdk",
      },
      {
        nom: "SQL",
        description: "Langage de requêtes pour la gestion et l'interrogation de bases de données relationnelles.",
        icone: "SiPostgresql",
      },
    ],
  },
  {
    nom: "DevOps & Outils",
    competences: [
      {
        nom: "Git",
        description: "Système de contrôle de version distribué pour le suivi et la collaboration sur le code.",
        icone: "SiGit",
      },
      {
        nom: "Docker",
        description: "Plateforme de conteneurisation pour déployer des applications de manière isolée et reproductible.",
        icone: "SiDocker",
      },
      {
        nom: "Linux",
        description: "Système d'exploitation open-source, maîtrise de l'administration système et du terminal.",
        icone: "SiLinux",
      },
      {
        nom: "VS Code",
        description: "Éditeur de code extensible avec débogage intégré, IntelliSense et support multi-langages.",
        icone: "VscVscode",
      },
    ],
  },
];

export const competencesHumaines = [
  {
    nom: "Travail d'équipe",
    description:
      "Capacité à collaborer efficacement avec les membres d'une équipe pour atteindre les objectifs communs.",
    icone: "FaUsers",
  },
  {
    nom: "Communication",
    description:
      "Aptitude à transmettre des idées clairement, tant à l'oral qu'à l'écrit, auprès de publics techniques et non-techniques.",
    icone: "FaComments",
  },
  {
    nom: "Organisation",
    description:
      "Capacité à planifier et prioriser les tâches de manière réfléchie et ordonnée pour respecter les délais.",
    icone: "FaTasks",
  },
  {
    nom: "Résolution de problèmes",
    description:
      "Aptitude à analyser des situations complexes et à trouver des solutions adaptées et efficaces.",
    icone: "FaLightbulb",
  },
  {
    nom: "Adaptabilité",
    description:
      "Capacité à s'adapter rapidement aux nouvelles technologies, méthodes de travail et environnements.",
    icone: "FaSyncAlt",
  },
];
