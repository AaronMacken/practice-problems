module.exports = {
  // dev note: eslint strips `eslint-config` from the name
  // dev note: refer to `common-eslint-config/package.json` for the full name
  // dev note: remove `eslint-config` from name when using here
  extends: ['@aaronmacken/react-application-template'],
  parserOptions: {
    project: './tsconfig.json'
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
      parserOptions: {
        project: './tsconfig.test.json'
      }
    },
    {
      files: ['webpack.**.js', 'paths.js', 'jest.config.js', 'jest.setup.ts'],
      parserOptions: {
        project: null
      }
    }
  ]
};
