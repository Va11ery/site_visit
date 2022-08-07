import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex)
export default () =>
  new Store({
    state: {
      dialog: false,
      drawer: false,
    },
    mutations: {
      setDialog(state, value) {
        state.dialog = value
      },
      setDrawer(state, value) {
        state.drawer = value
      },
    },
    actions: {},
    modules: {},
  })
