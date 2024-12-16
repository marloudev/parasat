import React, { useEffect, useState } from 'react';

export default function Progress({ value, max = 100, color = 'bg-blue-500', className = '' }) {
    const [animatedValue, setAnimatedValue] = useState(0);
    const percentage = Math.min((animatedValue / max) * 100, 100);

    const easeOutQuad = (t) => t * (2 - t);

    useEffect(() => {
        let startValue = animatedValue;
        const duration = 1500;
        const targetValue = value;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easedProgress = easeOutQuad(progress);
            setAnimatedValue(startValue + (easedProgress * (targetValue - startValue)));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);

    }, [value]);

    return (
        <div className={`relative w-full bg-gray-200 rounded-lg overflow-hidden ${className}`}>
            <div
                style={{ width: `${percentage}%` }}
                className={`h-4 ${color}`}
            ></div>
            <span className="absolute inset-0 flex items-center justify-center text-sm text-gray-700 font-semibold">
                {`${Math.round(percentage)}%`}
            </span>
        </div>
    );
}
