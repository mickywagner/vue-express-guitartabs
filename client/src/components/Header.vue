<template>
    <v-toolbar dark fixed class="cyan">
            <v-toolbar-title class="mr-4"
            ><v-btn text to="/songs"
                class="logo"
            >
                TabTracker
            </v-btn>
            </v-toolbar-title>
        <v-toolbar-items>
            <v-btn text to="/songs">
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items
        >
                    <v-btn text to="/login"
                        v-if="!$store.state.isUserLoggedIn"
                    >
                        Login
                    </v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
                    <v-btn text to="/register"
                        v-if="!$store.state.isUserLoggedIn"
                    >
                        Sign Up
                    </v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
                    <v-btn text to="/"
                        v-if="$store.state.isUserLoggedIn"
                        @click="logout"
                    >
                        Logout
                    </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  name: 'PageHeader',
  methods: {
    logout () {
      this.$store.dispatch('logOut')
      this.$router.push({name: 'songs'})
    }
  }
}

</script>

<style scoped>
header {
    max-height: 50px;
}

.logo {
    cursor: pointer;
    text-transform: capitalize;
    font-size: 1em;
}
</style>
