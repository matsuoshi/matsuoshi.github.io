/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        bg: 'var(--bg)',
        bg2: 'var(--bg2)',
        fg: 'var(--text)',
        fg2: 'var(--text2)',
        fg3: 'var(--text3)',
        line: 'var(--border)',
        line2: 'var(--border2)',
        tagbg: 'var(--tag-bg)',
        accent: 'var(--accent)',
        accenth: 'var(--accent-hover)',
      },
    },
  },
  plugins: [],
};
