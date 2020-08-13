<template>
    <v-layout>
    <v-flex xs5 mr-5 v-if="isUserLoggedIn">
      <songs-bookmarks/>
      <recently-viewed-songs />
    </v-flex>
    <v-flex :class="{
      xs12: !isUserLoggedIn,
      xs7: isUserLoggedIn
    }"
    >
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
import {mapState} from 'vuex'

export default {
  name: 'Songs',
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
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
