<template>
    <v-layout>
    <v-flex xs5 mr-5>
      <songs-bookmarks />
    </v-flex>
    <v-flex xs7>
      <search-panel />
      <songs-panel />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SearchPanel from './SearchPanel'
import SongsBookmarks from './SongsBookmarks'

export default {
  name: 'Songs',
  components: {
    SongsPanel,
    SearchPanel,
    SongsBookmarks
  }
}

</script>

<style scoped>

</style>
