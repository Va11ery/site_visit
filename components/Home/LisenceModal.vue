<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="570">
      <v-card max-width="570">
        <v-img
          :src="getImg ? require(`~/assets/img/lisenci/${getImg}`) : ''"
        ></v-img>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'LisenceModal',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    item: null,
  },
  computed: {
    getImg() {
      return this.item ? this.item.img : ''
    },
    dialog: {
      get() {
        return this.$store.state.dialog
      },
      set(newValue) {
        this.$store.commit('setDialog', newValue)
      },
    },
  },
}
</script>

<style></style>
