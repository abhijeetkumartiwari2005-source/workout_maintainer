// PostCSS config (ESM) — client/package.json sets "type": "module"
export default {
  plugins: {
    // New PostCSS wrapper package for Tailwind — the Tailwind team
    // moved the PostCSS plugin into `@tailwindcss/postcss`.
    // Install that package and this config will work during build.
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
