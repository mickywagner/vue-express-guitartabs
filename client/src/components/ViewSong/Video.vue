<template>
    <panel title="Youtube Video">
        <div class="video">
          <youtube
            :video-id="youtubeId"
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
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
.video {
  width: 100%;
}

</style>
