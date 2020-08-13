<template>
    <basic-panel title="Search" id="search">
        <form>
           <v-text-field
            label="Search by song title, artist, album, or genre"
            v-model="search"
           >
           </v-text-field>
        </form>
    </basic-panel>
</template>

<script>
import BasicPanel from '@/components/BasicPanel'
import _ from 'lodash'

export default {
  name: 'SearchPanel',
  components: {
    'basic-panel': BasicPanel
  },
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>
#search {
  margin-bottom: 10px;
}
</style>
