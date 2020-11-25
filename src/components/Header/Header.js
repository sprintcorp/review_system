import {
    getRole,
    logout,
    getToken
}
from '../../config'


export default {
    data: () => ({
        links: [
            'Dashboard',
            'Messages',
            'Profile',
            'Updates',
        ],
        auth: false
    }),
    methods: {
        goToDashboard() {
            if (getRole() === 'alpha') {
                this.$router.push({ name: 'admin-dashboard' });
            }
            if (getRole() === 'beta') {
                this.$router.push({ name: 'organisation' });
            }
            if (getRole() === 'delta') {
                this.$router.push({ name: 'user-dashboard' });
            }
        },
        logout() {
            logout();
            this.auth = false;
            // this.account_info = 'Account';
            this.$router.push({ name: 'auth-login' });
        },
        getToken() {
            if (getToken()) {
                this.auth = true
            }
        }

    },
    mounted() {
        this.getToken();
    }
}