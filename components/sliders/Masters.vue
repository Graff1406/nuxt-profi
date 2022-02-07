<template>
  <v-card :outlined="!isMobile" :flat="isMobile">
    <v-card-text :class="{ 'pa-0': isMobile }">
      <v-slide-group multiple :show-arrows="!isMobile">
        <v-slide-item v-for="n in 25" :key="n" v-slot="{ active, toggle }">
          <v-card outlined class="mx-1" width="250">
            <v-card-title primary-title>
              title
            </v-card-title>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "SliderMasters",
  computed: {
    isMobile() {
      return this.$device.isMobile;
    }
  }
};
</script>
