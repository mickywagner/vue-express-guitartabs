<template>
    <v-toolbar dark fixed class="cyan">
        <router-link to="/">
            <v-toolbar-title class="mr-4">
                TabTracker
            </v-toolbar-title>
        </router-link>

        <!-- <v-toolbar-items>
            <v-btn flat dark>
                Browse
            </v-btn>
        </v-toolbar-items> -->
        <v-spacer></v-spacer>
        <v-toolbar-itmes>
                <router-link to="register">
                    <v-btn text>
                        Sign Up
                    </v-btn>
                </router-link>
        </v-toolbar-itmes>
    </v-toolbar>
</template>

<script>
export default {
  name: 'PageHeader'
}

</script>

<style scoped>
header {
    max-height: 50px;
}
</style>
