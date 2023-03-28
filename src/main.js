import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import createRoute from "./router";
import './assets/css/article.css'
Vue.use(ElementUI);

Vue.config.productionTip = false
let router=createRoute;
Vue.use(router);
new Vue({


  render: h => h(App),
 router:router
}).$mount('#app')
