import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yrnffhrgndibeabksbul.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlybmZmaHJnbmRpYmVhYmtzYnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzU5ODEsImV4cCI6MjA2MjkxMTk4MX0.MIzCKrHrEC-lASLKeE4ILAGTdcWlXk3UTLnZHks9PEI';
export const supabase = createClient(supabaseUrl, supabaseKey);