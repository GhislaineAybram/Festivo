/* Creation of the tables */
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
    user_id uuid not null,
    firstname character varying null,
    lastname character varying null,
    alias character varying null,
    email character varying null,
    created_at timestamp with time zone not null default now(),
    avatar uuid null,
    constraint user_pkey primary key (user_id),
    constraint user_avatar_fkey foreign key (avatar) references avatar (avatar_id) on update cascade on delete cascade,
    constraint user_user_id_fkey foreign key (user_id) references auth."users" (id) on update cascade on delete cascade
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
    constraint celebration_author_fkey foreign key (author) references "user" (user_id),
    constraint celebration_celebration_type_fkey foreign key (celebration_type) references celebration_type (celebration_type_id) on update cascade on delete cascade
  ) tablespace pg_default;

create table
  public.guest (
    guest_id uuid not null default gen_random_uuid (),
    user_id uuid not null,
    celebration_id uuid not null,
    is_coming boolean null,
    created_at timestamp with time zone not null default now(),
    constraint guest_pkey primary key (guest_id)
  ) tablespace pg_default;

/* Enable row level security */
alter table public.avatar enable row level security;
alter table public.celebration_type enable row level security;
alter table public.user enable row level security;
alter table public.celebration enable row level security;
alter table public.guest enable row level security;


/* Set up trigger */
/* New user trigger */
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.user (user_id, firstname, lastname, email, alias)
  values (new.id, new.raw_user_meta_data->>'firstname', new.raw_user_meta_data->>'lastname', new.email, new.raw_user_meta_data->>'alias');
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row 
execute procedure public.handle_new_user();

/* Update user information trigger */
/* 
create function update_user()
returns trigger
language plpgsql
as $$
begin
  insert into public.user (user_id, firstname, lastname, email, alias)
  values (new.id, new.raw_user_meta_data->>'firstname', new.raw_user_meta_data->>'lastname', new.email, new.raw_user_meta_data->>'alias');
  return new;
end;
$$;

create trigger user_update
after update on auth.users
for each row 
execute function update_user();
 */

/* Insertion of some data */
INSERT INTO "public"."celebration_type" ("celebration_type_id", "category") 
  VALUES 
  ('1bbb698b-6276-4e1f-91a0-544e045fca71', 'nouvel an'), 
  ('3d41671f-6103-480f-b3ae-16191fb1bd11', 'baby shower'), 
  ('d016615d-6ca8-42a9-9abb-54a35a3234df', 'anniversaire');

INSERT INTO "public"."celebration" ("celebration_type", "name", "description", "address", "date", "hour", "author") 
  VALUES 
  ('d016615d-6ca8-42a9-9abb-54a35a3234df', 'Mes 40 ans', 'Venez trinquer avec moi pour bien démarrer cette nouvelle décennie !', 'Paris', '03-05-2025', '20:00:00', 'c75f47c6-e3a4-45f6-836d-dab8b76e3a25'), 
  ('3d41671f-6103-480f-b3ae-16191fb1bd11', 'Baby shower', 'A vos paris : fille ou garçon ?', 'Meudon', '01-07-2025', '16:00:00', 'c75f47c6-e3a4-45f6-836d-dab8b76e3a25');
