const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const sass = require('sass');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const packageJson = require('../package.json');

const environment = process.env.NODE_ENV;
const isDev = environment === 'development';
const publicDir = 'public';

/*
 |--------------------------------------------------------------------------
 | Vue Loader Rule
 |--------------------------------------------------------------------------
 */
const vueRule = {
	test: /\.vue$/,
	loader: 'vue-loader',
	exclude: /node_modules/,
};

/*
 |--------------------------------------------------------------------------
 | Styles Rule
 | (Vue Style Loader, CSS Loader, SASS Loader)
 |--------------------------------------------------------------------------
 */
const stylesRule = {
	rules: [
		{
			test: /\.s(c|a)ss$/,
			use: [
				'vue-style-loader',
				'css-loader',
				{
					loader: 'sass-loader',
					options: {
						implementation: sass,
					},
				},
			],
		},
	],
};

/*
 |--------------------------------------------------------------------------
 | JavaScript Babel Loader Rule
 |--------------------------------------------------------------------------
 */
const jsRule = {
	test: /\.js$/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ['@babel/preset-env'],
		},
	},
	exclude: /node_modules/,
};

/*
 |--------------------------------------------------------------------------
 | File Loader Rule
 |--------------------------------------------------------------------------
 */
const fileRule = {
	rules: [
		{
			test: /\.(png|jpe?g|gif)$/i,
			use: [
				{
					loader: 'file-loader',
					options: {
						outputPath: 'images',
						esModule: false,
						name: '[name].[ext]',
					},
				},
			],
		},
	],
};

/*
 |--------------------------------------------------------------------------
 | SVG Inline Loader Rule
 |--------------------------------------------------------------------------
 */
const svgRule = {
	rules: [
		{
			test: /\.svg$/,
			loader: 'svg-inline-loader',
		},
	],
};

/*
 |--------------------------------------------------------------------------
 | Clean Options
 |--------------------------------------------------------------------------
 */
const cleanOptions = {
	root: publicDir,
	dry: false,
	verbose: false,
	cleanOnceBeforeBuildPatterns: [
		'**/*.js',
		'**/*.html',
		'**/*.json',
		'**/*.png',
		'!images/favicon.ico',
	],
};

/*
 |--------------------------------------------------------------------------
 | HtmlWebpackPlugin Options
 |--------------------------------------------------------------------------
 */
const templateFile = `./${!isDev ? 'src/' : ''}templates/index.html`;
let packageTitle = packageJson.name;
packageTitle = packageTitle.split('-');

packageTitle.forEach((val, key) => {
	packageTitle[key] = val.toLowerCase()
		.split('-')
		.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
		.join(' ');
});

packageTitle = packageTitle.join(' ');

const htmlWebpackOptions = {
	inject: 'body',
	template: templateFile,
	title: packageTitle,
	googleAnalyticsUA: 'UA-XXXXXXXXX-X',
	minify: !isDev,
	hash: true,
	meta: {
		// meta //
		base: `https://webdevnerdstuff.github.io/${packageJson.name}/`,
		charset: 'utf-8',
		viewport: 'width=device-width, initial-scale=1',
		keywords: packageJson.keywords.join(', '),
		description: packageJson.description,
		author: packageJson.author,
		robots: 'index, follow',
		googlebot: 'index, follow',
		rating: 'General',
		'theme-color': '#21252a',
		// Facebook Social //
		'og:type': 'website',
		'og:title': packageTitle,
		'og:image': `https://webdevnerdstuff.github.io/${packageJson.name}/images/social.jpg`,
		'og:image:alt': packageJson.description,
		'og:image:width': '1200',
		'og:image:height': '630',
		'og:description': packageJson.description,
		'og:site_name': packageTitle,
		'og:locale': 'en_US',
	},
};

/*
 |--------------------------------------------------------------------------
 | Plugins
 |--------------------------------------------------------------------------
 */
const plugins = [
	new CleanWebpackPlugin(cleanOptions),
	new VueLoaderPlugin(),
	new HtmlWebpackPlugin(htmlWebpackOptions),
];

/*
|--------------------------------------------------------------------------
| Export
|--------------------------------------------------------------------------
*/
module.exports = {
	mode: environment,
	entry: path.resolve(__dirname, '../src/main.js'),
	output: {
		filename: `${packageJson.name}.js`,
		library: packageJson.name,
		libraryTarget: 'umd',
		path: path.resolve(__dirname, `../${publicDir}`),
		publicPath: '',
	},
	// Resolve done //
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			'@components': path.join(__dirname, '/src/components'),
			'@documentation': path.join(__dirname, '/src/pages/documentation'),
		},
	},
	module: {
		rules: [
			fileRule,
			jsRule,
			stylesRule,
			svgRule,
			vueRule,
		],
	},
	plugins,
	infrastructureLogging: {
		level: 'none',
	},
};
