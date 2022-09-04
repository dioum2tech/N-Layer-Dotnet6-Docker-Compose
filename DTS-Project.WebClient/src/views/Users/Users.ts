import { Component, Vue } from "vue-property-decorator";
import { ActionTypes as UsersActionTypes } from "@/store/user-module/action-types";
import { IUser } from "@/models";
import { Modal } from "@/components";
import { UsersService } from "@/services/UsersService";
import { required, digits, email, max, regex, confirmed } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("confirmedEmail", {
  ...confirmed,
  message: "The {_field_} and confirm email you entered don't match. ({_value_})",
});

extend("confirmedPassword", {
  ...confirmed,
  message: "The {_field_} and confirm password you entered don't match. ({_value_})",
});

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

@Component({
  components: {
    Modal,
    ValidationProvider,
    ValidationObserver,
  },
  name: "users",
})
export default class Users extends Vue {
  usersService: any;
  dialog: boolean = false;
  email: string = "";
  age: string = "";
  firstname: string = "";
  lastname: string = "";
  password: string = "";
  phone: number = 0;
  username: string = "";
  confirmPassword: string = "";
  confirmEmail: string = "";
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  headers: any[] = [
    {
      text: "Nom complet",
      align: "start",
      sortable: true,
      value: "name",
    },
    { text: "Prénom", value: "firstName" },
    { text: "Nom", value: "lastName" },
    { text: "Nom d'utilisateur", value: "userName" },
    { text: "Adresse Email", value: "email" },
  ];
  emailRules = [
    (v: string) => !!v || "E-mail is required",
    (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];
  rules= {
    required: (value : any) => !!value || "Required.",
    min: (v: string) => v.length >= 8 || "Min 8 characters",
    emailMatch: (confirmEmail: string) => confirmEmail == this.email || ("The email and password you entered don't match"),
  }

  close(): void {
    this.dialog = false;
  }

  /**
   *
   */
  constructor() {
    super();
    this.usersService =  new UsersService();
  }

  created() {
    const users = this.$store.getters["userModule/users"];
    if (users.length === 0) {
      console.log("Users-length: ", users.length);
      this.$store.dispatch(`userModule/${UsersActionTypes.GETALLUSERS}`);
    } else {
      console.log("Users: ", users);
    }
  }

  getUsers(): IUser[] {
    return this.$store.getters["userModule/users"];
  }

  submit() {
    const user = {
      Id: "",
      age: this.age,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      isAuthenticated: true,
      password: this.password,
      phone: this.phone,
      username: this.username,
      token: "",
      roles: []
    };
    const result = this.usersService.addUser(user);

    console.log('Reçu: ', result)
  }
}
