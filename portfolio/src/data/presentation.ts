export interface Valeur {
  titre: string;
  texte: string;
}

export interface Qualite {
  titre: string;
  texte: string;
  competenceSlug: string;
}

export interface CentreInteret {
  titre: string;
  texte: string;
  icone: string;
}

export interface Presentation {
  titreAccroche: string;
  accroche: string[];
  valeurs: Valeur[];
  projet: {
    intro: string;
    courtTerme: string;
    professionnel: string;
    personnel: string;
  };
  qualites: Qualite[];
  interets: CentreInteret[];
}

export const presentation: Presentation = {
  titreAccroche: "Présentation générale",

  accroche: [
    "Un projet confortable s'exécute sans surprise ; l'intérêt commence là où le projet résiste. Une contrainte inhabituelle, un domaine métier inconnu, un problème sans solution évidente : ce sont ces projets-là qui donnent envie de s'y mettre, bien plus que ceux dont on connaît déjà l'issue avant de commencer.",
    "Aucun de mes projets n'a commencé avec toutes les connaissances nécessaires. À chaque fois, il a fallu apprendre en cours de route : un langage nouveau, un environnement inconnu, une notion à découvrir. C'est l'une des parties les plus intéressantes de ce métier : on n'y a jamais fini d'apprendre.",
    "Une autre chose rend ce métier passionnant : la flexibilité dans la manière de résoudre un problème. Les technologies disponibles sont si nombreuses qu'un même besoin admet toujours plusieurs solutions valables. L'enjeu n'est donc pas de trouver une solution, mais de choisir la bonne, celle qui tient compte du contexte, du temps disponible et de ceux qui reprendront le projet ensuite."
  ],

  valeurs: [
    {
      titre: "L'écoute",
      texte:
        "Avant de commencer, il faut **savoir et comprendre le besoin du client**, sous peine de livrer une solution techniquement juste mais à côté de la demande. **Un projet lancé tête baissée, sans avoir écouté, va droit dans le mur.** La GMAO m'a placé exactement dans cette situation : le développement était déjà engagé et je devais le reprendre. **Avant même d'ouvrir le code, j'ai étudié le besoin et interrogé les principaux concernés.** M'approprier leur vocabulaire était la condition pour identifier les fonctionnalités réellement nécessaires.",
    },
    {
      titre: "La rigueur",
      texte:
        "Ce qui coûte le plus cher dans un projet n'est pas le travail difficile, c'est le travail refait. **La rigueur, c'est accepter d'aller moins vite au début** pour ne pas tout reprendre ensuite. Sur la plateforme de voyages, WordPress invitait à tout empiler dans un seul fichier. **J'ai préféré découper le code en parties ayant chacune un rôle précis, et placer les règles d'accès côté serveur plutôt que dans l'affichage.** Le démarrage a été plus lent, mais chaque modification s'est ensuite trouvée là où on l'attendait.",
    },
    {
      titre: "L'autonomie",
      texte:
        "L'autonomie n'est pas l'idée de s'isoler, c'est **la capacité à pouvoir résoudre un blocage par soi-même**. Chercher par soi-même, puis isoler un problème pour poser une question précise plutôt qu'une question vague. Mes projets ont été menés de bout en bout, du modèle de données jusqu'à la livraison. **Cette autonomie est faite pour servir un collectif** qui permet d'arriver dans une équipe sans en ralentir le rythme.",
    },
    {
      titre: "La curiosité",
      texte:
        "Utiliser un outil sans comprendre ce qu'il fait revient à s'interdire de le réparer le jour où il casse. **Je cherche donc à ouvrir ce que j'emploie** plutôt qu'à m'en tenir au mode d'emploi. Ce portfolio en garde la trace : ses styles sont écrits à la main, sans framework. **Comprendre ce que produit réellement une feuille de style vaut mieux, à ce stade, que savoir invoquer des classes toutes faites.** La plupart des difficultés que j'ai eu à résoudre venaient d'une compréhension incomplète de l'outil, pas d'un manque de compétence.",
    },
    {
      titre: "La créativité",
      texte:
        "En ingénierie, la créativité ne tient pas à l'originalité d'une solution mais à **sa capacité à tenir dans les contraintes réelles**. L'application de gestion de stock était destinée à un entrepôt : debout, souvent une seule main disponible. **J'ai donc fait du scan de QR Code le point d'entrée de l'application** plutôt qu'une fonction enfouie dans un menu. La solution n'a rien de spectaculaire : elle vient d'avoir regardé le problème depuis la position de l'utilisateur.",
    },
  ],

  projet: {
    intro:
      "Mon projet professionnel est de devenir **développeur full stack** : intervenir sur toute la chaîne, du modèle de données jusqu'à l'interface, plutôt que sur un seul maillon. Chacun de mes projets me l'a confirmé : ce qui m'intéresse se situe à la jonction du besoin et de sa traduction technique. Je veux exercer ce métier sur **des projets variés et des technologies actuelles**, chacun posant un problème qui lui est propre.",
    courtTerme:
      "**Valider mon Mastère Expert en Ingénierie du Logiciel**, que je prépare en alternance, et continuer à faire évoluer la GMAO qui m'est confiée. **Travailler sur une application utilisée en conditions réelles** m'apporte ce qu'aucun projet d'école ne peut simuler : des utilisateurs, un existant à reprendre et des contraintes de production.",
    professionnel:
      "Je veux tenir un rôle de **développeur full stack** sur une pile que je maîtrise en profondeur. Mon objectif est de passer progressivement **de l'implémentation à la conception**, définir une architecture, arbitrer des priorités techniques et défendre ces choix devant des interlocuteurs métier. Je vise pour cela une entreprise qui **investit dans ses outils** et porte des **projets ambitieux**, où ces décisions se prennent réellement.",
    personnel:
      "La Picardie est ma région d'origine et j'aimerais y revenir : je vis actuellement dans le Grand Est pour mon alternance, et **un poste au moins partiellement en télétravail est ce qui rendrait ce retour possible**. Cela dit, je bougerais à nouveau si le projet le vaut. À cinq ans, je veux **construire mon propre flipper** : un projet qui mêle programmation et électronique, ce second domaine m'étant encore inconnu. J'y tiens autant qu'à **un rythme de travail tenable dans la durée**. Garder du temps pour soi n'est pas un confort, c'est ce qui permet de ne pas s'arrêter en chemin.",
  },

  qualites: [
    {
      titre: "L'adaptabilité",
      texte:
        "Ce qui se transpose d'un environnement à l'autre, ce ne sont pas les syntaxes mais **les structures**. La logique CRUD écrite en PHP m'a préparé aux modèles Django. Chaque nouvel écosystème m'a demandé moins de temps que le précédent.",
      competenceSlug: "adaptabilite",
    },
    {
      titre: "La méthode face aux problèmes",
      texte:
        "Beaucoup de problèmes ne sont pas ceux qu'on croit traiter au départ. **Je décompose avant d'agir et je reformule jusqu'à être sûr.** Sur l'application de stock, cela m'a évité de redévelopper une brique que je pouvais simplement intégrer.",
      competenceSlug: "resolution-de-problemes",
    },
    {
      titre: "L'organisation",
      texte:
        "Quand plusieurs projets avancent en même temps, le vrai coût n'est pas la charge mais **la dispersion**. Je traite donc chaque sujet par blocs, en suivant les dépendances plutôt que l'urgence ressentie. Je tiens les délais que j'annonce.",
      competenceSlug: "organisation",
    },
    {
      titre: "La clarté dans l'échange",
      texte:
        "Là où l'écoute sert à comprendre, **la clarté sert à rendre compte**. Expliquer une contrainte technique à quelqu'un qui doit décider sans être du domaine fait partie du travail. Ma règle : l'enjeu et le résultat d'abord, le détail seulement si on le demande.",
      competenceSlug: "communication",
    },
  ],

  interets: [
    {
      titre: "Les jeux vidéo",
      texte:
        "Ce qui me retient dans un jeu est souvent sa mécanique : comprendre pourquoi un système de règles fonctionne, où il tient son équilibre et où il finit par casser. **C'est le même réflexe que devant une application**, où l'on cherche aussi ce qui rend un ensemble cohérent.",
      icone: "FaGamepad",
    },
    {
      titre: "L'électronique",
      texte:
        "C'est **le domaine que je connais le moins et celui que je veux explorer**. Construire mon propre flipper m'obligera à sortir du logiciel pour toucher au matériel. Comprendre ce qui se passe sous la couche que je manipule d'habitude m'intéresse autant que le résultat final.",
      icone: "FaMicrochip",
    },
    {
      titre: "Les nouvelles technologies",
      texte:
        "Suivre ce qui sort ne sert pas à tout adopter, mais à **savoir ce qui existe le jour où un projet en a besoin**. Je m'y intéresse en curieux plutôt qu'en spécialiste : lire, essayer sur un petit projet, et retenir dans quel cas l'outil serait pertinent.",
      icone: "FaLaptopCode",
    },
    {
      titre: "Le Japon",
      texte:
        "C'est le voyage que je veux faire. Ce qui m'attire est autant la culture que le rapport particulier du pays à la technique, où **l'artisanat traditionnel et l'industrie de pointe cohabitent sans se contredire**. Découvrir un endroit dont on ne partage ni la langue ni les codes est un dépaysement que je recherche.",
      icone: "GiJapan",
    },
  ],
};
