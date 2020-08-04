<template>
  <div>
    <v-layout fill-height>
      <v-flex xs6 mr-2>
        <SongMetadata :song="song" />
      </v-flex>
        <v-flex xs6>
          <Video :youtubeId="song.youtubeId" />
        </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6 id="tabs" mt-4 mr-2>
        <Tabs :tabs="song.tab"/>
      </v-flex>
      <v-flex xs6 mt-4>
        <Lyrics :lyrics="song.lyrics"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongService from '@/services/SongService'

import SongMetadata from './SongMetadata'
import Video from './Video'
import Lyrics from './Lyrics'
import Tabs from './Tabs'

export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
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
