<template>
    <v-layout>
    <v-flex xs6 offset-xs3>
      <Panel title="Songs">
          <div v-for="song in songs"
            :key="songs.id">
            {{song.title}} -
            {{song.album}} -
            {{song.artist}}
          </div>     
      </Panel>
        <v-btn to="/songs/create">
            Create New Song
        </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongService'

export default {
  name: 'Songs',
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongService.index()).data
  }
}

</script>

<style scoped>
</style>
