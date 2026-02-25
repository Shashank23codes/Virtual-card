import React from 'react';
import { Phone, Mail, MessageCircle, Navigation, Download } from 'lucide-react';

const ActionButton = ({ icon: Icon, label, href, primary, onClick }) => (
    <a
        href={href}
        onClick={onClick}
        target={onClick ? undefined : "_blank"}
        rel="noopener noreferrer"
        className={`flex flex-col items-center justify-center gap-2 p-3 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md ${primary
            ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-white hover:scale-105'
            : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-slate-100'
            }`}
    >
        <div className={`p-3 rounded-full ${primary ? 'bg-white/20' : 'bg-blue-100 text-blue-600'}`}>
            <Icon size={22} className={primary ? "text-white" : ""} />
        </div>
        <span className={`text-xs font-semibold ${primary ? 'text-white' : ''}`}>{label}</span>
    </a>
);

const QuickActions = () => {
    return (
        <div className="grid grid-cols-3 gap-4 px-6 -mt-8 relative z-20">
            <div className="col-span-3 grid grid-cols-5 gap-3 bg-white/80 backdrop-blur-xl p-4 rounded-3xl shadow-xl border border-white/40">
                <ActionButton icon={Phone} label="Call" href="tel:8275407846" primary />
                <ActionButton
                    icon={MessageCircle}
                    label="WhatsApp"
                    href={`https://wa.me/918055073251?text=${encodeURIComponent('Hi Ramesh, I would like to connect with you regarding your financial services.')}`}
                />
                <ActionButton icon={Mail} label="Email" href="mailto:rssahu4u@gmail.com" />
                <ActionButton icon={Navigation} label="Direction" href="https://www.google.com/maps/search/?api=1&query=Flat+No+C%2F9%2C+NIT+Gharkul+Parisar%2C+Vyanktesh+Nagar%2C+Nandanvan%2C+Nagpur%2C+Maharashtra" />
                <ActionButton
                    icon={Download}
                    label="Share"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        if (navigator.share) {
                            navigator.share({
                                title: 'Ramesh Sahu - Financial Doctor',
                                text: 'Expert advice on Life Insurance, Health Care, and Wealth Management. Check out Ramesh Sahu’s profile!',
                                url: window.location.href,
                            }).catch((error) => console.log('Error sharing:', error));
                        } else {
                            alert("Web Share API not supported on this device. Please copy the URL to share.");
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default QuickActions;
