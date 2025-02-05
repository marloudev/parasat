import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        './resources/views/**/*.blade.php',
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './resources/views/emails/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
            },
            animation: {
                'border-glow': 'border-glow 1s infinite',
                'pop-up': 'popUp 0.5s ease-out forwards',
                'flash': 'flash 1.5s ease-in-out 1', // Added custom flash animation
                'fade-in-up': 'fadeInUp 1s ease-out forwards', // Added fade-in-up animation
            },
            keyframes: {
                'border-glow': {
                    '0%, 100%': {
                        'box-shadow': '0 0 10px 2px #FFFF00',
                    },
                    '50%': {
                        'box-shadow': '0 0 20px 2px #FF0000',
                    },
                },
                popUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'scale(0.8)',
                    },
                    '50%': {
                        opacity: '1',
                        transform: 'scale(1.05)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'scale(1)',
                    },
                },
                // Custom flash animation
                flash: {
                    '0%': { opacity: '0.2' },
                    '50%': { opacity: '1' },
                    '100%': { opacity: '0.2' },
                },
                // Custom fade-in-up animation
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)', // Start slightly below
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)', // End at the normal position
                    },
                },
            },
        },
    },

    plugins: [forms],
};
