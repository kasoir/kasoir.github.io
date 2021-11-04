DO $$ BEGIN

CREATE TABLE IF NOT EXISTS public."actor" (
	id TEXT DEFAULT uuid_generate_v1()
);

EXECUTE public.checkPrimaryKey('actor', 'actor_pk');

EXECUTE public.ensureTextFieldinTable('actor', 'name');
ALTER TABLE public."actor" ALTER COLUMN "name" SET NOT NULL;

EXECUTE public.ensureNumericFieldinTable('actor', 'age');

EXECUTE public.ensureTextFieldinTable('actor', 'birth');

EXECUTE public.ensureTextFieldinTable('actor', 'movies');

IF public.getFieldType('actor', 'movies') != 'ARRAY' THEN
  ALTER TABLE public."actor"
  ALTER COLUMN "movies" TYPE JSON []
  USING "movies"::JSON [];
END IF;

END $$
