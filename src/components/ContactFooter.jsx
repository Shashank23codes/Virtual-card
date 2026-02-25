import React from 'react';
import { MapPin, PhoneCall, Send, Calendar, Facebook, Globe, Clock, ArrowRight, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const ContactFooter = () => {
    return (
        <div className="bg-[#1e2554] border-t border-slate-800 text-white w-full relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute bottom-[-20%] right-[-10%] w-[50rem] h-[50rem] bg-indigo-600/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 md:py-20 lg:py-32 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

                    {/* Left Side: Contact Form */}
                    <div className="bg-slate-900/60 p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl relative group">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -ml-16 -mt-16 pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-3">Get In Touch</h2>
                        <p className="text-base text-slate-400 mb-8 md:mb-10">Fill out the form below and we'll get back to you shortly.</p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Full Name</label>
                                    <input type="text" className="w-full bg-slate-950/50 border border-slate-700/50 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-600" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Mobile Number</label>
                                    <input type="tel" className="w-full bg-slate-950/50 border border-slate-700/50 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-600" placeholder="+91 98765 43210" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Message or Inquiry</label>
                                <textarea className="w-full bg-slate-950/50 border border-slate-700/50 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-600 h-36 border-resize-none" placeholder="How can we help you secure your future?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-2xl px-6 py-4 md:py-5 flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 mt-4">
                                <Send size={20} /> <span className="text-lg">Send Enquiry</span>
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Contact Information */}
                    <div className="flex flex-col justify-center space-y-8 md:space-y-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">Contact Information</h2>
                            <p className="text-base md:text-lg text-slate-300 leading-relaxed lg:max-w-md">
                                We are available for physical consultations in Nagpur or virtual meetings across India. Let's discuss your financial roadmap today.
                            </p>
                        </div>

                        <div className="space-y-6 md:space-y-8">
                            <div className="flex items-start gap-6 p-6 md:p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                                <div className="p-4 bg-blue-500/20 text-blue-400 rounded-2xl shrink-0">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xl mb-2">Office Address</h4>
                                    <p className="text-slate-300 leading-relaxed mb-4">
                                        Flat No C/9, NIT Gharkul Parisar, <br />Vyanktesh Nagar, Nandanvan, <br />Nagpur, Maharashtra
                                    </p>
                                    <a href="https://www.google.com/maps/search/?api=1&query=Flat+No+C%2F9%2C+NIT+Gharkul+Parisar%2C+Vyanktesh+Nagar%2C+Nandanvan%2C+Nagpur%2C+Maharashtra" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider">
                                        Open in Maps <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-6 md:p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                                <div className="p-4 bg-indigo-500/20 text-indigo-400 rounded-2xl shrink-0">
                                    <Clock size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xl mb-2">Business Hours</h4>
                                    <p className="text-slate-300 text-lg">Monday - Saturday: 10:00 AM - 07:00 PM</p>
                                </div>
                            </div>

                        </div>

                        <div className="pt-8 mt-4 border-t border-white/10 flex items-center gap-5">
                            <a href="http://www.rssahu.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-xl transition-all border border-transparent hover:border-white/20 shrink-0" title="Website">
                                <Globe size={20} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-blue-500 rounded-xl transition-all border border-transparent hover:border-blue-500/30 shrink-0" title="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-pink-500 rounded-xl transition-all border border-transparent hover:border-pink-500/30 shrink-0" title="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-blue-400 rounded-xl transition-all border border-transparent hover:border-blue-400/30 shrink-0" title="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-red-500 rounded-xl transition-all border border-transparent hover:border-red-500/30 shrink-0" title="YouTube">
                                <Youtube size={20} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-slate-100 rounded-xl transition-all border border-transparent hover:border-slate-400/30 flex items-center justify-center w-[46px] h-[46px]" title="X (Twitter)">
                                <img src="/x-logo.svg" alt="X" className="w-[20px] h-[20px] opacity-70 hover:opacity-100 transition-opacity invert" />
                            </a>
                            <div className="ml-auto text-right">
                                <p className="text-base font-bold text-slate-300">© 2026 Ramesh Sahu Financial.</p>
                                <p className="text-sm text-slate-500 mt-1">Powered by Zaidi Corporation</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactFooter;
