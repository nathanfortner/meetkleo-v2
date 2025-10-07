module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'@sveltejs',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['svelte3'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3'
		}
	],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
