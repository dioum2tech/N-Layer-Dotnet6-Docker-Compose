<template>
  <div>
    <v-col class="text-right">
      <v-btn
        @click="dialog = !dialog"
        elevation="2"
        plain
        depressed
        color="primary"
        >Ajouter un utilisateur</v-btn
      >
    </v-col>
    <div>
      <v-data-table
        :headers="headers"
        :items="getUsers()"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </div>
    <modal :dialog="dialog" @close="close">
      <template v-slot:title>
        <span class="text-h5">Ajouter un nouveau utilisateur</span>
      </template>
      <template v-slot:content>
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="submit">
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <validation-provider
                    v-slot="{ errors }"
                    name="firstname"
                    rules="required|max:50"
                  >
                    <v-text-field
                      label="Legal First Name*"
                      v-model="firstname"
                      :error-messages="errors"
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <validation-provider
                    v-slot="{ errors }"
                    name="lastname"
                    rules="required|max:50"
                  >
                    <v-text-field
                      label="Legal Last Name"
                      v-model="lastname"
                      :error-messages="errors"
                      hint="example of persistent helper text"
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <validation-provider
                    v-slot="{ errors }"
                    name="username"
                    rules="required|max:25"
                  >
                    <v-text-field
                      label="Legal User Name*"
                      v-model="username"
                      hint="example of helper text only on focus"
                      persistent-hint
                      :error-messages="errors"
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <validation-provider
                    v-slot="{ errors }"
                    name="email"
                    rules="email|confirmedEmail:confirmEmail"
                  >
                    <v-text-field
                      label="Email*"
                      v-model="email"
                      :error-messages="errors"
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <validation-provider v-slot="{ errors }" vid="confirmEmail">
                    <v-text-field
                      label="Confirmer Email*"
                      v-model="confirmEmail"
                      :error-messages="errors"
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <validation-provider
                    v-slot="{ errors }"
                    name="password"
                    rules="confirmedPassword:confirmPassword"
                  >
                    <v-text-field
                      v-model="password"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      label="Mot de passe"
                      :error-messages="errors"
                      counter
                      @click:append="showPassword = !showPassword"
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <validation-provider v-slot="{ errors }" vid="confirmPassword">
                  <v-text-field
                    :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    v-model="confirmPassword"
                    name="input-10-2"
                    label="confirmer mot de passe"
                    :error-messages="errors"
                    @click:append="showConfirmPassword = !showConfirmPassword"
                  ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Téléphone"
                    v-model="phone"
                    type="number"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age"
                    v-model="age"
                    required
                  ></v-select>
                </v-col>
                <!-- <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="[
                    'Skiing',
                    'Ice hockey',
                    'Soccer',
                    'Basketball',
                    'Hockey',
                    'Reading',
                    'Writing',
                    'Coding',
                    'Basejump',
                  ]"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col> -->
              </v-row>
            </v-container>
            <small>*indicates required field</small>
            <v-spacer></v-spacer>

            <v-col class="text-right">
              <v-btn color="blue darken-1" text @click="close()">
                Fermer
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                type="submit"
                :disabled="invalid"
              >
                Enregistrer
              </v-btn>
            </v-col>
          </form>
        </validation-observer>
      </template>
    </modal>
  </div>
</template>

<script lang="ts" src="./Users.ts"></script>