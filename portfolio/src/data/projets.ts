export interface Projet {
  slug: string;
  titre: string;
  description: string;
  contexte: string;
  poste: string;
  objectifs: string[];
  technologies: string[];
  defis: string;
  solutions: string;
  image: string;
  captures?: string[];
}

export const projets: Projet[] = [
  {
    slug: "projet-1",
    titre: "Projet Exemple 1",
    description:
      "Description courte du premier projet. Remplacez par votre propre description.",
    contexte:
      "Ce projet a été réalisé dans le cadre de ma formation / en entreprise. Il vise à résoudre le problème de...",
    poste: "Développeur Full Stack",
    objectifs: [
      "Objectif 1 à définir",
      "Objectif 2 à définir",
      "Objectif 3 à définir",
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    defis:
      "Décrivez les défis techniques rencontrés lors de ce projet...",
    solutions:
      "Décrivez les solutions apportées pour surmonter ces défis...",
    image: "/images/project-placeholder.svg",
  },
  {
    slug: "projet-2",
    titre: "Projet Exemple 2",
    description:
      "Description courte du deuxième projet. Remplacez par votre propre description.",
    contexte:
      "Ce projet a été réalisé dans le cadre de ma formation / en entreprise. Il vise à résoudre le problème de...",
    poste: "Développeur Frontend",
    objectifs: [
      "Objectif 1 à définir",
      "Objectif 2 à définir",
      "Objectif 3 à définir",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
    defis:
      "Décrivez les défis techniques rencontrés lors de ce projet...",
    solutions:
      "Décrivez les solutions apportées pour surmonter ces défis...",
    image: "/images/project-placeholder.svg",
  },
  {
    slug: "projet-3",
    titre: "Projet Exemple 3",
    description:
      "Description courte du troisième projet. Remplacez par votre propre description.",
    contexte:
      "Ce projet a été réalisé dans le cadre de ma formation / en entreprise. Il vise à résoudre le problème de...",
    poste: "Développeur Backend",
    objectifs: [
      "Objectif 1 à définir",
      "Objectif 2 à définir",
      "Objectif 3 à définir",
    ],
    technologies: ["Python", "Django", "Docker", "AWS"],
    defis:
      "Décrivez les défis techniques rencontrés lors de ce projet...",
    solutions:
      "Décrivez les solutions apportées pour surmonter ces défis...",
    image: "/images/project-placeholder.svg",
  },
];
