import React from 'react';
import { TextareaProps } from '@/interfaces';

const ReuseableTextarea: React.FC<TextareaProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 4,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-dark mb-1"
        >
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full px-3 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:text-dark"
      />
    </div>
  );
};

export default ReuseableTextarea;
