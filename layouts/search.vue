<template>
  <v-app>
    <v-app-bar app color="white" :elevate-on-scroll="$device.isDesktop">
      <MainSearch v-if="$device.isMobile" :focus="active" :value="value" />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
      <!-- <SearchModal :active.sync="dialog" /> -->
    </v-main>
    <BottomNavigation v-if="$device.isMobile" />
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
import MainSearch from "../components/search/MainSearch.vue";
import SearchModal from "@/components/search/modal/SearchModal";
import BottomNavigation from "@/components/BottomNavigation";
import Logo from "@/components/Logo";

export default {
  name: "default",
  components: {
    SearchModal,
    BottomNavigation,
    Logo,
    MainSearch
  },
  props: {
    active: Boolean,
    value: String
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
