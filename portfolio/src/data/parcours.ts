/**
 * Mon parcours — expériences, formations et certifications.
 *
 * Les entrées sont saisies dans n'importe quel ordre : `parcoursAntiChronologique`
 * les trie du plus récent au plus ancien, comme l'exige la grille d'évaluation.
 */

export type TypeEtape = "experience" | "formation" | "certification";

export interface Etape {
  slug: string;
  type: TypeEtape;

  /** "AAAA-MM" ou "AAAA-MM-JJ" selon la précision connue. */
  debut: string;
  /** Même format que `debut`, ou null si l'étape est toujours en cours. */
  fin: string | null;

  // --- 1er niveau de lecture : visible sans interaction -------------------
  /** Le poste occupé, le diplôme préparé ou l'intitulé de la certification. */
  intitule: string;
  /** La société ou l'établissement. */
  lieu: string;
  /** Précision de lieu affichée à la suite : ville, « Télétravail », « En ligne ». */
  ville?: string;
  /** Chemin du logo dans /public. Absent : les initiales du lieu sont affichées. */
  logo?: string;
  /** Site institutionnel du lieu — le logo et le nom y renvoient. */
  siteLieu?: string;

  // --- 2e niveau de lecture : déplié au clic -----------------------------
  /** La responsabilité tenue. */
  responsabilite?: string;
  /** Le statut, s'il est particulier : alternant, stagiaire. */
  statut?: string;
  /** Le résultat de la formation : diplôme obtenu, mention, en cours d'obtention. */
  resultat?: string;
  /** Le détail des missions, ou la présentation de l'établissement. Un paragraphe par entrée. */
  detail?: string[];
  /** Slugs des réalisations rattachées — navigation circulaire. */
  projets?: string[];
  /** Slugs des compétences rattachées — navigation circulaire. */
  competences?: string[];
}

