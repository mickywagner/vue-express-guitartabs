<template>
    <basic-panel title="Bookmarks">
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
import BookmarkService from '@/services/BookmarkService'
import {mapState} from 'vuex'

export default {
  name: 'SongsBookmarks',
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarkService.index({
        userId: this.user.id
      })).data
    }
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
      pagination: {
        sortBy: 'date',
        descending: true
      },
      bookmarks: []
    }
  },
  components: {
    BasicPanel
  }
}
</script>

<style scoped>

</style>
