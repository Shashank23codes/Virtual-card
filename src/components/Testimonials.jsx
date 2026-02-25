import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Anil Sharma",
        role: "Business Owner",
        content: "The service and investment advice provided by Ramesh Sahu is extraordinary. I like their confident and customer-friendly attitude with a door-step service approach.",
        rating: 5,
    },
    {
        name: "Priya Desai",
        role: "IT Professional",
        content: "Excellent guidance on term insurance and mutual funds. Helped me secure my family's future with the right plans.",
        rating: 5,
    },
    {
        name: "Vikram Singh",
        role: "Doctor",
        content: "Very knowledgeable and responsive. Claim settlement process was smooth and hassle-free thanks to his support.",
        rating: 5,
    }
];

const Testimonials = () => {
    return (
        <div className="px-4 py-8 md:px-6 md:py-20 lg:py-32 max-w-7xl mx-auto relative">

            <div className="text-center mb-12 md:mb-20">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Success Stories</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">Client Testimonials</h2>
                <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">Trusted by professionals, families, and business owners across the region.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 relative z-10">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-white p-6 md:p-10 rounded-[2rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 relative group">
                        <Quote className="absolute top-6 right-6 lg:top-8 lg:right-8 text-slate-100 group-hover:text-blue-50 transition-colors duration-500" size={48} />

                        <div className="flex gap-1 mb-6 md:mb-8 relative z-10">
                            {[...Array(t.rating)].map((_, j) => (
                                <Star key={j} size={20} className="fill-amber-400 text-amber-400" />
                            ))}
                        </div>

                        <p className="text-slate-600 text-base md:text-lg italic mb-8 md:mb-10 leading-relaxed md:h-32 relative z-10">"{t.content}"</p>

                        <div className="flex items-center gap-5 border-t border-slate-100 pt-6 md:pt-8 bg-gradient-to-t from-white via-white to-transparent">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-bold text-white shadow-inner text-xl">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-lg">{t.name}</h4>
                                <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">{t.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Testimonials;
