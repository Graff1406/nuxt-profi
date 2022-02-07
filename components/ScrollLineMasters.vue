<template>
  <v-row justify="center">
    <v-col v-for="n in 20" :key="n" cols="12" sm="6">
      <TileForDesktop :master="{}" />
    </v-col>
  </v-row>
</template>
<script>
import TileForDesktop from "@/components/tile/TileForDesktop";
export default {
  name: "ScrollLineMasters",
  components: {
    TileForDesktop
  }
};
</script>
