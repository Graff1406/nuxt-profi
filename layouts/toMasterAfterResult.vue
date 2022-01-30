<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      :elevate-on-scroll="$device.isDesktop"
      hide-on-scroll
    >
      <v-btn icon class="mx-2" @click="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>
        <v-avatar size="36px">
          <img
            alt="Avatar"
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          />
        </v-avatar>
        <span class="mx-2">Djon Deep</span>
      </v-toolbar-title>

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
    <v-main class="mb-16">
      <v-container fluid>
        <Nuxt />
      </v-container>
      <SearchModal :active.sync="dialog" />
    </v-main>
    <v-app-bar bottom fixed elevation="2" color="white" dark>
      <v-row justify="center" class="pa-0">
        <v-col cols="8">
          <v-row>
            <v-col cols="6" class="pa-0">
              <BtnsFavoriteAndShare color="secondary" />
            </v-col>
            <v-col cols="6" class="d-flex justify-end align-center pa-0">
              <BtnsCallAndShare />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
  </v-app>
</template>
<script>
import SearchModal from "@/components/search/modal/SearchModal";
import BtnsFavoriteAndShare from "@/components/tile/BtnsFavoriteAndShare";
import BtnsCallAndShare from "@/components/tile/BtnsCallAndShare";

export default {
  components: {
    SearchModal,
    BtnsFavoriteAndShare,
    BtnsCallAndShare
  },
  data() {
    return {
      dialog: false,
      value: false,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
    };
  }
};
</script>
