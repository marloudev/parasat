import React from 'react';

export default function Alert({ variant = 'default', message, children, onClose }) {
    const variantClasses = {
        default: 'bg-gray-100 text-gray-800 border-gray-300',
        success: 'bg-green-100 text-green-800 border-green-300',
        error: 'bg-red-100 text-red-800 border-red-300',
        warning: 'bg-orange-100 text-orange-800 border-orange-300',
        info: 'bg-blue-100 text-blue-800 border-blue-300',
    };

    const iconClasses = {
        default: 'text-gray-500',
        success: 'text-green-500',
        error: 'text-red-500',
        warning: 'text-orange-500',
        info: 'text-blue-500',
    };

    return (
        <div
            className={`flex items-center p-4 mb-4 border rounded-lg ${variantClasses[variant]}`}
        >
            {/* Optional icon */}
            <span className={`mr-2 ${iconClasses[variant]}`}>
                {/* You could use a FontAwesome icon here or any other icon library */}
                {variant === 'success' && '✔️'}
                {variant === 'error' && '❌'}
                {variant === 'warning' && '⚠️'}
                {variant === 'info' && 'ℹ️'}
            </span>

            {/* Main message or children */}
            <span className="flex-grow">{children || message}</span>

            {/* Close button */}
            {onClose && (
                <button
                    onClick={onClose}
                    className="ml-4 text-gray-500 hover:text-gray-700"
                    aria-label="Close"
                >
                    ✖️
                </button>
            )}
        </div>
    );
}
