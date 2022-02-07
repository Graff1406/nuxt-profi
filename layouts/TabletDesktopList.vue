<template>
  <v-app>
    <v-app-bar app color="white" elevate-on-scroll>
      <Logo is-desktop without-link />

      <v-spacer></v-spacer>

      <v-btn depressed to="search">
        <v-icon class="px-2">search</v-icon>
        Find master
      </v-btn>

      <v-btn class="mx-2" depressed to="/login">
        Sign
      </v-btn>
      <v-btn depressed to="/create-task?step=0">
        Create task
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer v-if="$device.isDesktop" dark padless>
      <v-card class="flex" flat dark tile>
        <v-card-title class="grey darken-4">
          <strong class="subheading"
            >Get connected with us on social networks!</strong
          >

          <v-spacer></v-spacer>

          <v-btn
            v-for="icon in socialNetworkIcons"
            :key="icon"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 grey darken-3 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
import Logo from "@/components/Logo";

export default {
  name: "TabletDesktopList",
  components: {
    Logo
  },
  data() {
    return {
      socialNetworkIcons: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-linkedin",
        "mdi-instagram"
      ]
    };
  }
};
</script>
