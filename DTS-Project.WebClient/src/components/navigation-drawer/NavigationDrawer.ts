import { Component, Vue } from "vue-property-decorator";
import { MutationTypes as MutationTypeLayout } from "@/store/Layout";

@Component({
  name: "navigation-drawer",
})
export default class NavigationDrawer extends Vue {
  items = [
    { title: "Home", icon: "mdi-view-dashboard", url: "Home" },
    { title: "About", icon: "mdi-forum", url: "About" },
    { title: "Users", icon: "mdi-forum", url: "Users" },
  ];
  user: any;

  /**
   *
   */
  constructor() {
    super();
  }

  get sidebar(): boolean {
    return this.$store.getters["sidebar/drawer"];
  }

  set sidebar(state: boolean) {
    this.$store.dispatch(`sidebar/${MutationTypeLayout.CHANGE_DRAWER}`, state);
  }

  get getUser(): string {
    this.user = JSON.parse(this.$store.getters["auth/user"]);
    return this.user.firstName + " " + this.user.lastName;
  }
}
