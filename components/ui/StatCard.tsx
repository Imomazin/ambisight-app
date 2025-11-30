import React from 'react';

export interface StatCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: string;
    direction: 'up' | 'down' | 'neutral';
    label?: string;
  };
  icon?: React.ReactNode;
  sparkline?: number[];
  variant?: 'primary' | 'teal' | 'purple' | 'amber';
}

const variantStyles = {
  primary: {
    gradient: 'from-primary to-accent-teal',
    text: 'text-primary',
    bg: 'bg-primary-soft',
  },
  teal: {
    gradient: 'from-accent-teal to-accent-purple',
    text: 'text-accent-teal',
    bg: 'bg-accent-teal/10',
  },
  purple: {
    gradient: 'from-accent-purple to-primary',
    text: 'text-accent-purple',
    bg: 'bg-accent-purple/10',
  },
  amber: {
    gradient: 'from-accent-amber to-accent-purple',
    text: 'text-accent-amber',
    bg: 'bg-accent-amber/10',
  },
};

const trendColors = {
  up: 'text-green-600',
  down: 'text-red-600',
  neutral: 'text-text-muted',
};

const trendIcons = {
  up: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  ),
  down: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  ),
  neutral: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  ),
};

/**
 * StatCard - Premium KPI card component with trends and sparklines
 * Perfect for dashboard metrics with visual indicators
 */
export function StatCard({
  title,
  value,
  trend,
  icon,
  sparkline,
  variant = 'primary',
}: StatCardProps) {
  const styles = variantStyles[variant];

  return (
    <div className="premium-card p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-text-muted mb-2">{title}</p>
          <p className="text-3xl font-bold text-text-main">{value}</p>
        </div>
        {icon && (
          <div className={`w-12 h-12 rounded-fluent bg-gradient-to-br ${styles.gradient} flex items-center justify-center flex-shrink-0`}>
            <div className="w-6 h-6 text-white">
              {icon}
            </div>
          </div>
        )}
      </div>

      {/* Trend Indicator */}
      {trend && (
        <div className="flex items-center gap-2 mb-3">
          <div className={`flex items-center gap-1 ${trendColors[trend.direction]}`}>
            {trendIcons[trend.direction]}
            <span className="text-xs font-medium">{trend.value}</span>
          </div>
          {trend.label && (
            <span className="text-xs text-text-soft">{trend.label}</span>
          )}
        </div>
      )}

      {/* Sparkline */}
      {sparkline && sparkline.length > 0 && (
        <div className="h-12 flex items-end justify-around gap-1">
          {sparkline.map((height, index) => (
            <div
              key={index}
              className={`flex-1 rounded-sm ${styles.bg} transition-all hover:opacity-80`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
