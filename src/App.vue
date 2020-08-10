<template>
	<v-app id="app">
		<div id="nav">
			<top-nav />
		</div>
		<v-content>
			<router-view />
		</v-content>
	</v-app>
</template>

<script>
import TopNav from "@/components/TopNav.vue";

export default {
	name: "App",

	components: {
		"top-nav": TopNav,
	},

	data: () => ({
		//
	}),
};
</script>
<style lang="css">
*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: "Open Sans", sans-serif;
}
</style>
