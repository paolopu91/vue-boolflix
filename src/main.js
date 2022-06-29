import Vue from 'vue'
import App from './App.vue'
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import LangFlag from 'vue-lang-code-flags';
Vue.component('lang-flag', LangFlag);
//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faStar)
import { faStar } from '@fortawesome/free-solid-svg-icons'
Vue.component('font-awesome-icon', FontAwesomeIcon)
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
