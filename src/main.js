import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import MainApp from './main-app';
import image from './plugins/image'
import './assets/app.scss'

Vue.use(image)
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(MainApp)
});