<template>
  <v-card flat :outlined="outlined" :class="{ 'py-3': outlined }">
    <v-slide-group multiple :show-arrows="showArrows">
      <v-slide-item v-for="n in 25" :key="n" v-slot="{ active, toggle }">
        <v-card
          color="grey lighten-1"
          class="mr-2"
          width="300"
          :input-value="active"
          @click="toggle, (activeDialog = !activeDialog)"
        >
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            class="grey lighten-2"
          ></v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <v-dialog v-model="activeDialog" :fullscreen="fullscreen" max-width="700">
      <v-card>
        <v-btn
          color="white"
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
          v-for="n in 25"
          :key="n"
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          class="grey lighten-2"
        ></v-img>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
export default {
  name: "ImageView",
  props: {
    fullscreen: Boolean,
    showArrows: Boolean,
    outlined: Boolean
  },
  data() {
    return {
      activeDialog: false
    };
  }
};
</script>
