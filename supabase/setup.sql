-- Database Setup for R Sukesh Portfolio Tracking
-- Copy and run this script in the SQL Editor on your Supabase Dashboard:
-- https://supabase.com/dashboard/project/eglieteqexvoawayqdly/sql/new

-- 1. Create table for Contact Messages
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    feedback TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Create table for Visitor Traffic Logs
CREATE TABLE IF NOT EXISTS public.site_visits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    path TEXT NOT NULL,
    user_agent TEXT,
    referrer TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Enable Row-Level Security (RLS) on both tables for security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_visits ENABLE ROW LEVEL SECURITY;

-- 4. Create Policies: Allow anyone (public anon key) to INSERT logs/messages
CREATE POLICY "Allow anonymous submission" ON public.contact_messages
    FOR INSERT 
    WITH CHECK (true);

CREATE POLICY "Allow anonymous traffic logging" ON public.site_visits
    FOR INSERT 
    WITH CHECK (true);

-- 5. Create Policies: Only Authenticated Users (Admin / R Sukesh) can SELECT or READ data
CREATE POLICY "Restrict read access to admin" ON public.contact_messages
    FOR SELECT 
    TO authenticated 
    USING (true);

CREATE POLICY "Restrict traffic stats to admin" ON public.site_visits
    FOR SELECT 
    TO authenticated 
    USING (true);

-- 6. Add indexes to make dashboard queries fast
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON public.contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_site_visits_created_at ON public.site_visits(created_at DESC);
