<template>
    <panel title="Search">
        <form>
           <v-text-field
            label="Search by song title, artist, album, or genre"
            v-model="search"
           >
           </v-text-field>
        </form>
    </panel>
</template>

<script>
import Panel from '@/components/panel'

export default {
  name: 'SearchPanel',
  components: {
    Panel
  },
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search (val) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    },
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

</style>
