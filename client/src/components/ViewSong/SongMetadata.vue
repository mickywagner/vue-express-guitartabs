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
              <v-btn
                dark
                class="cyan"
                :to="{
                  name: 'song-edit',
                  params () {
                    return {
                      songId: song.id
                    }
                  }}">
                  Edit
              </v-btn>
              <v-btn
                v-if="isUserLoggedIn"
                dark
                class="cyan"
                @click="setAsBookmark"
                >{{bookmarked ? "Unbookmark" : "Bookmark"}}
                </v-btn>
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
import {mapState} from 'vuex'

export default {
  name: 'SongMetaData',
  props: [
    'song'
  ],
  data () {
    return {
      bookmarked: true
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  methods: {
    setAsBookmark () {
      this.bookmarked = !this.bookmarked
    },
    unbookmark () {
      this.bookmarked = !this.bookmarked
    }
  },
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

button {
  margin: 5px;
}

</style>
