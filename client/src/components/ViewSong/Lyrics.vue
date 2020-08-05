<template>
    <basic-panel title="Lyrics">
        <v-textarea class="song" readonly no-resize v-model="lyrics">
        </v-textarea>
    </basic-panel>
</template>

<script>
import BasicPanel from '@/components/BasicPanel'

export default {
  name: 'Lyrics',
  props: [
    'lyrics'
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
