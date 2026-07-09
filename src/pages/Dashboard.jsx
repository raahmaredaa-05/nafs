import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, User, Sparkles, Activity, BookOpen, HeartHandshake, Play, Pause, X, Home, Compass } from 'lucide-react';

// --- البيانات الثابتة ---
const quotes = [
  { text: "الهدوء ليس غياب الفوضى، بل هو السلام في منتصفها.", author: "إلهام اليوم" },
  { text: "الاستنشاق يجلب الطاقة الجديدة، والزفير يحمل السلام والرحيل.", author: "حكمة الصباح" },
  { text: "تعلّم أن تكون ساكنًا في وسط العاصفة، لترى النور المنبعث.", author: "لحظة وعي" },
  { text: "كل نبضة قلب هي فرصة جديدة للبداية بسلام واطمئنان كامل.", author: "تأمل المساء" }
];

// --- مكون تتبع المزاج الفليكسيبل (الشريط) ---
const MoodTracker = ({ onMoodChange }) => {
  const moods = [
    { label: 'قلق', text: 'متوتر وقلق' },
    { label: 'متوازن', text: 'متزن وهادئ' },
    { label: 'مرتاح', text: 'مرتاح ومستقر' },
    { label: 'سعيد', text: 'سعيد ومبتهج' }
  ];

  const [activeIndex, setActiveIndex] = useState(2); // الافتراضي: مرتاح

  return (
    <div className="bg-white p-8 rounded-3xl border border-neutral-100 text-right space-y-6 shadow-sm">
      <div className="flex flex-row-reverse justify-between items-center">
        <h3 className="text-xl font-bold text-neutral-900">كيف تشعر الآن؟</h3>
        
        <div className="bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
          <span>😊</span>
          <span>{moods[activeIndex].text}</span>
        </div>
      </div>

      <div className="relative h-6 mx-3">
        {/* مسار الخلفية */}
        <div className="absolute top-1/2 inset-x-0 h-1.5 -translate-y-1/2 bg-neutral-200 rounded-full" />
        {/* الجزء المكتمل من المسار */}
        <div
          className="absolute top-1/2 left-0 h-1.5 -translate-y-1/2 bg-emerald-500 rounded-full transition-all duration-500"
          style={{ width: `${(activeIndex / (moods.length - 1)) * 100}%` }}
        />
        {/* النقاط */}
        {moods.map((mood, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              setActiveIndex(idx);
              onMoodChange(mood.text);
            }}
            aria-label={mood.label}
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 cursor-pointer"
            style={{ left: `${(idx / (moods.length - 1)) * 100}%` }}
          >
            <span
              className={`block rounded-full border-2 border-white shadow-sm transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-5 h-5 bg-emerald-600 ring-4 ring-emerald-100'
                  : idx < activeIndex
                    ? 'w-3.5 h-3.5 bg-emerald-500'
                    : 'w-3.5 h-3.5 bg-neutral-300'
              }`}
            />
          </button>
        ))}
      </div>

      <div className="relative h-5 mx-3 select-none">
        {moods.map((mood, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              setActiveIndex(idx);
              onMoodChange(mood.text);
            }}
            className={`absolute top-0 -translate-x-1/2 whitespace-nowrap font-bold transition-colors duration-300 ${
              idx === activeIndex ? 'text-emerald-600 text-sm' : 'text-neutral-400 text-xs hover:text-neutral-600'
            }`}
            style={{ left: `${(idx / (moods.length - 1)) * 100}%` }}
          >
            {mood.label}
          </button>
        ))}
      </div>
      
      <p className="text-center text-[11px] text-neutral-400 font-medium italic pt-2">
        طاقة إيجابية تملأ روحك وابتسامتك
      </p>
    </div>
  );
};

