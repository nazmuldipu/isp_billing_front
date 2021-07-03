// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                '2-min-fill': 'min-content 1fr'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}