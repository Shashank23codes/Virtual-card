import React from 'react';
import { Home, Info, Briefcase, Mail } from 'lucide-react';

const NavItem = ({ icon: Icon, label, id, activeTab, onClick }) => {
    const isActive = activeTab === id;
    return (
        <button
            onClick={() => onClick(id)}
            className={`flex flex-col items-center justify-center w-16 h-14 relative transition-all duration-300 ${isActive ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
                }`}
        >
            <div className={`transition-transform duration-300 mb-1 ${isActive ? '-translate-y-1 scale-110' : ''}`}>
                <Icon size={isActive ? 24 : 22} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'drop-shadow-sm' : ''} />
            </div>
            <span className={`text-[10px] sm:text-xs font-semibold transition-all duration-300 ${isActive ? 'opacity-100 font-bold tracking-wide' : 'opacity-80'
                }`}>{label}</span>

            {/* Active Indicator Dot */}
            {isActive && (
                <div className="absolute -bottom-1 w-1.5 h-1.5 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
            )}
        </button>
    );
};

const BottomNav = ({ activeTab, setActiveTab }) => {
    // Mobile only navigation
    return (
        <nav className="fixed bottom-0 w-full bg-white/90 backdrop-blur-xl border-t border-slate-200/60 pb-safe pt-2 md:hidden z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <div className="flex justify-around items-end px-4 max-w-md mx-auto h-[4.5rem]">
                <NavItem id="home" icon={Home} label="Home" activeTab={activeTab} onClick={setActiveTab} />
                <NavItem id="about" icon={Info} label="About" activeTab={activeTab} onClick={setActiveTab} />
                <NavItem id="services" icon={Briefcase} label="Services" activeTab={activeTab} onClick={setActiveTab} />
                <NavItem id="contact" icon={Mail} label="Contact" activeTab={activeTab} onClick={setActiveTab} />
            </div>
        </nav>
    );
};

export default BottomNav;
