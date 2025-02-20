-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "guest" (
	"guest_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"celebration_id" uuid NOT NULL,
	"is_coming" boolean,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "guest" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "avatar" (
	"avatar_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"picture_description" varchar,
	"picture" varchar,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "avatar" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "celebration_type" (
	"celebration_type_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"category" varchar,
	"picture" varchar,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "celebration_type" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "celebration" (
	"celebration_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"celebration_type" uuid,
	"name" varchar,
	"description" varchar,
	"address" varchar,
	"date" date,
	"hour" time,
	"author" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "celebration" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "user" (
	"alias" varchar,
	"email" varchar,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"user_id" uuid PRIMARY KEY NOT NULL,
	"avatar" uuid DEFAULT '1fc5e9e4-891e-4360-b912-ed11b7ba3c1a',
	"is_l_o_vegetarian" boolean DEFAULT false,
	"is_o_vegetarian" boolean DEFAULT false,
	"is_l_vegetarian" boolean DEFAULT false,
	"is_vegetalien" boolean DEFAULT false,
	"is_vegan" boolean DEFAULT false,
	"is_pescetarian" boolean DEFAULT false,
	"is_frugivore" boolean DEFAULT false,
	"is_rawfoodist" boolean DEFAULT false,
	"has_gluten_allergy" boolean DEFAULT false,
	"has_crustaceans_allergy" boolean DEFAULT false,
	"has_eggs_allergy" boolean DEFAULT false,
	"has_peanuts_allergy" boolean DEFAULT false,
	"has_fish_allergy" boolean DEFAULT false,
	"has_soy_allergy" boolean DEFAULT false,
	"has_milk_allergy" boolean DEFAULT false,
	"has_nuts_allergy" boolean DEFAULT false,
	"has_celery_allergy" boolean DEFAULT false,
	"has_mustard_allergy" boolean DEFAULT false,
	"has_sesame_allergy" boolean DEFAULT false,
	"has_sulfite_allergy" boolean DEFAULT false,
	"has_lupin_allergy" boolean DEFAULT false,
	"has_sellfish_allergy" boolean DEFAULT false,
	CONSTRAINT "user_alias_key" UNIQUE("alias"),
	CONSTRAINT "user_email_key" UNIQUE("email"),
	CONSTRAINT "user_user_id_key" UNIQUE("user_id")
);
--> statement-breakpoint
ALTER TABLE "user" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "guest" ADD CONSTRAINT "guest_celebration_id_fkey" FOREIGN KEY ("celebration_id") REFERENCES "public"."celebration"("celebration_id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "guest" ADD CONSTRAINT "guest_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("user_id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "celebration" ADD CONSTRAINT "celebration_author_fkey" FOREIGN KEY ("author") REFERENCES "public"."user"("user_id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "celebration" ADD CONSTRAINT "celebration_celebration_type_fkey" FOREIGN KEY ("celebration_type") REFERENCES "public"."celebration_type"("celebration_type_id") ON DELETE set default ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_avatar_fkey" FOREIGN KEY ("avatar") REFERENCES "public"."avatar"("avatar_id") ON DELETE set default ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
CREATE POLICY "guest policy" ON "guest" AS PERMISSIVE FOR ALL TO public USING (true);--> statement-breakpoint
CREATE POLICY "avatar policy" ON "avatar" AS PERMISSIVE FOR ALL TO public USING (true);--> statement-breakpoint
CREATE POLICY "celebration type policy" ON "celebration_type" AS PERMISSIVE FOR ALL TO public USING (true);--> statement-breakpoint
CREATE POLICY "Celebration policy" ON "celebration" AS PERMISSIVE FOR ALL TO public USING (true);--> statement-breakpoint
CREATE POLICY "user policy" ON "user" AS PERMISSIVE FOR ALL TO public USING (true);
*/