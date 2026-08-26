
// 1. عرف Supabase اول حاجة
const SUPABASE_URL = 'https://aigxyjtkxmqetucmctaf.supabase.co'
const SUPABASE_ANON_KEY = 'حط-هنا-anon-key-بتاعك'

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// 2. دالة تسجيل الدخول بجوجل - دي المهمة
async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'https://eslamhamadi779-sys.github.io/test-fx/' // <-- السطر اللي كان ناقص
    }
  })
  
  if (error) console.log('Error:', error)
}

// 3. شغل الدالة لما ندوس على الزرار
document.getElementById('google-login').addEventListener('click', signInWithGoogle)
