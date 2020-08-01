<template>
    <div>
       <h1>{{this.song}}</h1>
    </div>
</template>

<script>
import SongService from '@/services/SongService'

export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = await SongService.show(songId)
  }
}
</script>

<style scoped>

</style>
