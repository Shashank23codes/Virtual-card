import React from 'react';
import { Share2, Phone, Mail, MessageCircle, Send, Download, Facebook, Instagram, Linkedin, Youtube, Twitter, Globe } from 'lucide-react';

const ActionButton = ({ icon: Icon, label, href, primary, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    target={onClick ? undefined : "_blank"}
    rel="noopener noreferrer"
    className={`flex items-center justify-center gap-2 px-3 py-3 sm:px-4 sm:py-3.5 rounded-[0.8rem] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${primary
      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:opacity-95'
      : 'bg-white text-[#2a2f5b] hover:bg-slate-50'
      } `}
  >
    <Icon size={18} className={primary ? "text-white" : "text-blue-500"} strokeWidth={primary ? 2.5 : 2} />
    <span className={`text-sm sm:text-[15px] ${primary ? 'font-bold text-white' : 'font-semibold text-[#1e2e6b]'} `}>{label}</span>
  </a>
);

const Hero = () => {
  const handleSaveContact = (e) => {
    e.preventDefault();
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sahu;Ramesh;;;
FN:Ramesh Sahu
TITLE:Financial Doctor
TEL;TYPE=CELL:+918275407846
TEL;TYPE=WORK,MSG:+918055073251
EMAIL;TYPE=WORK:rssahu4u@gmail.com
NOTE:Expert advice on Life Insurance, Health Care, and Wealth Management.
URL:${window.location.href}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Ramesh_Sahu_Contact.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative pt-8 pb-10 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-[#2a3c8c] via-[#22306d] to-[#1e2554] overflow-hidden text-white w-full min-h-[calc(100vh-80px)] md:min-h-[85vh] flex items-center justify-center">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-blue-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-min">

          {/* Card 1: Profile Image & Name (Spans 2 rows on large screens) */}
          <div className="lg:row-span-2 bg-white/5 backdrop-blur-xl border border-white/10 pt-10 pb-12 px-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center shadow-[0_8px_32px_rgba(0,0,0,0.15)] group relative overflow-hidden hover:bg-white/10 transition-colors duration-500">
            {/* Glowing orb behind profile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-[40px] pointer-events-none"></div>

            <div className="relative w-48 h-48 md:w-56 md:h-56 mb-8 shrink-0">
              <img
                src="/Profilepic.JPG"
                alt="Ramesh Sahu"
                className="relative w-full h-full object-cover object-top rounded-full border-[4px] border-white/80 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3 drop-shadow-md">
              Ramesh Sahu
            </h1>
            <p className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm opacity-90">
              Financial Doctor
            </p>
          </div>

          {/* Card 2: Bio & Intro (Spans 2 cols on large screens) */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#46538c]/40 to-[#22306d]/40 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-[2.5rem] flex flex-col justify-center relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.15)] group hover:border-white/20 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none transition-opacity group-hover:opacity-100 opacity-60 duration-500"></div>

            <h2 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-white mb-6 leading-[1.2] tracking-tight drop-shadow-sm">
              Securing futures with over a decade of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">trusted experience.</span>
            </h2>
            <p className="text-slate-200/90 text-lg lg:text-xl leading-relaxed md:max-w-[95%] font-medium">
              Expert advice on Life Insurance, Health Care, and Wealth Management. We simplify finance so you can focus on building a legacy for your family with total peace of mind.
            </p>
          </div>

          {/* Card 3: Social & Share */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] flex flex-col items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:bg-white/10 transition-colors duration-500">
            <h3 className="text-lg font-bold text-white mb-6 tracking-wider uppercase text-center opacity-80">Connect & Share</h3>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8 lg:grid lg:grid-cols-3 lg:gap-4 lg:w-fit lg:mx-auto">
              <a href="http://www.rssahu.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white rounded-[1rem] sm:rounded-[1.25rem] transition-all border border-transparent hover:border-white/30" title="Website">
                <Globe size={20} className="sm:w-[24px] sm:h-[24px]" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-white/10 hover:bg-white/20 text-slate-200 hover:text-blue-500 rounded-[1rem] sm:rounded-[1.25rem] transition-all border border-transparent hover:border-blue-500/40" title="Facebook">
                <Facebook size={20} className="sm:w-[24px] sm:h-[24px]" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-white/10 hover:bg-white/20 text-slate-200 hover:text-pink-500 rounded-[1rem] sm:rounded-[1.25rem] transition-all border border-transparent hover:border-pink-500/40" title="Instagram">
                <Instagram size={20} className="sm:w-[24px] sm:h-[24px]" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-white/10 hover:bg-white/20 text-slate-200 hover:text-blue-400 rounded-[1rem] sm:rounded-[1.25rem] transition-all border border-transparent hover:border-blue-400/40" title="LinkedIn">
                <Linkedin size={20} className="sm:w-[24px] sm:h-[24px]" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-white/10 hover:bg-white/20 text-slate-200 hover:text-red-500 rounded-[1rem] sm:rounded-[1.25rem] transition-all border border-transparent hover:border-red-500/40" title="YouTube">
                <Youtube size={20} className="sm:w-[24px] sm:h-[24px]" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-white/10 hover:bg-white/20 text-slate-200 hover:text-slate-100 rounded-[1rem] sm:rounded-[1.25rem] transition-all border border-transparent hover:border-slate-400/40" title="X (Twitter)">
                <img src="/x-logo.svg" alt="X" className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] opacity-80 hover:opacity-100 transition-opacity invert" />
              </a>
            </div>

            <button
              onClick={() => {
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
              className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white px-6 py-4 rounded-2xl transition-all text-[15px] font-bold shadow-lg mt-auto">
              <Share2 size={18} strokeWidth={2.5} />
              <span>Share Profile</span>
            </button>
          </div>

          {/* Card 4: Quick Connect */}
          <div className="bg-[#46538c]/80 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] flex flex-col justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

            <h3 className="text-lg font-bold text-white mb-6 tracking-wider uppercase text-center opacity-80 relative z-10">
              Quick Actions
            </h3>

            <div className="flex flex-col gap-3 relative z-10">
              <ActionButton icon={Phone} label="Call Now" href="tel:8275407846" primary />
              <div className="grid grid-cols-2 gap-3">
                <ActionButton
                  icon={MessageCircle}
                  label="WhatsApp"
                  href={`https://wa.me/918055073251?text=${encodeURIComponent('Hi Ramesh, I would like to connect with you regarding your financial services.')}`}
                />
                <ActionButton icon={Mail} label="Email Me" href="mailto:rssahu4u@gmail.com" />
              </div>
              <ActionButton icon={Send} label="Direction" href="https://www.google.com/maps/search/?api=1&query=Flat+No+C%2F9%2C+NIT+Gharkul+Parisar%2C+Vyanktesh+Nagar%2C+Nandanvan%2C+Nagpur%2C+Maharashtra" />
              <div className="pt-1">
                <ActionButton icon={Download} label="Save to Phonebook" href="#" onClick={handleSaveContact} primary />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
