import React from 'react';
import type { SelectOption } from '../types';

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  error?: string;
  required?: boolean;
  as?: 'input' | 'select';
  options?: SelectOption[];
  autoComplete?: string;
}

export default function FormField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  required,
  as = 'input',
  options,
  autoComplete,
}: FormFieldProps) {
  const describedBy = error ? `${id}-error` : undefined;
  const fieldClass =
    'auth-focus w-full min-h-[44px] px-4 rounded-lg text-[15px] text-[var(--navy)] bg-white transition-colors';
  const borderStyle = { border: `1px solid ${error ? '#DC2626' : 'var(--border)'}` };

  return (
    <div className="mb-5">
      <label htmlFor={id} className="block text-sm font-semibold mb-1.5 text-[var(--navy)]">
        {label}
        {required && (
          <span aria-hidden="true" className="text-[var(--orange)]">
            {' '}
            *
          </span>
        )}
      </label>

      {as === 'select' ? (
        <select
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          autoComplete={autoComplete}
          className={fieldClass}
          style={borderStyle}
        >
          {(options ?? []).map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          autoComplete={autoComplete}
          className={fieldClass}
          style={borderStyle}
        />
      )}

      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm flex items-start gap-1.5" style={{ color: '#B91C1C' }}>
          <span aria-hidden="true">⚠</span>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
