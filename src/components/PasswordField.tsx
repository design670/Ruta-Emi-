import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}

export default function PasswordField({ id, label, value, onChange, error, required, autoComplete }: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  const describedBy = error ? `${id}-error` : undefined;

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
      <div className="relative">
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          autoComplete={autoComplete}
          className="auth-focus w-full min-h-[44px] pl-4 pr-12 rounded-lg text-[15px] text-[var(--navy)] bg-white transition-colors"
          style={{ border: `1px solid ${error ? '#DC2626' : 'var(--border)'}` }}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          aria-pressed={visible}
          className="auth-focus absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-md text-[var(--text-secondary)] hover:text-[var(--teal)]"
        >
          {visible ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm flex items-start gap-1.5" style={{ color: '#B91C1C' }}>
          <span aria-hidden="true">⚠</span>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
