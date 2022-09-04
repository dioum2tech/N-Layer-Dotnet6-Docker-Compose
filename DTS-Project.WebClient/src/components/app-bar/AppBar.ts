import { Component, Vue } from "vue-property-decorator"
import { MutationTypes as MutationTypeLayout } from "@/store/Layout";

@Component({
  name: "app-bar",
})
export default class AppBar extends Vue {
  drawer: any;

  /**
   *
   */
  constructor() {
    super();
    this.drawer = this.$store.getters["sidebar/drawer"]
  }

  public ChangeDrawer() {
    this.drawer = !this.drawer;
    console.log("Drawer: ", this.drawer)
    this.$store.dispatch(`sidebar/${MutationTypeLayout.CHANGE_DRAWER}`, this.drawer)
  }
}
