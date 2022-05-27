<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
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
