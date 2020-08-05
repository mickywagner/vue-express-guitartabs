<template>
    <v-layout>
    <v-flex xs8 offset-xs2>
      <songs-panel></songs-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'

export default {
  name: 'Songs',
  components: {
    SongsPanel
  }
}

</script>

<style scoped>

</style>