export const parcours: Etape[] = [
  {
    slug: "orizon-developpeur-full-stack",
    type: "experience",
    debut: "2025-04",
    fin: null,
    intitule: "Développeur Full Stack",
    lieu: "Groupe Orizon",
    siteLieu: "https://www.groupe-orizon.fr",
    logo: "/images/logos/groupe-orizon.png",
    responsabilite:
      "Développeur en charge de l'application de GMAO, de la conception à la mise en production",
    statut: "Alternant",
    detail: [
      "J'ai rejoint le poste en avril 2025 sur un développement déjà engagé depuis août 2024 : une application de GMAO destinée à unifier la gestion de maintenance sur l'ensemble des entités du groupe, où coexistaient un logiciel éditeur d'un côté et des fiches papier de l'autre. Ma première mission n'a pas été d'ouvrir le code mais d'interroger les utilisateurs — responsables d'entité, techniciens, commerciaux — pour m'approprier leur vocabulaire métier et identifier les fonctionnalités réellement attendues.",
      "J'ai ensuite repris l'existant avec mon tuteur, puis porté l'application de WinDev vers Python et Django en novembre 2025 : une réécriture assumée, qui a rendu à l'entreprise la maîtrise complète de son code plutôt qu'une dépendance à un environnement propriétaire. J'ai construit dans l'ordre des dépendances — le socle métier (entités, clients, sites, affaires, interventions) avant les fonctions d'usage quotidien (planning, tableau de bord, saisie et rapports d'intervention).",
      "L'application est en service depuis mai 2026 dans trois entités, soit entre douze et quinze utilisateurs. Je livre désormais correctifs et évolutions au fil de l'eau, selon une démarche DevOps, et je termine la version mobile en PWA destinée aux techniciens.",
    ],
    projets: ["gmao-django"],
    competences: [
      "developpement-back-end",
      "developpement-front-end",
      "bases-de-donnees",
      "outils-et-industrialisation",
      "communication",
      "resolution-de-problemes",
    ],
  },
  {
    slug: "iscod-mastere-eil",
    type: "formation",
    debut: "2024-11",
    fin: null,
    intitule: "Mastère Expert en Ingénierie du Logiciel",
    lieu: "ISCOD",
    ville: "En ligne",
    siteLieu: "https://www.iscod.fr/",
    logo: "/images/logos/iscod.jpg",
    statut: "Alternance",
    resultat: "En cours d'obtention",
    detail: [
      // TODO : compléter par ta vision de la pédagogie pratiquée
      "Formation suivie intégralement à distance, en alternance avec mon poste de développeur. Le format impose une autonomie organisationnelle réelle : le rythme de travail se structure sans supervision quotidienne, et l'articulation entre les apports de la formation et les besoins de l'entreprise se fait par moi-même.",
      "C'est ce croisement qui en fait l'intérêt : les notions abordées en cours trouvent une application immédiate sur une application utilisée en production, et les contraintes rencontrées en entreprise orientent en retour ce que je choisis d'approfondir.",
    ],
    projets: ["gmao-django"],
    competences: ["adaptabilite", "organisation"],
  },
  {
    slug: "gatsbi-developpeur-informatique",
    type: "experience",
    debut: "2024-10-28",
    fin: "2024-12-04",
    intitule: "Développeur Informatique",
    lieu: "Gatsbi",
    ville: "Télétravail",
    // Pas de site public connu pour Gatsbi : l'entrée reste sans lien.
    // logo: "/images/logos/gatsbi.png",
    responsabilite: "Développeur sur l'application interne",
    statut: "Alternant",
    detail: [
      "Début d'alternance en télétravail, sur l'outil de développement no-code Bubble. J'y ai conçu de nouvelles pages en respectant le système de design existant de l'application, développé de nouvelles fonctionnalités et corrigé des anomalies présentes.",
      "La partie la plus formatrice a été le choix des extensions : plutôt que de retenir la première disponible, j'ai comparé les plugins candidats pour sélectionner le plus adapté au besoin. C'est le même arbitrage entre intégrer et développer que j'ai retrouvé ensuite sur mes projets.",
    ],
    competences: [
      "adaptabilite",
      "resolution-de-problemes",
      "developpement-front-end",
    ],
  },
  {
    slug: "stage-esi-amiens",
    type: "experience",
    debut: "2023-04-10",
    fin: "2023-07-21",
    intitule: "Développeur — stage de fin de licence",
    lieu: "Finances Publiques — ESI Amiens",
    ville: "Amiens",
    logo: "/images/logos/finances-publiques.png",
    siteLieu: "https://www.impots.gouv.fr",
    responsabilite: "Développeur au sein de l'équipe de développement",
    statut: "Stagiaire",
    resultat: "Stage de validation de la Licence Professionnelle",
    detail: [
      "Stage de quinze semaines au sein de l'équipe de développement de l'ESI d'Amiens, qui a validé ma licence professionnelle. J'y ai développé principalement en Java, JavaScript et SQL.",
      "Ce que ce stage m'a apporté tient moins aux technologies qu'au cadre : travailler à partir d'un cahier des charges et de normes de développement établies pour le projet, et non selon mes propres conventions. C'est là que j'ai compris ce qu'on attend concrètement d'un développeur dans une équipe constituée — produire un code qui s'intègre à celui des autres plutôt qu'un code qui fonctionne isolément.",
    ],
    competences: [
      "developpement-back-end",
      "bases-de-donnees",
      "travail-en-equipe",
    ],
  },
  {
    slug: "licence-pro-cdawm",
    type: "formation",
    debut: "2022-09",
    fin: "2023-08",
    intitule: "Licence Professionnelle CDAWM",
    lieu: "UPJV / INSSET",
    ville: "Saint-Quentin",
    siteLieu: "https://www.u-picardie.fr/",
    logo: "/images/logos/upjv.png",
    resultat: "Diplôme obtenu, mention bien",
    detail: [
      "Licence professionnelle « Conception et développement d'applications web et mobile ». C'est la formation qui a fixé mon orientation : jusque-là mon cursus mêlait informatique et réseau, elle m'a recentré sur le développement applicatif, sur ses deux versants web et mobile.",
      "C'est dans ce cadre qu'ont été menés le plugin WordPress de la plateforme de voyages et l'application Android de gestion de stock — un projet par versant, chacun sur un sujet imposé et présenté au formateur dans le rôle du client.",
    ],
    projets: ["projet-wordpress", "gestion-stock-qrcode"],
    competences: [
      "developpement-front-end",
      "developpement-mobile-android",
      "developpement-back-end",
      "bases-de-donnees",
    ],
  },
  {
    slug: "stage-sil-amiens",
    type: "experience",
    debut: "2021-05-31",
    fin: "2021-07-09",
    intitule: "Support Infrastructures Locales — stage de BTS",
    lieu: "Finances Publiques — SIL",
    ville: "Amiens",
    logo: "/images/logos/finances-publiques.png",
    siteLieu: "https://www.impots.gouv.fr",
    responsabilite: "Stagiaire au sein de l'équipe Support Infrastructures Locales",
    statut: "Stagiaire",
    detail: [
      "Stage de six semaines effectué dans le cadre de mon BTS, au sein de l'équipe Support Infrastructures Locales. J'y ai réalisé des tests de ports Ethernet à l'aide d'un injecteur PoE et découvert la gestion d'un réseau à l'échelle d'une administration.",
      "J'ai également mené un projet web en HTML, CSS et SQL, qui m'a permis de mettre en pratique ce que j'avais acquis durant ma première année de BTS. C'est ma première confrontation à un environnement professionnel, et le moment où le développement a pris le pas sur le réseau dans ce qui m'intéressait.",
    ],
    competences: [
      "developpement-front-end",
      "bases-de-donnees",
      "adaptabilite",
    ],
  },
  {
    slug: "bts-snir",
    type: "formation",
    debut: "2020-09",
    fin: "2022-06",
    intitule: "BTS Systèmes Numériques — option Informatique et Réseau",
    lieu: "Lycée Édouard Branly",
    ville: "Amiens",
    siteLieu: "https://lycee-edouard-branly-amiens.80.ac-amiens.fr",
    logo: "/images/logos/lycee-branly.png",
    resultat: "Diplôme obtenu",
    detail: [
      "BTS Systèmes Numériques, option Informatique et Réseau. Une formation à double entrée — programmation d'un côté, architecture réseau et systèmes de l'autre — qui m'a donné une compréhension de ce qui se passe sous la couche applicative : ce que traverse réellement une requête, et pourquoi une application ne se comporte pas de la même façon selon l'infrastructure qui la porte.",
    ],
    competences: ["adaptabilite"],
  },
  {
    slug: "bac-sti2d",
    type: "formation",
    debut: "2018-09",
    fin: "2020-06",
    intitule: "Baccalauréat STI2D — option SIN",
    lieu: "Lycée Édouard Branly",
    ville: "Amiens",
    siteLieu: "https://lycee-edouard-branly-amiens.80.ac-amiens.fr",
    logo: "/images/logos/lycee-branly.png",
    resultat: "Diplôme obtenu, mention assez bien",
    detail: [
      "Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable, option Systèmes d'Information et Numérique. C'est le point de départ : la première formation où j'ai écrit du code, et celle qui a fixé la direction de tout ce qui a suivi.",
    ],
  },
];

