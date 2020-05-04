<template>
	<div id="app">
		<vue-particles class="particles"></vue-particles>
		<header>
			<the-navigation />
		</header>
		<transition class="content" name="router-animate" mode="out-in">
			<router-view />
		</transition>
	</div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue'

export default {
	components: {
		TheNavigation
	}
}
</script>

<style src="@/assets/scss/main.scss" lang="scss"></style>
