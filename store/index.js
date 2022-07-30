import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex)
export default () =>
  new Store({
    state: {
      dialog: false,
      
    },
    mutations: {
      setDialog(state, value) {
        state.dialog = value
      },
    },
    actions: {},
    modules: {},
  })
