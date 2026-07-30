# CV Interactif — Khalifa Seck

## Présentation du projet

Ce projet est un **CV interactif** développé dans le cadre du module de
Développement Web en Licence 2 Informatique (Université Iba Der Thiam de
Thiès). Il présente le parcours, les compétences, les projets et les
coordonnées de Khalifa Seck sous la forme d'une page web moderne, responsive
et interactive.

## Palette de couleurs

Le thème reprend une identité Bleu Océan, sobre et professionnelle :

| Élément | Couleur | Code |
|---|---|---|
| Couleur principale | Bleu marine | `#1E3A5F` |
| Couleur secondaire | Bleu moyen | `#2E6F95` |
| Couleur d'accent | Orange doux | `#F2994A` |
| Fond | Blanc cassé | `#FDFDFD` |
| Texte | Gris anthracite | `#2C2C2C` |

Un mode sombre dédié est disponible avec ses propres teintes (fond `#0F172A`,
surfaces `#1E293B`) et n'est pas affecté par ce changement de palette.

## Technologies utilisées

- **HTML5** : structure sémantique de la page (header, nav, main, section,
  article, footer).
- **CSS3** : mise en forme, variables CSS, Flexbox, Grid, media queries,
  transitions.
- **JavaScript (Vanilla)** : interactivité (aucune bibliothèque ni framework
  externe).
- **Google Fonts** : polices *Poppins* et *Roboto*.

Aucun framework CSS (Bootstrap, Tailwind...) ni bibliothèque JavaScript
(jQuery, React...) n'est utilisé : tout le code est écrit à la main.

## Fonctionnalités

- Section Expériences présentant mes projets sous forme d'expérience pratique.
- Menu de navigation avec ancres vers chaque section.
- Menu hamburger responsive pour les écrans mobiles.
- Mode sombre / mode clair avec sauvegarde du choix dans le `localStorage`.
- Barres de compétences animées au défilement grâce à
  `IntersectionObserver`.
- Formulaire de contact avec validation JavaScript (champs obligatoires et
  format d'e-mail).
- Bouton "Retour en haut" qui apparaît lors du défilement.
- Design entièrement responsive (ordinateur, tablette, téléphone).

## Structure des fichiers

```
mon-cv/
│── index.html          # Page principale du CV
│── css/
│   └── style.css        # Feuille de style (organisée par sections commentées)
│── js/
│   └── script.js         # Script JavaScript (organisé par fonctionnalité)
│── images/
│   └── photo-profil.jpg  # Photo de profil
│── README.md            # Ce fichier
```

## Instructions d'utilisation

1. Décompresser le dossier `mon-cv`.
2. Ouvrir le fichier `index.html` directement dans un navigateur web
   (Chrome, Firefox...). Aucune installation ni serveur n'est nécessaire.
3. Naviguer entre les sections grâce au menu, tester le mode sombre/clair,
   les barres de compétences et le formulaire de contact.

## Auteur

**Khalifa Seck** — Étudiant en Licence 2 Informatique
Saint-Louis, Sénégal
