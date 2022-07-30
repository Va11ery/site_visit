<template>
  <v-app-bar app height="70" dark color="grey darken-3" elevation="16">
    <v-btn class="" fab>
      <v-img
        :src="require('~/assets/img/logo.png')"
        max-height="65"
        max-width="65"
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

    <v-list two-line dark elevation="0" class="color-card mx-auto">
      <v-list-item>
        <a href="tel: '8 (812) 224 24 96'" class="tel"
          ><v-icon>mdi-cellphone</v-icon>
        </a>
        <v-list-item-content>
          <v-list-item-title>
            <a
              class="v-list-item"
              style="color: white"
              href="tel: '8 (812) 224 24 96'"
              >8 (812) 224 24 96
            </a>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style lang="scss" scoped>
.v-btn--fab.v-size--default {
  height: 65px;
  width: 65px;
}
.v-toolbar__title {
  min-width: 83px;
}
.number-list {
  display: flex;
}
.tel {
  color: transparent;
}
</style>
