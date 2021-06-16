<template>
  <v-app>
    <v-app-bar app color="white" :elevate-on-scroll="$device.isDesktop">
      <v-toolbar-title>PROFI</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        v-if="$device.isMobile"
        icon
        class="mx-2"
        color="black"
        @click="dialog = true"
      >
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn v-else depressed @click="dialog = true">
        <v-icon class="px-2">search</v-icon>
        Find master
      </v-btn>

      <template v-if="$device.isDesktop">
        <v-btn class="mx-2" depressed to="/login">
          Sign
        </v-btn>
        <v-btn depressed color="secondary" to="/create-task?step=0">
          Create task
        </v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
      <SearchModal :active.sync="dialog" />
    </v-main>
    <BottomNavigation defaultBtnInde="0" />
    <v-footer v-if="$device.isDesktop" dark padless>
      <v-card class="flex" flat dark tile>
        <v-card-title class="grey darken-4">
          <strong class="subheading"
            >Get connected with us on social networks!</strong
          >

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
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
import SearchModal from "@/components/search/modal/SearchModal";
import BottomNavigation from "@/components/BottomNavigation";

export default {
  components: {
    SearchModal,
    BottomNavigation
  },
  data() {
    return {
      dialog: false,
      bottomNavigation: 0,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
    };
  }
};
</script>