const MOIS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

/** "2025-04" → "avril 2025" ; "2021-05-31" → "31 mai 2021". */
export function formaterDate(valeur: string): string {
  const [annee, mois, jour] = valeur.split("-");
  const libelleMois = MOIS[Number(mois) - 1];
  return jour
    ? `${Number(jour)} ${libelleMois} ${annee}`
    : `${libelleMois} ${annee}`;
}

/** "avril 2025 → aujourd'hui", ou "10 avril 2023 → 21 juillet 2023". */
export function formaterPeriode(etape: Etape): string {
  const debut = formaterDate(etape.debut);
  if (etape.type === "certification") return debut;
  return etape.fin
    ? `${debut} → ${formaterDate(etape.fin)}`
    : `${debut} → aujourd'hui`;
}

/** L'année à afficher sur l'axe. */
export function anneeDe(etape: Etape): string {
  return etape.debut.slice(0, 4);
}

/**
 * Anti-chronologique : la plus récente d'abord. À date de début égale, une
 * étape en cours passe devant une étape terminée.
 */
export const parcoursAntiChronologique = [...parcours].sort((a, b) => {
  if (a.debut !== b.debut) return b.debut.localeCompare(a.debut);
  if (a.fin === b.fin) return 0;
  return a.fin === null ? -1 : 1;
});

export interface GroupeAnnee {
  annee: string;
  etapes: Etape[];
}

/**
 * Les étapes regroupées sous leur année de début, les années les plus récentes
 * d'abord. Une étape à cheval sur plusieurs années n'apparaît qu'une fois, sous
 * celle où elle a commencé : la période complète reste lisible sur l'entrée.
 *
 * `parcoursAntiChronologique` étant déjà trié, l'ordre d'insertion de la Map
 * donne directement les années décroissantes.
 */
export const parcoursParAnnee: GroupeAnnee[] = (() => {
  const groupes = new Map<string, Etape[]>();

  for (const etape of parcoursAntiChronologique) {
    const annee = anneeDe(etape);
    const existant = groupes.get(annee);
    if (existant) existant.push(etape);
    else groupes.set(annee, [etape]);
  }

  return [...groupes].map(([annee, etapes]) => ({ annee, etapes }));
})();

export const experiences = parcoursAntiChronologique.filter(
  (etape) => etape.type === "experience"
);

export const formations = parcoursAntiChronologique.filter(
  (etape) => etape.type === "formation"
);
