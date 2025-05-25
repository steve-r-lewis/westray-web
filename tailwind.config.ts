// tailwind.config.ts
/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';
import scrollbarHide from 'tailwind-scrollbar-hide';

const config: Config = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  
  theme: {
    container: { // For Tailwind's core container plugin, if you use it.
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      },
    },
    extend: { // All your customizations should ideally be in extend
      backgroundImage: {
        'theme-image': 'var(--app-background-image)',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: {
          light: 'var(--color-secondary-light)',
          dark: 'var(--color-secondary-dark)',
        },
        background: { // These are fine but ensure they don't conflict with your app- specific names if used differently
          light: 'var(--color-background-light)',
          dark: 'var(--color-background-dark)',
        },
        text: { // Same as above
          light: 'var(--color-text-light)',
          dark: 'var(--color-text-dark)',
        },
        'surface-highlight': {
          light: 'var(--color-surface-highlight-light)',
          dark: 'var(--color-surface-highlight-dark)',
        },
        'secondary-bg': {
          light: 'var(--color-secondary-background-light)',
          dark: 'var(--color-secondary-background-dark)',
        },
        
        // Crucial Semantic app tokens
        'app-body-bg': 'var(--app-body-bg)',
        'app-surface-bg': 'var(--app-surface-bg)',
        'app-distinct-bg': 'var(--app-distinct-bg)',
        'app-text-primary': 'var(--app-text-primary)',
        'app-text-secondary': 'var(--app-text-secondary)',
        'app-highlight': 'var(--app-highlight)',
        'app-border': 'var(--app-border)',
        'app-accent': 'var(--app-accent)',
        
        // Explicitly defined alert colors
        'app-success': 'var(--app-success)',
        'app-warning': 'var(--app-warning)',
        'app-error': 'var(--app-error)',
        'app-info': 'var(--app-info)',
      },
      spacing: {
        1: '4px', 2: '8px', 3: '12px', 4: '16px',
        5: '20px', 6: '24px', 8: '32px', 12: '48px', 16: '64px',
      },
      screens: { // Your updated screen names
        sm: '640px', md: '768px', lg: '1024px',
        xl: '1280px', xxl: '1536px', xxxl: '1920px',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: 'var(--app-text-primary)',
            a: { color: 'var(--color-primary)', '&:hover': { opacity: 0.8, },},
          },
        },
      }),
    },
  },
  plugins: [typography, aspectRatio, scrollbarHide],
  viewer: { endpoint: '/_tailwind', exportViewer: true },
};

export default config;