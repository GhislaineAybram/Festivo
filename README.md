# Festivo - projet RNCP

Ce projet est créé dans le cadre du RNCP 37873 TP Concepteur développeur d'applications – Niveau VI.
Festivo est une plateforme de gestion d’événements conçue pour simplifier l’organisation de rassemblements, tout en rendant les informations pertinentes accessibles à l’hôte et aux invités.

## Lancement du projet

Cloner le repo :

```bash
git clone git@github.com:GhislaineAybram/Festify.git Festivo
```

Création base de données :
Créez un projet sur Supabase.
Créez vos tables :
```bash
create table
  public.avatar (
    avatar_id uuid not null default gen_random_uuid (),
    picture_description character varying null,
    picture character varying null,
    created_at timestamp with time zone not null default now(),
    constraint avatar_pkey primary key (avatar_id)
  ) tablespace pg_default;

create table
  public.celebration_type (
    celebration_type_id uuid not null default gen_random_uuid (),
    category character varying null,
    picture character varying null,
    created_at timestamp with time zone not null default now(),
    constraint celebration_type_pkey primary key (celebration_type_id)
  ) tablespace pg_default;

create table
  public.user (
    alias character varying null,
    email character varying null,
    created_at timestamp with time zone not null default now(),
    user_id uuid not null,
    avatar uuid null default '1fc5e9e4-891e-4360-b912-ed11b7ba3c1a'::uuid,
    constraint user_pkey primary key (user_id),
    constraint user_alias_key unique (alias),
    constraint user_email_key unique (email),
    constraint user_user_id_key unique (user_id),
    constraint user_avatar_fkey foreign key (avatar) references avatar (avatar_id) on update cascade on delete set default,
    constraint user_user_id_fkey foreign key (user_id) references auth.users (id) on update cascade on delete cascade
  ) tablespace pg_default;

create table
  public.celebration (
    celebration_id uuid not null default gen_random_uuid (),
    celebration_type uuid null,
    name character varying null,
    description character varying null,
    address character varying null,
    date date null,
    hour time without time zone null,
    author uuid not null,
    created_at timestamp with time zone not null default now(),
    constraint celebration_pkey primary key (celebration_id),
    constraint celebration_author_fkey foreign key (author) references "user" (user_id) on update cascade on delete cascade,
    constraint celebration_celebration_type_fkey foreign key (celebration_type) references celebration_type (celebration_type_id) on update cascade on delete set default
  ) tablespace pg_default;

create table
  public.guest (
    guest_id uuid not null default gen_random_uuid (),
    user_id uuid not null,
    celebration_id uuid not null,
    is_coming boolean null,
    created_at timestamp with time zone not null default now(),
    constraint guest_pkey primary key (guest_id),
    constraint guest_celebration_id_fkey foreign key (celebration_id) references celebration (celebration_id) on update cascade on delete cascade,
    constraint guest_user_id_fkey foreign key (user_id) references "user" (user_id) on update cascade on delete cascade
  ) tablespace pg_default;
```

Configuration des variables d'environnement :
```bash
cd Festivo
cp .env.dist .env
```
Modifiez les variables d'environnement SUPABASE_URL et SUPABASE_KEY de votre .env avec les informations de votre projet créé.

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

- [X] to be done,


