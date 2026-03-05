'use client';

import React, { useEffect, useState } from 'react';

interface FeatherParticle {
  id: number;
  x: number;
  delay: number;
  duration: number;
}

export const FeatherFall: React.FC = () => {
  const [particles, setParticles] = useState<FeatherParticle[]>([]);

  useEffect(() => {
    // Generate initial particles
    const initialParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 4,
    }));
    setParticles(initialParticles);

    // Add new particles periodically
    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticle = {
          id: Date.now(),
          x: Math.random() * 100,
          delay: 0,
          duration: 8 + Math.random() * 4,
        };
        return [...prev.slice(-19), newParticle];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="feather-particle"
          style={{
            left: `${particle.x}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FeatherFall;
