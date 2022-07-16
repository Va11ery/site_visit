<template>
  <v-app app>
    <TheHeader />
    <v-main >
      <!-- Provides the application the proper gutter -->
      <v-container>
        <!-- If using vue-router -->
        <h1>dsadsadadasas</h1>
        <h2>easdasdasdasas</h2>
      </v-container>
    </v-main>
    <v-footer>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import TheHeader from '../layouts/Header.vue'
export default {
  name: 'IndexPage',
  components: {
    TheHeader,
  },
}
</script>

<style lang="scss" scoped>
.theme--light.v-application {
  background: #616161 !important;
  color: white;
}
</style>
