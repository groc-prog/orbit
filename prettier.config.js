/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: true,
  trailingComma: 'all',
  singleAttributePerLine: true,
  importOrder: [
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '<TYPES>',
    '',
    '^[.]',
  ],
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
};

export default config;
