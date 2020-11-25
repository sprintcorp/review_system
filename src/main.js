import Vue from 'vue'
import App from './App.vue';
import '@mdi/font/css/materialdesignicons.css';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';

// @import './sass/custom.scss';


Vue.config.productionTip = false;

Vue.filter('truncate', function(text, length, suffix) {
    if (text.length > length) {
        return text.substring(0, length) + suffix;
    } else {
        return text;
    }
});

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App),
}).$mount('#app')