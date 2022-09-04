import Vue from "vue";
import Component from "vue-class-component";
import NavigationDrawer from "@/components/navigation-drawer/NavigationDrawer.vue";
import AppBar from "./components/app-bar/AppBar.vue";
import Layout from "./components/Layouts/Layout.vue";
import RepositoryFactory from "./repository/factory";

// Le décorateur @Component indique que la classe est un composant Vue
@Component({
  components: {
    Layout,
    NavigationDrawer,
    AppBar
  },
})
export default class App extends Vue {
  // Les données initiales peuvent être déclarées comme des propriétés de l'instance
  message = "Bonjour !";
  authRepository: any;

  /**
   *
   */
  constructor() {
    super();
  }

  public created(): void {
    console.log("created")
    this.isAuthenticated = this.$store.getters["auth/isLoggIn"];
  }

  get isAuthenticated(): boolean {
      return this.$store.getters["auth/isLoggIn"];
  }

  set isAuthenticated(state: boolean) {
    this.$store.getters["auth/isLoggIn"];
  }

  // Les méthodes peuvent être déclarées comme des méthodes d'instance
  onClick(): void {
    window.alert(this.message);
  }
}
