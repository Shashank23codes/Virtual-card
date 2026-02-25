import React from 'react';
import { Building2, ShieldCheck, Award, TrendingUp } from 'lucide-react';

const Stat = ({ number, label, icon: Icon }) => (
    <div className="flex flex-col items-center p-4 md:p-8 bg-white/60 md:bg-white/40 backdrop-blur-xl rounded-[2rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
        <div className="p-3 md:p-4 bg-blue-600/10 text-blue-600 rounded-2xl mb-3 md:mb-5">
            <Icon size={24} className="md:w-8 md:h-8" />
        </div>
        <span className="text-xl md:text-3xl lg:text-4xl font-extrabold text-slate-800 mb-1 md:mb-2">{number}</span>
        <span className="text-xs md:text-sm text-slate-500 text-center uppercase tracking-[0.1em] font-bold">{label}</span>
    </div>
);

const AboutInfo = () => {
    return (
        <div className="px-4 py-8 md:px-6 md:py-20 lg:py-32 relative overflow-hidden bg-slate-50/50">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none hidden md:block">
                <div className="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24 items-center">

                {/* Left: Text Content */}
                <div className="w-full lg:w-5/12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6 md:mb-8 border border-blue-100 shadow-sm">
                        <Building2 size={16} />
                        <span className="uppercase tracking-wider text-xs">Company Overview</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6 md:mb-8 leading-[1.15] tracking-tight">
                        Partnered with India's Most Trusted Brand
                    </h2>

                    <p className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8">
                        I am a Life Insurance Consultant working with <strong className="text-slate-800">Life Insurance Corporation of India (LIC)</strong>.
                        LIC is India's Largest & Oldest Insurance Company, offering products with maximum safety and security for all age groups.
                    </p>
                    <p className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed">
                        LIC has the World's best claim settlement ratio, making it a foundation for nation-building and personal wealth security.
                    </p>
                </div>

                {/* Right: Stats Grid */}
                <div className="w-full lg:w-7/12 mt-4 lg:mt-0">
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        <div className="translate-y-0 md:translate-y-8">
                            <Stat icon={ShieldCheck} number="30+ Cr" label="Policies Sold" />
                        </div>
                        <div className="translate-y-0 md:-translate-y-8">
                            <Stat icon={TrendingUp} number="₹52L Cr" label="Assets Value" />
                        </div>
                        <div className="translate-y-0 md:translate-y-8">
                            <Stat icon={Award} number="2.3L Cr" label="Claims Settled" />
                        </div>
                        <div className="translate-y-0 md:-translate-y-8">
                            <Stat icon={Building2} number="#1 Brand" label="Most Valued" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutInfo;
