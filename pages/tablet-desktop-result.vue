<template>
  <v-row justify="center">
    <v-col v-for="n in 20" :key="n" cols="12" sm="6">
      <TileForDesktop :master="{}" />
    </v-col>
  </v-row>
</template>
<script>
import TileForDesktop from "@/components/Tile/TileForDesktop";
export default {
  name: "TabletDesktopSearchResult",
  middleware({ route, redirect, $device }) {
    if ($device.isMobile) redirect({ path: "/", query: route.query });
  },
  layout(context) {
    return context.$device.isMobile ? "resultMobile" : "resultDesktop";
  },
  components: {
    TileForDesktop
  }
};
</script>
