<template>
    <v-layout>
    <v-flex xs5 mr-5>
      <songs-bookmarks/>
      <recently-viewed-songs />
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
import RecentlyViewedSongs from './RecentlyViewedSongs'

export default {
  name: 'Songs',
  components: {
    SongsPanel,
    SearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  }
}

</script>

<style scoped>

</style>
