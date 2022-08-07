<template>
  <div>
    <v-app app>
      <Burger />
      <TheHeader />
      <v-main>
        <Nuxt />
      </v-main>
      <TheFooter />
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss" scoped></style>
