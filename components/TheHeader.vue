<template>
  <v-app-bar app height="70" dark color="grey darken-3" elevation="16">
    <v-btn class="" fab>
      <v-img
        id="logo"
        :src="require('~/assets/img/logo.png')"
        max-height="65"
        max-width="65"
        @click="$vuetify.goTo('#carousel', options)"
      ></v-img>
    </v-btn>
    <v-toolbar-title class="ml-5">ОО КГБ</v-toolbar-title>

    <v-tabs centered exact-active-class>
      <v-tab @click="$vuetify.goTo('#carousel', options)">Главная</v-tab>
      <v-tab @click="$vuetify.goTo('#cargo_support', options)">Услуги</v-tab>
      <v-tab @click="$vuetify.goTo('#licenses', options)">Лицензия</v-tab>
      <v-tab @click="$vuetify.goTo('#contacts', options)">Контакты</v-tab>
      <v-tab @click="$vuetify.goTo('#job_openings', options)">Вакансии</v-tab>
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
import * as easings from 'vuetify/lib/services/goto/easing-patterns'
export default {
  name: 'TheHeader',
  data() {
    return {
      type: 'selector',
      duration: 783,
      offset: 0,
      easing: 'easeOutQuad',
      easings: Object.keys(easings),
    }
  },
  computed: {
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      }
    },
  },
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
