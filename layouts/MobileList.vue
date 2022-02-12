<template>
  <v-app>
    <v-app-bar app color="white" hide-on-scroll>
      <v-toolbar-title v-if="$route.query.search">{{
        $route.query.search
      }}</v-toolbar-title>
      <Logo v-else without-link />

      <v-spacer></v-spacer>

      <v-btn icon color="black" @click="sheet = true">
        <v-icon>filter_list</v-icon>
      </v-btn>

      <v-btn color="black" icon>
        <v-icon>map</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" height="200px">
        <v-btn class="mt-6" text color="red" @click="sheet = !sheet">
          close
        </v-btn>
        <div class="py-3">
          This is a bottom sheet using the controlled by v-model instead of
          activator
        </div>
      </v-sheet>
    </v-bottom-sheet>
    <BottomNavigation />
  </v-app>
</template>
<script>
import Logo from "@/components/Logo.vue";
import BottomNavigation from "@/components/BottomNavigation/index";

export default {
  name: "MobileListLayout",
  components: {
    BottomNavigation,
    Logo
  },
  data() {
    return {
      sheet: false
    };
  }
};
</script>
