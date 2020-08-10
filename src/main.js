import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { dom } from '@fortawesome/fontawesome-svg-core';

Vue.config.productionTip = false;

library.add(faSpinner);

Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(fas);

dom.watch();

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App)
}).$mount('#app');
