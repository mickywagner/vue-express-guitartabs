<template>
  <div>
    <v-layout justify-center fill-height>
      <v-flex xs6 mr-2>
        <SongMetadata :song="song" />
      </v-flex>
      <v-flex xs6>
          <Video :song="song" />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6 id="tabs" mt-4 mr-2>
        <Tabs :song="song"/>
      </v-flex>
      <v-flex xs6 mt-4>
        <Lyrics :song="song"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongService from '@/services/SongService'
import SongHistoryService from '@/services/SongHistoryService'
import {mapState} from 'vuex'

import SongMetadata from './SongMetadata'
import Video from './Video'
import Lyrics from './Lyrics'
import Tabs from './Tabs'

export default {
  data () {
    return {
      song: {
        artist: null,
        genre: null,
        title: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongService.show(songId)).data

    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId,
        userId: this.user.id
      })
    }
  },
  components: {
    Tabs,
    Lyrics,
    SongMetadata,
    Video
  }
}
</script>

<style scoped>

</style>
