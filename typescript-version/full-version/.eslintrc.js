module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@antfu/eslint-config-vue',
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
  plugins: ['vue', '@typescript-eslint'],
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

    // Plugin: eslint-plugin-promise
    'promise/always-return': 'off',
    'promise/catch-or-return': 'off',

    // ESLint plugin vue
    'vue/block-tag-newline': 'error',
    'vue/component-api-style': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/custom-event-name-casing': ['error', 'camelCase', {
      ignores: [
        '/^(click):[a-z]+((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?/',
      ],
    }],
    'vue/define-macros-order': 'error',
    'vue/html-comment-content-newline': 'error',
    'vue/html-comment-content-spacing': 'error',
    'vue/html-comment-indent': 'error',
    'vue/match-component-file-name': 'error',
    'vue/no-child-content': 'error',

    // NOTE this rule only supported in SFC,  Users of the unplugin-vue-define-options should disable that rule: https://github.com/vuejs/eslint-plugin-vue/issues/1886
    // 'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/no-template-target-blank': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/v-on-function-call': 'error',

    // -- Extension Rules
    'vue/no-irregular-whitespace': 'error',
    'vue/template-curly-spacing': 'error',

    // Internal Rules
    'valid-appcardcode-code-prop': 'error',
    'valid-appcardcode-demo-sfc': 'error',
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
