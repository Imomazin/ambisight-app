import React from 'react';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
  orientation?: 'vertical' | 'horizontal';
}

export function RadioGroup({
  name,
  options,
  value,
  onChange,
  label,
  error,
  orientation = 'vertical',
}: RadioGroupProps) {
  const containerClass = orientation === 'horizontal' ? 'flex flex-wrap gap-4' : 'space-y-3';

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-3">
          {label}
        </label>
      )}
      <div className={containerClass}>
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-start gap-3 cursor-pointer group"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
            />
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                {option.label}
              </div>
              {option.description && (
                <div className="text-sm text-gray-500 mt-0.5">
                  {option.description}
                </div>
              )}
            </div>
          </label>
        ))}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
