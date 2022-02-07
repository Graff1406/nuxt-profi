<template>
  <v-app>
    <v-app-bar v-if="$device.isMobile" app>
      <span class="mx-2">
        <AppBtnBack />
      </span>
      <v-toolbar-title>PROFI</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <BottomNavigation v-if="$device.isMobile" /> -->
  </v-app>
</template>
<script>
import BottomNavigation from "@/components/BottomNavigation";
import AppBtnBack from "@/components/buttons/Back";

export default {
  name: "createTask",
  components: {
    BottomNavigation,
    AppBtnBack
  }
};
</script>
