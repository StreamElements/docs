module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@docusaurus/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // Add any project-specific rules here
  },
}; 
