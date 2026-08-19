export interface Anecdote {
  titre: string;
  contexte: string;
  action: string;
  resultat: string;
  valeurAjoutee: string;
  projetSlug?: string;
}

export interface Autocritique {
  maitrise: string;
  importance: string;
  acquisition?: string;
  recul: string;
}

export interface Evolution {
  objectif: string;
  formations: string[];
}

export interface Competence {
  slug: string;
  nom: string;
  domaine: "technique" | "humaine";
  categorie: string;
  icone: string;
  niveau: number;
  resume: string;
  technologies?: string[];
  definition: string[];
  actualite: string;
  anecdotes: Anecdote[];
  autocritique: Autocritique;
  evolution: Evolution;
  projets: string[];
}

export const competences: Competence[] = [
  {
    slug: "developpement-front-end",
    nom: "Développement front-end",
    domaine: "technique",
    categorie: "Interfaces & expérience utilisateur",
    icone: "SiReact",
    niveau: 85,
    resume:
      "Conception d'interfaces web accessibles, réactives et maintenables, du balisage sémantique jusqu'aux frameworks à composants.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
    ],
    definition: [
      "Le développement front-end désigne l'ensemble des travaux qui produisent la partie d'une application avec laquelle l'utilisateur interagit directement. Il ne se limite pas à la mise en forme : il englobe la structure sémantique du document, la gestion de l'état de l'interface, la performance de rendu, l'accessibilité et la cohérence du système de design.",
      "Dans un contexte professionnel, cette compétence se situe à la frontière entre l'ingénierie et l'usage. Le front-end est la seule couche que l'utilisateur final juge réellement : une architecture serveur irréprochable derrière une interface lente ou illisible reste perçue comme un produit défaillant. C'est pourquoi j'aborde le front-end comme un travail d'ingénieur — typage, composants réutilisables, séparation des données et de la présentation — et non comme une couche cosmétique posée en fin de projet.",
      "Concrètement, je travaille aujourd'hui avec React et Next.js en TypeScript, en structurant systématiquement mes projets autour de composants isolés et de données découplées de l'affichage, et j'ai pratiqué Angular sur l'étude de cas ShopWise.",
    ],
    actualite:
      "L'arrivée des React Server Components dans les versions récentes de Next.js change la façon dont le code s'exécute : une partie du rendu se fait désormais sur le serveur plutôt que dans le navigateur, ce qui réduit la quantité de JavaScript envoyée à l'utilisateur. C'est le modèle sur lequel repose ce portfolio, où seuls les composants réellement interactifs — la navigation et les animations — s'exécutent côté client. L'autre déplacement tient à l'accessibilité, passée de la bonne pratique au critère attendu : une interface s'évalue aussi sur ce qu'elle transmet à un lecteur d'écran et sur ce qui reste compréhensible en dehors de la couleur seule. Un front-end ne se mesure donc plus à sa seule apparence, mais à son coût pour l'utilisateur et à son utilisabilité réelle.",
    anecdotes: [
      {
        titre: "Concevoir ce portfolio comme un produit, pas comme une page",
        contexte:
          "Je devais produire un portfolio présentant mon profil, mes compétences et mes réalisations. La difficulté n'était pas d'afficher du contenu, mais d'obtenir une structure qui reste modifiable sans réécrire l'interface à chaque ajout.",
        action:
          "J'ai choisi Next.js avec TypeScript et j'ai séparé strictement les données de la présentation : tout le contenu éditorial vit dans des fichiers de données typés, les composants ne font que le rendre. J'ai construit des composants réutilisables pour les cartes, les sections animées et la navigation, et j'ai typé chaque structure de contenu par une interface TypeScript.",
        resultat:
          "Ajouter une compétence ou une réalisation ne demande plus qu'une entrée dans un fichier de données : les pages de détail, les listes et les liens croisés se génèrent automatiquement via le routage dynamique. Le typage empêche les incohérences de contenu d'atteindre l'affichage.",
        valeurAjoutee:
          "J'ai transformé un site vitrine, qui aurait vieilli à la première mise à jour, en une base de contenu maintenable. C'est précisément l'arbitrage qu'on attend d'un ingénieur logiciel : investir dans la structure pour réduire le coût des évolutions futures.",
      },
      {
        titre: "Faire du scan le point d'entrée d'une application de stock",
        contexte:
          "L'application de gestion de stock a été menée à deux : mon binôme portait la gestion des produits, j'avais la création et la lecture des QR Codes. Ma partie devait rester utilisable dans les conditions de l'entrepôt : debout, souvent d'une seule main, l'autre occupée par un produit.",
        action:
          "Plutôt que d'enfouir le scan dans un menu comme une fonction secondaire, j'en ai fait le point d'entrée de l'application : la lecture d'un code amène directement sur la fiche du produit correspondant, en un seul geste réalisable d'une main. Le point de jonction avec la partie de mon binôme — ce qu'un code contient et sur quel écran sa lecture renvoie — a été défini avec lui.",
        resultat:
          "La recherche d'un produit, qui supposait auparavant un déplacement jusqu'au poste informatique puis une saisie manuelle, se fait par un scan unique aboutissant sur la fiche du produit.",
        valeurAjoutee:
          "J'ai déplacé la conception depuis « ce que le système sait faire » vers « ce que l'utilisateur fait réellement sur le terrain ». Cette lecture par l'usage est ce qui distingue une interface fonctionnelle d'une interface adoptée.",
        projetSlug: "gestion-stock-qrcode",
      },
    ],
    autocritique: {
      maitrise:
        "C'est ma compétence technique la plus solide. Je suis autonome sur l'ensemble de la chaîne front-end moderne : je conçois une architecture de composants, je la type, je la connecte à des données et je la rends responsive sans assistance.",
      importance:
        "Elle occupe la première place dans mon profil, parce qu'elle est celle par laquelle j'entre dans la plupart des projets. Elle constitue aussi ma porte d'accès au full stack : c'est en cherchant à alimenter mes interfaces que j'ai progressé côté serveur.",
      acquisition:
        "Mon passage de JavaScript à TypeScript puis à React a été rapide, parce qu'il a été guidé par des projets concrets plutôt que par des tutoriels. J'ai systématiquement appris une notion au moment où un projet en avait besoin.",
      recul:
        "Ma faiblesse assumée porte sur les tests et l'accessibilité. Sur ShopWise, j'ai couvert les services et les composants Angular par des tests automatisés, mais c'est resté un exercice ponctuel : mes interfaces React ne le sont pas, et mon accessibilité reste intuitive plutôt que vérifiée à l'outil. Le conseil que je me donne, et que je donnerais à quelqu'un qui débute : ne pas confondre maîtriser un framework et maîtriser le front-end. Le framework change tous les trois ans, les fondamentaux HTML, CSS et accessibilité restent.",
    },
    evolution: {
      objectif:
        "À moyen terme, je veux être capable de tenir la responsabilité technique du front-end d'un produit : définir l'architecture des composants, poser un design system, arbitrer les performances et garantir l'accessibilité — et non plus seulement implémenter des écrans spécifiés par d'autres.",
      formations: [
        "Approfondissement des React Server Components et des stratégies de rendu de Next.js",
        "Tests d'interface automatisés avec Testing Library et Playwright",
        "Accessibilité web : audit outillé de mes propres projets — navigation au clavier, restitution par lecteur d'écran et contrastes",
      ],
    },
    projets: [
      "gestion-stock-qrcode",
      "gmao-django",
      "projet-wordpress",
      "shopwise",
    ],
  },
  {
    slug: "developpement-back-end",
    nom: "Développement back-end",
    domaine: "technique",
    categorie: "Logique métier & services",
    icone: "SiDjango",
    niveau: 88,
    resume:
      "Conception de la logique métier côté serveur, des modèles de données aux règles d'accès, avec Python/Django, PHP et Java.",
    technologies: [
      "Python",
      "Django",
      "PHP",
      "Java",
      "Spring Boot",
      "Node.js",
    ],
    definition: [
      "Le développement back-end recouvre tout ce qui, hors du navigateur, produit et protège la donnée : modélisation du domaine métier, règles de gestion, authentification et autorisation, traitement des requêtes, exposition d'interfaces de programmation.",
      "En contexte professionnel, c'est la couche où les erreurs coûtent le plus cher. Une maladresse d'interface se corrige en une itération ; une modélisation de domaine erronée ou une règle d'autorisation trop permissive se paient en migrations de données, en incidents de production et parfois en fuite d'informations. Le back-end demande donc une discipline particulière : réfléchir au modèle avant d'écrire du code, et considérer que toute donnée venant de l'extérieur est hostile jusqu'à preuve du contraire.",
      "Je travaille principalement en Python avec Django, dont l'architecture MVT et l'ORM structurent fortement le projet, et en PHP dans l'écosystème WordPress. J'ai également exposé une API REST en Java avec Spring Boot, sur une architecture en couches.",
    ],
    actualite:
      "La sécurité applicative s'est déplacée en amont du cycle de développement : elle n'est plus une revue de fin de projet mais une contrainte d'écriture, à laquelle les frameworks répondent en livrant leurs protections par défaut plutôt qu'en option. Django en est un bon exemple : l'authentification, la gestion des rôles et les protections contre l'injection SQL et le CSRF sont fournies d'origine, mais leur bénéfice tient entièrement à la discipline de mise à jour de la pile qui les porte — ce qui fait de la maîtrise des dépendances une tâche courante plutôt qu'un contrôle ponctuel. Un développeur back-end n'écrit donc plus seulement une logique qui fonctionne, mais une logique dont il peut justifier les choix de sécurité.",
    anecdotes: [
      {
        titre: "Modéliser un domaine métier complexe pour une application de GMAO",
        contexte:
          "J'ai repris la GMAO en avril 2025, sur un développement engagé depuis août 2024 : mon tuteur avait posé les premiers modèles. La difficulté centrale n'était pas l'affichage mais la modélisation — équipements, interventions, techniciens, pièces détachées et historique entretiennent un réseau dense de relations, et une erreur à ce niveau contamine toute l'application.",
        action:
          "J'ai commencé par comprendre les modèles existants avec mon tuteur plutôt que par produire des écrans, puis je les ai affinés au fur et à mesure des fonctionnalités ajoutées, jusqu'à les porter sur l'ORM de Django lors du passage à Python en novembre 2025. J'ai ensuite construit dans l'ordre des dépendances : le socle métier — entités, clients, sites, affaires, interventions — avant les fonctions d'usage quotidien. Le système d'authentification natif de Django porte les rôles (administrateur, technicien, responsable) et le tableau de bord s'appuie sur l'ORM pour ses indicateurs.",
        resultat:
          "L'application couvre la planification des interventions préventives et correctives, le suivi des équipements et la restitution d'indicateurs de maintenance. Le socle métier a absorbé les fonctionnalités ajoutées ensuite sans avoir à être repris de fond en comble, et l'application est en service depuis mai 2026 dans trois entités.",
        valeurAjoutee:
          "J'ai accepté de passer du temps sur un modèle que je n'avais pas écrit avant d'y toucher, puis de construire dans l'ordre des dépendances plutôt que dans celui des écrans visibles. C'est ce qui permet d'ajouter une fonction sans payer, à chaque fois, une migration de données.",
        projetSlug: "gmao-django",
      },
      {
        titre: "Développer un plugin WordPress avec une vraie architecture",
        contexte:
          "Sur la plateforme de voyages, la logique métier — gestion des utilisateurs, des destinations, des voyages effectués — devait vivre dans un plugin WordPress sur-mesure. L'écueil classique dans cet écosystème est d'accumuler des fonctions dans un fichier unique jusqu'à obtenir un code illisible.",
        action:
          "J'ai structuré le plugin NC_Projet en couches séparées : classes de CRUD, vues d'administration, actions et shortcodes isolés les uns des autres, avec des helpers partagés. J'ai conçu les tables MySQL pour porter explicitement les relations entre utilisateurs, pays et voyages, et j'ai implémenté les règles métier côté serveur — notation des destinations et restriction de certaines aux utilisateurs majeurs.",
        resultat:
          "Le back-office permet aux administrateurs de gérer les destinations et leurs restrictions, tandis que chaque utilisateur dispose de son historique de voyages, le tout dans un plugin dont chaque responsabilité est localisable dans un fichier dédié.",
        valeurAjoutee:
          "J'ai appliqué des principes d'architecture logicielle à un environnement qui n'y pousse pas spontanément. Placer les règles d'accès côté serveur plutôt que dans l'affichage est par ailleurs la seule implémentation défendable : une restriction d'âge appliquée uniquement dans l'interface ne restreint rien.",
        projetSlug: "projet-wordpress",
      },
    ],
    autocritique: {
      maitrise:
        "Je suis autonome sur la conception et l'implémentation d'une application back-end complète en Django, du modèle aux vues en passant par l'authentification et les rôles. Ma maîtrise est plus inégale sur les autres écosystèmes : solide en PHP dans le cadre WordPress, intermédiaire en Java depuis l'API Spring Boot de ShopWise, et limitée sur Node.js, que je n'utilise que ponctuellement.",
      importance:
        "C'est la deuxième compétence de mon profil et celle qui conditionne mon évolution. Un développeur front-end qui comprend le back-end conçoit de meilleures interfaces ; c'est aussi la compétence attendue pour tenir un rôle full stack, qui est mon objectif professionnel.",
      recul:
        "Je manque encore de recul sur la performance à l'échelle. Mes projets ont été validés sur des volumes de données modestes : je sais concevoir un modèle juste, je sais moins diagnostiquer une requête lente sur un jeu de données réel. Le conseil que je retiens : écrire le modèle de données avant la première vue. Toutes les difficultés que j'ai rencontrées venaient d'un modèle décidé trop vite.",
    },
    evolution: {
      objectif:
        "À moyen terme, je veux concevoir et exposer des interfaces de programmation destinées à être consommées par d'autres équipes, avec le niveau d'exigence correspondant : versionnement, documentation, tests d'intégration et sécurité démontrable.",
      formations: [
        "Approfondissement de Django REST Framework pour la conception d'API",
        "Optimisation des requêtes et indexation, avec analyse de plans d'exécution",
        "Sécurité applicative : durcissement de mes projets Django et WordPress — gestion des secrets, contrôle des permissions et mise à jour des dépendances",
      ],
    },
    projets: ["gmao-django", "projet-wordpress", "shopwise"],
  },
  {
    slug: "bases-de-donnees",
    nom: "Conception de bases de données",
    domaine: "technique",
    categorie: "Données & persistance",
    icone: "FaDatabase",
    niveau: 72,
    resume:
      "Modélisation relationnelle, conception de schémas cohérents et choix du système de persistance adapté au contexte d'usage.",
    technologies: ["MySQL", "PostgreSQL", "SQLite"],
    definition: [
      "La conception de bases de données consiste à traduire un domaine métier en un schéma relationnel cohérent : identifier les entités, leurs attributs et surtout leurs relations, puis garantir l'intégrité de l'ensemble dans la durée.",
      "C'est la compétence dont la portée temporelle est la plus longue d'un projet. Le code applicatif se réécrit, se refactorise, change de framework ; les données, elles, survivent aux applications qui les manipulent. Un schéma mal conçu se paie pendant toute la vie du produit, en contournements applicatifs puis en migrations risquées. En contexte professionnel, la qualité du modèle de données est donc un indicateur fiable de la maturité d'un projet.",
      "J'ai pratiqué trois systèmes différents en fonction du besoin : MySQL dans un contexte web, PostgreSQL pour une application métier, SQLite en environnement mobile embarqué.",
    ],
    actualite:
      "Le RGPD a fait entrer dans la conception de schémas des exigences qui n'y figuraient pas : minimisation des données collectées, limitation des durées de conservation, capacité à supprimer effectivement les données d'une personne. La conception par défaut et dès la conception impose désormais de se demander non seulement comment stocker une donnée, mais si elle doit l'être et pendant combien de temps — une question de modélisation avant d'être une question juridique.",
    anecdotes: [
      {
        titre: "Choisir la persistance selon le contexte d'exécution",
        contexte:
          "Trois de mes projets présentaient des contraintes de persistance radicalement différentes : une plateforme web multi-utilisateurs, une application métier avec un domaine relationnel dense, et une application mobile devant fonctionner sur le terrain.",
        action:
          "Plutôt que de reconduire le même système par habitude, j'ai traité le choix comme une décision d'architecture. MySQL pour la plateforme WordPress, où il est l'option native de l'écosystème. PostgreSQL pour la GMAO, retenu avec mon tuteur au moment du passage à Python et Django, pour sa robustesse relationnelle sur un domaine à fortes contraintes d'intégrité. SQLite pour l'application Android, parce qu'un entrepôt ne garantit pas la connectivité et qu'une base embarquée supprime cette dépendance.",
        resultat:
          "Chaque application dispose d'une persistance adaptée à ses conditions réelles d'exécution, sans dépendance superflue — l'application mobile en particulier reste pleinement fonctionnelle hors connexion.",
        valeurAjoutee:
          "J'ai su justifier un choix technique par le contexte d'usage plutôt que par préférence personnelle. C'est ce qui différencie une décision d'ingénierie d'une habitude, et c'est ce qu'on attend de pouvoir défendre devant une équipe.",
        projetSlug: "gestion-stock-qrcode",
      },
      {
        titre: "Porter les relations dans le schéma plutôt que dans le code",
        contexte:
          "La plateforme de voyages devait associer chaque utilisateur aux destinations qu'il avait visitées, avec des destinations elles-mêmes porteuses d'une notation et d'une restriction d'âge. La tentation, dans WordPress, est de tout stocker en métadonnées sérialisées.",
        action:
          "J'ai refusé cette facilité et conçu des tables relationnelles explicites portant les liens entre utilisateurs, pays et voyages, en gardant les contraintes métier au niveau du schéma plutôt que dispersées dans le code applicatif.",
        resultat:
          "Les données restent interrogeables directement en SQL et les relations demeurent lisibles pour quiconque reprend le projet, sans avoir à désérialiser des structures opaques.",
        valeurAjoutee:
          "J'ai privilégié la lisibilité durable du modèle à la rapidité d'écriture immédiate. Un schéma explicite est ce qui permet à un projet de changer de mains sans perte de compréhension.",
        projetSlug: "projet-wordpress",
      },
    ],
    autocritique: {
      maitrise:
        "Je conçois un schéma relationnel normalisé et cohérent de manière autonome, et je manipule l'ORM de Django avec aisance. Mon niveau reste intermédiaire sur l'optimisation : l'indexation et l'analyse de plans d'exécution sont des sujets que je comprends sans les avoir pratiqués sur des volumes significatifs.",
      importance:
        "C'est une compétence transversale et non un domaine parmi d'autres : elle conditionne la qualité de tout ce que je construis côté serveur. Je la considère comme le socle de mon profil back-end.",
      recul:
        "Mon principal angle mort est le passage à l'échelle : je n'ai pas encore travaillé sur des bases suffisamment volumineuses pour que les problèmes de performance apparaissent. Le conseil que je me donne : modéliser sur papier avant d'ouvrir un éditeur. Une heure de schéma évite une semaine de migration.",
    },
    evolution: {
      objectif:
        "À moyen terme, je veux être en mesure de diagnostiquer et d'optimiser une base de données en production : lire un plan d'exécution, poser les bons index, et conduire une migration de schéma sans interruption de service.",
      formations: [
        "Approfondissement de PostgreSQL : indexation, EXPLAIN ANALYZE, optimisation de requêtes",
        "Stratégies de migration de schéma en production",
        "Conception de schémas conformes au RGPD : minimisation et durées de conservation",
      ],
    },
    projets: [
      "gmao-django",
      "projet-wordpress",
      "gestion-stock-qrcode",
      "shopwise",
    ],
  },
  {
    slug: "developpement-mobile-android",
    nom: "Développement mobile Android",
    domaine: "technique",
    categorie: "Applications mobiles natives",
    icone: "SiAndroid",
    niveau: 68,
    resume:
      "Développement d'applications Android natives en Java, avec persistance locale et intégration de capteurs matériels.",
    technologies: ["Java", "Android Studio", "SQLite"],
    definition: [
      "Le développement mobile natif consiste à produire une application exécutée directement par le système d'exploitation du terminal, avec un accès complet à ses capacités matérielles — appareil photo, capteurs, stockage local — et à ses contraintes.",
      "Ce qui distingue cette compétence du développement web tient moins au langage qu'aux contraintes d'exécution. Une application mobile doit composer avec un cycle de vie que le système peut interrompre à tout moment, une autonomie limitée, un écran réduit et une connectivité incertaine. En contexte professionnel, c'est la compétence adaptée aux usages de terrain, là où le poste de travail fixe n'existe pas : logistique, maintenance, inventaire.",
      "J'ai développé une application Android native en Java, intégrant la caméra pour la lecture de codes et une base SQLite embarquée.",
    ],
    actualite:
      "Le mobile natif garde un intérêt net là où l'accès matériel et le fonctionnement hors ligne sont déterminants, alors même que les technologies multiplateformes progressent : ce qui départage les deux approches n'est plus la performance brute mais la profondeur d'accès aux capteurs et la tolérance à l'absence de réseau. La numérisation des opérations de terrain — inventaire par scan, relevés d'intervention sur site — repose précisément sur ces deux points, et c'est ce que l'application de stock a rendu tangible : une base SQLite embarquée supprimait toute dépendance à la connectivité de l'entrepôt. La question posée aujourd'hui à un développeur mobile est donc moins celle du framework que celle de ce qui doit continuer à fonctionner quand le réseau tombe.",
    anecdotes: [
      {
        titre: "Intégrer la lecture de QR Code au cœur d'un outil de stock",
        contexte:
          "L'application de gestion de stock devait permettre d'identifier un produit sans saisie manuelle. Il fallait à la fois générer un QR Code par produit et le relire de façon fiable, sur du matériel varié et dans des conditions d'éclairage non maîtrisées.",
        action:
          "J'ai intégré la bibliothèque ZXing pour couvrir les deux sens — génération et lecture — plutôt que de développer une solution ad hoc. J'ai ensuite relié le scan à la fiche du produit en base SQLite, en m'accordant avec mon binôme, qui portait la gestion des produits, sur ce qu'un code devait contenir et sur l'écran auquel sa lecture renvoie.",
        resultat:
          "L'identification d'un produit se fait par un scan unique, sans saisie de référence, et aboutit sur la fiche du produit. La base SQLite garantit que l'application reste opérationnelle sans connexion réseau.",
        valeurAjoutee:
          "J'ai éliminé la saisie manuelle, qui est la principale source d'erreur et de lenteur dans un inventaire. Le choix d'une bibliothèque éprouvée plutôt que d'un développement spécifique m'a par ailleurs permis de concentrer mon temps sur la logique métier — un arbitrage entre réinvention et intégration que je considère comme structurant.",
        projetSlug: "gestion-stock-qrcode",
      },
    ],
    autocritique: {
      maitrise:
        "Mon niveau est intermédiaire. Je conçois et livre une application Android native fonctionnelle, avec persistance locale et accès aux capteurs, mais je reste sur Java là où l'écosystème s'est déplacé vers Kotlin. Je connais les fondamentaux du cycle de vie des activités sans avoir encore traité de cas complexes de restauration d'état.",
      importance:
        "C'est une compétence secondaire dans mon profil, que j'assume comme telle. Elle ne constitue pas mon axe principal mais elle élargit utilement mon périmètre : elle me rend pertinent sur des projets où la donnée se saisit sur le terrain, et elle m'a apporté une compréhension des contraintes d'exécution que le web ne donne pas.",
      recul:
        "Je dois moderniser ma pratique : rester sur Java et les vues XML m'éloigne progressivement des standards actuels de la plateforme. Le conseil que je tire de ce projet : sur mobile plus qu'ailleurs, concevoir pour les conditions réelles d'usage — une main disponible, un réseau incertain, un écran au soleil — plutôt que pour l'émulateur.",
    },
    evolution: {
      objectif:
        "À moyen terme, je veux passer de Java à Kotlin pour développer selon le standard actuel de la plateforme, et savoir gérer proprement la synchronisation entre une base locale et un serveur distant.",
      formations: [
        "Applications web progressives : la version mobile de la GMAO, en cours de finition, qui me fait confronter l'approche PWA au natif sur un même besoin de terrain",
        "Kotlin : passer de Java au langage aujourd'hui standard sur Android",
        "Stratégies de synchronisation hors ligne et résolution de conflits",
      ],
    },
    projets: ["gestion-stock-qrcode"],
  },
  {
    slug: "outils-et-industrialisation",
    nom: "Outillage et industrialisation",
    domaine: "technique",
    categorie: "Versionnement, conteneurs & environnements",
    icone: "SiDocker",
    niveau: 65,
    resume:
      "Maîtrise des outils qui rendent un projet reproductible et collaboratif : Git, Docker, environnements Linux.",
    technologies: [
      "Git",
      "Docker",
      "GitHub Actions",
      "Linux",
      "VS Code",
      "Android Studio",
    ],
    definition: [
      "L'outillage et l'industrialisation regroupent les pratiques qui permettent à un projet d'être versionné, reproduit à l'identique sur un autre poste et repris par quelqu'un d'autre : contrôle de version, conteneurisation, gestion des environnements, automatisation des tâches répétitives.",
      "C'est la compétence la moins visible dans un livrable et la plus déterminante dans un travail d'équipe. Un projet qui ne s'installe pas ailleurs que sur la machine de son auteur n'est pas un projet livrable, quelle que soit la qualité de son code. En contexte professionnel, cette compétence conditionne directement la capacité d'une équipe à intégrer un nouvel arrivant, à reproduire un incident et à livrer sans surprise.",
      "J'utilise Git au quotidien pour l'ensemble de mes projets, je travaille en environnement Linux, j'emploie Docker pour isoler mes environnements et j'ai automatisé la construction, les tests et la publication d'images avec GitHub Actions sur l'étude de cas ShopWise.",
    ],
    actualite:
      "L'intégration continue est passée du statut d'outil d'équipes matures à celui d'attendu par défaut : un dépôt qui ne se construit pas, ne se teste pas et ne s'installe pas seul est aujourd'hui tenu pour incomplet, quelle que soit la qualité de son code. La conteneurisation a achevé ce déplacement en rendant l'environnement lui-même versionnable, au même titre que les sources. C'est ce que l'étude de cas ShopWise m'a fait éprouver directement : le livrable attendu n'était pas l'application mais la chaîne qui la produit — pipeline GitHub Actions, images Docker et démarrage en une seule commande.",
    anecdotes: [
      {
        titre: "Versionner pour pouvoir se tromper sans risque",
        contexte:
          "Sur la GMAO comme sur ce portfolio, j'ai eu à mener des refontes structurelles — restructuration du modèle de données, réorganisation de l'architecture de composants — dont je ne pouvais pas garantir a priori qu'elles aboutiraient.",
        action:
          "J'ai systématisé un usage de Git par intentions plutôt que par sauvegardes : des commits qui isolent un changement cohérent et dont le message énonce ce qui change et pourquoi, afin que l'historique reste lisible et qu'un retour arrière soit toujours possible sans perdre le travail voisin.",
        resultat:
          "J'ai pu conduire ces refontes en explorant des pistes, en revenant en arrière lorsqu'elles ne tenaient pas, sans jamais perdre d'état fonctionnel intermédiaire.",
        valeurAjoutee:
          "Un versionnement discipliné ne sert pas seulement à archiver : il abaisse le coût de l'erreur et rend donc possibles des remises en question qu'on n'oserait pas autrement. C'est ce qui m'a permis d'accepter de restructurer plutôt que de contourner.",
        projetSlug: "gmao-django",
      },
    ],
    autocritique: {
      maitrise:
        "Je suis pleinement autonome sur Git en usage individuel — branches, historique, retours en arrière — et à l'aise en environnement Linux. Sur ShopWise, j'ai conçu une chaîne complète : pipeline GitHub Actions en trois travaux, Dockerfiles multi-étapes et orchestration Docker Compose. Ce que je n'ai pas encore fait, c'est exploiter une telle chaîne dans la durée sur un dépôt partagé à plusieurs, ni la prolonger jusqu'au déploiement.",
      importance:
        "C'est une compétence support, mais dont l'absence est éliminatoire en équipe. Je la considère comme un prérequis de mon métier plutôt que comme un axe de différenciation.",
      recul:
        "Mon expérience de Git reste largement solitaire : je maîtrise les commandes, moins les situations réellement collaboratives — revues de code, résolution de conflits sur une branche partagée, stratégie de branches sur un dépôt actif. C'est ce que je dois travailler en priorité. Le conseil que je me donne : soigner les messages de commit dès le premier jour d'un projet, parce que le premier lecteur de l'historique, c'est soi-même trois mois plus tard.",
    },
    evolution: {
      objectif:
        "À moyen terme, je veux prolonger l'intégration continue jusqu'au déploiement continu vers un environnement réel — ce que la chaîne de ShopWise s'arrête juste avant de faire, puisqu'elle publie les images sans les déployer — et travailler couramment selon un flux de branches et de revues de code en équipe.",
      formations: [
        "Déploiement continu : livrer automatiquement vers un environnement réel après les tests",
        "Docker Compose et orchestration d'environnements multi-services",
        "Flux de travail Git collaboratifs et pratiques de revue de code",
      ],
    },
    projets: [
      "gmao-django",
      "projet-wordpress",
      "gestion-stock-qrcode",
      "shopwise",
    ],
  },
  {
    slug: "resolution-de-problemes",
    nom: "Résolution de problèmes",
    domaine: "humaine",
    categorie: "Analyse & méthode",
    icone: "FaLightbulb",
    niveau: 82,
    resume:
      "Décomposer une situation complexe, isoler la cause réelle et choisir une solution proportionnée au problème.",
    definition: [
      "La résolution de problèmes, dans un métier d'ingénierie, ne consiste pas à trouver rapidement une solution : elle consiste à identifier correctement le problème avant d'en chercher une. C'est une démarche méthodique — décomposer, formuler des hypothèses, les vérifier une à une, isoler la cause réelle — plutôt qu'une succession d'essais.",
      "En contexte professionnel, cette compétence se mesure à la qualité des questions posées davantage qu'à la vitesse d'exécution. Un développeur qui résout vite le mauvais problème produit du travail à refaire. Elle recouvre aussi un arbitrage permanent : toute solution a un coût, et la solution techniquement la plus élégante n'est pas toujours celle que le contexte justifie.",
      "C'est la compétence humaine qui structure le plus ma pratique technique, parce qu'elle intervient à chaque décision d'architecture comme à chaque anomalie.",
    ],
    actualite:
      "La diffusion des assistants de génération de code déplace la valeur du développeur : produire du code devient rapide, mais poser correctement un problème, juger de la pertinence d'une solution proposée et en assumer les conséquences ne s'automatise pas. Le discernement — savoir ce qu'on cherche et reconnaître une mauvaise réponse — devient la compétence différenciante, précisément parce que la production de code ne l'est plus.",
    anecdotes: [
      {
        titre: "Traiter la complexité d'un domaine par la modélisation plutôt que par le code",
        contexte:
          "Sur la GMAO, la difficulté initiale se présentait comme un problème de développement : beaucoup de fonctionnalités à produire dans un temps contraint, sur une application déjà engagée par quelqu'un d'autre. En analysant, j'ai compris que le problème était en amont — je ne connaissais pas le métier, et la densité des relations entre équipements, interventions, techniciens et pièces détachées rendait toute implémentation prématurée coûteuse à défaire.",
        action:
          "J'ai résisté à l'impulsion de produire des écrans pour montrer une avancée visible. Ma première phase a été d'interroger les personnes concernées — responsables d'entité, techniciens, commerciaux — pour m'approprier leur vocabulaire et identifier ce qui était réellement attendu. La modélisation est venue ensuite : décomposer le besoin en entités, vérifier chaque relation contre un cas d'usage concret, et ne construire les vues qu'au-dessus.",
        resultat:
          "Le socle métier s'est affiné au fil des fonctionnalités ajoutées sans jamais devoir être restructuré, alors qu'une reprise de fond en comble aurait coûté bien plus que le temps que je pensais gagner en commençant par l'interface.",
        valeurAjoutee:
          "J'ai reformulé un problème de vitesse en problème de conception. Identifier qu'on ne traite pas le bon problème est la partie la plus rentable de la résolution, et la plus facile à sauter sous pression.",
        projetSlug: "gmao-django",
      },
      {
        titre: "Choisir l'intégration plutôt que le développement spécifique",
        contexte:
          "L'application de gestion de stock nécessitait la génération et la lecture de QR Codes. J'aurais pu développer cette brique moi-même : c'était techniquement formateur, mais cela consommait l'essentiel du temps disponible pour une fonction qui n'était pas le cœur de valeur du projet.",
        action:
          "J'ai posé la question en termes de proportion : ce qui fait la valeur de cette application, c'est la gestion de stock, pas l'algorithme de décodage. J'ai donc intégré la bibliothèque ZXing, éprouvée et maintenue, et réinvesti le temps dégagé dans la fiabilité du scan et sa place dans le parcours de l'utilisateur.",
        resultat:
          "La fonction de scan est fiable dès la première version, et le temps qui serait parti dans la réécriture d'un décodeur est allé au reste de l'application.",
        valeurAjoutee:
          "J'ai arbitré entre ce qu'il fallait maîtriser et ce qu'il fallait intégrer. Savoir où ne pas dépenser son effort est une compétence de résolution de problèmes à part entière, souvent moins spontanée chez un développeur en formation que la volonté de tout construire soi-même.",
        projetSlug: "gestion-stock-qrcode",
      },
    ],
    autocritique: {
      maitrise:
        "C'est ma compétence humaine la plus solide et celle sur laquelle je m'appuie le plus. Je décompose un problème complexe de manière méthodique et je remonte à une cause réelle sans procéder par essais successifs.",
      importance:
        "Elle est centrale dans mon profil parce qu'elle conditionne toutes mes compétences techniques. Un langage s'apprend en quelques semaines ; la méthode d'analyse est ce qui reste transférable d'un projet et d'une technologie à l'autre.",
      acquisition:
        "Je l'ai développée plus vite que mes compétences techniques, sans doute parce qu'elle précède l'outil : elle m'a été utile avant même que je sache l'exprimer en code.",
      recul:
        "Mon défaut est de vouloir comprendre entièrement avant d'agir. Cette exigence me sert sur les problèmes de conception, mais elle me ralentit sur des sujets où une solution imparfaite mais immédiate suffirait. J'apprends à distinguer les décisions réversibles, où il faut avancer vite, des décisions structurantes, où l'analyse est justifiée. Le conseil que je donnerais : reformuler le problème à voix haute avant de chercher une solution. La reformulation résout ou dissout une bonne part des problèmes.",
    },
    evolution: {
      objectif:
        "À moyen terme, je veux savoir conduire une analyse de cause racine sur un incident de production, avec la méthode et la traçabilité que cela suppose, et gagner en rapidité d'arbitrage sur les décisions réversibles.",
      formations: [
        "Méthodes d'analyse de cause racine et conduite de post-mortems",
        "Observabilité applicative : journalisation, métriques et diagnostic en production",
        "Pratique du débogage outillé plutôt qu'exploratoire",
      ],
    },
    projets: [
      "gmao-django",
      "gestion-stock-qrcode",
      "projet-wordpress",
      "shopwise",
    ],
  },
  {
    slug: "organisation",
    nom: "Organisation",
    domaine: "humaine",
    categorie: "Planification & priorisation",
    icone: "FaTasks",
    niveau: 75,
    resume:
      "Découper un projet en étapes tenables, hiérarchiser ce qui compte et livrer dans les délais annoncés.",
    definition: [
      "L'organisation consiste à transformer un objectif global en une suite d'étapes réalisables, ordonnées selon leurs dépendances et leur importance, puis à tenir cette trajectoire malgré les imprévus.",
      "Dans un métier d'ingénierie, elle se confond largement avec la capacité à prioriser. Le temps disponible est toujours inférieur à ce que le périmètre idéal exigerait : la question n'est jamais de tout faire, mais de choisir ce qui doit exister en premier et d'assumer ce qui attendra. Une organisation efficace se reconnaît moins à un planning détaillé qu'à la clarté des arbitrages qu'elle rend possibles.",
      "Je l'applique en conduisant mes projets par phases, en commençant systématiquement par les fondations dont le reste dépend.",
    ],
    actualite:
      "La généralisation du travail hybride a renforcé l'exigence d'autonomie organisationnelle : dans des équipes moins synchrones, la capacité à structurer soi-même son travail et à rendre son avancement visible sans supervision directe est devenue un attendu explicite, y compris pour des profils juniors.",
    anecdotes: [
      {
        titre:
          "Conduire quatre projets techniques distincts au fil de la formation",
        contexte:
          "J'ai mené quatre projets reposant sur des écosystèmes sans recouvrement, deux par deux sur une même période : le plugin WordPress en PHP et l'application Android en Java pendant la licence professionnelle, puis la GMAO en Python et l'étude de cas ShopWise en Java et TypeScript pendant l'alternance. Chaque changement de projet impliquait un changement complet de contexte technique.",
        action:
          "Plutôt que d'alterner en permanence, j'ai traité chaque projet par blocs de travail suffisamment longs pour amortir le coût du changement de contexte. À l'intérieur de chacun, j'ai appliqué le même ordre : d'abord le modèle de données, puis la logique métier, puis l'interface — en identifiant les dépendances avant de commencer plutôt qu'en les découvrant en route.",
        resultat:
          "Les quatre projets ont été menés à un état fonctionnel et documenté, chacun avec son architecture propre à son écosystème.",
        valeurAjoutee:
          "J'ai reconnu que le coût réel n'était pas le volume de travail mais la fragmentation, et j'ai organisé mon temps en conséquence. Structurer par dépendances plutôt que par urgence perçue est ce qui m'a permis de ne pas avoir à revenir en arrière.",
        projetSlug: "gmao-django",
      },
    ],
    autocritique: {
      maitrise:
        "Je suis fiable sur ce point : je découpe un projet en étapes cohérentes, j'identifie les dépendances avant de commencer et je tiens les délais que j'annonce.",
      importance:
        "C'est une compétence de fond dans mon profil. Elle ne se remarque pas quand elle est présente, elle se voit immédiatement quand elle manque — et c'est souvent ce qui distingue deux développeurs de niveau technique équivalent.",
      recul:
        "Ma limite est que mon organisation reste personnelle : elle fonctionne pour mon propre travail, elle n'a pas encore été éprouvée dans la coordination d'une équipe où les dépendances portent sur le travail d'autrui. J'ai également tendance à sous-estimer les temps d'intégration, plus difficiles à borner que les temps de développement. Le conseil que je me donne : écrire le plan avant de commencer, même sommairement — un découpage tenu en tête glisse toujours vers l'ordre de la facilité.",
    },
    evolution: {
      objectif:
        "À moyen terme, je veux être capable d'organiser le travail d'une petite équipe et non plus seulement le mien : estimer une charge collective, répartir des tâches selon les dépendances et rendre l'avancement visible aux parties prenantes.",
      formations: [
        "Méthodes agiles : Scrum et Kanban appliqués à une équipe de développement",
        "Techniques d'estimation de charge et gestion des dépendances",
        "Outils de suivi de projet collaboratifs",
      ],
    },
    projets: [
      "gmao-django",
      "projet-wordpress",
      "gestion-stock-qrcode",
      "shopwise",
    ],
  },
  {
    slug: "adaptabilite",
    nom: "Adaptabilité",
    domaine: "humaine",
    categorie: "Apprentissage & agilité",
    icone: "FaSyncAlt",
    niveau: 90,
    resume:
      "Devenir opérationnel rapidement sur une technologie ou un contexte nouveaux, sans repartir de zéro à chaque fois.",
    definition: [
      "L'adaptabilité est la capacité à atteindre rapidement un niveau opérationnel dans un environnement technique ou organisationnel qu'on ne connaît pas. Elle ne se réduit pas à la curiosité : elle suppose une méthode d'apprentissage, et surtout la capacité à reconnaître ce qui, dans un contexte nouveau, relève de principes déjà connus.",
      "C'est probablement la compétence la plus déterminante d'une carrière en ingénierie logicielle, parce que la durée de vie utile d'une technologie est plus courte que celle d'une carrière. Un professionnel qui n'aurait maîtrisé qu'une pile technique serait obsolète en une décennie. En contexte professionnel, l'adaptabilité est ce que recherchent réellement les recruteurs derrière la liste de technologies d'une offre : la capacité à absorber celle qui n'y figure pas encore.",
      "Je l'ai éprouvée en passant successivement par des écosystèmes sans recouvrement — PHP, Java, Python, TypeScript — au fil de ma formation et de mon alternance.",
    ],
    actualite:
      "L'accélération du cycle des outils, amplifiée par l'irruption des assistants de développement dans les pratiques quotidiennes, a raccourci la durée de pertinence d'un savoir technique donné. Les référentiels de compétences du secteur mettent désormais l'apprenance au même rang que la maîtrise technique : ce qui est valorisé n'est plus le stock de connaissances mais la vitesse à laquelle il se renouvelle.",
    anecdotes: [
      {
        titre: "Quatre écosystèmes sans recouvrement en quatre ans",
        contexte:
          "Mes projets m'ont conduit à travailler successivement en PHP dans l'écosystème WordPress, en Java sur Android, en Python avec Django, puis en Java avec Spring Boot et en TypeScript avec Angular. Ces environnements ne partagent ni langage, ni outillage, ni conventions d'architecture.",
        action:
          "Plutôt que d'aborder chacun comme un apprentissage indépendant, j'ai cherché systématiquement les invariants : la logique CRUD que j'avais structurée en classes dans le plugin WordPress m'a préparé aux modèles Django ; le travail de modélisation relationnelle mené sur MySQL s'est transposé à SQLite puis à PostgreSQL ; la séparation des responsabilités que j'avais appliquée en PHP a trouvé son équivalent dans l'architecture MVT de Django, puis dans le découpage en couches de Spring Boot.",
        resultat:
          "Chaque nouvel écosystème a demandé moins de temps d'appropriation que le précédent, et les quatre projets ont abouti à un état fonctionnel malgré des piles techniques entièrement distinctes.",
        valeurAjoutee:
          "J'ai appris à transférer des principes plutôt qu'à accumuler des syntaxes. C'est ce qui rend un apprentissage cumulatif au lieu d'être répétitif, et ce qui me permet d'annoncer honnêtement que je peux être opérationnel sur une technologie que je ne connais pas encore.",
        projetSlug: "projet-wordpress",
      },
    ],
    autocritique: {
      maitrise:
        "C'est ma compétence la plus forte, humaine comme technique. Je deviens opérationnel rapidement sur un environnement nouveau et j'aborde un changement de pile technique sans appréhension particulière.",
      importance:
        "Elle occupe la première place dans mon projet professionnel. C'est elle qui me permet d'envisager sereinement des postes dont je ne maîtrise pas encore toute la pile, et c'est l'argument que je mets en avant lorsque mon expérience sur une technologie donnée est limitée.",
      acquisition:
        "Elle s'est construite par nécessité plutôt que par choix : la variété imposée par ma formation m'a contraint à développer une méthode d'appropriation rapide. C'est rétrospectivement le bénéfice le plus durable que j'en retire.",
      recul:
        "Le revers est réel et je l'assume : à passer vite d'une technologie à l'autre, on risque une compétence large et peu profonde. Je sais rendre un projet fonctionnel dans plusieurs écosystèmes ; je ne suis expert d'aucun. C'est pourquoi je choisis désormais délibérément d'approfondir React, Next.js et Django plutôt que d'ajouter de nouvelles technologies à ma liste. Le conseil que j'en tire : l'adaptabilité doit servir à choisir sa spécialisation, pas à l'éviter.",
    },
    evolution: {
      objectif:
        "À moyen terme, je veux convertir cette adaptabilité en expertise assumée sur une pile principale — React, Next.js et Django — tout en conservant la capacité d'intervenir hors de ce périmètre lorsque le projet l'exige.",
      formations: [
        "Approfondissement ciblé de l'écosystème React et Next.js plutôt qu'élargissement",
        "Veille technologique structurée et régulière",
        "Contribution à des projets open source pour confronter mes pratiques à celles d'autres développeurs",
      ],
    },
    projets: [
      "projet-wordpress",
      "gestion-stock-qrcode",
      "gmao-django",
      "shopwise",
    ],
  },
  {
    slug: "travail-en-equipe",
    nom: "Travail en équipe",
    domaine: "humaine",
    categorie: "Collaboration",
    icone: "FaUsers",
    niveau: 78,
    resume:
      "Produire un travail qui s'intègre à celui des autres et reste reprenable par quelqu'un d'autre que soi.",
    definition: [
      "Le travail en équipe, dans le développement logiciel, dépasse largement l'entente entre personnes. Il consiste à produire un travail intégrable : du code lisible par autrui, des conventions respectées, un historique compréhensible, une documentation suffisante pour que quelqu'un reprenne le projet sans son auteur.",
      "En contexte professionnel, c'est ce qui différencie un développeur autonome d'un développeur isolé. Le premier produit un travail sur lequel une équipe peut construire ; le second produit un travail qui ne fonctionne qu'entre ses mains. Une part importante de cette compétence est donc technique — nommage, structure, versionnement — autant que relationnelle.",
      "Je l'exerce d'abord par la discipline que je m'impose sur du code pourtant écrit seul : structurer, nommer et commenter comme si quelqu'un devait reprendre le projet demain.",
    ],
    actualite:
      "La revue de code s'est imposée comme la pratique collaborative centrale du développement logiciel, et les cadres réglementaires récents sur la sécurité applicative la rendent souvent obligatoire dans les organisations concernées. Elle change la nature du travail attendu : produire du code qui fonctionne ne suffit plus, il faut produire du code qu'un pair peut relire, comprendre et valider dans un temps raisonnable.",
    anecdotes: [
      {
        titre: "Écrire pour un futur lecteur qui n'est pas soi",
        contexte:
          "Mes projets de formation ont été menés majoritairement seuls, ce qui expose à une dérive courante : produire un code qui ne tient que par la mémoire qu'on en a. Sur le plugin WordPress notamment, l'écosystème pousse à concentrer la logique dans quelques fichiers volumineux.",
        action:
          "J'ai choisi de travailler comme si le projet devait changer de mains. J'ai séparé le plugin en responsabilités distinctes — CRUD, vues d'administration, actions, shortcodes, helpers — et j'ai nommé chaque élément pour être compris sans commentaire. Sur ce portfolio, j'ai poussé la même logique en isolant l'intégralité du contenu dans des fichiers de données typés, séparés des composants d'affichage.",
        resultat:
          "Chaque responsabilité est localisable dans un fichier dédié, et modifier le contenu du portfolio ne demande aucune lecture du code d'interface.",
        valeurAjoutee:
          "J'ai traité la lisibilité comme une exigence de production et non comme une politesse. C'est la condition pour qu'un travail individuel puisse s'intégrer dans un contexte collectif, et l'habitude que je considère la plus transférable en entreprise.",
        projetSlug: "projet-wordpress",
      },
    ],
    autocritique: {
      maitrise:
        "Mon niveau est intermédiaire, et c'est ici que mon autocritique est la plus franche. Je produis un travail structuré et reprenable, ce qui en constitue la moitié technique. Mais mon expérience de la collaboration réelle — revue de code, branches partagées, arbitrage collectif sur une architecture — reste limitée par le format majoritairement individuel de mes projets de formation.",
      importance:
        "C'est la compétence dont l'écart entre son importance dans mon futur métier et mon niveau actuel est le plus grand. En entreprise, elle conditionne à peu près tout le reste, et je la considère donc comme ma priorité de progression.",
      recul:
        "Je dois chercher activement les situations collaboratives plutôt que les subir : demander des revues sur mon code, contribuer à des projets ouverts, travailler sur des dépôts partagés. Le conseil que je m'applique : écrire chaque commit et chaque nom de variable en imaginant un relecteur. Cette seule discipline fait la majeure partie du travail avant même que l'équipe existe.",
    },
    evolution: {
      objectif:
        "À moyen terme, je veux acquérir une pratique réelle et régulière de la collaboration technique : participer à des revues de code dans les deux sens, travailler sur un dépôt partagé selon une stratégie de branches établie, et savoir défendre puis abandonner une position technique dans une discussion d'équipe.",
      formations: [
        "Pratique de la revue de code : donner et recevoir un retour technique",
        "Flux de travail Git en équipe et gestion des conflits sur branches partagées",
        "Contribution à des projets open source pour confronter ma pratique à des standards collectifs",
      ],
    },
    projets: ["gestion-stock-qrcode", "gmao-django"],
  },
  {
    slug: "communication",
    nom: "Communication",
    domaine: "humaine",
    categorie: "Transmission & vulgarisation",
    icone: "FaComments",
    niveau: 62,
    resume:
      "Expliquer un travail technique à des interlocuteurs qui ne le sont pas, à l'oral comme à l'écrit.",
    definition: [
      "La communication, dans un métier technique, consiste principalement à ajuster son niveau de discours à son interlocuteur : documenter une décision pour un pair, expliquer une contrainte à un décideur, reformuler un besoin exprimé par un utilisateur en spécification exploitable.",
      "C'est une compétence à fort effet de levier, parce qu'elle conditionne la reconnaissance du travail technique. Un développeur incapable d'expliquer pourquoi une solution coûte trois semaines plutôt qu'une se verra imposer des délais intenables ; celui qui sait l'expliquer participe à l'arbitrage. En contexte professionnel, elle détermine largement le passage d'un rôle d'exécution à un rôle de conception.",
      "Je l'exerce principalement à l'écrit — documentation de projet, formalisation de choix techniques — et à l'oral lors des présentations de mes travaux.",
    ],
    actualite:
      "L'écrit asynchrone est devenu le principal support de coordination des équipes techniques depuis la généralisation du travail hybride. La qualité de la documentation, des messages de commit et des descriptions de tâches n'est plus un complément au travail mais une part constitutive de celui-ci : dans une équipe distribuée, ce qui n'est pas écrit clairement n'existe pas.",
    anecdotes: [
      {
        titre: "Traduire un besoin métier en spécification technique",
        contexte:
          "Le projet de GMAO supposait de reproduire les fonctions d'un logiciel professionnel de maintenance industrielle, dans un domaine — maintenance préventive et corrective, ordres de travail, gestion des pièces détachées — dont le vocabulaire n'est pas celui du développement.",
        action:
          "J'ai commencé par m'approprier le vocabulaire métier avant de le traduire en modèle technique, en veillant à ce que les entités de mon modèle portent les noms du domaine plutôt que des abstractions de développeur. J'ai ensuite conçu le tableau de bord en me demandant quels indicateurs un responsable de maintenance regarde réellement, plutôt que quelles statistiques la base permettait de produire.",
        resultat:
          "L'application restitue des indicateurs directement interprétables par un utilisateur métier, et le modèle de données reste lisible par quelqu'un qui connaît la maintenance sans connaître Django.",
        valeurAjoutee:
          "J'ai fait le trajet dans les deux sens — du besoin métier vers la technique, puis de la technique vers une restitution compréhensible. Nommer les entités techniques dans le vocabulaire du métier est un choix de communication autant que de conception : il réduit durablement les malentendus entre l'équipe et ses utilisateurs.",
        projetSlug: "gmao-django",
      },
    ],
    autocritique: {
      maitrise:
        "Je suis à l'aise à l'écrit, en particulier pour structurer et documenter un raisonnement technique. Mon niveau est plus inégal à l'oral face à un public non technique, où j'ai tendance à entrer dans le détail d'implémentation avant d'avoir posé l'enjeu.",
      importance:
        "C'est une compétence dont j'ai longtemps sous-estimé le poids et que je considère aujourd'hui comme déterminante pour mon évolution. La différence entre un développeur qui exécute et un ingénieur qui conçoit tient largement à sa capacité à expliquer et défendre ses choix.",
      recul:
        "Mon principal défaut est de commencer par le comment avant le pourquoi. Je progresse en m'imposant une règle simple : énoncer d'abord l'enjeu et le résultat, et ne descendre dans la mise en œuvre que si l'interlocuteur le demande. Le conseil que je donnerais : si l'on ne sait pas expliquer une solution technique à quelqu'un qui n'est pas du domaine, c'est souvent qu'on ne l'a pas encore complètement comprise soi-même.",
    },
    evolution: {
      objectif:
        "À moyen terme, je veux être capable de présenter et défendre une décision d'architecture devant des interlocuteurs mixtes, techniques et métier, en adaptant mon niveau de discours sans perdre en précision.",
      formations: [
        "Rédaction de documentation technique et de décisions d'architecture",
        "Prise de parole et vulgarisation technique",
        "Anglais technique : lecture, rédaction et échange professionnel",
      ],
    },
    projets: ["gmao-django", "projet-wordpress"],
  },
];

/**
 * Toutes les compétences, de la plus maîtrisée à la plus perfectible.
 *
 * C'est l'ordre de référence du portfolio : le schéma synthétique, les cartes,
 * les sous-menus et l'aperçu de la page d'accueil s'appuient tous dessus, pour
 * qu'un même classement se lise partout. Les niveaux sont strictement
 * décroissants, le tri suffit donc à porter la hiérarchie voulue.
 */
export const competencesClassees = [...competences].sort(
  (a, b) => b.niveau - a.niveau
);

export const competencesTechniques = competencesClassees.filter(
  (competence) => competence.domaine === "technique"
);

export const competencesHumaines = competencesClassees.filter(
  (competence) => competence.domaine === "humaine"
);

export function trouverCompetence(slug: string): Competence | undefined {
  return competences.find((competence) => competence.slug === slug);
}

/**
 * Navigation circulaire : retrouve les compétences rattachées à une réalisation.
 */
export function competencesDuProjet(slugProjet: string): Competence[] {
  return competences.filter((competence) =>
    competence.projets.includes(slugProjet)
  );
}
