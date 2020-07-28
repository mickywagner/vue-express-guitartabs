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
          <form>
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
            <v-btn dark color="cyan" @click="login">
              Login
            </v-btn>
          </form>
        </div>
      </div>
    </v-flex>
  </v-layout>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
