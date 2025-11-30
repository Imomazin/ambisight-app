import React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

export function Checkbox({
  label,
  error,
  className = '',
  id,
  ...props
}: CheckboxProps) {
  const checkboxId = id || label?.toLowerCase().replace(/\s+/g, '-');

  const baseStyles =
    'w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 disabled:cursor-not-allowed';
  const errorStyles = error ? 'border-red-500 focus:ring-red-500' : '';

  const checkboxClasses = [baseStyles, errorStyles, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={checkboxId}
          className={checkboxClasses}
          {...props}
        />
        {label && (
          <label
            htmlFor={checkboxId}
            className="text-sm font-medium text-gray-700 cursor-pointer select-none"
          >
            {label}
          </label>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
