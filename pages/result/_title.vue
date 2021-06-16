<template>
  <v-row justify="center" align="start" class="py-6">
    <TileForDesktop v-for="item in 10" :key="item" />
  </v-row>
</template>
<script>
import TileForDesktop from "@/components/Tile/TileForDesktop";
export default {
  name: "",
  layout(context) {
    return context.$device.isMobile ? "resultMobile" : "resultDesktop";
  },
  components: {
    TileForDesktop
  }
};
</script>
