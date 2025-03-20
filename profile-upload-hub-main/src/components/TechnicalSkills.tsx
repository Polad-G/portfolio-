
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { personalData } from '@/data/personalData';
import { 
  Code, 
  Globe, 
  Languages, 
  LayoutGrid, 
  Database,
  Server
} from 'lucide-react';

const TechnicalSkills = () => {
  const { t } = useLanguage();
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredCategory(index);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  const getCategoryBackground = (index: number) => {
    const gradients = [
      'from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30',
      'from-pink-500/20 to-orange-500/20 hover:from-pink-500/30 hover:to-orange-500/30',
      'from-green-500/20 to-teal-500/20 hover:from-green-500/30 hover:to-teal-500/30',
      'from-yellow-500/20 to-amber-500/20 hover:from-yellow-500/30 hover:to-amber-500/30',
    ];
    return gradients[index % gradients.length];
  };

  const getIconColor = (index: number) => {
    const colors = [
      'text-blue-600',
      'text-pink-600',
      'text-green-600',
      'text-yellow-600',
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="animate-slide-up opacity-0" style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
      <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full mb-3">
        {t('technicalSkills')}
      </span>
      <h2 className="text-3xl md:text-4xl font-medium mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">{t('technicalSkills')}</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {personalData.technicalSkills.map((category, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-xl transition-all duration-300 transform border border-accent/20 
                        bg-gradient-to-br ${getCategoryBackground(index)}
                        ${hoveredCategory === index ? 'scale-105 shadow-lg' : 'hover:shadow-md'}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center mb-4">
              {getIconForCategory(category.category, `${getIconColor(index)} text-2xl`)}
              <h3 className={`text-lg font-medium ml-3 ${getIconColor(index)}`}>{t(category.category)}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className={`px-3 py-1 text-sm rounded-full transition-all duration-300
                              ${hoveredCategory === index ? 'bg-white text-foreground shadow-md' : 'bg-primary/10 text-primary-foreground'} 
                              font-medium`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to get icon based on category
const getIconForCategory = (category: string, className: string) => {
  switch (category) {
    case 'programming':
      return <Code className={className} />;
    case 'webDevelopment':
      return <Globe className={className} />;
    case 'languages':
      return <Languages className={className} />;
    case 'design':
      return <LayoutGrid className={className} />;
    case 'databases':
      return <Database className={className} />;
    default:
      return <Server className={className} />;
  }
};

export default TechnicalSkills;
