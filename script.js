/* ============================================================
   🔑 [Supabase] إعدادات الاتصال بقاعدة البيانات والمصادقة
   حط بيانات مشروعك هنا، وفكّ تعليق سطر supabase-js في index.html
   ============================================================ */
const SUPABASE_URL = "https://aigxyjtkxmqetucmctaf.supabase.co";      
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZ3h5anRreG1xZXR1Y21jdGFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5Njc0MTgsImV4cCI6MjEwMTU0MzQxOH0.WVwOI-wyOFRfBgOgMdRCTn8E9pToy3GzMW_p0Thb5cc";  // مفتاح anon/public من إعدادات المشروع

let supabaseClient = null;
if (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

/* ============================================================
   # [AR] مصفوفة البيانات والترجمة الشاملة لجميع اللغات والواجهات
   # [EN] Complete Multi-Language i18n & Interface Translation Dictionary
   ============================================================ */
const data = {
    ar: {
        title: "موقع الفوركس وسوق العملات الأجنبية [FX TK04] $",
        sub: "مملكة طيكيل | تحليلات فوركس + قمر فلكي + مجاني بحدود",
        btn: "استدعي طيكيل على تلجرام الآن",
        m_title: "🪐 الرصد الفلكي والتقويم الرقمي",
        news_title: "📰 مفكرة طيكيل للأخبار الحمراء المؤثرة",
        wheel_t: "🎡 عجلة الاقتران الفلكي المالي",
        wheel_s: "حرك العجلة لرصد اقتران الكواكب والشمس مع مسار السيولة",
        why_t: "😈 لماذا منصة TK04 مختلفة؟",
        f1_t: "😈 وصول حقيقي للمحتوى",
        f1_d: "ما يهمنا هو ثقة العميل وليس الربح، نبحث عن احتياج العميل ونعرف يأسه وتخبطه ما بين أخبار كاذبة ومتداولين غير جديرين بالثقة.",
        f2_t: "😈 مع طيكيل TK04 ملك ملوك الجان",
        f2_d: "ليس ذكاءً اصطناعياً، فهو ملك ملوك الجان السحري وبطل روايات وأسطورة مختلفة في الحديث معه.",
        f3_t: "😈 بيئة آمنة",
        f3_d: "يتم استخدام أنظمة ذكية وتقارير دقيقة:",
        f3_l: "<li>لا تضع البيض في سلة واحدة</li><li>لا تخاطر بمالك كله</li><li>استثمر 3% من مالك لضمان الاستمرارية</li><li>طيكيل يعطي توصيات ربما أصاب وربما أخطأ</li>",
        warn_t: "⚠️ منصة تجريبية مجانية والموارد محدودة",
        warn_d: "تنويه: المنصة غير مسؤولة عن مخاطرتك، وتأكد من السعر الحقيقي للسوق لتجنب الخسارة. التحليل الفلكي المعروض هو محتوى ترفيهي ولا يُعد نصيحة مالية.",
        rec_t: "توصيات وتحليلات",
        rec_d1: "توصيات وتحليلات من قلب السوق إليك بالمجان.",
        rec_d2: "طيكيل ملك ملوك الجان يملك حدوداً للاستخدام فهو مجاني 100%.",
        soon_t: "قريبًا مع TK04",
        soon_s: "دردشة حية 24/7 مع ملك ملوك الجان TK04",
        lbl: "قريباً",
        g1: "توصيات يومية وأسبوعية وشهرية",
        g2: "تحليلات وشرح للأخبار",
        g3: "تحليل فلكي ورقمي",
        cr: "إسلام الهاشمي © جميع الحقوق محفوظة 2026 | ESO 🚀",
        forum_title: "😈 منتدى ملك ملوك الجان للتوصيات المباشرة",
        support_line: "للشكاوى والمقترحات تواصل معنا على بوت الدعم:",
        admin_dash_t: "📊 لوحة تحكم زوار المنصة (الوطن العربي) - خاص بالأدمن",
        phases: {
            full: ["قمر مكتمل (Full Moon): طاقة فلكية قصوى وسحب سيولة ضخم جداً بالسوق! 💥", "سيولة عالية جداً 💥"],
            new: ["قمر جديد (New Moon): بداية دورة مالية وتدفق سيولة شرائية جديدة ونظيفة 🟢", "سيولة شرائية صاعدة 🟢"],
            dark: ["قمر مظلم (Dark Moon): خفاء تام للرؤية الفنية، ترقب وحذر شديد بالسوق ⏳", "سيولة منخفضة وحذرة ⏳"],
            balance: ["قمر في طور متوازن فلكياً: تحركات فنية طبيعية دون طفرات ماورائية ⚖️", "سيولة متوازنة ⚖️"]
        },
        alignments: [
            "ترقب فلكي: اقتران الشمس مع المشتري يعزز صعود الذهب 🪙",
            "عاصفة سيولة: اقتران مربع مع المريخ يحفز التذبذب العالي بالدولار ⚡",
            "هدوء أسطوري: الكواكب في مسار آمن والتحليل الفني هو الحاكم ⚖️",
            "انعكاس فلكي: الشمس والقمر في زاوية حادة.. تصفية عقود مبكرة 🚨"
        ]
    },
    en: {
        title: "Forex & Currency Market Platform [FX TK04] $",
        sub: "Tykeel's Kingdom | Forex Analysis + Lunar Tracker + Free and Limited",
        btn: "Summon Tykeel on Telegram Now",
        m_title: "🪐 Celestial Tracking & Digital Calendar",
        news_title: "📰 Tykeel's High Impact Red News Feed",
        wheel_t: "🎡 Cosmic Financial Alignment Wheel",
        wheel_s: "Rotate the wheel to align planets, sun, and moon with market liquidity tracks",
        why_t: "😈 Why is TK04 Platform Different?",
        f1_t: "😈 Authentic Content Access",
        f1_d: "We care about trust, not profit. We understand the trader's struggle amidst fake news and unreliable mentors.",
        f2_t: "😈 With Tykeel: The King of Jinn",
        f2_d: "This is not standard AI. He is the mystical King of Jinn, a legendary entity with an unparalleled lore.",
        f3_t: "😈 Secured Environment",
        f3_d: "We utilize smart analytical workflows and safe rules:",
        f3_l: "<li>Don't put all your eggs in one basket</li><li>Never risk your entire capital</li><li>Invest only 3% to sustain your consistency</li><li>Tykeel delivers forecasts that could be right or wrong</li>",
        warn_t: "⚠️ Beta Platform & Limited Resources",
        warn_d: "Disclaimer: This platform holds no responsibility for your financial risks. Verify actual market prices. The astrological analysis shown is entertainment content, not financial advice.",
        rec_t: "Signals & Market Analysis",
        rec_d1: "Free signals and real-time analysis straight from the market core.",
        rec_d2: "Tykeel has strict usage thresholds but remains 100% free.",
        soon_t: "Coming Soon with TK04",
        soon_s: "Live 24/7 Chat with Tykeel the King of Jinn",
        lbl: "Soon",
        g1: "Daily, Weekly, and Monthly Signals",
        g2: "News Analysis & Breakdown",
        g3: "Astrological & Numerical Systems",
        cr: "Eslam Al-Hashemi © All Rights Reserved 2026 | ESO 🚀",
        forum_title: "🔥 King Tykeel Live Signals Forum",
        support_line: "For complaints & suggestions, reach us on our support bot:",
        admin_dash_t: "👑 Arab World Visitor & Admin Analytics",
        phases: {
            full: ["Full Moon: Maximum celestial energy flowing. High liquidity surge! 💥", "Ultra High Liquidity 💥"],
            new: ["New Moon: Beginning of a new fiscal cycle, clean buying volumes flowing 🟢", "Rising Buying Liquidity 🟢"],
            dark: ["Dark Moon: Complete technical blackout. Safe entry strategies recommended ⏳", "Low & Cautious Liquidity ⏳"],
            balance: ["Balanced Moon Phase: Standard technical movements ruling the charts ⚖️", "Balanced Liquidity ⚖️"]
        },
        alignments: [
            "Celestial Alert: Sun-Jupiter alignment bolsters Gold bullish sentiment 🪙",
            "Liquidity Storm: Mars square alignment triggers high volatility on USD ⚡",
            "Mystic Calm: Planetary paths are clear; technical charts are dominant ⚖️",
            "Cosmic Reversal: Sun & Moon sharp angle; early contract expirations ahead 🚨"
        ]
    }
};

/* ============================================================
   # [AR] متغيرات حالة المستخدم والمنشورات الحالية
   # [EN] App State Management & Authentication Flags
   ============================================================ */
let currentUser = null;
let forumPosts = [];

/* ============================================================
   # [AR] دالة تحويل اللغة والتزامن لكل الأجزاء المضافة
   # [EN] Language Toggle Engine with Full i18n Synchronization
   ============================================================ */
function toggleLanguage() {
    const htmlTag = document.getElementById('main-html');
    const langBtn = document.getElementById('lang-btn');
    let currentLang = htmlTag.getAttribute('lang') === 'ar' ? 'en' : 'ar';

    htmlTag.setAttribute('lang', currentLang);
    htmlTag.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    if (langBtn) langBtn.textContent = currentLang === 'ar' ? 'English' : 'العربية';

    const currentData = data[currentLang];

    // تحديث العناوين المترجمة الأساسية
    const setSafeText = (id, value, isHTML = false) => {
        const el = document.getElementById(id);
        if (el) {
            if (isHTML) el.innerHTML = value;
            else el.textContent = value;
        }
    };

    setSafeText('h-title', `<span class="hero-magic">$</span> ${currentData.title} <span class="hero-magic">$</span>`, true);
    setSafeText('h-sub', currentData.sub);
    setSafeText('btn-text', currentData.btn);
    setSafeText('moon-card-title', currentData.m_title);
    setSafeText('news-title', currentData.news_title);
    setSafeText('why-title', currentData.why_t);
    setSafeText('feat1-t', currentData.f1_t);
    setSafeText('feat1-d', currentData.f1_d);
    setSafeText('feat2-t', currentData.f2_t);
    setSafeText('feat2-d', currentData.f2_d);
    setSafeText('feat3-t', currentData.f3_t);
    setSafeText('feat3-d', currentData.f3_d);
    setSafeText('feat3-list', currentData.f3_l, true);
    setSafeText('warn-t', currentData.warn_t);
    setSafeText('warn-d', currentData.warn_d);
    setSafeText('rec-title', currentData.rec_t);
    setSafeText('rec-d1', currentData.rec_d1);
    setSafeText('rec-d2', currentData.rec_d2);
    setSafeText('soon-title', currentData.soon_t);
    setSafeText('soon-sub', currentData.soon_s);
    setSafeText('g1-t', currentData.g1);
    setSafeText('g2-t', currentData.g2);
    setSafeText('g3-t', currentData.g3);
    setSafeText('footer-cr', currentData.cr);
    setSafeText('wheel-card-title', currentData.wheel_t);
    setSafeText('wheel-card-sub', currentData.wheel_s);
    setSafeText('forum-section-title', currentData.forum_title);
    setSafeText('support-line', currentData.support_line);
    setSafeText('admin-dash-title', currentData.admin_dash_t);

    document.querySelectorAll('.soon-lbl').forEach(el => el.textContent = currentData.lbl);

    // إعادة رسم الحسابات التقويمية والمنتدى للغة الجديدة
    calculateMoonAndDate();
    generateMoonCalendar();
    const timeSlider = document.getElementById('time-slider');
    if (timeSlider) updateCosmicWheel(timeSlider.value);
    renderForum();
}

/* ============================================================
   # [AR] دالة حساب ورسم طور القمر الحقيقي والتقويم الرقمي
   # [EN] Astronomical Lunar Mechanics & Real-time Date Processing
   ============================================================ */
function calculateMoonAndDate() {
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const htmlTag = document.getElementById('main-html');
    const currentLang = (htmlTag && htmlTag.getAttribute('lang')) || 'ar';

    const numericDateEl = document.getElementById('numeric-date');
    if (numericDateEl) {
        numericDateEl.textContent = currentLang === 'ar' ?
            `التاريخ الرقمي الفلكي: ${year}/${month}/${day}` :
            `Celestial Digital Date: ${year}/${month}/${day}`;
    }

    const shadowRender = document.getElementById('shadow-render');
    const phaseText = document.getElementById('moon-phase-text');
    const liqVal = document.getElementById('liquidity-val');

    if (!shadowRender || !phaseText || !liqVal) return;

    if (day >= 13 && day <= 16) {
        // بدر مكتمل - Full Moon
        shadowRender.style.transform = "translateX(100%)";
        phaseText.textContent = data[currentLang].phases.full[0];
        liqVal.textContent = data[currentLang].phases.full[1];
        liqVal.style.color = "#66fcf1";
    } else if (day >= 27 || day <= 2) {
        // قمر مظلم / محاق - Dark Moon
        shadowRender.style.transform = "translateX(0)";
        shadowRender.style.left = "0";
        phaseText.textContent = data[currentLang].phases.dark[0];
        liqVal.textContent = data[currentLang].phases.dark[1];
        liqVal.style.color = "#ff4d4d";
    } else if (day > 2 && day < 13) {
        // قمر جديد صاعد - New / Waxing Moon
        shadowRender.style.transform = "translateX(50%)";
        shadowRender.style.left = "initial";
        shadowRender.style.right = "0";
        phaseText.textContent = data[currentLang].phases.new[0];
        liqVal.textContent = data[currentLang].phases.new[1];
        liqVal.style.color = "#66fcf1";
    } else {
        // أطوار متوازنة - Balanced
        shadowRender.style.transform = "translateX(30%)";
        shadowRender.style.left = "0";
        phaseText.textContent = data[currentLang].phases.balance[0];
        liqVal.textContent = data[currentLang].phases.balance[1];
        liqVal.style.color = "#c5a880";
    }
}

/* ============================================================
   # [AR] دالة تحريك العجلة الفلكية
   # [EN] Cosmic Financial Wheel Rotation & Alignment Calculations
   ============================================================ */
function updateCosmicWheel(val) {
    const wheel = document.getElementById('planetary-wheel');
    const statusText = document.getElementById('alignment-status');
    const htmlTag = document.getElementById('main-html');
    const currentLang = (htmlTag && htmlTag.getAttribute('lang')) || 'ar';

    if (!wheel || !statusText) return;

    const rotationDegrees = val * 3.6;
    wheel.style.transform = `rotate(${rotationDegrees}deg)`;

    document.querySelectorAll('.orbit-object').forEach(el => {
        el.style.transform = `rotate(${-rotationDegrees}deg)`;
    });

    const alignmentIndex = Math.floor((val % 4));
    statusText.textContent = data[currentLang].alignments[alignmentIndex];
}

/* ============================================================
   # [AR] دالة توليد التقويم الشهري المربوط ديناميكياً
   # [EN] Dynamic Calendar Grid Generation Engine
   ============================================================ */
function generateMoonCalendar() {
    const calendar = document.getElementById("moon-calendar");
    if (!calendar) return;

    calendar.innerHTML = "";

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const today = now.getDate();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
        const box = document.createElement("div");
        box.classList.add("day-box");
        box.innerHTML = i;

        if (i === today) {
            box.classList.add("today");
        }

        if (i >= 13 && i <= 16) {
            box.classList.add("full-moon");
        } else if (i >= 27 || i <= 2) {
            box.classList.add("dark-moon");
        } else if (i > 2 && i < 13) {
            box.classList.add("new-moon");
        } else {
            box.classList.add("balanced-moon");
        }
        calendar.appendChild(box);
    }
}

