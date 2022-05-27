const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.base.config');

const devServerPort = 7000;
const publicDir = 'public';

/*
 |--------------------------------------------------------------------------
 | Eslint Options
 |--------------------------------------------------------------------------
 */
const eslintOptions = {
	emitWarning: true,
	extensions: ['js', 'vue'],
	exclude: [
		'./node_modules/**/*',
		'./vendor/**/*',
		'./assets/**/*',
	],
	fix: true,
};

/*
 |--------------------------------------------------------------------------
 | Stylelint Options
 |--------------------------------------------------------------------------
 */
const stylelintOptions = {
	customSyntax: 'postcss-html',
	ignoreFiles: [
		'./node_modules/**/*.vue',
	],
	files: ['./src/**/*.vue'],
	fix: true,
};

/*
 |--------------------------------------------------------------------------
 | Plugins
 |--------------------------------------------------------------------------
 */
const plugins = [
	new ESLintPlugin(eslintOptions),
	new StylelintPlugin(stylelintOptions),
];

/*
|--------------------------------------------------------------------------
| Export
|--------------------------------------------------------------------------
*/
module.exports = merge(base, {
	context: path.join(__dirname, '../src'),
	devServer: {
		client: {
			overlay: {
				errors: true,
				warnings: false,
			},
		},
		compress: false,
		devMiddleware: {
			publicPath: publicDir,
			serverSideRender: true,
			writeToDisk: true,
		},
		hot: true,
		open: true,
		port: devServerPort,
		static: path.join(__dirname, `../${publicDir}`),
	},
	devtool: 'inline-source-map',
	plugins,
	stats: {
		assets: false,
		builtAt: true,
		chunkGroups: false,
		chunkModules: false,
		chunkOrigins: false,
		chunks: false,
		colors: true,
		entrypoints: false,
		errorDetails: true,
		errors: true,
		hash: false,
		moduleTrace: false,
		modules: false,
		performance: true,
		publicPath: false,
		usedExports: false,
		version: false,
		warnings: true,
	},
});
