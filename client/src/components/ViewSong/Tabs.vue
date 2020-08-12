<template>
    <basic-panel title="Tabs">
          <v-textarea readonly no-resize v-model="song.tab">
          </v-textarea>
    </basic-panel>
</template>

<script>
import BasicPanel from '@/components/BasicPanel'

export default {
  name: 'Tabs',
  props: [
    'song'
  ],
  components: {
    'basic-panel': BasicPanel
  }
}
</script>

<style>
textarea {
  font-family: "Courier New", Courier, monospace;
  border: none;
  border-style: none;
  border-color: transparent;
  padding: 20px;
}

textarea:focus {
  outline: none;
}

</style>
