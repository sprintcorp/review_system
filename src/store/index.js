import Vue from 'vue';
import Vuex from 'vuex';

import review from './module/review';
import auth from './module/auth';

Vue.use(Vuex);

const modules = {
    review,
    auth
};

export default new Vuex.Store({
    modules
})