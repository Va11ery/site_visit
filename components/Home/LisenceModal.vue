<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="570">
      <v-card max-width="570" dark>
        <v-img
          v-show="getImg"
          :src="getImg ? require(`~/assets/img/lisenci/${getImg}`) : ''"
        ></v-img>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'LisenceModal',
  computed: {
    getImg: {
      get() {
        return this.$store.state.imgOpen !== '' ? this.$store.state.imgOpen : ''
      },
      set(newValue) {
        this.$store.commit('setImgOpen', newValue)
      },
    },
    lisence: {
      get() {
        return this.$store.state.lisence
      },
    },
    dialog: {
      get() {
        return this.$store.state.dialog
      },
      set(newValue) {
        this.$store.commit('setDialog', newValue)
        this.$store.commit('setLisence', ['modal', this.getImg, newValue])
      },
    },
  },
  watch: {
    lisence: {
      handler(val, oldVal) {
        const filter = val.filter((i) => i.modal === true)
        this.getImg = filter && filter[0] && filter[0].img ? filter[0].img : ''
        if (this.getImg) setTimeout(() => (this.dialog = true), 200)
      },
      deep: true,
    },
  },
}
</script>

<style></style>
