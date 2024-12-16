import React from 'react';

export default function InputField({
    label,
    type,
    value,
    onChange,
    placeholder,
    disabled = false,
    error,
    className,
}) {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && <label className="text-sm font-semibold text-gray-700 mb-2">{label}</label>}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${error
                        ? 'border-red-500 focus:ring-red-500 text-red-500'
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
            />
            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
    );
}