// --- باقي المكونات الفرعية ---
const ExploreSessions = ({ onPlaySession, activePlayingSession, isPlaying }) => (
  <div className="space-y-6 text-right">
    <div className="space-y-1">
      <h2 className="text-3xl font-black">اكتشف الرحلات الذهنية</h2>
      <p className="text-sm text-neutral-500">اختر الجلسة الصوتية التي تناسب احتياجك الحالي</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { id: '1', title: 'تأمل السكينة والعمق الكلي', instructor: 'د. سارة الأحمد', imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=150&q=80' },
        { id: '2', title: 'تفريغ شحنات التوتر اليومي', instructor: 'الكوتش ياسر سليمان', imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=150&q=80' }
      ].map((session) => (
        <div key={session.id} className="bg-white p-4 rounded-2xl flex flex-row-reverse items-center justify-between gap-4 border border-neutral-100">
          <div className="flex flex-row-reverse items-center gap-3">
            <img src={session.imageUrl} className="w-16 h-16 rounded-xl object-cover" alt="" />
            <div>
              <h4 className="text-sm font-bold">{session.title}</h4>
              <p className="text-xs text-neutral-500 mt-1">{session.instructor}</p>
            </div>
          </div>
          <button
            onClick={() => onPlaySession(session)}
            className="bg-emerald-600 text-white p-3 rounded-full hover:scale-105 transition-all"
          >
            {activePlayingSession?.id === session.id && isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
          </button>
        </div>
      ))}
    </div>
  </div>
);

const ProfileStats = ({ onClearStorage }) => (
  <div className="bg-white p-8 rounded-3xl border border-neutral-100 text-right space-y-6">
    <h2 className="text-2xl font-black">الملف الشخصي والإحصائيات</h2>
    <p className="text-sm text-neutral-500">تتبع رحلتك الواعية وإدارة بياناتك المحلية.</p>
    <button onClick={onClearStorage} className="bg-rose-500/10 text-rose-600 font-bold text-xs px-6 py-3 rounded-xl hover:bg-rose-500/20 transition-all">
      مسح البيانات المحلية وإعادة تشغيل التطبيق
    </button>
  </div>
);

const BreathingExercise = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
    <div className="bg-white w-full max-w-md rounded-3xl p-6 text-center space-y-6 relative">
      <button onClick={onClose} className="absolute top-4 left-4 p-1.5 hover:bg-neutral-100 rounded-full"><X className="w-5 h-5" /></button>
      <h3 className="text-xl font-black pt-4">تمرين التنفس ٤-٧-٨</h3>
      <div className="w-32 h-32 bg-emerald-50 rounded-full mx-auto flex items-center justify-center animate-pulse">
        <span className="text-emerald-600 font-bold">شهيق...</span>
      </div>
      <p className="text-sm text-neutral-500">خذ شهيقاً عميقاً ببطء من الأنف</p>
    </div>
  </div>
);

const GratitudeJournal = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
    <div className="bg-white w-full max-w-md rounded-3xl p-6 text-right space-y-4 relative">
      <button onClick={onClose} className="absolute top-4 left-4 p-1.5 hover:bg-neutral-100 rounded-full"><X className="w-5 h-5" /></button>
      <h3 className="text-xl font-black pt-4">مفكرة الامتنان اليومية</h3>
      <textarea className="w-full h-32 p-3 bg-neutral-50 border border-neutral-200 rounded-2xl text-sm" placeholder="اكتب ٣ أشياء ممتن لها اليوم..." dir="rtl" />
      <button onClick={onClose} className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm">حفظ التدوينة</button>
    </div>
  </div>
);

const LiveSession = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
    <div className="bg-white w-full max-w-md rounded-3xl p-6 text-center space-y-4 relative">
      <button onClick={onClose} className="absolute top-4 left-4 p-1.5 hover:bg-neutral-100 rounded-full"><X className="w-5 h-5" /></button>
      <h3 className="text-xl font-black pt-4">البث المباشر: تأمل السكينة</h3>
      <div className="aspect-video bg-neutral-900 rounded-2xl flex items-center justify-center text-white/80 font-bold text-sm">
        جاري الاتصال بغرفة د. سارة...
      </div>
    </div>
  </div>
);

const SupportCircle = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
    <div className="bg-white w-full max-w-md rounded-3xl p-6 text-center space-y-4 relative">
      <button onClick={onClose} className="absolute top-4 left-4 p-1.5 hover:bg-neutral-100 rounded-full"><X className="w-5 h-5" /></button>
      <h3 className="text-xl font-black pt-4">دائرة الدعم الآمنة</h3>
      <p className="text-sm text-neutral-500">مساحة لمشاركة مشاعرك بسلام وسرية تامة مع المجتمع.</p>
    </div>
  </div>
);