/* ============================================================
   # [🔐] إدارة تسجيل الدخول وتحديث واجهة الهيدر (جوجل فقط)
   # [EN] Google-Only Authentication Engine & Profile Actions
   ============================================================ */
function mapSupabaseUser(session) {
    if (!session || !session.user) return null;
    const u = session.user;
    return {
        id: u.id,
        name: (u.user_metadata && u.user_metadata.full_name) || u.email || "عضو",
        email: u.email,
        type: "Google",
        badge: "عضو ذهبي 👑"
    };
}


async function loginWithGoogle() {
    if (!supabaseClient) {
        alert("لسه المشروع مش متصل بقاعدة البيانات. تأكد من إضافة المفاتيح في أول الملف.");
        return;
    }
    const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'https://eslamhamadi779-sys.github.io/test-fx/'
        }
    });
    if (error) alert("حصل خطأ في تسجيل الدخول: " + error.message);
}

async function logoutUser() {
    if (!supabaseClient) return;
    await supabaseClient.auth.signOut();
}

function updateAuthUI() {
    const authActions = document.getElementById('auth-actions');
    if (!authActions) return;

    if (currentUser) {
        authActions.innerHTML = `
            <div class="user-badge">
                <span>${escapeHTML(currentUser.badge)}</span>
                <span>${escapeHTML(currentUser.name)}</span>
                <button class="logout-btn" onclick="logoutUser()"><i class="fas fa-sign-out-alt"></i></button>
            </div>
        `;
    } else {
        authActions.innerHTML = `
            <button class="auth-btn google-btn" onclick="loginWithGoogle()">
                <i class="fab fa-google"></i> <span>جوجل</span>
            </button>
        `;
    }
    renderForum();
}

