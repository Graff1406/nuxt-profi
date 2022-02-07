<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <BottomNavigation v-if="$device.isMobile" />
  </v-app>
</template>
<script>
import BottomNavigation from "@/components/BottomNavigation";

export default {
  name: "login",
  components: {
    BottomNavigation
  }
};
</script>
