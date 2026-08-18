// @ts-check
const { defineConfig } = require('eslint/config');
const rootConfig = require('../../eslint.config.js');

// The library extends the root config directly.
// Selector rules are already defined in the root config.
module.exports = defineConfig([...rootConfig]);
