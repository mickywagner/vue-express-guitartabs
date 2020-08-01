<template>
    <div>
        View Song
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
    this.song = await SongService.show()
  }
}
</script>

<style scoped>

</style>
