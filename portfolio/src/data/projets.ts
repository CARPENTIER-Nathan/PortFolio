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
    slug: "projet-wordpress",
    titre: "Plateforme de Voyages WordPress",
    description:
      "Développement d'une plateforme web de gestion de voyages avec WordPress, incluant un plugin personnalisé permettant la gestion des utilisateurs, des destinations et des voyages effectués.",
    contexte:
      "Ce projet a été réalisé dans le cadre de ma formation. L'objectif était de concevoir une plateforme web complète autour du thème du voyage, avec un système de gestion des utilisateurs et de leurs destinations. Le projet inclut un thème WordPress personnalisé ainsi qu'un plugin sur-mesure (NC_Projet) gérant l'ensemble de la logique métier.",
    poste: "Développeur Web",
    objectifs: [
      "Créer un plugin WordPress personnalisé avec une architecture CRUD complète",
      "Développer un système de gestion des utilisateurs (inscription, profil, civilité)",
      "Mettre en place une gestion des pays/destinations avec notation et restrictions d'âge",
      "Permettre l'enregistrement des voyages effectués par chaque utilisateur",
      "Concevoir un thème WordPress personnalisé adapté au projet",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "CSS", "MySQL", "HTML"],
    defis:
      "Le principal défi a été de développer un plugin WordPress complet avec une architecture modulaire (classes CRUD, vues admin, shortcodes, helpers) tout en respectant les bonnes pratiques WordPress. La gestion des relations entre utilisateurs, pays et voyages dans la base de données a également nécessité une conception soignée.",
    solutions:
      "J'ai structuré le plugin en suivant une architecture MVC avec des classes séparées pour le CRUD, les vues, les actions et les shortcodes. Le back-office permet aux administrateurs de gérer les pays disponibles (avec notation et restriction aux majeurs), tandis que le système associe chaque utilisateur à ses voyages effectués via des tables relationnelles MySQL.",
    image: "/images/Wordpress.webp",
  },
  {
    slug: "gestion-stock-qrcode",
    titre: "Gestion de Stock avec QR Code",
    description:
      "Application mobile Android de gestion de stock permettant de générer et scanner des QR Codes pour le suivi des produits en temps réel.",
    contexte:
      "Ce projet a été réalisé dans le cadre de ma formation. L'objectif était de développer une application mobile Android native en Java permettant de gérer un inventaire de stock de manière efficace, en intégrant la génération et la lecture de QR Codes pour identifier rapidement les produits.",
    poste: "Développeur Mobile Android",
    objectifs: [
      "Développer une application Android native en Java pour la gestion de stock",
      "Implémenter la génération de QR Codes pour chaque produit de l'inventaire",
      "Intégrer un scanner de QR Codes pour la recherche et la mise à jour rapide des stocks",
      "Concevoir une interface utilisateur intuitive pour le suivi des entrées et sorties de stock",
      "Mettre en place une base de données locale pour le stockage des produits",
    ],
    technologies: ["Java", "Android Studio", "SQLite", "ZXing (QR Code)"],
    defis:
      "Le principal défi a été d'intégrer la génération et la lecture de QR Codes de manière fluide dans l'application, tout en assurant une gestion fiable des données de stock. L'optimisation de l'interface pour une utilisation rapide en contexte professionnel (entrepôt, magasin) a également été un enjeu important.",
    solutions:
      "J'ai utilisé la bibliothèque ZXing pour la génération et le scan de QR Codes, ce qui a permis une intégration rapide et fiable. La base de données SQLite assure la persistance des données en local, et l'interface a été conçue pour permettre des actions rapides (ajout, modification, suppression de produits) en un minimum d'étapes.",
    image: "/images/Entrepot.png",
  },
  {
    slug: "gmao-django",
    titre: "GMAO - Gestion de Maintenance Assistée par Ordinateur",
    description:
      "Application web de GMAO inspirée de Solitech, développée avec Django, permettant la gestion complète de la maintenance des équipements industriels.",
    contexte:
      "Ce projet a été réalisé dans le cadre de ma formation. L'objectif était de concevoir une application web de Gestion de Maintenance Assistée par Ordinateur (GMAO) similaire à Solitech, permettant aux entreprises de planifier, suivre et optimiser la maintenance de leurs équipements et installations.",
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
      "Le principal défi a été de reproduire les fonctionnalités clés d'un logiciel de GMAO professionnel comme Solitech, notamment la gestion des interventions préventives et correctives, le suivi en temps réel du statut des équipements et la génération de rapports. La modélisation de la base de données avec les nombreuses relations entre équipements, interventions, techniciens et pièces détachées a nécessité une conception rigoureuse.",
    solutions:
      "J'ai structuré le projet en utilisant l'architecture MVT de Django, avec des modèles bien définis pour les équipements, les interventions, les techniciens et les pièces détachées. Le système d'authentification de Django a permis de gérer les rôles (administrateur, technicien, responsable). Le tableau de bord exploite les ORM queries de Django pour afficher les statistiques de maintenance en temps réel.",
    image: "/images/GMAO.png",
  },
];
