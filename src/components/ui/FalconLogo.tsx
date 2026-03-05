'use client';

import React from 'react';

interface FalconLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
}

export const FalconLogo: React.FC<FalconLogoProps> = ({ 
  size = 'md', 
  animated = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-24 h-24',
    xl: 'w-48 h-48',
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full fill-current text-thermal"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Falcon Eye - Central Focus */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className={animated ? 'animate-pulse-slow' : ''} />
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        
        {/* Pupil */}
        <circle cx="50" cy="50" r="8" fill="currentColor" />
        <circle cx="52" cy="48" r="3" fill="#FFFFFF" opacity="0.8" />
        
        {/* Wing Left */}
        <path
          d="M 50 50 L 20 30 L 15 45 L 35 50 Z"
          fill="currentColor"
          opacity="0.8"
          className={animated ? 'origin-center animate-drift' : ''}
        />
        
        {/* Wing Right */}
        <path
          d="M 50 50 L 80 30 L 85 45 L 65 50 Z"
          fill="currentColor"
          opacity="0.8"
          className={animated ? 'origin-center animate-drift' : ''}
        />
        
        {/* Talon Bottom Left */}
        <path
          d="M 50 50 L 30 70 L 25 80 L 40 65 Z"
          fill="currentColor"
          opacity="0.6"
        />
        
        {/* Talon Bottom Right */}
        <path
          d="M 50 50 L 70 70 L 75 80 L 60 65 Z"
          fill="currentColor"
          opacity="0.6"
        />
        
        {/* Target Lock Ring */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#FF4D00"
          strokeWidth="2"
          strokeDasharray="20 10"
          className={animated ? 'animate-spin' : ''}
          style={{ animationDuration: '10s' }}
        />
      </svg>
      
      {/* Glow Effect */}
      {animated && (
        <div className="absolute inset-0 rounded-full pulse-glow" />
      )}
    </div>
  );
};

export default FalconLogo;
