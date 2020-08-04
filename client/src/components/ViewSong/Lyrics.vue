<template>
    <panel title="Lyrics">
        <v-textarea class="song" readonly no-resize v-model="lyrics">
        </v-textarea>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  name: 'Lyrics',
  props: [
    'lyrics'
  ],
  components: {
    Panel
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
