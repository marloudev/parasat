import React from 'react';

export default function Avatar({ size = 'medium', src, alt, name, round = true, className }) {
  const sizeClasses = {
    small: 'w-8 h-8 text-xs',
    medium: 'w-12 h-12 text-sm',
    large: 'w-16 h-16 text-lg',
  };

  const roundClass = round ? 'rounded-full' : 'rounded-md';

  return (
    <div className={`relative ${sizeClasses[size]} ${roundClass} overflow-hidden ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="object-cover w-full h-full" />
      ) : (
        <div className="flex items-center justify-center bg-gray-200 text-gray-600 font-semibold uppercase">
          {name ? name.split(' ').map(n => n[0]).join('') : 'A'}
        </div>
      )}
    </div>
  );
}
