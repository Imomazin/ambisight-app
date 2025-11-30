import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export function Textarea({
  label,
  error,
  fullWidth = false,
  className = '',
  id,
  ...props
}: TextareaProps) {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

  const baseStyles =
    'px-4 py-2 border border-border rounded-fluent focus:outline-none focus:ring-2 focus:ring-fluent-blue focus:border-fluent-blue disabled:bg-background-secondary disabled:cursor-not-allowed resize-none transition-all duration-200';
  const errorStyles = error ? 'border-red-500 focus:ring-red-500' : '';
  const widthStyles = fullWidth ? 'w-full' : '';

  const textareaClasses = [baseStyles, errorStyles, widthStyles, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label htmlFor={textareaId} className="block text-sm font-medium text-text-primary mb-1">
          {label}
        </label>
      )}
      <textarea id={textareaId} className={textareaClasses} {...props} />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
