import React from 'react';
import { ArrowRight, Shield, HeartPulse, Home, PiggyBank, GraduationCap, Briefcase } from 'lucide-react';

const serviceList = [
    { title: "Life Insurance", icon: Shield, desc: "Comprehensive protection for your family's future", color: "text-blue-600", bg: "bg-blue-100/50", border: "border-blue-200" },
    { title: "Health Insurance", icon: HeartPulse, desc: "Cashless medical cover for emergencies", color: "text-rose-600", bg: "bg-rose-100/50", border: "border-rose-200" },
    { title: "Retirement Planning", icon: PiggyBank, desc: "Secure your golden years with stable income", color: "text-amber-600", bg: "bg-amber-100/50", border: "border-amber-200" },
    { title: "Child Education", icon: GraduationCap, desc: "Fund your child's higher education dreams", color: "text-indigo-600", bg: "bg-indigo-100/50", border: "border-indigo-200" },
    { title: "Home Loans", icon: Home, desc: "Affordable interest rates for your dream home", color: "text-emerald-600", bg: "bg-emerald-100/50", border: "border-emerald-200" },
    { title: "Business Insurance", icon: Briefcase, desc: "Protect your enterprise against risks", color: "text-slate-600", bg: "bg-slate-100/50", border: "border-slate-300" },
];

const ServiceCard = ({ title, icon: Icon, desc, color, bg, border }) => (
    <div className={`group bg-white p-6 md:p-8 rounded-[2rem] border ${border} hover:border-transparent shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden`}>
        {/* Subtle hover gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

        <div className="relative z-10">
            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 md:mb-8 ${bg} ${color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                <Icon size={28} className="md:w-8 md:h-8" strokeWidth={2} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 md:mb-4">{title}</h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 md:mb-8 h-12 md:h-16">{desc}</p>
            <a href="#" className={`inline-flex items-center text-sm md:text-base font-bold ${color} hover:brightness-75 transition-all`}>
                Explore Plan <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
        </div>
    </div>
);

const Services = () => {
    return (
        <div className="px-4 py-8 md:px-6 md:py-20 lg:py-32 bg-slate-50 relative min-h-[calc(100vh-80px)] md:min-h-0">
            <div className="max-w-7xl mx-auto relative z-10">

                <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">What We Offer</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">Premium Solutions</h2>
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed">Comprehensive financial and protection solutions tailored to secure your family, business, and assets.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                    {serviceList.map((service, index) => (
                        <div key={index} className={`md:translate-y-${index % 3 === 1 ? '8' : '0'}`}>
                            <ServiceCard {...service} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Services;
