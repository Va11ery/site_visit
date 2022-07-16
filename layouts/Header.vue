<template>
  <v-app-bar app height="110" dark color="grey darken-3" elevation="16">
    <v-btn class="" fab>
      <v-img
        :src="require('~/assets/img/logo.png')"
        max-height="90"
        max-width="90"
      ></v-img>
    </v-btn>
    <v-app-bar-title class="ml-5">ООО КГБ</v-app-bar-title>
    <v-tabs centered>
      <v-tab>Tab 1</v-tab>
      <v-tab>Tab 2</v-tab>
      <v-tab>Tab 3</v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  name: 'HeaderLayout',
}
</script>

<style lang="scss" scoped>
.v-btn--fab.v-size--default {
  height: 90px;
  width: 90px;
}

</style>
