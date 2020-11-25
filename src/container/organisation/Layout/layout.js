import TheSideBar from '@/components/Sidebar/Sidebar.vue';
import TheHeader from '@/components/Header/Header.vue';
// import TheBreadcrumb from '@/layout/student/breadcrumb/TheBreadcrumb.vue';

export default {
  name: 'AdminLayout',
  data() {
    return {
      drawer: null,
    }
  },
  components: {
    TheHeader,
    TheSideBar
  }
}
