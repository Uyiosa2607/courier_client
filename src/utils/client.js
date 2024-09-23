import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hryfvqqdcwlcarvlxdoy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyeWZ2cXFkY3dsY2Fydmx4ZG95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxMTYxMjQsImV4cCI6MjAyMzY5MjEyNH0.XhZa6DDUNjpSBCYxCApgHrEKm3gIIRdoPTLxPo8086Q";

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
