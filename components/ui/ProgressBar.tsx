import React from 'react';

export interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'purple';
}

const sizeStyles = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
};

const colorStyles = {
  blue: 'bg-fluent-blue',
  green: 'bg-green-600',
  purple: 'bg-fluent-purple',
};

export function ProgressBar({
  value,
  max = 100,
  label,
  showPercentage = false,
  size = 'md',
  color = 'blue',
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="text-sm font-medium text-text-primary">{label}</span>}
          {showPercentage && (
            <span className="text-sm font-medium text-text-secondary">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <div className={`w-full bg-background-secondary rounded-full overflow-hidden ${sizeStyles[size]}`}>
        <div
          className={`${sizeStyles[size]} ${colorStyles[color]} rounded-full transition-all duration-300 ease-in-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
