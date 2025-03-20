
import React, { useState } from 'react';

interface ProfilePictureProps {
  imageUrl?: string;
  className?: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ 
  imageUrl = '/Polad.jpg',
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (<div 
    className={`relative w-52 h-52 rounded-full overflow-hidden border-4 transition-all duration-500
      ${isHovered ? 'border-blue-600 shadow-xl scale-105' : 'border-gray-400 shadow-md'}
    `}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    {/* Şəkil */}
    <img 
      src={imageUrl} 
      alt="Profile" 
      className="w-full h-full object-cover"
    />
  
    {/* Hover zamanı çıxan overlay */}
    <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 
      ${isHovered ? 'opacity-50' : 'opacity-0'}`}>
    </div>
  </div>
  
    
  );
};

export default ProfilePicture;
