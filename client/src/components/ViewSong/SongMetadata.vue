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
                v-if="isUserLoggedIn && !bookmark"
                dark
                class="cyan"
                @click="setAsBookmark"
                >Bookmark
                </v-btn>
              <v-btn
                v-if="isUserLoggedIn && bookmark"
                dark
                class="cyan"
                @click="unbookmark"
                >Remove Bookmark
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
import BookmarkService from '@/services/BookmarkService'

export default {
  name: 'SongMetaData',
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (!this.isUserLoggedIn) {
      return
    }
    try {
      const bookmarks = (await BookmarkService.index({
        songId: this.$route.params.songId,
        userId: this.$store.state.user.id
      })).data
      if (bookmarks.length) {
        this.bookmark = bookmarks[0]
      }
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarkService.post({
          songId: this.song.id,
          userId: this.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unbookmark () {
      try {
        console.log('bookmark', this.bookmark.id)
        await BookmarkService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
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
