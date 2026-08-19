/** Un acteur du projet et la nature de mes échanges avec lui. */
export interface Acteur {
  role: string;
  interaction: string;
}

/** Les résultats du projet, distingués selon le bénéficiaire. */
export interface Resultats {
  pourMoi: string;
  pourEntreprise: string;
}

/** Les lendemains du projet, à trois horizons. */
export interface Lendemains {
  immediat: string;
  aDistance: string;
  aujourdhui: string;
}

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

  // Les 4 notions restantes de la grille. Optionnelles : tant qu'un champ est
  // vide, la section correspondante ne s'affiche pas sur la page.
  /** L'enjeu et les risques du projet. */
  enjeux?: string;
  /** Les étapes, dans l'ordre : ce que j'ai fait. */
  etapes?: string[];
  /** Les acteurs et mes interactions avec eux. */
  acteurs?: Acteur[];
  /** Les résultats, pour moi et pour l'entreprise. */
  resultats?: Resultats;
  /** Les lendemains : futur immédiat, à distance, aujourd'hui. */
  lendemains?: Lendemains;
  /** Mon regard critique sur le projet. */
  regardCritique?: string;
}

// Classées en ordre anti-chronologique, comme la frise du parcours.
// La page d'accueil comme la page Projets les affichent toutes.
export const projets: Projet[] = [
  {
    slug: "gmao-django",
    titre: "GMAO - Gestion de Maintenance Assistée par Ordinateur",
    description:
      "Application web de GMAO inspirée de Solitech, développée avec Django, permettant la gestion complète de la maintenance des équipements industriels.",
    contexte:
      "Cette application est développée en interne pour couvrir la gestion de maintenance assistée par ordinateur : planifier, suivre et documenter la maintenance des équipements et des installations sur l'ensemble des entités de l'entreprise. Le développement était engagé depuis août 2024, sous WinDev, lorsque j'ai rejoint le poste en avril 2025 dans le cadre de mon alternance. Ma première tâche n'a pas été d'ouvrir le code mais de comprendre le besoin auprès des personnes concernées. L'application a ensuite été portée sur Python et Django en novembre 2025, puis mise en service en mai 2026.",
    poste: "Développeur Full Stack",
    objectifs: [
      "Développer une application web GMAO complète avec le framework Django",
      "Implémenter la gestion des équipements et des fiches techniques",
      "Mettre en place un système de planification des interventions de maintenance (préventive et corrective)",
      "Créer un tableau de bord avec indicateurs de suivi et statistiques",
      "Gérer les ordres de travail, les techniciens et l'historique des interventions",
    ],
    technologies: ["Python", "Django", "Postgres", "HTML", "CSS", "JavaScript"],
    defis:
      "La difficulté n'a pas été de partir d'une page blanche, mais de reprendre un développement engagé par quelqu'un d'autre, dans un environnement que je ne connaissais pas, puis d'assumer un changement de pile sans perdre le périmètre déjà couvert. S'y ajoute une exigence de niveau : pour les entités déjà équipées de Soli.tech, l'application doit atteindre le fonctionnement d'un produit éditeur avant de pouvoir le remplacer. Enfin, la modélisation relationnelle — entités, clients, sites, affaires, interventions, techniciens, pièces détachées — devait rester cohérente à mesure que de nouvelles fonctionnalités s'y greffaient.",
    solutions:
      "La décision structurante a été de porter l'application de WinDev vers Python et Django : la question s'est posée en septembre 2025, le changement a été fait en novembre. Il a coûté une réécriture, mais il a donné à l'entreprise la maîtrise complète de son code plutôt que la dépendance à un environnement propriétaire. J'ai ensuite construit dans l'ordre des dépendances : le socle métier d'abord, les fonctions d'usage quotidien ensuite. Le système d'authentification de Django gère les rôles (administrateur, technicien, responsable) et le tableau de bord s'appuie sur l'ORM pour les indicateurs de suivi.",
    // À compléter
    enjeux:
      "L'enjeu dépassait la simple informatisation : il s'agissait d'unifier une organisation qui fonctionnait à deux vitesses. Les entités du Nord-Est et d'Île-de-France géraient leur maintenance avec Soli.tech, toutes les autres avec des fiches papier — sans historique exploitable, avec des oublis fréquents et un manque d'information sur les sites, les affaires et les interventions. Développer notre propre application répondait à deux objectifs : retrouver le mode de fonctionnement de Soli.tech sans ses défauts, et garder la main sur le code plutôt que de dépendre d'un éditeur. Le risque principal n'était pas technique mais humain : une partie des utilisateurs n'avaient jamais quitté le papier et leur métier n'est pas l'informatique. Une application juste mais inutilisable sur le terrain n'aurait rien remplacé du tout.",
    etapes: [
      "Comprendre le besoin avant d'ouvrir le code : j'ai interrogé les personnes concernées pour m'approprier leur vocabulaire métier et identifier les fonctionnalités réellement attendues, plutôt que celles que je supposais utiles.",
      "Reprendre l'existant : mon tuteur avait engagé le développement sous WinDev depuis août 2024. J'ai repris l'application avec son accompagnement, pour en comprendre le fonctionnement et le périmètre déjà couvert avant d'y intervenir.",
      "Porter l'application sur une pile plus moderne. La question s'est posée en septembre 2025, le passage à Python et Django a été fait en novembre 2025 — un choix qui a coûté une réécriture, mais qui a levé la dépendance à un environnement propriétaire.",
      "Modéliser la base de données autour des entités métier et de leurs relations. Mon tuteur avait posé les premiers modèles ; je les ai affinés au fur et à mesure des fonctionnalités ajoutées.",
      "Construire d'abord le socle métier, dans l'ordre de dépendance : les entités, puis les clients, les sites, les affaires et les interventions. C'est la hiérarchie sur laquelle repose tout le reste de l'application.",
      "Développer ensuite les fonctions d'usage quotidien : le planning, le tableau de bord, la saisie des interventions et les rapports d'intervention.",
    ],
    acteurs: [
      {
        role: "Mon tuteur",
        interaction:
          "Il avait engagé l'application sous WinDev et m'a accompagné pour que j'en comprenne le fonctionnement et le code avant d'y toucher. C'est avec lui qu'a été décidé le passage à une pile plus moderne.",
      },
      {
        role: "Les utilisateurs de Soli.tech",
        interaction:
          "Je les ai interrogés pour retrouver les fonctionnements auxquels ils sont habitués, afin que leur future bascule vers notre application ne soit pas vécue comme une rupture.",
      },
      {
        role: "Les techniciens",
        interaction:
          "Ce sont eux qui utiliseront la version mobile. Je les consulte pour la concevoir à partir de leur usage sur le terrain, et non comme une simple version réduite de l'application web.",
      },
      {
        role: "Les commerciaux",
        interaction:
          "J'ai cherché à savoir quelles informations ils ont besoin de trouver rapidement, pour les mettre en évidence dans l'interface plutôt que de les enfouir dans des écrans secondaires.",
      },
      {
        role: "Les responsables des entités",
        interaction:
          "Depuis la mise en service, ce sont eux qui remontent les demandes de nouvelles fonctionnalités et les anomalies rencontrées en usage réel.",
      },
    ],
    resultats: {
      pourMoi:
        "L'école m'a appris que l'expérience utilisateur compte et qu'il faut chercher à la comprendre. L'entreprise m'a appris qu'elle n'est pas la même pour tout le monde : entre un technicien qui saisit une intervention sur le terrain, un commercial qui doit trouver une information en quelques secondes et un responsable d'entité qui suit son activité, il n'y a pas un utilisateur mais plusieurs, avec des attentes qui ne se recouvrent pas. Concevoir pour tous, ce n'est pas viser le plus petit dénominateur commun, c'est adapter l'application à chacun de ces usages. C'est une leçon qu'aucun projet d'école ne pouvait me donner.",
      pourEntreprise:
        "Trois entités — Ouest, Sud et Nord — utilisent l'application depuis mai 2026, soit entre douze et quinze personnes. Elles sont passées de la fiche papier à un historique d'interventions réellement consultable, avec l'information sur les sites, les affaires et les interventions réunie au même endroit. L'entreprise dispose par ailleurs d'un outil dont elle maîtrise le code, là où elle dépendait jusqu'ici d'une solution éditeur.",
    },
    lendemains: {
      immediat:
        "L'application a été mise en service en mai 2026 dans les entités qui travaillaient encore sur papier. Les retours des responsables d'entités ont suivi immédiatement : demandes de nouvelles fonctionnalités et anomalies rencontrées en conditions réelles. Nous avons adopté une démarche DevOps pour absorber ce flux, en livrant les correctifs et les évolutions au fil de l'eau plutôt que par gros lots espacés.",
      aDistance:
        "La bascule des entités du Nord-Est et d'Île-de-France est prévue pour septembre 2026, une fois comblé l'écart avec Soli.tech. En parallèle, je termine la version mobile en PWA destinée aux techniciens.",
      aujourdhui:
        "L'application est en service dans les entités qui ne disposaient pas de Soli.tech : elles sont passées de la fiche papier à un outil où l'historique des interventions existe réellement. Le Nord-Est et l'Île-de-France, eux, n'ont pas encore migré, et c'est un choix assumé : les faire basculer aujourd'hui leur ferait perdre à court terme des fonctions dont ils disposent déjà. La bascule attend que l'application ait atteint ce niveau de maturité — unifier les pratiques ne justifie pas de dégrader l'outil de ceux qui en avaient un.",
    },
    regardCritique:
      "Les tests. En cours, on nous apprend à les écrire avant le code ; sur ce projet, il y en a peu. Chaque évolution demande donc de vérifier manuellement ce qui fonctionnait déjà, et ce coût se paie à chaque livraison — d'autant plus depuis que l'application est en production chez de vrais utilisateurs. Si je repartais de zéro, je couvrirais d'abord le socle métier — entités, clients, sites, affaires, interventions — avant d'empiler les fonctions d'usage : pas une couverture complète, mais un filet sur les parties dont tout le reste dépend.",
    image: "/images/GIP2.svg",
  },
  {
    slug: "shopwise",
    titre: "ShopWise - Plateforme SaaS pour commerces de proximité",
    description:
      "Étude de cas que j'ai menée seul, de bout en bout : une application web de gestion des clients, des rendez-vous et de la fidélisation, développée en Spring Boot et Angular, testée puis industrialisée avec GitHub Actions et Docker.",
    contexte:
      "ShopWise est un éditeur fictif qui commercialise un logiciel de gestion pour les commerces de proximité — salons, instituts, ateliers. Le sujet, imposé dans le cadre de l'étude de cas du bloc « Intégration, industrialisation et déploiement du logiciel », demandait d'en développer trois modules — clients, rendez-vous, fidélisation — et surtout de livrer la chaîne complète autour : suivi des demandes, tests mesurés, pipeline d'intégration continue et procédure de déploiement reproductible. J'ai mené le projet seul, entre avril et juillet 2026, sur une pile que je ne pratiquais pas : Java avec Spring Boot côté serveur, Angular côté interface.",
    poste: "Développeur Full Stack",
    objectifs: [
      "Convertir les user stories de l'énoncé en issues suivies sur un tableau de projet et fixer un workflow Git",
      "Modéliser le domaine métier — clients, rendez-vous, fidélisation — et produire le schéma et les scripts PostgreSQL",
      "Développer l'API REST Spring Boot en couches et l'interface Angular responsive qui la consomme",
      "Automatiser l'attribution des points de fidélité au passage d'un rendez-vous au statut honoré",
      "Couvrir le code par des tests automatisés côté serveur et côté interface, avec un objectif de 60 % de couverture",
      "Industrialiser la construction et le déploiement : pipeline GitHub Actions, images Docker, orchestration Docker Compose",
    ],
    technologies: [
      "Java 17",
      "Spring Boot 3",
      "Angular 17",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "TypeScript",
      "JUnit",
      "Nginx",
    ],
    defis:
      "Les fonctionnalités demandées étaient modestes : trois entités, leurs opérations courantes et une règle de gain de points. La difficulté était ailleurs. D'abord dans les outils — Java, Spring Boot et Angular étaient trois écosystèmes que je découvrais simultanément, chacun avec ses conventions. Ensuite dans les jonctions : la règle de fidélité devait se déclencher à un seul endroit, au changement de statut du rendez-vous, et non se dupliquer entre le contrôleur et le service. Enfin dans l'exigence d'industrialisation : ce n'est pas une application qui fonctionne sur ma machine qui était attendue, mais une application que n'importe qui puisse construire, tester et démarrer à partir du dépôt.",
    solutions:
      "Côté serveur, j'ai suivi une architecture en couches — contrôleur, service, repository, entité — où la logique métier reste dans les services : c'est le service des rendez-vous qui appelle celui de la fidélisation lorsqu'un rendez-vous passe au statut honoré, si bien que la règle n'existe qu'à un seul endroit. Un gestionnaire d'exceptions global centralise les erreurs plutôt que de les traiter contrôleur par contrôleur. Côté interface, Angular est organisé en composants autonomes répartis entre core (modèles et services HTTP), features (écrans) et shared. La base de données porte elle-même ses garde-fous : contraintes CHECK sur les statuts, clés étrangères en cascade et index sur les colonnes filtrées. Le déploiement repose sur deux Dockerfiles multi-étapes — Maven puis une image JRE légère, Node puis Nginx faisant proxy vers l'API — et un docker-compose qui démarre la base, le serveur et l'interface en une commande.",
    enjeux:
      "Le bloc évalué ne portait pas sur la capacité à écrire des fonctionnalités, mais sur tout ce qui entoure le code : tracer les demandes, tenir un workflow Git lisible, prouver par des tests mesurés que l'application fait ce qu'elle annonce, et rendre son déploiement reproductible. Le risque n'était donc pas de livrer une application qui ne marche pas, mais d'en livrer une qui marche sans qu'on puisse le démontrer ni la redéployer ailleurs — un dépôt que personne d'autre que moi n'aurait su remettre en route.",
    etapes: [
      "Convertir les sept user stories de l'énoncé en issues GitHub, les labelliser par module et les suivre sur un tableau à trois colonnes.",
      "Fixer le workflow avant d'écrire la première ligne : un Git Flow simplifié — main et develop, branches feature, fix et chore, pull request vers develop — et une convention de commits reliant chaque commit à son issue.",
      "Modéliser le domaine : trois tables — client, rendez-vous, transaction de fidélité — leurs relations, leurs contraintes de statut et leurs index, avec la structure et les données de test séparées en deux scripts SQL.",
      "Développer par tranches verticales, un module à la fois de la base jusqu'à l'écran : les clients d'abord, puis les rendez-vous et la fidélisation qui en dépendent.",
      "Écrire les tests des deux côtés : services et contrôleurs avec JUnit et JaCoCo côté serveur, services et composants avec Jasmine et Karma côté interface.",
      "Industrialiser : un pipeline GitHub Actions en trois travaux — construction et tests du serveur, de l'interface, puis publication des images Docker sur la branche de production — et une procédure de déploiement documentée dans le readme.",
      "Corriger ce que l'usage a révélé après coup : types d'identifiants désalignés entre le script SQL et les entités JPA, client mal sérialisé à la création d'un rendez-vous, dates affichées au format anglais.",
    ],
    acteurs: [
      {
        role: "L'énoncé, tenant lieu de client",
        interaction:
          "Le projet ayant été mené seul, c'est le sujet qui portait le besoin : sept user stories et des contraintes non négociables — base relationnelle, API sans authentification, interface responsive, 60 % de couverture. J'y revenais à chaque arbitrage, notamment quand une facilité technique m'éloignait de ce qui était demandé.",
      },
      {
        role: "Le lecteur du dépôt",
        interaction:
          "Le livrable étant un dépôt public destiné à être évalué, j'ai travaillé en supposant un lecteur qui n'a pas écrit le code : commits reliés à leur issue, workflow Git décrit, procédure de déploiement documentée. Cette contrainte a davantage pesé sur mes choix que la difficulté technique elle-même.",
      },
    ],
    resultats: {
      pourMoi:
        "C'est le projet qui m'a fait passer de « mon code fonctionne » à « je peux le démontrer et le redéployer ». J'y ai découvert Java, Spring Boot et Angular, mais ce que j'en retiens est ailleurs : une chaîne d'intégration continue construite de bout en bout, et la leçon que m'ont donnée les corrections de juillet. Des bugs sont passés à travers plus de 80 % de couverture — un type d'identifiant divergent entre le script SQL et l'entité JPA, un objet mal sérialisé — parce qu'ils vivaient précisément aux jonctions que les tests unitaires ne franchissent pas.",
      pourEntreprise:
        "Le livrable est un dépôt reprenable : une commande docker compose suffit à démarrer la base, l'API et l'interface, la procédure de déploiement est écrite et le pipeline reconstruit tout à chaque envoi. Les objectifs de couverture sont dépassés — 82 % des instructions et 88 % des branches côté serveur, 95,7 % des instructions et 83,3 % des branches côté interface, pour une exigence de 60 % — et les rapports sont archivés à chaque exécution du pipeline plutôt que produits une fois pour la démonstration.",
    },
    lendemains: {
      immediat:
        "Le projet a été rendu en juillet 2026 sous la forme d'un dépôt public, accompagné d'une feuille de travail reliant chaque question du sujet au livrable correspondant.",
      aDistance:
        "Le périmètre était imposé et le sujet est clos : je n'ai pas fait évoluer l'application depuis.",
      aujourdhui:
        "Ce que j'en ai gardé n'est pas le code mais la chaîne. Le réflexe d'automatiser la construction et les tests, et de documenter le démarrage plutôt que de le garder en mémoire, est celui que j'applique sur la GMAO depuis sa mise en service.",
    },
    regardCritique:
      "Les chiffres de couverture sont flatteurs et je m'en méfie. Presque tous ces tests sont unitaires, avec des dépendances simulées : ils vérifient chaque pièce isolément et aucun ne traverse réellement la base, l'API et l'interface. Les trois bugs corrigés en juillet l'ont prouvé — ils se situaient tous à une jonction. Si je reprenais le projet, j'échangerais volontiers quelques points de couverture unitaire contre deux ou trois tests d'intégration sur les parcours réels. Je note aussi que l'API est livrée sans authentification : c'était la consigne, mais ce n'est pas un état dans lequel je livrerais une application destinée à de vrais commerces.",
    image: "/images/ShopWise.svg",
  },
  {
    slug: "gestion-stock-qrcode",
    titre: "Gestion de Stock avec QR Code",
    description:
      "Application mobile Android de gestion de stock permettant de générer et scanner des QR Codes pour le suivi des produits en temps réel.",
    contexte:
      "Un entrepôt où l'emplacement des articles stockés ne se consultait que depuis un unique poste informatique : c'est le problème que cette application mobile devait résoudre. Développée en Java pour Android, elle associe un QR Code à chaque produit et permet d'en retrouver la fiche par un simple scan, sans revenir au poste. Le projet a été mené à deux dans le cadre de ma formation, sur un sujet imposé ; ma partie portait sur la création et la lecture des QR Codes.",
    poste: "Développeur Mobile Android",
    objectifs: [
      "Développer une application Android native en Java pour la gestion de stock",
      "Implémenter la génération de QR Codes pour chaque produit de l'inventaire",
      "Intégrer un scanner de QR Codes pour la recherche et la mise à jour rapide des stocks",
      "Concevoir une interface utilisateur intuitive pour le suivi des entrées et sorties de stock",
      "Mettre en place une base de données locale pour le stockage des produits",
    ],
    technologies: ["Java", "Android Studio", "SQLite"],
    defis:
      "Le principal défi a été d'intégrer la génération et la lecture de QR Codes de manière fluide dans l'application, tout en assurant une gestion fiable des données de stock. L'optimisation de l'interface pour une utilisation rapide en contexte professionnel (entrepôt, magasin) a également été un enjeu important.",
    solutions:
      "J'ai utilisé la bibliothèque ZXing pour la génération et le scan de QR Codes, ce qui a permis une intégration rapide et fiable. La base de données SQLite assure la persistance des données en local, et l'interface a été conçue pour permettre des actions rapides (ajout, modification, suppression de produits) en un minimum d'étapes.",
    enjeux:
      "L'entreprise du scénario ne disposait que d'un seul poste informatique pour consulter l'emplacement des articles stockés : toute recherche imposait un aller-retour jusqu'à ce PC. Le sujet, imposé, demandait de lever ce point de passage unique par une application mobile, utilisable dans les conditions réelles de l'entrepôt : debout, souvent d'une seule main, l'autre occupée par un produit. Le risque ne tenait pas au besoin, simple à formuler, mais à sa réalisation : nous découvrions le développement Android natif, et l'intérêt de l'application reposait entièrement sur la fiabilité du scan. Un lecteur de QR Code approximatif aurait rendu l'outil plus lent que le trajet jusqu'au poste informatique.",
    etapes: [
      "Cadrer le besoin à partir du sujet imposé et répartir le travail à deux : la gestion des produits pour mon binôme, la création et la lecture des QR Codes pour moi.",
      "Intégrer la bibliothèque ZXing pour générer un QR Code associé à chaque produit de l'inventaire.",
      "Développer le scanner : la lecture d'un code amène directement sur la fiche du produit correspondant.",
      "Faire du scan le point d'entrée de l'application plutôt qu'une fonction secondaire enfouie dans un menu.",
      "Présenter le résultat au formateur, qui tenait le rôle du client.",
    ],
    acteurs: [
      {
        role: "Mon binôme",
        interaction:
          "Nous nous sommes réparti l'application : la gestion des produits pour lui, la création et la lecture des QR Codes pour moi. Il a fallu nous accorder sur le point de jonction entre nos deux parties — ce qu'un code contient et sur quel écran sa lecture renvoie.",
      },
      {
        role: "Le formateur, dans le rôle du client",
        interaction:
          "Il portait le besoin et arbitrait ce qui était attendu. C'est devant lui que le résultat a été présenté et évalué.",
      },
    ],
    resultats: {
      pourMoi:
        "C'était mon premier projet mobile natif. Java et Android m'ont confronté à des contraintes que le développement web ne m'avait pas posées : un cycle de vie d'écran à respecter, une permission à demander à l'utilisateur pour accéder à la caméra, et un matériel qui varie d'un appareil à l'autre. J'y ai aussi appris à travailler sur une partie d'une application dont je ne maîtrisais pas l'autre moitié.",
      pourEntreprise:
        "L'application livrée répond à la demande : l'emplacement d'un article se consulte depuis un téléphone, sans passer par l'unique poste informatique. Le scan d'un QR Code amène directement sur la fiche du produit, là où la recherche supposait auparavant un déplacement puis une saisie manuelle.",
    },
    lendemains: {
      immediat:
        "Le projet a été rendu et présenté au formateur, qui tenait le rôle du client.",
      aDistance: "Je n'ai pas repris l'application depuis.",
      aujourdhui:
        "Je ne l'ai pas réutilisée telle quelle, mais la lecture de QR Code est devenue une brique que je sais refaire : si un projet en a besoin, je sais où retourner chercher et ce qui m'avait coûté du temps la première fois.",
    },
    regardCritique:
      "L'application est très scolaire : elle répond exactement à la problématique posée, sans que nous ayons cherché à aller au-delà. Nous avons livré ce qui était demandé plutôt que ce qui aurait fait un outil réellement exploitable en entreprise. C'est le réflexe que je cherche à perdre — traiter un sujet imposé comme un cahier des charges minimal, c'est se priver de tout ce qui se joue une fois la conformité atteinte.",
    image: "/images/Entrepot.png",
  },
  {
    slug: "projet-wordpress",
    titre: "Plateforme de Voyages WordPress",
    description:
      "Développement d'une plateforme web de gestion de voyages avec WordPress, incluant un plugin personnalisé permettant la gestion des utilisateurs, des destinations et des voyages effectués.",
    contexte:
      "Un site où les utilisateurs évaluent les pays où voyager et enregistrent les destinations qu'ils ont visitées : c'est le sujet imposé de ce projet, que j'ai mené seul dans le cadre de ma formation. Plutôt que d'assembler des extensions existantes, j'ai écrit un plugin sur-mesure — NC_Projet — qui porte l'ensemble de la logique métier, et un thème WordPress personnalisé pour l'affichage.",
    poste: "Développeur Web",
    objectifs: [
      "Créer un plugin WordPress personnalisé avec une architecture CRUD complète",
      "Développer un système de gestion des utilisateurs (inscription, profil, civilité, etc.)",
      "Mettre en place une gestion des pays/destinations avec notation et restrictions d'âge",
      "Permettre l'enregistrement des voyages effectués par chaque utilisateur",
      "Concevoir un thème WordPress personnalisé adapté au projet",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "CSS", "MySQL", "HTML"],
    defis:
      "Le principal défi a été de développer un plugin WordPress complet avec une architecture modulaire (classes CRUD, vues admin, shortcodes, helpers) tout en respectant les bonnes pratiques WordPress. La gestion des relations entre utilisateurs, pays et voyages dans la base de données a également nécessité une conception soignée.",
    solutions:
      "J'ai structuré le plugin en suivant une architecture MVC avec des classes séparées pour le CRUD, les vues, les actions et les shortcodes. Le back-office permet aux administrateurs de gérer les pays disponibles (avec notation et restriction aux majeurs), tandis que le système associe chaque utilisateur à ses voyages effectués via des tables relationnelles MySQL.",
    enjeux:
      "La difficulté ne venait pas du sujet, simple à énoncer, mais des outils. WordPress ne se laisse pas prendre en main facilement : ses conventions sont implicites et son fonctionnement interne peu lisible quand on le découvre. S'y ajoutaient mes premières utilisations de JavaScript et d'AJAX, que je n'avais jamais employés jusque-là. Le risque tenait à ce cumul : découvrir en même temps un CMS, l'écriture d'un plugin et l'échange asynchrone avec le serveur, sur un projet mené seul.",
    etapes: [
      "Cadrer le sujet imposé : un site où les utilisateurs évaluent les pays où voyager et consignent ceux qu'ils ont visités.",
      "Concevoir le modèle de données — utilisateurs, pays, voyages effectués — et les relations qui les lient.",
      "Développer le plugin NC_Projet, qui porte toute la logique métier plutôt que de la disperser dans le thème.",
      "Construire le back-office d'administration des pays : notation des destinations et restriction aux utilisateurs majeurs.",
      "Développer le thème WordPress sur-mesure pour la partie visible du site.",
      "Présenter le résultat au formateur, dans le rôle du client.",
    ],
    acteurs: [
      {
        role: "Le formateur, dans le rôle du client",
        interaction:
          "Il portait le besoin et arbitrait ce qui était attendu. Le projet ayant été mené seul de bout en bout, il a été mon unique interlocuteur et le seul regard extérieur porté sur le site avant le rendu.",
      },
    ],
    resultats: {
      pourMoi:
        "C'est sur ce projet que j'ai utilisé JavaScript et AJAX pour la première fois, et que j'ai appris à écrire du code dans WordPress plutôt qu'à l'assembler autour. J'y ai surtout pris l'habitude qui m'a le plus servi depuis : découper le code en parties ayant chacune un rôle précis, au lieu d'empiler la logique dans un seul fichier comme le CMS y invite.",
      pourEntreprise:
        "Le site livré remplit le besoin du sujet : les utilisateurs s'inscrivent, consultent les destinations et enregistrent les voyages qu'ils ont effectués, tandis que l'administrateur gère les pays disponibles, leur notation et leur restriction d'âge. L'ensemble repose sur un plugin écrit pour le projet et sur un thème sur-mesure, et non sur un empilement d'extensions.",
    },
    lendemains: {
      immediat:
        "Le projet a été rendu et présenté au formateur, dans le rôle du client.",
      aDistance: "Je n'ai pas repris le site depuis.",
      aujourdhui:
        "Je ne l'ai pas réutilisé, mais WordPress m'est resté : je sais désormais y écrire du code plutôt que d'y assembler des extensions, et où placer les règles métier dans ce type de CMS.",
    },
    regardCritique:
      "L'affichage est celui d'un développeur, pas celui d'un utilisateur. Le site fonctionne et les fonctionnalités demandées sont là, mais l'interface expose la structure des données plutôt qu'elle n'accompagne quelqu'un qui vient chercher une destination. C'est ce que je reprendrais en priorité : j'ai traité la partie visible comme la simple surface d'un modèle de données, alors que c'est elle qui décide si le site sert à quelque chose.",
    image: "/images/Wordpress.webp",
  },
];
