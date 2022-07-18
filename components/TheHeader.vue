<template>
  <v-app-bar app height="110" dark color="grey darken-3" elevation="16">
    <v-btn class="" fab>
      <v-img
        :src="require('~/assets/img/logo.png')"
        max-height="90"
        max-width="90"
      ></v-img>
    </v-btn>
    <v-toolbar-title class="ml-5">ООО КГБ</v-toolbar-title>

    <v-tabs centered exact-active-class>
      <v-tab to="/">Главная</v-tab>
      <v-tab to="/general">Услуги</v-tab>
      <v-tab to="/about">Лицензия</v-tab>
      <v-tab to="/about">Контакты</v-tab>
      <v-tab to="/about">Вакансии</v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style lang="scss" scoped>
.v-btn--fab.v-size--default {
  height: 90px;
  width: 90px;
}
.v-toolbar__title {
  min-width: 83px;
}
</style>
