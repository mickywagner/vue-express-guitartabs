<template>
    <div>
        <v-layout>
            <v-flex xs5>
                <Panel title="Song MetaData">
                    <form>
                    <v-text-field
                    type="text"
                    label="Title"
                    v-model="title"
                    ></v-text-field>
                    <v-text-field
                    type="text"
                    label="Artist"
                    v-model="artist"
                    ></v-text-field>
                    <v-text-field
                    type="text"
                    label="Genre"
                    v-model="genre"
                    ></v-text-field>
                    <v-text-field
                    type="text"
                    label="Album"
                    v-model="album"
                    ></v-text-field>
                    <v-text-field
                    type="text"
                    label="Album Image URL"
                    v-model="albumImageUrl"
                    ></v-text-field>
                    <v-text-field
                    type="text"
                    label="Youtube ID"
                    v-model="youtubeId"
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
                    v-model="lyrics"
                    >
                    </v-textarea>
                    <v-textarea
                    multi-line
                    no-resize
                    label="Tab"
                    v-model="tab"
                    >
                    </v-textarea>
                </Panel>
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
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    }
  },
  methods: {
    async createSong () {
      const response = await SongService.post({
        title: this.title,
        artist: this.artist,
        genre: this.genre,
        album: this.album,
        albumImageUrl: this.albumImageUrl,
        youtubeId: this.youtubeId,
        lyrics: this.lyrics,
        tab: this.tab
      })
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
