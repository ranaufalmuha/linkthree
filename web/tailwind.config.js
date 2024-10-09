const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-secondary": "#f5f5f5", 
        foreground: "var(--foreground)",

        "disabled": "#808080",
        "accent-primary": "#522964",
        "accent-secondary": "#C84FCB",

      }
    },
  },
  plugins: [require('daisyui')],
};
