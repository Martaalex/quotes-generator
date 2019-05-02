import Vue from 'vue';
import App from './App.vue';
import { createStore } from '@/packages/vuex'
// import { createRouter } from '@/packages/vue-router'

Vue.config.productionTip = false;

export function createApp() {
  const store = createStore()
  // const router = createRouter(store)
  const app = new Vue({
    store,
    // router,
    render: h => h(App)
  })

  return {
    store,
    // router,
    app
  }
}



