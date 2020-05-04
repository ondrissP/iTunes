<template>
	<form @submit.prevent="getMusic()">
		<input @keyup="search()" v-model="query" type="text" ref="input" />
	</form>
</template>

<script>
import axios from 'axios'
import { debounce } from 'lodash-es'

export default {
	data() {
		return {
			query: ''
		}
	},
	methods: {
		getMusic() {
			axios
				.get(
					`https://itunes.apple.com/search
						?term=${encodeURI(this.query)}
						&limit=${this.limit}
						&entity=musicTrack`
				)
				.then(response => {
					let iTunesSongs = response.data.results
						.filter(song => song.kind === 'song')
						.map(song => this.extractData(song))

					this.$root.$emit('new-songs-arrived', iTunesSongs)
				})
		},
		extractData({
			trackId: id,
			artistName: artist,
			previewUrl: audioFile,
			artworkUrl100: cover,
			trackName: name,
			collectionName: album
		}) {
			return { id, artist, audioFile, cover, name, album }
		},
		search: debounce(function() {
			this.getMusic()
		}, 500)
	},
	mounted() {
		this.$refs.input.focus()
	}
}
</script>

<style lang="scss" scoped>
input {
	width: 100%;
	display: block;

	padding: {
		top: 0.5em;
		bottom: 0.5em;
		left: 2.95em;
		right: 0.75em;
	}

	color: #333;
	font-size: 1.5em;
	font-weight: 700;

	border: none;
	border-radius: 0.5em;
	background: rgb(219, 219, 219);
	box-sizing: border-box;

	outline: none;
	appearance: none;

	background: {
		image: url('../../assets/search.svg');
		repeat: no-repeat;
		position-y: 50%;
		position-x: 1em;
		color: rgb(219, 219, 219);
		size: 1em;
	}
}

@media screen and (max-width: 520px) {
	input {
		font-size: 1.15em;
	}
}
</style>
