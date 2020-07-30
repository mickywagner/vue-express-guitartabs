<template>
    <div>
        <v-layout>
            <v-flex xs5>
                <Panel title="Song MetaData">
                    <form>
                    <v-text-field
                    type="text"
                    label="Title"
                    v-model="song.title"
                    ></v-text-field>
                    <v-text-field
                    type="text"
                    label="Artist"
                    v-model="song.artist"
                    ></v-text-field>
                    <v-text-field
                    type="text"
                    label="Genre"
                    v-model="song.genre"
                    ></v-text-field>
                    <v-text-field
                    type="text"
                    label="Album"
                    v-model="song.album"
                    ></v-text-field>
                    <v-text-field
                    type="text"
                    label="Album Image URL"
                    v-model="song.albumImageUrl"
                    ></v-text-field>
                    <v-text-field
                    type="text"
                    label="Youtube ID"
                    v-model="song.youtubeId"
                    ></v-text-field>
                    </form>
                </Panel>
            </v-flex>
            <v-flex xs7 ml-4>
                <Panel title="Song Structure">
                    <v-textarea
                    multi-line
                    no-resize
                    label="Lyrics"
                    v-model="song.lyrics"
                    >
                    </v-textarea>
                    <v-textarea
                    multi-line
                    no-resize
                    label="Tab"
                    v-model="song.tab"
                    >
                    </v-textarea>
                </Panel>

                <v-btn dark color="cyan" @click="createSong">
                    Create Song
                </v-btn>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongService'

export default {
  name: 'create-song',
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }

    }
  },
  methods: {
    async createSong () {
      try {
        await SongService.post(this.song)
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
