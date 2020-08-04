<template>
  <div>
    <v-layout>
      <v-flex xs6 mr-2>
        <SongMetadata :song="song" />
      </v-flex>
        <v-flex xs6>
          <Video :youtubeId="song.youtubeId" />
        </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6 id="tabs" mt-4 mr-2>
       <panel title="Tabs">
          <v-textarea class="song" readonly no-resize v-model="song.tab">
          </v-textarea>
        </panel>
      </v-flex>
      <v-flex xs6 mt-4>
        <panel title="Lyrics">
          <v-textarea class="song" readonly no-resize v-model="song.lyrics">
          </v-textarea>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongService from '@/services/SongService'
import Panel from '@/components/Panel'
import SongMetadata from './SongMetadata'
import Video from './Video'

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
    Panel,
    SongMetadata,
    Video
  }
}
</script>

<style scoped>
textarea {
  font-family: "Courier New", Courier, monospace;
  border: none;
  border-style: none;
  border-color: transparent;
  padding: 20px;
}

textarea:focus {
  outline: none;
}
</style>
