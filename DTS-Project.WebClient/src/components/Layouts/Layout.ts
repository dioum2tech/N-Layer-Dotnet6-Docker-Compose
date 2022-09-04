import AppBar from "./../app-bar/AppBar.vue";
import Footer from "./../footer/Footer.vue";
import NavigationDrawer from "./../navigation-drawer/NavigationDrawer.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Layout",
  components: {
    AppBar,
    Footer,
    NavigationDrawer,
  },
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
});
