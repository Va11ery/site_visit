<template>
  <v-app app>
    <TheHeader />
    <v-main>
      <!-- Provides the application the proper gutter -->
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss" scoped>

</style>
