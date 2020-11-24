// import TheSideBar from '@/layout/student/sidebar/TheSideBar.vue';
import TheHeader from '@/components/Header/Header.vue';
// import TheBreadcrumb from '@/layout/student/breadcrumb/TheBreadcrumb.vue';

export default {
  name: 'AuthLayout',
  data() {
    return {
      drawer: null,
    }
  },
  components: {
    TheHeader,

  }
}
