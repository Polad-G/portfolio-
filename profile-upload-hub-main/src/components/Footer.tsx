
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Download, ChevronUp } from 'lucide-react';

const Footer = () => {
  const { t, language } = useLanguage();

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/polad-gahramanli-cv.pdf'; 
    link.download = `Polad-Gahramanli-CV-${language}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="fixed bottom-0 w-full p-4 z-40">
      <div className="flex justify-between mx-auto max-w-7xl px-4">
        <div 
          className="glass-panel px-6 py-3 rounded-full flex items-center justify-center shadow-lg animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          <button
            onClick={downloadCV}
            className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-all duration-300"
          >
            <Download size={16} className="group-hover:translate-y-[1px] transition-transform" />
            <span>{t('downloadCV')}</span>
          </button>
        </div>
        
        <div 
          className="glass-panel p-3 rounded-full flex items-center justify-center shadow-lg animate-fade-in cursor-pointer hover:bg-white/90 transition-all"
          style={{ animationDelay: '1.2s' }}
          onClick={scrollToTop}
        >
          <ChevronUp size={18} className="text-primary" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
