import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'teal' | 'purple' | 'amber' | 'neutral';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

const variantStyles = {
  primary: 'bg-primary-soft text-primary border-primary/20',
  teal: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20',
  purple: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20',
  amber: 'bg-accent-amber/10 text-accent-amber border-accent-amber/20',
  neutral: 'bg-bg-page text-text-muted border-border-subtle',
};

/**
 * Badge - Premium badge component for labels and tags
 * Used for status indicators, feature tags, and categories
 */
export function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  icon
}: BadgeProps) {
  const sizeClasses = size === 'sm'
    ? 'px-2 py-0.5 text-xs gap-1'
    : 'px-3 py-1 text-sm gap-1.5';

  return (
    <span className={`inline-flex items-center ${sizeClasses} font-medium rounded-pill border ${variantStyles[variant]}`}>
      {icon && (
        <span className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'}>
          {icon}
        </span>
      )}
      {children}
    </span>
  );
}
