import Notification from '../components/Notification/Notification.vue'

function componentRegistry(Vue) {
    Vue.component('notification', Notification);
}

export {
    componentRegistry
}