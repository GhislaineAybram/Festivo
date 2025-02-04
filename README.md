# Festivo - projet RNCP

Ce projet est créé dans le cadre du RNCP 37873 TP Concepteur développeur d'applications – Niveau VI.
Festivo est une plateforme de gestion d’événements conçue pour simplifier l’organisation de rassemblements. Les invités peuvent notamment partager leurs allergies ou restrictions alimentaires.

## Lancement du projet

Cloner le repo :

```bash
git clone git@github.com:GhislaineAybram/Festify.git Festivo
```

Configuration des variables d'environnement :
```bash
cd Festivo
cp .env.dist .env
```
Modifiez les variables d'environnement SUPABASE_URL et SUPABASE_KEY du fichier .env avec les informations du projet.

Installation des dépendances :

```bash
npm install
```

Lancement serveur local et exécution Nuxt :

```bash
npm run build
```

```bash
npm run dev
```

## Aperçu du projet

(visuels à venir)

## Tech Stack

- **Langages:** Typescript, CSS
- **Framework Full-stack:** Nuxt (serveur Nitro)
- **Library:** Tailwind, Primevue
- **Database:** Supabase (PostgreSQL)
- **Conteneurisation:** Docker
- **Mise en production:** Vercel

## Fonctionnalités ajoutées

**Système d'authentification**
- [X] Inscription et connexion des utilisateurs via Supabase (authentification sécurisée)
- [X] Affichage de messages d’erreur en cas de non-respect de règles (règles de création du mot de passe, champs non renseigné, …)
- [X] Lien de réinitialisation du mot de passe
- [X] Page de redéfinition du mot de passe (accessible via lien reçu par email)

**Gestion des événements**
- [X] Création d’un événement : formulaire accessible aux utilisateurs authentifiés
- [X] Page événement modifiable par son auteur authentifié
- [X] Invitation des invités via un lien
- [X] Page événement (vision invité) :
  - affichage des informations de l'événement
  - envoi de la réponse à l'événement par l'utilisateur connecté
  - affichage du nombre d'invités et de leurs réponses (via un cercle de couleur autour de leur avatar)
  - affichage des restrictions ou allergies alimentaires des invités ayant confirmé leur présence

**Page de profil utilisateur**
- [X] Affichage et modification possible des informations de l'utilisateur :
  - pseudo
  - avatar
  - restrictions alimentaires
  - allergies alimentaires
- [X] Possibilité de supprimer son compte utilisateur (et données associées) : conformité RGPD
