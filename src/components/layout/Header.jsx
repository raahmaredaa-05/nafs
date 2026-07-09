import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Bell, ArrowRight, BookOpen, User, BookA, LogOut } from 'lucide-react';

const Header = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleNavigation = (tabId) => {
    setActiveTab?.(tabId); 
    navigate('/dashboard', { state: { targetTab: tabId } });
  };

  const handleLogout = () => {
    navigate('/auth'); 
  };

  return (
    <header className="bg-white/70 backdrop-blur-lg flex flex-row justify-between items-center w-full px-6 py-4 sticky top-0 z-40 border-b border-neutral-100 select-none" dir="rtl">
      
      {/* اللوجو */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigation('home')}>
        <img src="public/nafs_icon.png" alt="logo icon" className="w-15 h-15 min-w-[24px] min-h-[24px] object-contain" />
        <div className="text-2xl font-black text-[#0F766E] font-sans tracking-wide">
          <span>نفس</span>
        </div>
      </div>

      {/* الأزرار */}
      <div className="flex items-center gap-2">
        
        {/* حسابي */}
        <button 
          className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 outline-none
            ${activeTab === 'profile' 
              ? 'text-[#0F766E] bg-[#A6CEC5] shadow-sm' 
              : 'text-neutral-400 hover:text-[#0F766E] hover:bg-[#A6CEC5] focus:bg-[#A6CEC5] focus:text-[#0F766E]'
            }`} 
          onClick={() => handleNavigation('profile')}
          title="حسابي"
        >
          <User className="w-[22px] h-[22px]" />
        </button>

        {/* يومياتي */}
        <button 
          className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 outline-none
            ${activeTab === 'my_diary' 
              ? 'text-[#0F766E] bg-[#A6CEC5] shadow-sm' 
              : 'text-neutral-400 hover:text-[#0F766E] hover:bg-[#A6CEC5] focus:bg-[#A6CEC5] focus:text-[#0F766E]'
            }`}
          onClick={() => handleNavigation('my_diary')}
          title="يومياتي"
        >
          <BookA className="w-[22px] h-[22px]" />
        </button>

        {/* جلساتي */}
        <button 
          className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 outline-none
            ${activeTab === 'sessions' 
              ? 'text-[#0F766E] bg-[#A6CEC5] shadow-sm' 
              : 'text-neutral-400 hover:text-[#0F766E] hover:bg-[#A6CEC5] focus:bg-[#A6CEC5] focus:text-[#0F766E]'
            }`} 
          onClick={() => handleNavigation('sessions')}
          title="جلساتي"
        >
          <BookOpen className="w-[22px] h-[22px]" />
        </button>

        {/* الإشعارات */}
        <button 
          className="w-12 h-12 flex items-center justify-center text-neutral-400 hover:text-[#0F766E] hover:bg-[#A6CEC5] focus:bg-[#A6CEC5] focus:text-[#0F766E] rounded-full transition-all duration-300 relative outline-none"
          title="الإشعارات"
        >
          <Bell className="w-[22px] h-[22px]" />
          <span className="absolute top-3.5 right-3.5 w-2 h-2 bg-rose-500 rounded-full border border-white" />
        </button>

        {/* خط فاصل بسيط */}
        <div className="w-[1px] h-6 bg-neutral-200 mx-1" />

        {/* تسجيل الخروج */}
        <button 
          onClick={handleLogout}
          className="w-12 h-12 flex items-center justify-center text-neutral-400 hover:text-rose-600 hover:bg-[#A6CEC5] focus:bg-[#A6CEC5] focus:text-rose-600 rounded-full transition-all duration-300 outline-none"
          title="تسجيل الخروج"
        >
          <LogOut className="w-[21px] h-[21px]" />
        </button>
      </div>

    </header>
  );
};

export default Header;