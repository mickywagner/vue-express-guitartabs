<template>
    <div>
        <v-layout>
            <v-flex xs5>
                <basic-panel title="Song MetaData">
                    <v-text-field
                    required
                    label="Title"
                    :rules="[required]"
                    v-model="song.title"
                    ></v-text-field>
                    <v-text-field
                    required
                    label="Artist"
                    v-model="song.artist"
                    ></v-text-field>
                    <v-text-field
                    required
                    :rules="[required]"
                    label="Genre"
                    v-model="song.genre"
                    ></v-text-field>
                    <v-text-field
                    required
                    :rules="[required]"
                    label="Album"
                    v-model="song.album"
                    ></v-text-field>
                    <v-text-field
                    required
                    :rules="[required]"
                    label="Album Image URL"
                    v-model="song.albumImage"
                    ></v-text-field>
                    <v-text-field
                    required
                    :rules="[required]"
                    label="Youtube ID"
                    v-model="song.youtubeId"
                    ></v-text-field>
                </basic-panel>
            </v-flex>
            <v-flex xs7 ml-4>
                <basic-panel title="Song Structure">
                    <v-textarea
                    multi-line
                    :rules="[required]"
                    no-resize
                    label="Lyrics"
                    v-model="song.lyrics"
                    >
                    </v-textarea>
                    <v-textarea
                    multi-line
                    :rules="[required]"
                    no-resize
                    label="Tab"
                    v-model="song.tab"
                    >
                    </v-textarea>
                </basic-panel>
                <div class="danger-alert" v-if="error">
                  {{ error }}
                </div>
                <v-btn dark color="cyan" @click="createSong">
                    Create Song
                </v-btn>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import BasicPanel from '@/components/BasicPanel'
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
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async createSong () {
      this.error = null
      const fieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])

      if (!fieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
        return
      }
      try {
        console.log(this.song)
        await SongService.post(this.song)
        this.$router.push({ name: 'songs' })
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
.danger-alert {
  color: red;
}
</style>
