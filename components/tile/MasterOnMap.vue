<template>
  <v-card :class="$attrs.class" outlined @click="activeDialog = !activeDialog">
    <v-img
      src="https://snazzy-maps-cdn.azureedge.net/assets/360796-colliers-map-light-2021.png?v=20210715012217"
      lazy-src="https://snazzy-maps-cdn.azureedge.net/assets/360796-colliers-map-light-2021.png?v=20210715012217"
      class="grey lighten-2"
    ></v-img>
    <div>
      <v-dialog v-model="activeDialog" :fullscreen="fullscreen">
        <v-card>
          <v-btn
            color="secondary"
            icon
            fab
            top
            right
            fixed
            dark
            x-small
            outlined
            @click="activeDialog = !activeDialog"
          >
            <v-icon>close</v-icon>
          </v-btn>
          <v-img
            src="https://snazzy-maps-cdn.azureedge.net/assets/360796-colliers-map-light-2021.png?v=20210715012217"
            lazy-src="https://snazzy-maps-cdn.azureedge.net/assets/360796-colliers-map-light-2021.png?v=20210715012217"
            class="grey lighten-2"
          ></v-img>
        </v-card>
      </v-dialog>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "MasterOnMap",
  props: {
    fullscreen: Boolean
  },
  data() {
    return {
      activeDialog: false
    };
  }
};
</script>
