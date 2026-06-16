'use client';

import React, { useState } from 'react';

interface FloatingLabelInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextarea?: boolean;
  rows?: number;
  className?: string;
}

/**
 * FloatingLabelInput Component
 * Minimal form input with floating label.
 * Label moves above input on focus (no animation, instant transition).
 */
export const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  isTextarea = false,
  rows = 4,
  className = '',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;
  const showLabel = isFocused || hasValue;

  return (
    <div className={`relative mb-6 ${className}`}>
      {isTextarea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={rows}
          className="w-full px-0 py-2 text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#2F0461] focus:outline-none focus:ring-0 transition-colors"
          placeholder=" "
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full px-0 py-2 text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#2F0461] focus:outline-none focus:ring-0 transition-colors"
          placeholder=" "
        />
      )}
      <label
        htmlFor={id}
        className={`absolute left-0 top-2 text-sm font-medium text-gray-600 pointer-events-none transition-all ${
          showLabel ? 'text-gray-500 text-xs -top-5' : ''
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
