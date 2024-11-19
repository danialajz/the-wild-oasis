import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wlklorwixidouvltfnvo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indsa2xvcndpeGlkb3V2bHRmbnZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzNjE0MjAsImV4cCI6MjA0NTkzNzQyMH0.L9d6bLpYi7dX6quqDpYkpcXDRGFDoFOQo6KhGllqIGQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
