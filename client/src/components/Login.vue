<template>
    <v-layout>
    <v-flex xs6 offset-xs3>
      <basic-panel title="Login">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <div v-html="error" class="danger" />
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
      </basic-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import BasicPanel from '@/components/BasicPanel'

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
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({ name: 'songs' })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    'basic-panel': BasicPanel
  }
}
</script>

<style scoped>
</style>
