<template>
  <v-card class="my-3 pt-8" outlined>
    <v-row no-gutters justify="space-between">
      <v-col cols="9">
        <v-slider
          :value="rate"
          :color="color"
          thumb-label="always"
          thumb-size="22"
          track-color="gray"
          readonly
          hide-details
        ></v-slider>
      </v-col>
      <v-col cols="3" class="d-flex justify-end">
        <v-btn :color="color" text small @click="$emit('clicked-reviews')">
          <v-icon>star</v-icon>
          {{ reviews }}
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "Rate",
  props: {
    rate: {
      type: Number,
      default: 60
    },
    reviews: {
      type: Number,
      default: 124
    }
  },
  computed: {
    color() {
      if (this.rate > 25 && this.rate <= 50) return "yellow";
      else if (this.rate > 50 && this.rate <= 75) return "warning";
      else if (this.rate > 75) return "success";
      else return "error";
    }
  }
};
</script>
<style lang="scss">
.rate-line-item {
  height: 5px;
  width: 100%;
}
</style>
