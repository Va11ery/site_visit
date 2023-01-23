<template>
  <v-app-bar app height="75" class="" dark color="grey darken-3" elevation="16">
    <v-btn class="" fab @click.prevent="scrollMain()">
      <v-img
        id="logo"
        :src="require('~/assets/img/logo.png')"
        max-height="65"
        max-width="65"
      ></v-img>
    </v-btn>
    <v-toolbar-title class="ml-5" style="text-shadow: 2px 2px 2px black"
      >Охранная Организация КГБ</v-toolbar-title
    >
    <v-spacer class="adaptive"></v-spacer>
    <v-app-bar-nav-icon
      class="adaptive"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-tabs centered exact-active-class class="header-content">
      <v-tab @click.prevent="scrollMain()">Главная</v-tab>
      <v-tab to="/services">Услуги</v-tab>
      <v-tab @click.prevent="scrollPage('licenses', 3)">Лицензии</v-tab>
      <v-tab @click.prevent="scrollPage('contacts', 4)">Контакты</v-tab>
      <v-tab to="/vacancy">Вакансии</v-tab>
    </v-tabs>

    <v-list dark elevation="0" class="color-card mx-auto header-content">
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
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(newValue) {
        this.$store.commit('setDrawer', newValue)
      },
    },
  },
  methods: {
    scrollMain(i) {
      if (this.$route.name === 'index') {
        this.$vuetify.goTo('#carousel', this.options)
      } else {
        this.$router.push({ name: 'index' })
      }
    },
    scrollPage(i, index) {
      if (this.$route.name === 'index' && index !== 0 && index !== 1) {
        this.drawer = false
      }
      if (this.$route.name === 'services' && index !== 0 && index !== 1) {
        this.$router.push({
          name: 'index',
        })
      }
      if (this.$route.name === 'vacancy' && index !== 0 && index !== 1) {
        this.$router.push({
          name: 'index',
        })
      }

      setTimeout(() => {
        const el = document.getElementById(i)
        el.scrollIntoView()
      }, 200)
    },
  },
}
</script>

<style lang="scss" scoped>
.v-btn--fab.v-size--default {
  height: 65px;
  width: 65px;
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
  text-shadow: 2px 2px 2px black;
}
.v-toolbar__title {
  min-width: 260px;
}
.adaptive {
  display: none;
}
@media (max-width: 1092px) {
  .header-content {
    display: none;
  }
  .adaptive {
    display: block;
  }
}
@media (max-width: 400px) {
  .v-toolbar__title {
    min-width: 100px !important;
    width: 120px !important;
    white-space: pre-wrap;
    font-size: 1.1rem;
  }
}
</style>
