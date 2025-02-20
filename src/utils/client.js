import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zzvkoakuisbasqxistuw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6dmtvYWt1aXNiYXNxeGlzdHV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwMDg0MDgsImV4cCI6MjA1NTU4NDQwOH0.Uy5v6pVh-I3zICx2f_4P9eZizhNMhjVbcMAcpHm2v8s";

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
