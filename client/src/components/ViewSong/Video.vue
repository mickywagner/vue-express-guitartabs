<template>
    <panel title="Youtube Video">
        <div>
          <youtube
            :video-id="song.youtubeId"
            :player-width="350"
            :player-height="300"
          >
          </youtube>
        </div>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  name: 'Video',
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
