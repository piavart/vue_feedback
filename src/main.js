import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAuth from '@websanova/vue-auth'
import auth from './auth'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue';
import VueSweetalert2 from 'vue-sweetalert2';


Vue.config.productionTip = false


Vue.router = router
Vue.use(VueRouter)

Vue.use(VueAxios, axios)
Vue.use(VueAuth, auth);

Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);


Vue.axios.defaults.baseURL = `http://localhost:8000/api`

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
