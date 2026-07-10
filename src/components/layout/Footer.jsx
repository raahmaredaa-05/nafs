import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, MessageCircle, BookOpen, Compass, User } from 'lucide-react'; 

const Footer = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleNavigation = (tabId) => {
    setActiveTab?.(tabId);
    navigate('/dashboard', { state: { targetTab: tabId } });  
  };

  return (
<nav className="fixed bottom-0 left-0 w-full z-50 flex flex-row-reverse justify-around items-center px-4 pb-6 pt-3.5 bg-white/90 backdrop-blur-xl rounded-t-[32px] shadow-[0_-4px_20px_rgba(0,0,0,0.05)] border-t border-neutral-100">      {/* الرئيسية */}
      <button 
        onClick={() => handleNavigation('home')} 
        className={`flex flex-col items-center justify-center px-4 py-2 rounded-2xl transition-all duration-300 outline-none
          ${activeTab === 'home' 
            ? 'text-[#0F766E] bg-[#A6CEC5] font-bold shadow-sm' 
            : 'text-neutral-400 hover:text-[#0F766E] hover:bg-[#A6CEC5] focus:bg-[#A6CEC5] focus:text-[#0F766E]'
          }`}
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px] mt-1">الرئيسية</span>
      </button>

      {/* محادثات */}
      <button 
        onClick={() => handleNavigation('chat')} 
        className={`flex flex-col items-center justify-center px-4 py-2 rounded-2xl transition-all duration-300 outline-none
          ${activeTab === 'chat' 
            ? 'text-[#0F766E] bg-[#A6CEC5] font-bold shadow-sm' 
            : 'text-neutral-400 hover:text-[#0F766E] hover:bg-[#A6CEC5] focus:bg-[#A6CEC5] focus:text-[#0F766E]'
          }`}
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-[10px] mt-1">محادثات</span>
      </button>

      {/* جلساتي */}
      <button 
        onClick={() => handleNavigation('sessions')} 
        className={`flex flex-col items-center justify-center px-4 py-2 rounded-2xl transition-all duration-300 outline-none
          ${activeTab === 'sessions' 
            ? 'text-[#0F766E] bg-[#A6CEC5] font-bold shadow-sm' 
            : 'text-neutral-400 hover:text-[#0F766E] hover:bg-[#A6CEC5] focus:bg-[#A6CEC5] focus:text-[#0F766E]'
          }`}
      >
        <BookOpen className="w-5 h-5" />
        <span className="text-[10px] mt-1">جلساتي</span>
      </button>

      {/* اكتشف */}
      <button 
        onClick={() => handleNavigation('explore')} 
        className={`flex flex-col items-center justify-center px-4 py-2 rounded-2xl transition-all duration-300 outline-none
          ${activeTab === 'explore' 
            ? 'text-[#0F766E] bg-[#A6CEC5] font-bold shadow-sm' 
            : 'text-neutral-400 hover:text-[#0F766E] hover:bg-[#A6CEC5] focus:bg-[#A6CEC5] focus:text-[#0F766E]'
          }`}
      >
        <Compass className="w-5 h-5" />
        <span className="text-[10px] mt-1">اكتشف</span>
      </button>

      {/* حسابي */}
      <button 
        onClick={() => handleNavigation('profile')} 
        className={`flex flex-col items-center justify-center px-4 py-2 rounded-2xl transition-all duration-300 outline-none
          ${activeTab === 'profile' 
            ? 'text-[#0F766E] bg-[#A6CEC5] font-bold shadow-sm' 
            : 'text-neutral-400 hover:text-[#0F766E] hover:bg-[#A6CEC5] focus:bg-[#A6CEC5] focus:text-[#0F766E]'
          }`}
      >
        <User className="w-5 h-5" />
        <span className="text-[10px] mt-1">حسابي</span>
      </button>

    </nav>
  );
};

export default Footer;