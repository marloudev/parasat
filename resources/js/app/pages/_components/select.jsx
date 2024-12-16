import React from 'react';

export default function Select({ label, options, value, onChange, error, className = '', placeholder }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="text-sm font-semibold text-gray-700 mb-1">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>{placeholder || "Select an option"}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
    </div>
  );
}
