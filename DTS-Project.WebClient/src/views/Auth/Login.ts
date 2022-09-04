import { Component, Vue } from "vue-property-decorator"
import { ActionTypes as AuthActionTypes } from "@/store/auth-module/action-types";
import { ActionTypes as UsersActionTypes } from "@/store/user-module/action-types";
import RepositoryFactory from "@/repository/factory";
import { IUser } from "@/models";

@Component({

})
export default class Login extends Vue {
  show1: boolean = false;
  valid: boolean = true;
  $refs!: {
    form: HTMLFormElement
  }
  public email = "";
  public emailRules = [
    (v: string) => !!v || "E-mail is required",
    (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];

  public password= "";
  rules= {
    required: (value : any) => !!value || "Required.",
    min: (v: string) => v.length >= 8 || "Min 8 characters",
    emailMatch: () => ("The email and password you entered don't match"),
  }
  
  authRepository: any;
  /**
   *
   */
  constructor() {
    super();
    this.authRepository = RepositoryFactory.get("auth")
  }

  async validate(): Promise<void> {
    const param = {
      Email: this.email,
      password: this.password
    };
    const response = await this.authRepository.login(param);
    let user: IUser = response.data.user;
    user.roles = response.data.roles;
    user.token = response.data.token;
    
    if(user.isAuthenticated) {
      this.$store.dispatch(`auth/${AuthActionTypes.LOGIN}`, user);

      const users = this.$store.getters["userModule/users"];
      if(users.length === 0) {
        console.log('Users-length: ', users.length);
        this.$store.dispatch(`userModule/${UsersActionTypes.GETALLUSERS}`)
      }
      else {
        console.log('Users: ', users);
      }
      const redirectPath: any = this.$route.query.redirect || "/";
      this.$router.push(redirectPath)
    }
  }
}
