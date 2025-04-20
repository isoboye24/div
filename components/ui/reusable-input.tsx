import React from 'react';
import { InputProps } from '@/interfaces';

const ReuseableInput: React.FC<InputProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
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
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:text-dark"
      />
    </div>
  );
};

export default ReuseableInput;
