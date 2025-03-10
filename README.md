# Festivo - projet RNCP

Ce projet est créé dans le cadre du RNCP 37873 TP Concepteur développeur d'applications – Niveau VI.

Festivo est une plateforme de gestion d’événements qui répond au double défi de simplifier l’organisation de rassemblements tout en sensibilisant aux différentes restrictions alimentaires souvent mal comprises.
Ainsi, Festivo a comme objectif de transformer la gestion des préférences alimentaires et des besoins spécifiques en un véritable levier de partage et d’échange, plutôt qu’une contrainte organisationnelle.

## Lancement du projet

Cloner le repo :

```bash
git clone git@github.com:GhislaineAybram/Festivo.git festivo
```

Configuration des variables d'environnement :
```bash
cd festivo
cp .env.dist .env
```
puis modifiez les variables d'environnement SUPABASE_URL et SUPABASE_KEY du fichier .env avec les informations du projet.

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

## Docker

Une configuration Docker a été mise en place avec un Dockerfile et un compose.yaml pour permettre l'exécution de l’application dans un environnement conteneurisé.

**Création du docker compose**
```bash
docker-compose up
```
L'application tourne maintenant sur : http://localhost:3000/

**Construction et lancement de l'image Docker**

Construisez l'image docker en exécutant :
```bash
docker build -t festivo .
```

Lancement du conteneur basé sur cette image docker : 
```bash
docker run -env-file .env -p 3000:3000 festivo
```

## Tech Stack

- **Langages:** Typescript, CSS
- **Framework Full-stack:** Nuxt (serveur Nitro)
- **Library:** Tailwind, Primevue
- **Database:** Supabase (PostgreSQL)
- **ORM:** Drizzle
- **Conteneurisation:** Docker
- **Mise en production:** Vercel

## Aperçu du projet

![image](https://github.com/user-attachments/assets/87b9cc05-75e6-48e0-aa8f-3c52d79c17bd)
Page d'accueil du site Festivo

![image](https://github.com/user-attachments/assets/b822f1b0-c193-4eb1-a7bd-bb9f4a6b6c10)
Page événement du site Festivo

![image](https://github.com/user-attachments/assets/8f386a9f-06d9-4a24-91fb-39cd26b9bdb6)
Page profil du site Festivo

## Fonctionnalités ajoutées

**Système d'authentification**
- [X] Inscription et authentification des utilisateurs via Supabase (authentification sécurisée)
- [X] Affichage de messages d’erreur en cas de non-respect des règles (règles de définition du mot de passe, champs non renseigné, …)
- [X] Lien de réinitialisation du mot de passe
- [X] Page de redéfinition du mot de passe (accessible via lien reçu par email)

**Gestion des événements**
- [X] Création d’un événement : formulaire accessible aux utilisateurs authentifiés
- [X] Page événement modifiable par son auteur authentifié (via un middleware)
- [X] Invitation des invités via un lien généré
- [X] Page événement :
  - affichage des informations de l'événement
  - envoi de la réponse à l'événement par l'utilisateur connecté
  - affichage du nombre d'invités et de leurs réponses (via un cercle de couleur autour de l'avatar)
  - affichage des restrictions ou allergies alimentaires "présentes" à l'événement (correspondant aux utilisateurs ayant confirmé leur présence)

**Page profil utilisateur**
- [X] Affichage et modification possible des informations de l'utilisateur :
  - pseudo
  - avatar
  - régimes alimentaires
  - allergies alimentaires
- [X] Possibilité de supprimer son compte utilisateur (et données associées) : conformité RGPD

**Application bilingue**
Site disponible en anglais / français
