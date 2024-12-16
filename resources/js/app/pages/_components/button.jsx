import React from 'react';

export default function Button({ variant = 'primary', type = 'button', size = 'medium', disabled = false, children, onClick }) {
    const variantClasses = {
        success: "bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600",
        error: "bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600",
        warning: "bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600",
        info: "bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600",
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
