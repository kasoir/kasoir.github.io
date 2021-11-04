DO $$ BEGIN

CREATE TABLE IF NOT EXISTS public."sales" (
	id TEXT DEFAULT uuid_generate_v1()
);

EXECUTE public.checkPrimaryKey('sales', 'sales_pk');

EXECUTE public.ensureTextFieldinTable('sales', 'name');
ALTER TABLE public."sales" ALTER COLUMN "name" SET NOT NULL;

EXECUTE public.ensureTextFieldinTable('sales', 'date');
ALTER TABLE public."sales" ALTER COLUMN "date" SET DEFAULT to_char(CURRENT_DATE, 'YYYYMMDD');

EXECUTE public.ensureNumericFieldinTable('sales', 'price');

END $$
