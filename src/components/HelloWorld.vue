<template>
	<div>
		<h1>{{ msg }}</h1>

		<p>
			Recommended IDE setup:
			<a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
			+
			<a
				href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
				target="_blank"
				>Vetur</a
			>
		</p>

		<p>
			<a href="https://webpack.js.org/" target="_blank">Webpack Docs</a>
			|
			<a href="https://v2.vuejs.org/" target="_blank">Vue 2 Docs</a>
		</p>

		<button type="button" @click="count++">count is: {{ count }}</button>
		<p>
			Edit
			<code>components/HelloWorld.vue</code> to test hot module replacement.
		</p>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String,
	},
	data() {
		return {
			count: 0,
		};
	},
};
</script>

<style lang="scss" scoped>
a {
	color: #42b983;
}
</style>
