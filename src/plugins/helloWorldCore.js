const HelloWorld = {
	// ========================================== Common Variables //
	errors: 0,
	options: {},
	pluginOptions: {},

	// ===================== Default Options //
	defaultOptions: {
		msg: 'Hello World',
	},

	// ========================================== Methods //

	// ===================== Init //
	init(Vue, pluginOptions = {}, options = {}) {
		// Set Options //
		this.pluginOptions = pluginOptions;
		this.options = { ...this.defaultOptions, ...this.pluginOptions, ...options };

		// If errors, do not run //
		if (this.errors) {
			return false;
		}

		// eslint-disable-next-line no-console
		console.log(this.options.msg);
		return false;
	},
};

export default HelloWorld;
