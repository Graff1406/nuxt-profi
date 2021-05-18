<template>
  <v-app>
    <v-app-bar app>
      <v-btn icon @click="$router.go(-1)">
        <v-icon>arrow_back_ios</v-icon>
      </v-btn>
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
import BottomNavigation from '@/components/BottomNavigation'

  export default {
    name: 'createTask',
    components: {
      BottomNavigation
    }
  }
</script>