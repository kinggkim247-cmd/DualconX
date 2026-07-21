
-- Fix RLS policies for operational_proofs to allow UPSERT operations for authenticated analysts
-- An UPSERT (INSERT ON CONFLICT DO UPDATE) requires permissions for both INSERT and UPDATE

-- Ensure RLS is enabled
ALTER TABLE public.operational_proofs ENABLE ROW LEVEL SECURITY;

-- Drop existing restricted policies if they exist
DROP POLICY IF EXISTS "Admin CRUD Access Proofs" ON public.operational_proofs;
DROP POLICY IF EXISTS "Public Read Access Proofs" ON public.operational_proofs;

-- 1. Allow everyone to read trust assets
CREATE POLICY "Enable read access for all users"
ON public.operational_proofs
FOR SELECT
USING (true);

-- 2. Allow authenticated analysts to manage trust assets (CRUD + UPSERT)
CREATE POLICY "Enable all access for authenticated analysts"
ON public.operational_proofs
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);
