import React from 'react';
import Link from 'next/link';

export interface AmbiSightLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  linkTo?: string;
  className?: string;
}

const sizeConfig = {
  sm: {
    container: 'w-6 h-6',
    tile: 'w-2.5 h-2.5',
    gap: 'gap-0.5',
    text: 'text-lg',
    rounded: 'rounded-sm'
  },
  md: {
    container: 'w-8 h-8',
    tile: 'w-3.5 h-3.5',
    gap: 'gap-0.5',
    text: 'text-xl',
    rounded: 'rounded'
  },
  lg: {
    container: 'w-12 h-12',
    tile: 'w-5 h-5',
    gap: 'gap-1',
    text: 'text-2xl',
    rounded: 'rounded-md'
  },
};

/**
 * AmbiSight Logo - Microsoft-inspired 4-tile grid logo
 *
 * Features:
 * - 4-tile grid with Microsoft brand colors (Blue, Green, Yellow, Red)
 * - Optional "AmbiSight" text with blue highlight on "Sight"
 * - Three sizes: sm, md, lg
 * - Optional link wrapper for navigation
 */
export function AmbiSightLogo({
  size = 'md',
  showText = true,
  linkTo = '/',
  className = '',
}: AmbiSightLogoProps) {
  const config = sizeConfig[size];

  const logoMarkContent = (
    <div className={`${config.container} grid grid-cols-2 ${config.gap} flex-shrink-0`}>
      {/* Top-left: MS Blue */}
      <div
        className={`${config.tile} ${config.rounded} shadow-sm`}
        style={{ backgroundColor: '#0078D4' }}
      />
      {/* Top-right: MS Green */}
      <div
        className={`${config.tile} ${config.rounded} shadow-sm`}
        style={{ backgroundColor: '#7FBA00' }}
      />
      {/* Bottom-left: MS Yellow */}
      <div
        className={`${config.tile} ${config.rounded} shadow-sm`}
        style={{ backgroundColor: '#FFB900' }}
      />
      {/* Bottom-right: MS Red */}
      <div
        className={`${config.tile} ${config.rounded} shadow-sm`}
        style={{ backgroundColor: '#F25022' }}
      />
    </div>
  );

  const logoTextContent = (
    <div className={`${config.text} font-semibold tracking-tight`}>
      <span className="text-ambi-textMain">Ambi</span>
      <span className="text-ambi-msBlue">Sight</span>
    </div>
  );

  const logoContent = (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {logoMarkContent}
      {showText && logoTextContent}
    </div>
  );

  if (linkTo) {
    return (
      <Link
        href={linkTo}
        className="flex items-center transition-opacity hover:opacity-80"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
