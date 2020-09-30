<template>
  <v-app id="inspire">
    <v-navigation-drawer app      
      v-model="drawer"
      bottom
      temporary
      >
      
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
        <v-list-item-title>Martin Utama</v-list-item-title>
        <v-list-item-subtitle>xxx@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
        <v-btn
          icon
          @click.stop="drawer = !drawer"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider />
      <v-list nav>
        <v-list-item
          v-for="menu in menus"
          :key="menu.title"
          :to="menu.url"
        >
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app height="60">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-layout row wrap justify-center>
      <v-flex xs12 sm8 md6>
        <router-view></router-view>
      </v-flex>
      </v-layout>
    </v-main>

  </v-app>
</template>

<script>
export default {
  name: 'AuthenticatedFrame',
  data: () => ({
    drawer: null,
    menus: [
      { title: 'Home', icon: 'mdi-home', url: '/' },
      { title: 'Profile', icon: 'mdi-account-settings-outline', url: '/profile' },
      { title: 'Http Api', icon: 'mdi-server-network', url: '/hapi' },
    ],
  }),
};
</script>