// --- المكون الرئيسي (Dashboard) ---
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeQuoteIdx, setActiveQuoteIdx] = useState(0);
  
  const [showBreathing, setShowBreathing] = useState(false);
  const [showJournal, setShowJournal] = useState(false);
  const [showLive, setShowLive] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  const [playingSession, setPlayingSession] = useState(null);
  const [audioIsPlaying, setAudioIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(35); 
  const [audioTimer, setAudioTimer] = useState(142); 

  const [userMoodText, setUserMoodText] = useState('مرتاح ومستقر');

  const handleNextQuote = () => {
    setActiveQuoteIdx((prev) => (prev + 1) % quotes.length);
  };

  useEffect(() => {
    let interval;
    if (audioIsPlaying) {
      interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setAudioIsPlaying(false);
            return 100;
          }
          return prev + 0.5;
        });
        setAudioTimer((t) => (t > 0 ? t - 1 : 0));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [audioIsPlaying]);

  const handleTogglePlay = () => {
    setAudioIsPlaying(!audioIsPlaying);
  };

  const handlePlaySession = (session) => {
    setPlayingSession(session);
    setAudioIsPlaying(true);
    setAudioProgress(0);
    setAudioTimer(session.durationInSeconds || 240);
  };

  const formatAudioTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleClearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="bg-neutral-50 text-neutral-800 min-h-screen pb-36 overflow-x-hidden antialiased relative font-sans">
      
      {/* شريط الملاحة العلوي */}
      <header className="bg-white/70 backdrop-blur-lg flex flex-row-reverse justify-between items-center w-full px-6 py-4 sticky top-0 z-40 border-b border-neutral-100 select-none">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 rounded-full transition-all duration-300 relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 rounded-full border border-white" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 rounded-full transition-all duration-300" onClick={() => setActiveTab('profile')}>
            <User className="w-5 h-5" />
          </button>
        </div>
        
        <div className="text-2xl font-black text-emerald-600 font-sans tracking-wide cursor-pointer flex items-center gap-1.5 hover:opacity-90 active:scale-95 transition-all duration-300" onClick={() => setActiveTab('home')}>
          <span>نفس</span>
        </div>
      </header>

      {/* المحتوى الرئيسي للمشروع */}
      <main className="max-w-4xl mx-auto px-6 pt-8 space-y-12">
        <AnimatePresence mode="wait">
          
          {activeTab === 'home' && (
            <motion.div key="home-tab" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-12">
              
              <section className="relative text-right space-y-2">
                <div className="flex flex-col gap-1">
                  <h1 className="text-4xl md:text-5xl font-black text-neutral-950 tracking-tight">مرحباً بك</h1>
                  <p className="text-lg text-neutral-500 font-medium">كيف حالك اليوم؟ (أنت تشعر بـ: <span className="text-emerald-600 font-bold">{userMoodText}</span>)</p>
                </div>

                <div className="mt-8 relative overflow-hidden rounded-3xl bg-emerald-50 p-8 flex flex-col md:flex-row-reverse items-center justify-between gap-8 border border-emerald-100/50 group cursor-pointer transition-all duration-500 hover:bg-emerald-100/50" onClick={handleNextQuote}>
                  <div className="flex-1 space-y-3 text-right">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 flex items-center gap-1.5 justify-end">
                      <span>{quotes[activeQuoteIdx].author}</span>
                      <Sparkles className="w-3.5 h-3.5" />
                    </span>
                    <motion.h2 key={activeQuoteIdx} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="text-2xl md:text-3xl font-bold text-emerald-950 leading-snug">
                      "{quotes[activeQuoteIdx].text}"
                    </motion.h2>
                    <p className="text-[10px] text-emerald-600/80 font-semibold pt-1">(اضغط في أي مكان لتلقي إلهام آخر)</p>
                  </div>
                  <div className="w-full md:w-64 h-44 rounded-2xl overflow-hidden relative shadow-sm shrink-0">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2000ms]" src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=500&q=80" alt="Water ripple" />
                  </div>
                </div>
              </section>

              {/* شريط تتبع المزاج المحدث كلياً ليتناسب مع image_6e3e42.jpg */}
              <section className="relative">
                <MoodTracker onMoodChange={(mood) => setUserMoodText(mood)} />
              </section>

              <section className="grid grid-cols-1 md:grid-cols-12 gap-6 text-right">
                <div className="md:col-span-8 relative rounded-3xl overflow-hidden min-h-[320px] group shadow-sm hover:shadow-lg transition-shadow duration-500">
                  {/* الصورة كخلفية كاملة للبطاقة */}
                  <img
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.06] transition-transform duration-[3000ms] ease-out"
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=80"
                    alt="Zen bamboo"
                  />
                  {/* طبقة تدرّج أنيقة لضمان وضوح النص فوق الصورة */}
                  <div className="absolute inset-0 bg-gradient-to-l from-emerald-950/90 via-emerald-950/55 to-emerald-950/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />

                  <div className="relative z-10 p-8 md:p-10 flex flex-col justify-between h-full min-h-[320px] text-right">
                    <div className="space-y-3">
                      <div className="bg-white/15 backdrop-blur-md inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black text-white border border-white/25">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75 animate-ping" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
                        </span>
                        <span>جلسة بث مباشر قادمة</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-sm">تأمل السكينة العميقة</h3>
                      <p className="text-white/85 font-medium text-xs md:text-sm leading-relaxed max-w-sm ml-auto">انضم إلى الجلسة المباشرة لتخفيف الضغط العصبي مع د. سارة للتركيز على تنظيم ضربات القلب.</p>
                    </div>
                    <button onClick={() => setShowLive(true)} className="mt-8 bg-white text-emerald-800 font-bold py-3.5 px-7 rounded-full w-fit hover:bg-emerald-50 hover:shadow-lg transition-all active:scale-95 flex items-center gap-2">
                      <Play className="w-4 h-4 fill-emerald-700 text-emerald-700" />
                      <span>انضم الآن للبث المباشر</span>
                    </button>
                  </div>
                </div>

                <div className="md:col-span-4 bg-emerald-50/40 border border-emerald-100/50 rounded-3xl p-8 flex flex-col justify-between hover:shadow-sm transition-all">
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-4xl font-black text-emerald-950">١٢٠</div>
                      <div className="text-xs text-emerald-900 font-semibold opacity-90">دقيقة من التأمل هذا الأسبوع</div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-emerald-100">
                    <p className="text-[11px] font-bold text-emerald-700 leading-relaxed">أنت في تقدم ممتاز! استمر لـ ٣ أيام أخرى لإكمال هدفك الأسبوعي بنجاح.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-6 text-right">
                <div className="flex justify-between items-center flex-row-reverse">
                  <h3 className="text-2xl font-black">ممارساتك اليومية</h3>
                  <button onClick={() => setActiveTab('explore')} className="text-emerald-600 font-bold hover:underline text-xs">عرض جميع الجلسات</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div onClick={() => setShowBreathing(true)} className="bg-white rounded-2xl p-6 hover:shadow-md hover:scale-[1.01] transition-all group cursor-pointer border border-neutral-100">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Activity className="text-emerald-600 w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-neutral-900 group-hover:text-emerald-600 transition-colors">تمرين التنفس ٤-٧-٨</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">تمرين سريع لتهدئة ضربات القلب والجهاز العصبي في ٥ دقائق مجانًا.</p>
                  </div>

                  <div onClick={() => setShowJournal(true)} className="bg-white rounded-2xl p-6 hover:shadow-md hover:scale-[1.01] transition-all group cursor-pointer border border-neutral-100">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <BookOpen className="text-emerald-600 w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-neutral-900 group-hover:text-emerald-600 transition-colors">مفكرة الامتنان</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">دوّن ٣ أشياء دافئة تشعر بالامتنان وتصالح مع قلبك وتفاصيل يومك.</p>
                  </div>

                  <div onClick={() => setShowSupport(true)} className="bg-white rounded-2xl p-6 hover:shadow-md hover:scale-[1.01] transition-all group cursor-pointer border border-neutral-100">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <HeartHandshake className="text-emerald-600 w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-neutral-900 group-hover:text-emerald-600 transition-colors">دائرة الدعم</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">شارك مشاعرك بسلام مجهول تمامًا مع مجتمع "نفس" الدافئ والآمن.</p>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'sessions' && (
            <motion.div key="sessions-tab" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-8 text-right">
              <div className="space-y-2">
                <h2 className="text-3xl font-black text-neutral-900">جلساتي وجدولي المجدول</h2>
                <p className="text-sm text-neutral-500 font-medium">سجل الحضور الذهني والأنشطة المحجوزة المخصصة لك</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-neutral-100 text-right space-y-4">
                  <h3 className="text-base font-bold text-emerald-600 border-b border-neutral-100 pb-2">سلسلة رحلاتك المفضلة</h3>
                  <div className="space-y-3.5">
                    <div className="flex flex-row-reverse items-center justify-between p-3 bg-neutral-50 rounded-xl">
                      <div>
                        <h4 className="text-xs font-bold text-neutral-900">تأمل النوم العميق</h4>
                        <span className="text-[10px] text-neutral-500">كوتش ياسر • ٢٥ دقيقة</span>
                      </div>
                      <button onClick={() => setShowBreathing(true)} className="bg-emerald-600 text-white p-2 rounded-full"><Play className="w-3.5 h-3.5 fill-white" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'explore' && (
            <motion.div key="explore-tab" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
              <ExploreSessions onPlaySession={handlePlaySession} activePlayingSession={playingSession} isPlaying={audioIsPlaying} />
            </motion.div>
          )}

          {activeTab === 'profile' && (
            <motion.div key="profile-tab" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}>
              <ProfileStats onClearStorage={handleClearLocalStorage} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* مشغل صوتي سفلي عائم */}
      <AnimatePresence>
        {playingSession && (
          <motion.div initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 120, opacity: 0 }} className="fixed bottom-24 left-4 right-4 md:left-1/2 md:right-auto md:w-[640px] md:-translate-x-1/2 bg-white/95 backdrop-blur-xl z-30 p-4 rounded-3xl shadow-xl border border-neutral-100 flex flex-row-reverse items-center justify-between gap-4">
            <div className="flex flex-row-reverse items-center gap-3.5">
              <img src={playingSession.imageUrl} className="w-12 h-12 rounded-xl object-cover" alt="" />
              <div className="text-right">
                <h4 className="text-xs font-black text-neutral-900">{playingSession.title}</h4>
                <p className="text-[10px] text-neutral-500 mt-0.5">{playingSession.instructor}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-neutral-500 font-mono">{formatAudioTime(audioTimer)}</span>
              <button onClick={handleTogglePlay} className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center">
                {audioIsPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
              </button>
              <button onClick={() => setPlayingSession(null)} className="text-neutral-400 hover:text-red-500"><X className="w-4 h-4" /></button>
            </div>
            <div className="absolute bottom-0 left-4 right-4 h-1 bg-neutral-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-600 transition-all duration-1000" style={{ width: `${audioProgress}%` }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* شريط الملاحة السفلي الأيقوني */}
      <nav className="fixed bottom-0 left-0 w-full z-40 flex flex-row-reverse justify-around items-center px-4 pb-6 pt-3.5 bg-white/90 backdrop-blur-xl rounded-t-[32px] shadow-md border-t border-neutral-100">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center p-2 ${activeTab === 'home' ? 'text-emerald-600 font-bold' : 'text-neutral-400'}`}>
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-1">الرئيسية</span>
        </button>
        <button onClick={() => setActiveTab('sessions')} className={`flex flex-col items-center p-2 ${activeTab === 'sessions' ? 'text-emerald-600 font-bold' : 'text-neutral-400'}`}>
          <Compass className="w-5 h-5" />
          <span className="text-[10px] mt-1">جلساتي</span>
        </button>
        <button onClick={() => setActiveTab('explore')} className={`flex flex-col items-center p-2 ${activeTab === 'explore' ? 'text-emerald-600 font-bold' : 'text-neutral-400'}`}>
          <Compass className="w-5 h-5 rotate-45" />
          <span className="text-[10px] mt-1">اكتشف</span>
        </button>
        <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center p-2 ${activeTab === 'profile' ? 'text-emerald-600 font-bold' : 'text-neutral-400'}`}>
          <User className="w-5 h-5" />
          <span className="text-[10px] mt-1">حسابي</span>
        </button>
      </nav>

      {/* الشاشات المنبثقة التفاعلية */}
      <AnimatePresence>
        {showBreathing && <BreathingExercise onClose={() => setShowBreathing(false)} />}
        {showJournal && <GratitudeJournal onClose={() => setShowJournal(false)} />}
        {showLive && <LiveSession onClose={() => setShowLive(false)} />}
        {showSupport && <SupportCircle onClose={() => setShowSupport(false)} />}
      </AnimatePresence>

    </div>
  );
}