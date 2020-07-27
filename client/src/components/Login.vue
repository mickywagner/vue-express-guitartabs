<template>
    <div>
        <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar dense dark color="cyan">
          <v-toolbar-title>
            Login
          </v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <div v-html="error" class="error" />
          <br />
            <v-text-field
              type="email"
              label="email"
              v-model="email"
            ></v-text-field>
            <br />
            <v-text-field
              type="password"
              label="password"
              v-model="password"
            ></v-text-field>
          <br />
          <br />
          <v-btn dark color="cyan" @click="register">
            Login
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
    </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>

</style>
