import React from 'react';

export interface MetricChipProps {
  icon?: React.ReactNode;
  label: string;
  value: string | number;
  variant?: 'primary' | 'teal' | 'purple' | 'amber';
  size?: 'sm' | 'md';
}

const variantStyles = {
  primary: 'bg-gradient-to-r from-primary to-accent-teal',
  teal: 'bg-gradient-to-r from-accent-teal to-accent-purple',
  purple: 'bg-gradient-to-r from-accent-purple to-primary',
  amber: 'bg-gradient-to-r from-accent-amber to-accent-purple',
};

/**
 * MetricChip - Premium pill-shaped component with gradient background
 * Displays a metric value with an optional icon and label
 */
export function MetricChip({
  icon,
  label,
  value,
  variant = 'primary',
  size = 'md'
}: MetricChipProps) {
  const sizeClasses = size === 'sm'
    ? 'px-3 py-1.5 gap-2'
    : 'px-4 py-2 gap-3';

  return (
    <div className={`inline-flex items-center ${sizeClasses} ${variantStyles[variant]} rounded-pill text-white shadow-soft`}>
      {icon && (
        <div className={size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'}>
          {icon}
        </div>
      )}
      <div className="flex items-center gap-2">
        <span className={`font-bold ${size === 'sm' ? 'text-sm' : 'text-base'}`}>
          {value}
        </span>
        <span className={`font-medium ${size === 'sm' ? 'text-xs' : 'text-sm'} opacity-90`}>
          {label}
        </span>
      </div>
    </div>
  );
}
