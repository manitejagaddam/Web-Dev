import { createClient } from '@supabase/supabase-js';

// Supabase project URL and API key
const SUPABASE_URL = 'https://brhfwothywpmvbpoeuyj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyaGZ3b3RoeXdwbXZicG9ldXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMzI5NzEsImV4cCI6MjA1NjYwODk3MX0.co3MWBIKrRuum-Dxi4fp_Z-fuxiNIk2-YBLDj6L4ZUg';

// Create a single Supabase client instance
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
