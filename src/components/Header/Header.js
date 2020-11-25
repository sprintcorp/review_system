import {
    getRole
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
        }
    }
}