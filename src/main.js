import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Seats from './store/seats'
import SeatsData from './data/seats.json'

Vue.config.productionTip = false
Vue.use(Vuex)


const storeConfig = {
    modules: {
        seats: Seats,
    },
}
const store = new Vuex.Store(storeConfig)

store.commit('seats/setSeats', SeatsData)

new Vue({
    store,
    el: '#app',
    render: h => h(App)
})
