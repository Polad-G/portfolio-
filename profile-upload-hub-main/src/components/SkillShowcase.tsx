
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Star, Code, Globe, Palette } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: React.ReactNode;
  description: string;
}

interface SkillShowcaseProps {
  className?: string;
}

const SkillShowcase: React.FC<SkillShowcaseProps> = ({ className = '' }) => {
  const { t } = useLanguage();
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  
  // Simple skill list with icons and descriptions
  const skills: Skill[] = [
    { 
      name: 'HTML/CSS', 
      level: 90, 
      color: '#E34F26', 
      icon: <Globe className="h-5 w-5" />,
      description: 'Creating responsive and accessible web layouts'
    },
    { 
      name: 'JavaScript', 
      level: 85, 
      color: '#F7DF1E', 
      icon: <Code className="h-5 w-5" />,
      description: 'Building interactive user interfaces and applications'
    },
    { 
      name: 'React', 
      level: 80, 
      color: '#61DAFB', 
      icon: <Code className="h-5 w-5" />,
      description: 'Developing modern component-based web applications'
    },
    { 
      name: 'UI Design', 
      level: 70, 
      color: '#FF61F6', 
      icon: <Palette className="h-5 w-5" />,
      description: 'Creating visually appealing and user-friendly interfaces'
    },
  ];

  return (
    <div className={`relative ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
        My Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-lg transition-all duration-500 cursor-pointer border bg-white/5 backdrop-blur-sm
              ${activeSkill === index ? 'scale-105 shadow-lg' : 'hover:scale-105'}
            `}
            style={{
              borderColor: activeSkill === index ? skill.color : 'transparent',
              boxShadow: activeSkill === index ? `0 10px 25px -5px ${skill.color}40` : 'none'
            }}
            onMouseEnter={() => setActiveSkill(index)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            <div className="flex items-center mb-3">
              <div className="mr-3 p-2 rounded-md" style={{ backgroundColor: `${skill.color}20` }}>
                {React.cloneElement(skill.icon as React.ReactElement, { 
                  style: { color: skill.color } 
                })}
              </div>
              <h3 className="text-xl font-bold" style={{ color: skill.color }}>{skill.name}</h3>
              <div className="ml-auto flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4" 
                    fill={i < Math.floor(skill.level / 20) ? skill.color : 'transparent'} 
                    stroke={skill.color}
                  />
                ))}
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mb-4">{skill.description}</p>
            
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200/20">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
              
              <div className="flex justify-between mt-1">
                <Badge variant="outline" className="text-xs opacity-70">Beginner</Badge>
                <Badge variant="outline" className="text-xs opacity-70" style={{ color: skill.color }}>{skill.level}%</Badge>
                <Badge variant="outline" className="text-xs opacity-70">Expert</Badge>
              </div>
            </div>
            
            {activeSkill === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 rounded-lg"
                style={{ 
                  background: `radial-gradient(circle at 50% 50%, ${skill.color}10 0%, transparent 70%)`,
                  zIndex: -1
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillShowcase;
