import Vue from 'vue';

import VueRouter from 'vue-router';
import { getToken } from "../config";
Vue.use(VueRouter);

const preventRoutes = {
    beforeEnter: (to, from, next) => {
        if (getToken()) {
            next()
        } else {
            next('/auth/login')
        }
    }
};

const router = new VueRouter({


    mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 };
    },

    routes: [{
            path: '/',
            component: () =>
                import ('../container/auth/Layout/Layout.vue'),
            redirect: {
                name: 'auth-login'
            },
            children: [{
                    path: '/auth/login',
                    name: 'auth-login',
                    component: () =>
                        import ('../container/auth/Login/Login.vue'),
                },
                {
                    path: '/auth/register',
                    name: 'auth-register',
                    component: () =>
                        import ('../container/auth/Register/Register.vue'),
                }
            ]
        },

        {
            path: '/admin',
            component: () =>
                import ('../container/admin/Layout/Layout.vue'),
            ...preventRoutes,
            redirect: {
                name: 'admin-dashboard'
            },
            children: [{
                path: '/admin/dashboard',
                name: 'admin-dashboard',
                component: () =>
                    import ('../container/admin/Dashboard/Dashboard.vue'),
            }]
        },


        {
            path: '/user',
            component: () =>
                import ('../container/user/Layout/Layout.vue'),
            ...preventRoutes,
            redirect: {
                name: 'user-dashboard'
            },
            children: [{
                path: '/user/dashboard',
                name: 'user-dashboard',
                component: () =>
                    import ('../container/user/Dashboard/Dashboard.vue'),
            }]
        }







    ]


})



export default router;