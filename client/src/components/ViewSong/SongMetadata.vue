<template>
    <basic-panel title="Song Metadata">
      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{ song.title }}
          </div>
          <div class="song-artist">
            {{ song.artist }}
          </div>
          <div class="song-genre">
            {{ song.genre }}
          </div>
          <router-link :to="{ name: 'song-edit', params: {songId: song.id}}">
            <v-btn
              id="btn"
              class="cyan"
              :song="song"
              >Edit Song
              </v-btn>
          </router-link>
        </v-flex>
        <v-flex xs6 ml-4>
          <div class="album-image">
            <img :src="song.albumImage" />
            {{ song.album }}
          </div>
        </v-flex>
      </v-layout>
    </basic-panel>
</template>

<script>
import BasicPanel from '@/components/BasicPanel'

export default {
  name: 'SongMetaData',
  props: [
    'song'
  ],
  components: {
    'basic-panel': BasicPanel
  }
}
</script>

<style scoped>

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

.album-image {
  width: 100%;
}

.album-image img {
  width: 100%;
}

</style>
