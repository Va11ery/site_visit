import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex)
export default () =>
  new Store({
    state: {
      dialog: false,
      lisence: [
        {
          img: '4.jpg',
          modal: false,
        },
        {
          img: '5.jpg',
          modal: false,
        },
        {
          img: '1.jpg',
          modal: false,
        },
        {
          img: '2.jpg',
          modal: false,
        },
        {
          img: '3.jpg',
          modal: false,
        },
      ],
    },
    mutations: {
      setDialog(state, value) {
        state.dialog = value
      },
    },
    actions: {},
    modules: {},
  })
