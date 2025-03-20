
import React, { useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { personalData } from '@/data/personalData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import ProfilePicture from '@/components/ProfilePicture';
import TechnicalSkills from '@/components/TechnicalSkills';
import Projects from '@/components/Projects';
import SkillShowcase from '@/components/SkillShowcase';
import { Check, Download, MapPin, Mail, Phone, Calendar, Flag, User } from 'lucide-react';

const PersonalInfo: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-16 min-h-screen flex items-center bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 animate-slide-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full mb-3">
              {t('personalInfo')}
            </span>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">{t('about')}</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1 flex justify-center">
                <ProfilePicture className="w-52 h-52 md:w-64 md:h-64 shadow-lg" />
              </div>
              
              <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm border border-blue-100 flex items-start hover:shadow-md transition-all">
                    <User className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">{t('name')}</p>
                      <p className="font-medium">{personalData.name}</p>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 shadow-sm border border-purple-100 flex items-start hover:shadow-md transition-all">
                    <Calendar className="w-5 h-5 text-purple-500 mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">{t('dateOfBirth')}</p>
                      <p className="font-medium">{personalData.dateOfBirth}</p>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-50 to-amber-50 shadow-sm border border-yellow-100 flex items-start hover:shadow-md transition-all">
                    <User className="w-5 h-5 text-amber-500 mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">{t('sex')}</p>
                      <p className="font-medium">{t('male')}</p>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-gradient-to-br from-teal-50 to-emerald-50 shadow-sm border border-teal-100 flex items-start hover:shadow-md transition-all">
                    <Flag className="w-5 h-5 text-emerald-500 mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">{t('nationality')}</p>
                      <p className="font-medium">{personalData.nationality}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-rose-50 to-red-50 shadow-sm border border-rose-100 flex items-start hover:shadow-md transition-all">
                    <MapPin className="w-5 h-5 text-rose-500 mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">{t('residence')}</p>
                      <p className="font-medium">{personalData.residence}</p>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-50 to-sky-50 shadow-sm border border-cyan-100 flex items-start hover:shadow-md transition-all">
                    <Mail className="w-5 h-5 text-sky-500 mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">{t('email')}</p>
                      <p className="font-medium">{personalData.email}</p>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-gradient-to-br from-green-50 to-lime-50 shadow-sm border border-green-100 flex items-start hover:shadow-md transition-all">
                    <Phone className="w-5 h-5 text-lime-500 mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">{t('phone')}</p>
                      <p className="font-medium">{personalData.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12 animate-slide-up opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full mb-3">
              {t('education')}
            </span>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 text-transparent bg-clip-text">{t('education')}</h2>
            
            <div className="space-y-8">
              {personalData.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-6 relative hover:pl-8 transition-all">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary"></div>
                  <div className="p-5 rounded-lg bg-white shadow-sm border border-accent/10 hover:shadow-md transition-all">
                    <h3 className="text-xl font-medium text-primary bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">{edu.institution}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{edu.years}</p>
                    <p>{edu.program}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-12 animate-slide-up opacity-0" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full mb-3">
              {t('softSkills')}
            </span>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-transparent bg-clip-text">{t('skills')}</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {personalData.softSkills.map((skill, index) => (
                <div key={index} className="flex items-start p-4 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 shadow-sm border border-amber-100 hover:shadow-md transition-all">
                  <Check className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>{t(`skill${index + 1}`)}</span>
                </div>
              ))}
            </div>
          </div>
          
          <TechnicalSkills />
          
          <div className="mt-16">
            <Projects />
          </div>
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.1),transparent_70%)]"></div>
      </div>
      <div className="container mx-auto text-center z-10 px-4">
        <div className="mx-auto w-40 h-40 mb-8">
          <ProfilePicture className="shadow-lg" />
        </div>
        <h1 
  className="text-5xl md:text-7xl font-bold mb-6 animate-slide-down opacity-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text" 
  style={{ animationFillMode: 'forwards' }}
>
  {useLanguage().t('developerName')}
</h1>

<p 
  className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-slide-down opacity-0" 
  style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
>
  {useLanguage().t('description')}
</p>

        <div className="mt-8 animate-slide-down opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          <button
            onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all"
          >
            {useLanguage().t('learnMore')}
          </button>
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-16 min-h-screen flex items-center bg-gradient-to-t from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 animate-slide-up opacity-0" style={{ animationFillMode: 'forwards' }}>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full mb-3">
              {t('contact')}
            </span>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text">{t('contact')}</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 shadow-sm border border-pink-100 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-pink-500 mr-3" />
                  <h3 className="text-lg font-medium">{t('email')}</h3>
                </div>
                <a href={`mailto:${personalData.email}`} className="text-primary hover:underline transition-colors">
                  {personalData.email}
                </a>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 shadow-sm border border-indigo-100 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-indigo-500 mr-3" />
                  <h3 className="text-lg font-medium">{t('phone')}</h3>
                </div>
                <a href={`tel:${personalData.phone}`} className="text-primary hover:underline transition-colors">
                  {personalData.phone}
                </a>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">{t('contactMessage')}</p>
              <button 
                onClick={() => window.location.href = `mailto:${personalData.email}`}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                {t('sendMessage')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import useLanguage inside component
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Optional: Show welcome toast
    toast({
      title: "Welcome",
      description: "Thanks for visiting my portfolio",
      duration: 3000,
    });
  }, [toast]);
  
  return (
    <LanguageProvider translations={translations}>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Home />
          <PersonalInfo />
          <section className="py-16 min-h-screen flex items-center bg-gradient-to-b from-background via-accent/5 to-background">
            <div className="container mx-auto px-4">
              <SkillShowcase />
            </div>
          </section>
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
