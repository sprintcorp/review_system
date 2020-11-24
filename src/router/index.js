import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({


    mode: 'history',
    scrollBehavior() {
    return {x: 0, y: 0};
    },

    routes: [
         {
            path: '/auth',
            component: () => import('../container/auth/Layout/Layout.vue'),
            redirect: {
              name: 'auth-login'
            },
            children: [
                {
                    path: 'auth/login',
                    name: 'auth-login',
                    component: () => import('../container/auth/Login/Login.vue'),
                },
                {
                    path: 'auth/register',
                    name: 'auth-register',
                    component: () => import('../container/auth/Register/Register.vue'),
                }
            ]
        },
        






    ]


})



export default router;