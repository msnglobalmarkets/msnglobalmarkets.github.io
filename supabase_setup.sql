-- MSN Global Markets - Supabase Database Schema
-- Run this in your Supabase SQL Editor to create the performance tables.

-- 1. Create a table for institutional performance logs
CREATE TABLE IF NOT EXISTS public.performance_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    month TEXT NOT NULL,
    year INTEGER DEFAULT 2025,
    investment NUMERIC NOT NULL,
    profit NUMERIC NOT NULL,
    growth_percent NUMERIC,
    cumulative_growth NUMERIC,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Create a table for client portfolio data
CREATE TABLE IF NOT EXISTS public.client_portfolios (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    client_name TEXT NOT NULL,
    broker TEXT NOT NULL,
    month TEXT NOT NULL,
    net_profit NUMERIC DEFAULT 0,
    cumulative_investment NUMERIC DEFAULT 0,
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Enable RLS (Recommended)
ALTER TABLE public.performance_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.client_portfolios ENABLE ROW LEVEL SECURITY;

-- 4. Create public read policy (Allow visitors to see the charts)
CREATE POLICY "Enable read access for all users" ON public.performance_logs
    FOR SELECT USING (true);

-- 5. Create private read policy (Only clients can see their own portfolio)
-- Requires Supabase Auth to be set up.
CREATE POLICY "Users can view their own data" ON public.client_portfolios
    FOR SELECT TO authenticated 
    USING (client_name = auth.jwt()->>'email');
