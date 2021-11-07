CREATE OR REPLACE FUNCTION public.uuid_generate_v1()
    RETURNS uuid
    LANGUAGE 'plpgsql'
    VOLATILE STRICT
    PARALLEL SAFE
    COST 1
    
AS '$libdir/uuid-ossp', 'uuid_generate_v1';