/* ============================================================
   # [🛡️] دالة تنظيف النصوص لمنع ثغرات XSS
   # [EN] HTML Escaping Utility to Prevent XSS Injection
   ============================================================ */
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
}

/* ============================================================
   # [🔥] محرك المنتدى ورسم التوصيات (متصل بقاعدة البيانات)
   # [EN] Live Signals Forum Engine & Supabase-Backed Rendering
   ============================================================ */
async function loadPosts() {
    if (!supabaseClient) return;
    const { data: rows, error } = await supabaseClient
        .from('forum_posts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);
    if (error) {
        console.error(error);
        return;
    }
    forumPosts = rows;
    renderForum();
}

function renderForum() {
    const forumContainer = document.getElementById('forum-posts-list');
    const guestNotice = document.getElementById('guest-forum-notice');
    const publishBox = document.getElementById('logged-publish-box');

    if (!forumContainer) return;

    if (!currentUser) {
        if (guestNotice) guestNotice.style.display = 'block';
        if (publishBox) publishBox.style.display = 'none';
        forumContainer.style.display = 'none';
    } else {
        if (guestNotice) guestNotice.style.display = 'none';
        if (publishBox) publishBox.style.display = 'block';
        forumContainer.style.display = 'block';
    }

    forumContainer.innerHTML = '';
    forumPosts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <div class="post-author">
                <div class="author-info">
                    <div class="author-avatar">${escapeHTML(post.author_name.charAt(0))}</div>
                    <div>
                        <strong>${escapeHTML(post.author_name)}</strong>
                        <div style="font-size:0.75rem; color:#a4b3b6;">${new Date(post.created_at).toLocaleString('ar-EG')}</div>
                    </div>
                </div>
            </div>


            <div class="post-body">${escapeHTML(post.post_text)}</div>
            ${currentUser && post.user_id === currentUser.id ? `
            <div class="post-owner-actions" style="display:flex; gap:10px; margin-bottom:10px;">
                <button onclick="editPost(${post.id}, '${escapeHTML(post.post_text).replace(/'/g, "\\'")}')" style="background:transparent;border:1px solid var(--neon-blue);color:var(--neon-blue);padding:4px 10px;border-radius:5px;cursor:pointer;font-size:0.8rem;">✏️ تعديل</button>
                <button onclick="deletePost(${post.id})" style="background:transparent;border:1px solid var(--danger-red);color:var(--danger-red);padding:4px 10px;border-radius:5px;cursor:pointer;font-size:0.8rem;">🗑️ حذف</button>
            </div>` : ''}
            <div class="post-footer-actions">


                <button class="like-btn" onclick="toggleLike(${post.id}, this)">
                    <i class="fas fa-heart"></i> <span>${post.likes}</span>
                </button>
                <div class="views-badge">
                    <i class="fas fa-eye"></i> ${post.views} مشاهدة
                </div>
            </div>
        `;
        forumContainer.appendChild(postCard);
    });
}

async function submitNewPost(event) {
    event.preventDefault();

    if (!currentUser || !supabaseClient) {
        alert("عذراً! يجب تسجيل الدخول لتمكن من نشر التوصيات.");
        return;
    }

    const postInput = document.getElementById('post-text');
    if (!postInput || postInput.value.trim() === '') {
        alert("يرجى كتابة نص التوصية أو التحليل قبل النشر!");
        return;
    }

    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) {
        alert("حصل خطأ في التحقق من هويتك، حاول تسجل الدخول تاني.");
        return;
    }



    const randomViews = Math.floor(Math.random() * (190 - 100 + 1)) + 100;
    const { error } = await supabaseClient.from('forum_posts').insert({
        user_id: user.id,
        author_name: `${currentUser.name} ${currentUser.badge}`,
        post_text: postInput.value.trim(),
        views: randomViews
    });

    if (error) {
        alert("حصل خطأ في النشر: " + error.message);
        return;
    }

    postInput.value = '';
    await loadPosts();
}

async function toggleLike(postId, btnElement) {
    if (!currentUser || !supabaseClient) {
        alert("لازم تسجل الدخول عشان تعمل لايك");
        return;
    }
    const { error } = await supabaseClient.rpc('toggle_like', { p_post_id: postId });
    if (error) {
        alert("حصل خطأ: " + error.message);
        return;
    }
    await loadPosts();
}


/* ============================================================
   # deletePost
   #  
   ============================================================ */


async function deletePost(postId) {
    if (!confirm("متأكد إنك عايز تمسح المنشور ده؟")) return;
    const { error } = await supabaseClient.from('forum_posts').delete().eq('id', postId);
    if (error) {
        alert("حصل خطأ في الحذف: " + error.message);
        return;
    }
    await loadPosts();
}

async function editPost(postId, oldText) {
    const newText = prompt("عدّل نص التوصية:", oldText);
    if (newText === null || newText.trim() === '') return;
    const { error } = await supabaseClient
        .from('forum_posts')
        .update({ post_text: newText.trim() })
        .eq('id', postId);
    if (error) {
        alert("حصل خطأ في التعديل: " + error.message);
        return;
    }
    await loadPosts();
}



/* ============================================================
   # [🛡️] نظام حماية بسيط ضد النسخ العرضي (غير مانع بشكل كامل)
   # [EN] Basic Content Interaction Guards (not a real security layer)
   ============================================================ */
function setupSecurityProtections() {
    // ملحوظة: هذه الطبقة لا تمنع الوصول الحقيقي لأدوات المطور،
    // وهي فقط تقلل النسخ العرضي غير المقصود من الزوار العاديين.

    // 1. حظر زر الفأرة الأيمن
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    // 2. حظر اختصارات لوحة المفاتيح الخاصة بالفحص
    document.addEventListener('keydown', (e) => {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
            (e.ctrlKey && (e.key === 'U' || e.key === 'u'))
        ) {
            e.preventDefault();
            e.stopPropagation();
        }
    });

    // 3. منع سحب وتنزيل الصور بالماوس
    document.addEventListener('dragstart', (e) => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });
}

/* ============================================================
   # [🚀] التشغيل الموحد والتلقائي فور التحميل الكامل للمستند
   # [EN] Global Initialization Handler
   ============================================================ */
window.addEventListener('DOMContentLoaded', async () => {
    calculateMoonAndDate();
    generateMoonCalendar();

    const timeSlider = document.getElementById('time-slider');
    if (timeSlider) {
        updateCosmicWheel(timeSlider.value);
        timeSlider.addEventListener('input', (e) => updateCosmicWheel(e.target.value));
    }

    // إعداد المصادقة والمنتدى المتصلين بـ Supabase
    if (supabaseClient) {
        const { data: { session } } = await supabaseClient.auth.getSession();
        currentUser = mapSupabaseUser(session);

        supabaseClient.auth.onAuthStateChange((event, session) => {
            currentUser = mapSupabaseUser(session);
            updateAuthUI();
        });

        await loadPosts();
    }

    updateAuthUI();

    // تفعيل أنظمة الحماية
    setupSecurityProtections();
});
