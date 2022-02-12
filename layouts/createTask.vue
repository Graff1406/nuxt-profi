<template>
  <v-app>
    <v-app-bar v-if="$device.isMobile" app>
      <span class="mx-2">
        <AppBtnBack />
      </span>
      <v-toolbar-title class="subtitle-2">{{ stepTitle }}</v-toolbar-title>
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
import BottomNavigation from "@/components/BottomNavigation/index";
import AppBtnBack from "@/components/buttons/Back";

export default {
  name: "createTask",
  components: {
    BottomNavigation,
    AppBtnBack
  },
  computed: {
    stepTitle() {
      switch (+this.$route.query.step) {
        case 1:
          return "Place of execute of task";
        case 2:
          return "Date and time of execute of task";
        case 3:
          return this.showTelForm
            ? "Add phone number"
            : "Sign In before Publish";
        case 4:
          return " Preview and Publish Task";
        default:
          return "Detiles of task";
      }
    }
  }
};
</script>
