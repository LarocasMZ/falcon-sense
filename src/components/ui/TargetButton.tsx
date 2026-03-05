'use client';

import React from 'react';

interface TargetButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  pulse?: boolean;
  disabled?: boolean;
}

export const TargetButton: React.FC<TargetButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  pulse = false,
  disabled = false,
}) => {
  const baseClasses = `
    relative overflow-hidden
    font-body font-medium
    transition-all duration-300
    flex items-center justify-center
    gap-2
    target-brackets
    hover:scale-105
    active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: `
      bg-thermal text-white
      hover:bg-thermal-light
      shadow-thermal
      ${pulse ? 'pulse-glow' : ''}
    `,
    secondary: `
      bg-ionosphere text-midnight
      hover:bg-ionosphere-light
      shadow-ionosphere
    `,
    outline: `
      bg-transparent
      border-2 border-ionosphere
      text-ionosphere
      hover:bg-ionosphere hover:text-midnight
    `,
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      disabled={disabled}
    >
      {/* Scan Line Effect */}
      <div className="absolute inset-0 scan-line opacity-30" />
      
      {/* Button Content */}
      <span className="relative z-10">{children}</span>
      
      {/* Corner Accents - Talon Grip */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white opacity-50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white opacity-50" />
    </Component>
  );
};

export default TargetButton;
