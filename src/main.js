import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";

import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;
//自定义全局组件
import './icons'


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");