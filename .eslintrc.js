module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['jest'],
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
  parserOptions: {
    project: './tsconfig.json'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-exports': ['error', { restrictedNamedExports: ['then'] }],
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'react/function-component-definition': ['off'],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'react/jsx-props-no-spreading': 'off',
    'for-direction': 'off',
    'no-plusplus': 'off',
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    'max-len': ['warn', { code: 120 }]
  },
  overrides: [
    {
      files: ['webpack.**.js', 'paths.js', 'jest.config.js', 'jest.setup.ts'],
      parserOptions: {
        project: null
      }
    }
  ]
};
