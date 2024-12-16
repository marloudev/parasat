import React from 'react';

export default function Card({ image, title, description, children, actions }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}

      <div className="p-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

        {/* Description */}
        <p className="mt-2 text-gray-700">{description}</p>

        {/* Actions */}
        <div className="mt-4 flex justify-between items-center">
          {children} {/* This can be used for additional content */}
          <div className="flex gap-2">
            {actions && actions.map((action, index) => (
              <button
                key={index}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
