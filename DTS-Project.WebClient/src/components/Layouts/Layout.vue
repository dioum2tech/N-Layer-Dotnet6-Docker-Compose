<template>
  <!-- App.vue -->
  <v-app>
    <NavigationDrawer />
    <AppBar />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <!-- <router-view></router-view> -->

        <HelloWorld />
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script src="./Layout.ts" lang="ts"></script>
