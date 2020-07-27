import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

import VueCompositionApi from '@vue/composition-api';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './icons' //自定义全局组件
import './router/guard.js' //导航守卫

Vue.use(ElementUI);
Vue.use(VueCompositionApi);
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");