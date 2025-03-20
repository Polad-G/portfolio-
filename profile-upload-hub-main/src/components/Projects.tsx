import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: 'project1Title',
      description: 'project1Description',
      image: 'https://imgur.com/tRyFIip.jpg',
      color: 'from-blue-500/20 to-indigo-500/20',
      hoverColor: 'group-hover:from-blue-500/40 group-hover:to-indigo-500/40',
      link: 'http://country-info00.netlify.app/'
    },
    {
      id: 2,
      title: 'project2Title',
      description: 'project2Description',
      image: 'https://imgur.com/qA4ehxn.jpg',
      color: 'from-pink-500/20 to-rose-500/20',
      hoverColor: 'group-hover:from-pink-500/40 group-hover:to-rose-500/40',
      link: 'http://true-false0.netlify.app/'
    },
    {
      id: 3,
      title: 'project3Title',
      description: 'project3Description',
      image: 'https://imgur.com/vOK68Mj.jpg',
      color: 'from-emerald-500/20 to-teal-500/20',
      hoverColor: 'group-hover:from-emerald-500/40 group-hover:to-teal-500/40',
      link: 'https://must-visit.netlify.app/'
    },
    {
      id: 4,
      title: 'project4Title',
      description: 'project4Description',
      image: 'https://imgur.com/APFlRxw.jpg',
      color: 'from-amber-500/20 to-yellow-500/20',
      hoverColor: 'group-hover:from-amber-500/40 group-hover:to-yellow-500/40',
      link: 'https://imagine-family.netlify.app'
    }
  ];

  return (
    <div className="animate-slide-up opacity-0" style={{ animationDelay: '1100ms', animationFillMode: 'forwards' }}>
      <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full mb-3">
        {t('projects')}
      </span>
      <h2 className="text-3xl md:text-4xl font-medium mb-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
        {t('projects')}
      </h2>
      <p className="text-muted-foreground mb-8">{t('projectsSubtitle')}</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            className={`group rounded-xl overflow-hidden border border-accent/10 transition-all duration-500 hover:shadow-xl relative`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} ${project.hoverColor} transition-all duration-500 opacity-100 z-0`}></div>
            
            <div className="relative z-10 p-6 h-full flex flex-col">
              <div className="overflow-hidden rounded-lg mb-4 h-48">
                <img 
                  src={project.image} 
                  alt={t(project.title)} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                {t(project.title)}
              </h3>
              
              <p className="text-muted-foreground mb-4 flex-grow">
                {t(project.description)}
              </p>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm font-medium text-primary transition-all duration-300 group-hover:text-primary/80"
              >
                <span>{t('viewProject')}</span>
                <ExternalLink size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Projects;
