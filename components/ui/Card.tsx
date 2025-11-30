import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({ children, className = '', padding = 'md', hover = false }: CardProps) {
  const baseStyles = 'bg-white rounded-fluent border border-border shadow-fluent';
  const hoverStyles = hover ? 'hover:shadow-fluent-lg transition-all duration-200' : '';

  const classes = [baseStyles, paddingStyles[padding], hoverStyles, className]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
}

export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`border-b border-border pb-4 mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-lg font-semibold text-text-primary ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-sm text-text-secondary mt-1 ${className}`}>{children}</p>;
}

export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`border-t border-border pt-4 mt-4 ${className}`}>{children}</div>;
}
