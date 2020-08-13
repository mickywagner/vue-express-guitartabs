<template>
    <basic-panel title="Recently Viewed Songs" id="recent">
        <v-data-table
            :headers="headers"
            :items="history"
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
import SongHistoryService from '@/services/SongHistoryService'

import {mapState} from 'vuex'

export default {
  name: 'SongsBookmarks',
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Artist',
          value: 'artist'
        }
      ],
      sortBy: 'date',
      sortDesc: false,
      history: []
    }
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.history = (await SongHistoryService.index()).data
    }
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
