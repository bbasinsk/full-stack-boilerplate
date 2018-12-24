/**
 * Copyright © 2016-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const fs = require('fs');
const prettierOptions = JSON.parse(fs.readFileSync('./.prettierrc', 'utf8'));

// http://eslint.org/docs/user-guide/configuring
// https://github.com/prettier/prettier#eslint
module.exports = {
  env: {
    node: true
  },
  rules: {},
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module'
  },
  extends: ['airbnb-base', 'eslint-config-prettier'],
  plugins: ['eslint-plugin-prettier'],
  rules: {
    'no-console': 0,
    'no-unused-vars': 1,
    'prettier/prettier': ['error', prettierOptions]
  }
};
