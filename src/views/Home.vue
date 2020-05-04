<template>
	<section class="home">
		<img v-cloak alt="headphones" src="../assets/girl-headphones.jpg" />
		<hello-world msg="iTunes Music App" />
	</section>
</template>

<script>
import HelloWorld from '@/components/home/HelloWorld.vue'

export default {
	name: 'home',
	components: {
		HelloWorld
	}
}
</script>

<style scoped lang="scss">
img {
	margin-bottom: 1em;
	width: 90%;
	border-radius: 1em;
	filter: blur(1px);
}
</style>
