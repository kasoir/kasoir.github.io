DO $$ BEGIN

CREATE TABLE IF NOT EXISTS public."category" (
	id TEXT DEFAULT uuid_generate_v1()
);

EXECUTE public.checkPrimaryKey('category', 'category_pk');

EXECUTE public.ensureTextFieldinTable('category', 'description');
ALTER TABLE public."category" ALTER COLUMN "description" SET NOT NULL;

END $$
