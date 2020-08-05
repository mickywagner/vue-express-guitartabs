<template>
    <v-layout>
    <v-flex xs4 mr-2>
      <search-panel />
    </v-flex>
    <v-flex xs8>
      <songs-panel />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SearchPanel from './SearchPanel'

export default {
  name: 'Songs',
  components: {
    SongsPanel,
    SearchPanel
  }
}

</script>

<style scoped>

</style>
