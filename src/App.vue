<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list justify="space-around">
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content >{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar">
        </v-app-bar-nav-icon> </span>
      <v-toolbar-title>
        <v-btn flat to="/">
          <v-icon left dark>mdi-home</v-icon>
          Home
        </v-btn>
      </v-toolbar-title>
      <v-toolbar-items class="d-sm-none d-md-flex d-none d-sm-flex">
        <v-btn color="pink-darken-3" flat v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left dark class="mx-3">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-main>
      <v-container fluid>
      <router-view />
    </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      appTitle: 'Welcome !',
      sidebar: false,
      menuItems: [
        { title: 'Scroll', path: '/scroll', icon: 'mdi-magnify' },
        { title: 'Transcribe', path: '/transcribe', icon: 'mdi-note' },
      ]
    }
  },
};</script>
