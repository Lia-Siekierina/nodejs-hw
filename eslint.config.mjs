import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.js'],

    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'warn',
    },
  },
]);
