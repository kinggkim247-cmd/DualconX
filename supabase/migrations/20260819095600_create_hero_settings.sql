CREATE TABLE public.hero_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL DEFAULT 'Recover Your Lost Digital Assets.',
    description TEXT NOT NULL DEFAULT 'DualconX provides professional digital forensics and recovery for inaccessible wallets, damaged devices, lost credentials, and critical digital data.',
    primary_cta TEXT NOT NULL DEFAULT 'Request a Case Assessment',
    secondary_cta TEXT NOT NULL DEFAULT 'Explore the Process',
    is_animation_enabled BOOLEAN NOT NULL DEFAULT true,
    animation_style TEXT NOT NULL DEFAULT 'Evidence Network',
    animation_intensity INTEGER NOT NULL DEFAULT 50,
    overlay_darkness INTEGER NOT NULL DEFAULT 60,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE public.hero_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public Read Access Hero Settings" 
ON public.hero_settings 
FOR SELECT USING (true);

CREATE POLICY "Admin CRUD Access Hero Settings" 
ON public.hero_settings 
FOR ALL TO authenticated 
USING (true) WITH CHECK (true);

-- Insert a default row so we always have exactly one config to read/update
INSERT INTO public.hero_settings (title) VALUES ('Recover Your Lost Digital Assets.');
