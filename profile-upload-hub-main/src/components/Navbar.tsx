
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Set active section based on scroll position
      const sections = ['home', 'about', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'az' : 'en');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { id: 'home', label: t('home') },
    { id: 'about', label: t('about') },
    { id: 'contact', label: t('contact') }
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="font-medium text-xl mr-8 text-primary">PG</div>
          <ul className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`} 
                  className={cn(
                    "nav-link",
                    activeSection === link.id && "active"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 text-sm font-medium rounded-full border border-primary/20 hover:bg-primary/5 transition-colors"
          >
            {language === 'en' ? 'AZ' : 'EN'}
          </button>
          
          <button 
            className="md:hidden p-1 rounded-full text-primary hover:bg-primary/5 transition-colors"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 transform transition-transform duration-300 flex flex-col md:hidden pt-20",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex flex-col items-center space-y-6 p-6">
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
