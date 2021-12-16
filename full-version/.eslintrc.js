module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@antfu',
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // Disable max-len
    'max-len': 'off',

    // we don't want it
    'semi': ['error', 'never'],

    // add parens ony when required in arrow function
    'arrow-parens': ['error', 'as-needed'],

    // add new line above comment
    'newline-before-return': 'error',

    // add new line above comment
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
      },
    ],

    'array-element-newline': ['error', 'consistent'],
    'array-bracket-newline': ['error', 'consistent'],

    'vue/multi-word-component-names': 'off',

    // Plugin: eslint-plugin-import
    'import/prefer-default-export': 'off',

    // Plugin: eslint-plugin-import
    // For omitting extension for ts files
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Thanks: https://stackoverflow.com/a/63961972/10796681
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    '@typescript-eslint/consistent-type-imports': 'error',
  },
  settings: {
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts', '.tsx'],
    // },
    'import/resolver': {
      typescript: {
        // alwaysTryTypes: true,
        // project: './tsconfig.json',
      },
    },
  },
}
