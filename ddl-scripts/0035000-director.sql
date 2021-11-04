DO $$ BEGIN

CREATE TABLE IF NOT EXISTS public."director" (
	id TEXT DEFAULT uuid_generate_v1()
);

EXECUTE public.checkPrimaryKey('director', 'director_pk');

EXECUTE public.ensureTextFieldinTable('director', 'name');
ALTER TABLE public."director" ALTER COLUMN "name" SET NOT NULL;

EXECUTE public.ensureTextFieldinTable('director', 'nationality');

END $$
