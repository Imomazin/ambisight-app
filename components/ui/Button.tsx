import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-fluent-blue text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-300 shadow-fluent-sm hover:shadow-fluent hover:-translate-y-0.5',
  secondary:
    'bg-text-secondary text-white hover:bg-gray-700 active:bg-gray-800 disabled:bg-gray-300 shadow-fluent-sm hover:shadow-fluent',
  outline:
    'border-2 border-border text-text-primary hover:bg-background-secondary hover:border-fluent-blue active:bg-gray-100 disabled:border-gray-300 disabled:text-gray-300',
  ghost:
    'text-text-primary hover:bg-background-secondary active:bg-gray-200 disabled:text-gray-300',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-semibold rounded-fluent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-fluent-blue focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
