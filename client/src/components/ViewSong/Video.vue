<template>
    <basic-panel title="Youtube Video">
        <div>
          <youtube
            :video-id="song.youtubeId"
            :player-width="350"
            :player-height="300"
          >
          </youtube>
        </div>
    </basic-panel>
</template>

<script>
import BasicPanel from '@/components/BasicPanel'

export default {
  name: 'Video',
  props: [
    'song'
  ],
  components: {
    'basic-panel': BasicPanel
  }
}
</script>

<style scoped>

</style>
