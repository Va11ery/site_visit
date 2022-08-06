<template>
  <v-app-bar app height="70" dark color="grey darken-3" elevation="16">
    <v-btn class="" fab>
      <v-img
        id="logo"
        :src="require('~/assets/img/logo.png')"
        max-height="65"
        max-width="65"
        @click="scrollMain()"
      ></v-img>
    </v-btn>
    <v-toolbar-title class="ml-5">ОО КГБ</v-toolbar-title>
    <v-tabs centered exact-active-class>
      <v-tab @click="scrollMain()">Главная</v-tab>
      <v-tab to="/services">Услуги</v-tab>
      <v-tab @click="scrollPage('#licenses')">Лицензия</v-tab>
      <v-tab @click="scrollPage('#contacts')">Контакты</v-tab>
      <v-tab @click="scrollPage('#job_openings')">Вакансии</v-tab>
    </v-tabs>

    <v-list dark elevation="0" class="color-card mx-auto">
      <v-list-item class="tel">
        <a href="tel: '8 (812) 224 24 96'" class="tel mr-2"
          ><v-icon>mdi-cellphone</v-icon>
        </a>
        <v-list-item-content class="list-content">
          <v-list-item-title>
            <a style="color: white" href="tel: '8 (812) 224 24 96'"
              >8 (812) 224 24 96
            </a>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="mail">
        <a style="color: white" href="mailto:op.kgb@mail.ru" class="tel mr-2"
          ><v-icon>mdi-at</v-icon>
        </a>
        <v-list-item-content class="list-content">
          <v-list-item-title>
            <a style="color: white" href="mailto:op.kgb@mail.ru" class="tel">
              op.kgb@mail.ru
            </a></v-list-item-title
          >
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
  methods: {
    scrollMain(i) {
      if (this.$route.name === 'index') {
        this.$vuetify.goTo('#carousel', this.options)
      } else {
        window.scrollTo(0, 0)
        this.$router.push({ name: 'index' })
      }
    },
    scrollPage(i) {
      if (this.$route.name === 'index') {
        this.$vuetify.goTo(i, this.options)
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
.mail,
.tel {
  min-height: auto !important;
}
a {
  text-decoration: none;
}
.list-content {
  padding: 4px 0 !important;
}
</style>
