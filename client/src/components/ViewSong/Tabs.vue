<template>
    <panel title="Tabs">
          <v-textarea readonly no-resize v-model="tabs">
          </v-textarea>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  name: 'Tabs',
  props: [
    'tabs'
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
