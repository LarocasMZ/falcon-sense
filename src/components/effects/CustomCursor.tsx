'use client';

import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.getAttribute('role') === 'button'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main Reticle */}
      <div
        className="cursor-reticle"
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      
      {/* Outer Ring */}
      <div
        className={`
          cursor-reticle-ring
          ${isHovering ? 'scale-150 border-thermal' : 'scale-100 border-ionosphere/50'}
        `}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      
      {/* Corner Brackets */}
      <div
        className="fixed w-4 h-4 border-t-2 border-l-2 border-thermal/50 pointer-events-none z-[9997]"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          transition: 'all 0.1s ease-out',
          transform: isHovering ? 'scale(1.2)' : 'scale(1)',
        }}
      />
      <div
        className="fixed w-4 h-4 border-t-2 border-r-2 border-thermal/50 pointer-events-none z-[9997]"
        style={{
          left: position.x + 20,
          top: position.y - 20,
          transition: 'all 0.1s ease-out',
          transform: isHovering ? 'scale(1.2)' : 'scale(1)',
        }}
      />
      <div
        className="fixed w-4 h-4 border-b-2 border-l-2 border-thermal/50 pointer-events-none z-[9997]"
        style={{
          left: position.x - 20,
          top: position.y + 20,
          transition: 'all 0.1s ease-out',
          transform: isHovering ? 'scale(1.2)' : 'scale(1)',
        }}
      />
      <div
        className="fixed w-4 h-4 border-b-2 border-r-2 border-thermal/50 pointer-events-none z-[9997]"
        style={{
          left: position.x + 20,
          top: position.y + 20,
          transition: 'all 0.1s ease-out',
          transform: isHovering ? 'scale(1.2)' : 'scale(1)',
        }}
      />
    </>
  );
};

export default CustomCursor;
