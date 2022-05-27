<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/vue-logo.png" />
		<HelloWorld msg="Hello Vue 2 + Webpack" />
	</div>
</template>

<script>
import { HelloWorld } from './index';

export default {
	name: 'App',
	components: {
		HelloWorld,
	},
	mounted() {
		this.$helloWorld();
		this.$helloWorld({ msg: 'Hello World Plugin in Component' });
	},
};
</script>

<style lang="scss">
#app {
	color: #2c3e50;
	font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
	margin-top: 60px;
	text-align: center;
}
</style>
