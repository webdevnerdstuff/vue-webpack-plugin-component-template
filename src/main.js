import Vue from 'vue';
import App from './App.vue';
import { HelloWorldPlugin } from './index';

Vue.use(HelloWorldPlugin);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount('#app');
