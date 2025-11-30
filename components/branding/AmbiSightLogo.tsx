import React from 'react';

interface AmbiSightLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const sizeMap = {
  sm: { tile: 10, gap: 1.5, text: 'text-lg' },
  md: { tile: 14, gap: 2, text: 'text-xl' },
  lg: { tile: 18, gap: 2.5, text: 'text-2xl' },
};

export function AmbiSightLogo({ size = 'md', showText = true }: AmbiSightLogoProps) {
  const { tile, gap, text } = sizeMap[size];

  return (
    <div className="flex items-center gap-3">
      {/* 4-Tile Microsoft-Style Logo */}
      <div
        className="grid grid-cols-2 gap-0.5 p-1 bg-white rounded-md shadow-fluent-sm"
        style={{ width: `${tile * 2 + gap * 3}px`, height: `${tile * 2 + gap * 3}px` }}
      >
        {/* Top-left: Blue */}
        <div
          className="rounded-sm bg-fluent-blue"
          style={{ width: `${tile}px`, height: `${tile}px` }}
        />

        {/* Top-right: Teal */}
        <div
          className="rounded-sm bg-fluent-teal"
          style={{ width: `${tile}px`, height: `${tile}px` }}
        />

        {/* Bottom-left: Purple */}
        <div
          className="rounded-sm bg-fluent-purple"
          style={{ width: `${tile}px`, height: `${tile}px` }}
        />

        {/* Bottom-right: Orange */}
        <div
          className="rounded-sm bg-fluent-orange"
          style={{ width: `${tile}px`, height: `${tile}px` }}
        />
      </div>

      {/* Brand Text */}
      {showText && (
        <span className={`${text} font-semibold text-text-primary tracking-tight`}>
          Ambi<span className="text-fluent-blue">Sight</span>
        </span>
      )}
    </div>
  );
}
