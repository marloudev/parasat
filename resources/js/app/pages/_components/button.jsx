import React from 'react';

export default function Button({ variant = 'default', type = 'button', disabled = false, children, onClick }) {
    const variantClasses = {
        default: "hover:bg-gray-600 bg-gray-500 text-white px-4 py-2 rounded-md",
        success: "hover:bg-green-600 bg-green-500 text-white px-4 py-2 rounded-md",
        error: "hover:bg-red-600 bg-red-500 text-white px-4 py-2 rounded-md",
        warning: "hover:bg-orange-600 bg-orange-500 text-white px-4 py-2 rounded-md",
        info: "hover:bg-blue-600 bg-blue-500 text-white px-4 py-2 rounded-md",
    };
    return (
        <button
        type={type}
            className={`flex items-center justify-center rounded-lg transition duration-300 ease-in-out ${variantClasses[variant]}}`}
            onClick={disabled ? null : onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
