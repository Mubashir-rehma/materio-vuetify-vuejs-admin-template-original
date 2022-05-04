module.exports = {
  rules: {
    'valid-appcardcode-code-prop': 'error',
  },
  overrides: [
    {
      files: ['*.json'],
      rules: {
        'no-invalid-meta': 'off',
      },
    },
  ],
}
