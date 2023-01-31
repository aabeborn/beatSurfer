module.exports = {
	extends: [
		'./index.js',
		'plugin:vue/vue3-recommended',
		'plugin:nuxt/recommended'
	],
	plugins: ['vue', 'nuxt'],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	}
}
