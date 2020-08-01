<template>
    <v-layout>
        <v-flex xs6>
            <panel title="Song Metadata">
                <v-layout class="song">
                    <v-flex xs6>
                        <div class="song-title">
                            {{song.title}}
                        </div>
                        <div class="song-artist">
                            {{song.artist}}
                        </div>
                        <div class="song-genre">
                            {{song.genre}}
                        </div>
                    </v-flex>
                    <v-flex xs6 ml-4>
                        <div>
                            <img :src="song.albumImage" />
                            {{song.album}}
                        </div>
                    </v-flex>
                </v-layout>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import SongService from '@/services/SongService'
import Panel from '@/components/Panel'

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
    Panel
  }
}
</script>

<style scoped>
.song {
  padding: 10px;
  overflow: hidden;
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
