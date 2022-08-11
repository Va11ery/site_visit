<template>
  <v-navigation-drawer v-model="drawer" app temporary dark>
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        @click="scrollPage(item.scroll, i)"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import * as easings from 'vuetify/lib/services/goto/easing-patterns'
export default {
  name: 'HeaderBurger',
  data() {
    return {
      fixed: false,
      group: null,
      type: 'selector',
      duration: 783,
      offset: 0,
      easing: 'easeOutQuad',
      easings: Object.keys(easings),
      items: [
        {
          icon: 'mdi-apps',
          title: 'Главная',
          to: '/',
        },
        {
          icon: 'mdi-account-box',
          title: 'Услуги',
          to: '/services',
        },
        {
          icon: 'mdi-file-document-multiple',
          title: 'Лицензии',
          scroll: '#licenses',
        },
        {
          icon: 'mdi-card-account-details',
          title: 'Контакты',
          scroll: '#contacts',
        },
        {
          icon: 'mdi-shield-car',
          title: 'Вакансии',
          to: '/vacancy',
        },
      ],
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
    scrollPage(i, index) {
      if (
        this.$route.name === 'index' &&
        index !== 0 &&
        index !== 1 &&
        index !== 4
      ) {
        this.$vuetify.goTo(i, this.options)
        this.drawer = false
      }
      if (
        this.$route.name === 'services' &&
        index !== 0 &&
        index !== 1 &&
        index !== 4
      ) {
        this.$router.push({
          name: 'index',
          params: { scroll: true, selector: i },
        })
        setTimeout(() => this.$vuetify.goTo(i, this.options), 200)
      }
      if (
        this.$route.name === 'vacancy' &&
        index !== 0 &&
        index !== 1 &&
        index !== 4
      ) {
        this.$router.push({
          name: 'index',
          params: { scroll: true, selector: i },
        })
        setTimeout(() => this.$vuetify.goTo(i, this.options), 200)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
