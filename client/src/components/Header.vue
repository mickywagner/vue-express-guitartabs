<template>
    <v-toolbar dark fixed class="cyan">
            <v-toolbar-title class="mr-4"
            ><span @click="navigateTo({name: 'home'})"
                class="logo"
            >
                TabTracker
            </span>
            </v-toolbar-title>
        <!-- <v-toolbar-items>
            <v-btn flat dark>
                Browse
            </v-btn>
        </v-toolbar-items> -->
        <v-spacer></v-spacer>
        <v-toolbar-itmes>
                    <v-btn text
                        @click="navigateTo({name: 'register'})"
                    >
                        Sign Up
                    </v-btn>
        </v-toolbar-itmes>
    </v-toolbar>
</template>

<script>
export default {
  name: 'PageHeader',
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
}

.logo:hover {
    color: #006064;
}
</style>
