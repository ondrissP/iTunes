<template>
	<div class="hello">
		<h1>{{ msg }}</h1>

		<p>
			Search for some really cool songs!!
		</p>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	}
}
</script>
