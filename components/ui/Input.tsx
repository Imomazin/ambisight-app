import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export function Input({
  label,
  error,
  fullWidth = false,
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  const baseStyles =
    'px-4 py-2 border border-border rounded-fluent focus:outline-none focus:ring-2 focus:ring-fluent-blue focus:border-fluent-blue disabled:bg-background-secondary disabled:cursor-not-allowed transition-all duration-200';
  const errorStyles = error ? 'border-red-500 focus:ring-red-500' : '';
  const widthStyles = fullWidth ? 'w-full' : '';

  const inputClasses = [baseStyles, errorStyles, widthStyles, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-text-primary mb-1">
          {label}
        </label>
      )}
      <input id={inputId} className={inputClasses} {...props} />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
