<template>
    <v-layout>
    <v-flex xs6 offset-xs3>
      <Panel title="Login">
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
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

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
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
