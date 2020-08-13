<template>
  <basic-panel title="Songs"> 
    <v-btn
      slot="action"
      fab
      class="cyan accent-2"
      small
      absolute
      right
      middle
      to="/songs/create"
    >
      <v-icon>add </v-icon>
    </v-btn>
    <div v-for="song in songs" :key="song.id">
      <v-layout class="song">
        <v-flex xs8>
          <div class="song-title">{{ song.title }}</div>
          <div class="song-artist">{{ song.artist }}</div>
          <div class="song-genre">{{ song.genre }}</div>

          <router-link :to="{ name: 'song-view', params: { songId: song.id } }">
            <v-btn dark class="cyan">
              View Song
            </v-btn>
          </router-link>
        </v-flex>

        <v-flex xs6>
          <img
            class="album-image"
            :src="song.albumImage"
            style="width: 100%"
            alt="Ablum Art"
          />
        </v-flex>
      </v-layout>
    </div>
  </basic-panel>
</template>

<script>
import BasicPanel from '@/components/BasicPanel'
import SongService from '@/services/SongService'

export default {
  name: 'Songs',
  components: {
    'basic-panel': BasicPanel
  },
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongService.index(value)).data
      }
    }
  },
  async mounted () {
    this.songs = (await SongService.index()).data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  overflow: hidden;
  margin-bottom: 10px;
}

.album-image {
  margin-left: 20px;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
