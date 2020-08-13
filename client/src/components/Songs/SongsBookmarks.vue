<template>
    <basic-panel title="Bookmarks">
        <v-data-table
            :headers="headers"
            :pagination.sync="pagination"
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

export default {
  name: 'SongsBookmarks',
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
      bookmarks: [
        {
          title: 'Oops I Did It Again',
          artist: 'Britney Spears'
        },
        {
          title: 'Singing in the Rain',
          artist: 'Frank Sinatra'
        }
      ]
    }
  },
  components: {
    BasicPanel
  }
}
</script>

<style scoped>

</style>
