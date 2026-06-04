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
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        // テーマ用 CSS 変数（light/dark は :root / .dark で切替）
        bg: 'var(--bg)',
        bg2: 'var(--bg2)',
        bg3: 'var(--bg3)',
        fg: 'var(--text)',
        fg2: 'var(--text2)',
        fg3: 'var(--text3)',
        line: 'var(--border)',
        line2: 'var(--border2)',
        tagbg: 'var(--tag-bg)',
      },
    },
  },
  plugins: [],
};
