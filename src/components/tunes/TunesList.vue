<template>
	<div>
		<ul class="tunes-list">
			<li>
				<tunes-song v-for="song in songs" :key="song.id" :song="song" />
			</li>
		</ul>
		<button
			class="control-btn"
			v-show="songs.length"
			@click="showMoreSongs"
		>
			+
		</button>
		<button class="control-btn" v-show="songs.length" @click="scrollToTop">
			↑
		</button>
	</div>
</template>

<script>
import TunesSong from '@/components/tunes/TunesSong.vue'

export default {
	components: {
		TunesSong
	},
	data() {
		return {
			songs: [],
			otherSongs: [],
			songsLimit: 5
		}
	},
	computed: {
		showPlus() {
			return this.otherSongs.length ? true : false
		}
	},
	methods: {
		showMoreSongs() {
			this.songs.push(...this.otherSongs.splice(0, this.songsLimit))
		},
		scrollToTop() {
			window.scrollTo(0, 0)
		}
	},
	mounted() {
		this.$root.$on('new-songs-arrived', data => {
			this.songs = []
			this.otherSongs = []
			this.songs = data.splice(0, this.songsLimit)
			this.otherSongs = data
		})
	}
}
</script>

<style scoped lang="scss">
ul {
	margin-top: 3em;
	padding-left: 0;
	list-style: none;
}

.control-btn {
	font-size: 3em;
	padding: 0 0.3em;
	margin: 0 0.8em;
	border-radius: 50%;
	border: 2px solid;
	background: transparent;
	color: white;
	cursor: pointer;

	&:hover,
	:focus {
		color: #fffa0d;
	}
}
</style>
