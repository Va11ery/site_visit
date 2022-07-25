<template>
  <v-footer dark color="grey darken-3" class="justify-center">
    <v-card
      flat
      tile
      color="grey darken-3"
      class="white--text text-center mx-auto"
    >
      <v-card-text class="white--text">
        <v-img
          :src="require('~/assets/img/logo.png')"
          max-height="70"
          max-width="70"
          style="margin: 0 auto"
        ></v-img>
        <div class="pt-4">Телефон: 8 (812) 224 24 96</div>
      </v-card-text>
      <div class="pa-4">Информация на сайте не является публичной офертой</div>

      <v-card-text class="white--text">
        2015 — {{ new Date().getFullYear() }} © ООО "Охранная организация "Карго
        Глобал Безопасность" Адрес: г. Санкт-Петербург ул. Большая Пороховская
        61
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style></style>
