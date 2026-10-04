const SUPABASE_URL = "https://iaotkcoxjralurfkwyiv.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_FcdcS2UpYjuT0vRslieKhg_8BVpAnXM";

const SUPABASE_CONFIGURED =
  !SUPABASE_URL.includes("YOUR_PROJECT_ID") &&
  !SUPABASE_ANON_KEY.includes("YOUR_SUPABASE_ANON_KEY");

const supabaseClient = SUPABASE_CONFIGURED
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

window.supabaseClient = supabaseClient;
window.SUPABASE_CONFIGURED = SUPABASE_CONFIGURED;
