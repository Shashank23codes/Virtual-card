import React from 'react';
import { Home, Info, Briefcase, Mail } from 'lucide-react';

const TopNav = () => {
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <nav className="hidden md:block fixed top-0 w-full z-50 bg-[#1e2554]/90 backdrop-blur-xl border-b border-white/10 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo and Name */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-inner">R</div>
                    <span className="font-bold text-xl tracking-wide">Ramesh Sahu</span>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-8">
                    <button onClick={() => scrollTo('home')} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-semibold text-sm tracking-wide">
                        Home
                    </button>
                    <button onClick={() => scrollTo('about')} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-semibold text-sm tracking-wide">
                        About
                    </button>
                    <button onClick={() => scrollTo('services')} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-semibold text-sm tracking-wide">
                        Services
                    </button>
                    <button onClick={() => scrollTo('contact')} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-2.5 rounded-full transition-all text-sm font-bold shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 transform hover:-translate-y-0.5">
                        <Mail size={16} /> Let's Connect
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default TopNav;
