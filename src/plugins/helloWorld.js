import HelloWorldCore from './helloWorldCore';

const HelloWorld = {
	install(Vue, options = {}) {
		const Magical = Vue;

		if (Vue.prototype.$helloWorld) {
			return;
		}

		// Set the Global options //
		this.options = { ...this.options, ...options };

		// Add an instance methods //
		Magical.prototype.$helloWorld = function(logOptions) {
			HelloWorldCore.init(Vue, HelloWorld.options, logOptions);
			return false;
		};

		Magical.prototype.$uniLog = function(logOptions) {
			HelloWorldCore.init(Vue, HelloWorld.options, logOptions);
			return false;
		};
	},
	options: {
		msg: 'Hello World Plugin',
	},
};

export default HelloWorld;
