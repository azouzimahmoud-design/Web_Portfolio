# 🌐 Portfolio Personnel - Azouzi Mahmoud

Bienvenue sur le dépôt de mon site web personnel.
Ce projet a été réalisé dans le cadre du module **Programmation Web 1** (1ère année Génie Informatique à l'IIT Sfax).

🔗 **[Voir le site en ligne (GitHub Pages)](https://azouzimahmoud-design.github.io/Web_Portfolio/)**

---

## 📋 Description du Projet

L'objectif de ce projet est de concevoir un site web statique complet respectant les standards du web (W3C)
Le site présente mon parcours académique, mes compétences, mes centres d'intérêt, et inclut un module interactif en JavaScript.

### Fonctionnalités
* **Structure Multi-pages :** 10 pages HTML interconnectées.
* **Sémantique HTML5 :** Utilisation des balises `<header>`, `<nav>`, `<section>`, `<footer>`.
* **Design CSS3 :** Mise en page soignée (Box Model, Flexbox/Float, Sélecteurs avancés).
* **Interactivité :** Un Quizz de culture web programmé en **JavaScript** (calcul de note dynamique).
* **Formulaires :** Page de contact fonctionnelle via `mailto`.
* **Médias :** Intégration d'images et mise en forme de galeries.

---

## Technologies Utilisées

* **HTML5** (Structure et contenu)
* **CSS3** (Style et mise en page)
* **JavaScript** (Logique du Quizz)
* **Git & GitHub** (Versionning et Hébergement)

---

## Structure du Projet

L'organisation des fichiers respecte les bonnes pratiques :

```text
Web_Portfolio/
│
├── index.html            # Page d'accueil
├── parcours.html         # Mon parcours académique
├── competences.html      # Mes compétences techniques
├── stages.html           # Expériences et projets
├── manifestations.html   # Événements et vie associative
├── matiere.html          # Matières étudiées
├── passions.html         # Mes loisirs
├── quizz.html            # Test de connaissances (JS)
├── temoignage.html       # Témoignage sur l'IIT
├── contact.html          # Formulaire de contact
│
├── README.md             # Documentation du projet
│
└── assets/
    ├── css/              # Feuilles de style (1 fichier par page ou style global)
    │   ├── style.css
    │   ├── quizz.css
    │   └── ...
    │
    ├── images/           # Images et photos du site
    │   ├── moi.jpeg
    │   ├── bac.jpg
    │   └── ...
    │
    └── js/               # Scripts JavaScript
        └── quizz.js