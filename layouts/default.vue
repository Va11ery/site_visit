<template>
  <v-app app>
    <TheHeader />
    <v-main>
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

<style lang="scss" scoped></style>
