const { existsSync } = require('fs')
require('@rushstack/eslint-patch/modern-module-resolution')

const tsConfig = existsSync('tsconfig.json')

module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	plugins: ['prettier'],

	overrides: [
		{
			extends: ['plugin:@typescript-eslint/recommended'],
			files: ['**/*/ts'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 'latest',
				project: tsConfig,
				sourceType: 'module'
			},
			plugins: ['@typescript-eslint']
		}
	]
}
