<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <basic-panel title="Register">
        <div v-html="error" class="danger" />
          <br />
          <form>
            <v-text-field
              type="email"
              label="email"
              v-model="email"
              auto-complete="off"
            ></v-text-field>
            <br />
            <v-text-field
              type="password"
              label="password"
              v-model="password"
              auto-complete="new-password"
            ></v-text-field>
            <br />
            <br />
            <v-btn dark color="cyan" @click="register">
              Register
            </v-btn>
          </form>
      </basic-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import BasicPanel from '@/components/BasicPanel'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
