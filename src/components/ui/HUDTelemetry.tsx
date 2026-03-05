'use client';

import React from 'react';
import { HUDTelemetry } from '@/types';

interface HUDTelemetryDisplayProps {
  telemetry: HUDTelemetry;
  className?: string;
}

export const HUDTelemetryDisplay: React.FC<HUDTelemetryDisplayProps> = ({
  telemetry,
  className = '',
}) => {
  return (
    <div className={`
      font-body text-sm
      bg-midnight/80 backdrop-blur
      border border-ionosphere/30
      p-4
      glass
      ${className}
    `}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-ionosphere/30">
        <span className="text-ionosphere text-xs tracking-widest">TELEMETRY</span>
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-thermal rounded-full animate-pulse-fast" />
          <div className="w-1 h-1 bg-thermal rounded-full animate-pulse-fast" style={{ animationDelay: '0.1s' }} />
          <div className="w-1 h-1 bg-thermal rounded-full animate-pulse-fast" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>

      {/* Data Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Altitude */}
        <div className="space-y-1">
          <div className="text-ionosphere/60 text-xs">ALT</div>
          <div className="text-prey text-lg font-bold">
            {telemetry.altitude.toLocaleString()}<span className="text-xs ml-1">m</span>
          </div>
          <div className="text-thermal text-xs">↓</div>
        </div>

        {/* Speed */}
        <div className="space-y-1">
          <div className="text-ionosphere/60 text-xs">SPD</div>
          <div className="text-prey text-lg font-bold">
            {telemetry.speed}<span className="text-xs ml-1">km/h</span>
          </div>
          <div className="text-ionosphere text-xs">→ 389 km/h</div>
        </div>

        {/* Targets */}
        <div className="space-y-1">
          <div className="text-ionosphere/60 text-xs">ACQ</div>
          <div className="text-prey text-lg font-bold">
            {telemetry.targets}<span className="text-xs ml-1">TARGETS</span>
          </div>
        </div>

        {/* Resolution */}
        <div className="space-y-1">
          <div className="text-ionosphere/60 text-xs">RES</div>
          <div className="text-prey text-lg font-bold">
            {telemetry.resolution}<span className="text-xs ml-1">m</span>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="mt-3 pt-2 border-t border-ionosphere/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-ionosphere rounded-full animate-pulse" />
          <span className="text-ionosphere/80 text-xs">SYSTEMS NOMINAL</span>
        </div>
        <span className="text-talons/40 text-xs">[001]</span>
      </div>
    </div>
  );
};

export default HUDTelemetryDisplay;
