-- Fix RLS for case_studies
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access Case Studies" ON public.case_studies;
DROP POLICY IF EXISTS "Admin CRUD Access Case Studies" ON public.case_studies;

CREATE POLICY "Public Read Access Case Studies" ON public.case_studies FOR SELECT USING (true);
CREATE POLICY "Admin CRUD Access Case Studies" ON public.case_studies FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Fix RLS for operational_proofs
ALTER TABLE public.operational_proofs ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access Proofs" ON public.operational_proofs;
DROP POLICY IF EXISTS "Admin CRUD Access Proofs" ON public.operational_proofs;

CREATE POLICY "Public Read Access Proofs" ON public.operational_proofs FOR SELECT USING (true);
CREATE POLICY "Admin CRUD Access Proofs" ON public.operational_proofs FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Fix RLS for articles
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access Articles" ON public.articles;
DROP POLICY IF EXISTS "Admin CRUD Access Articles" ON public.articles;

CREATE POLICY "Public Read Access Articles" ON public.articles FOR SELECT USING (true);
CREATE POLICY "Admin CRUD Access Articles" ON public.articles FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Fix RLS for forensic_results
ALTER TABLE public.forensic_results ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read Access Results" ON public.forensic_results;
DROP POLICY IF EXISTS "Admin CRUD Access Results" ON public.forensic_results;

CREATE POLICY "Public Read Access Results" ON public.forensic_results FOR SELECT USING (true);
CREATE POLICY "Admin CRUD Access Results" ON public.forensic_results FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Fix RLS for recovery_requests (Ensure admins can see them)
ALTER TABLE public.recovery_requests ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Insert Requests" ON public.recovery_requests;
DROP POLICY IF EXISTS "Admin CRUD Access Requests" ON public.recovery_requests;

CREATE POLICY "Public Insert Requests" ON public.recovery_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin CRUD Access Requests" ON public.recovery_requests FOR ALL TO authenticated USING (true) WITH CHECK (true);
