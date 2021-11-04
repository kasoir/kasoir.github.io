DO $$ BEGIN

CREATE TABLE IF NOT EXISTS public."movie"();

EXECUTE public.ensureTextFieldinTable('movie', 'id');
ALTER TABLE public."movie" ALTER COLUMN "id" SET DEFAULT uuid_generate_v1();

EXECUTE public.checkPrimaryKey('movie', 'movie_pk');

EXECUTE public.ensureTextFieldinTable('movie', 'name');
EXECUTE public.ensureTextFieldinTable('movie', 'category');
EXECUTE public.ensureTextFieldinTable('movie', 'description');
EXECUTE public.ensureTextFieldinTable('movie', 'director');
EXECUTE public.ensureTextFieldinTable('movie', 'year');
EXECUTE public.ensureNumericFieldinTable('movie', 'rate');
EXECUTE public.ensureNumericFieldinTable('movie', 'price');
EXECUTE public.ensureTextFieldinTable('movie', 'uploadDate');
ALTER TABLE public."movie"  ALTER COLUMN "uploadDate" SET DEFAULT to_char(CURRENT_DATE, 'YYYYMMDD');
EXECUTE public.ensureTextFieldinTable('movie', 'downloadLink');
EXECUTE public.ensureTextFieldinTable('movie', 'coverImage');


END $$