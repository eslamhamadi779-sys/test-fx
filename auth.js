const SUPABASE_URL = "https://aigxyjtkxmqetucmctaf.supabase.co";       // مثال: https://xxxxxxxx.supabase.co
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZ3h5anRreG1xZXR1Y21jdGFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5Njc0MTgsImV4cCI6MjEwMTU0MzQxOH0.WVwOI-wyOFRfBgOgMdRCTn8E9pToy3GzMW_p0Thb5cc";  // مفتاح anon/public من إعدادات المشروع


let supabaseClient = null;
if (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}


// 1. عرف Supabase اول حاجة
const SUPABASE_URL = 'https://aigxyjtkxmqetucmctaf.supabase.co'
const SUPABASE_ANON_KEY = 'حط-هنا-anon-key-بتاعك'

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// 2. دالة تسجيل الدخول بجوجل - دي المهمة
async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'https://eslamhamadi779-sys.github.io/test-fx/' // <-- 
    }
  })
  
  if (error) console.log('Error:', error)
}

// 3. شغل الدالة لما ندوس على الزرار
document.getElementById('google-login').addEventListener('click', signInWithGoogle)
