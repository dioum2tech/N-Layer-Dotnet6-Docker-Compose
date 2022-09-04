<template>
  <v-app v-if="isAuthenticated">
    <navigation-drawer></navigation-drawer>
    <app-bar />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer app></v-footer>
  </v-app>
  <div v-else>
    <router-view />
  </div>
</template>

<script src="./App.ts" lang="ts" />
