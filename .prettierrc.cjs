/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  arrowParens: 'always',
  printWidth: 120,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    { files: '*.astro', options: { parser: 'astro' } },
    { files: ['*.json', '*.md', '*.toml', '*.yml'], options: { useTabs: false } },
  ],
};

