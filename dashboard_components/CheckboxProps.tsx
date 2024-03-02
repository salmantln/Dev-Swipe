import React, { useState } from 'react';

interface CheckboxProps {
  label: string;
  onChange: (checked: boolean) => void;
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, onChange, checked }) => {
  const handleCheckboxChange = () => {
    onChange(!checked);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        className={`h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-cyan-500 ${checked ? 'bg-cyan-600' : 'bg-transparent'}`}
        onClick={handleCheckboxChange}
      >
        {checked && (
          <svg className="text-white" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
      <input
        type="checkbox"
        tabIndex={-1}
        aria-hidden="true"
        checked={checked}
        onChange={handleCheckboxChange}
        className="absolute opacity-0 pointer-events-none"
      />
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default Checkbox;
