<template>
    <basic-panel title="Recently Viewed" id="recent">
        <v-data-table
            :headers="headers"
            :items="bookmarks"
        >
        <template slot="items" scope="props">
            <td class="text-xs-right">
                {{props.item.title}}
            </td>
            <td class="text-xs-right">
                {{props.item.artist}}
            </td>
        </template>
        </v-data-table>
    </basic-panel>
</template>

<script>
import BasicPanel from '@/components/BasicPanel'
import {mapState} from 'vuex'

export default {
  name: 'SongsBookmarks',
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  components: {
    BasicPanel
  }
}
</script>

<style scoped>
#recent {
    margin-top: 10px;
}
</style>
