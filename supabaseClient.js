// supabaseClient.js
const SUPABASE_URL = 'https://ljqcqdjskztzjvdbuyrt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqcWNxZGpza3p0emp2ZGJ1eXJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2Nzc0NDIsImV4cCI6MjA2OTI1MzQ0Mn0.ccrFXN8IBPCPKlL815B6Z_MCWi74n1tVU_jyO1wIaGM';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
