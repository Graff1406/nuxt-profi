<template>
  <v-card class="pa-3" :class="$attrs.class" outlined>
    <v-row no-gutters justify="space-between" align="center">
      <v-col cols="7">
        <!-- <span :class="`${color}--text`">({{ rate }})</span> -->
        <span class="secondary--text">({{ rateIntoStr }})</span>
        <div style="display: inline-block">
          <v-rating
            :value="rate"
            background-color="gray"
            :color="color"
            dense
            half-increments
            hover
            readonly
            size="22"
          ></v-rating>
        </div>
      </v-col>
      <v-col cols="3" class="d-flex justify-end">
        <v-btn color="secondary" small outlined @click="$emit('to-reviews')">
          reviews: ({{ reviews }})
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "Rating",
  props: {
    rate: {
      type: Number,
      default: 2.5
    },
    reviews: {
      type: Number,
      default: 124
    }
  },
  computed: {
    color() {
      if (this.rate >= 3 && this.rate < 4) return "warning";
      else if (this.rate >= 4) return "success";
      else return "error";
    },
    rateIntoStr() {
      return this.rate?.toString().length > 1 ? this.rate : this.rate + ".0";
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
