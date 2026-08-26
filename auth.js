const SUPABASE_URL = "https://aigxyjtkxmqetucmctaf.supabase.co";       // مثال: https://xxxxxxxx.supabase.co
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZ3h5anRreG1xZXR1Y21jdGFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5Njc0MTgsImV4cCI6MjEwMTU0MzQxOH0.WVwOI-wyOFRfBgOgMdRCTn8E9pToy3GzMW_p0Thb5cc";  // مفتاح anon/public من إعدادات المشروع



// 2. الكود بتاعك اللي عامله - سيبه زي ما هو
let supabaseClient = null;
if (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// 3. حط الدالة دي تحته على طول - دي الجديدة
async function signInWithGoogle() {
  if (!supabaseClient) {
    alert('Supabase مش متعرف')
    return
  }

  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'https://eslamhamadi779-sys.github.io/test-fx/' // <-- اهم سطر
    }
  })
  
  if (error) console.log('Error:', error)
}

// 4. شغل الدالة لما ندوس على الزرار
document.getElementById('google-login').addEventListener('click', signInWithGoogle)
