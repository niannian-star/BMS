import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import jquery from 'jquery';
// Vue.prototype.jquery = $
 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
 
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  },
}).$mount('#app')
