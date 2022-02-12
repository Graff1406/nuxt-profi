<template>
  <v-card
    id="reviews"
    ref="reviews"
    :class="$attrs.class"
    outlined
    :loading="loading"
  >
    <v-card-title primary-title class="text-uppercase subtitle-2">
      <span>Reviews ({{ reviews.length }})</span>
      <v-spacer></v-spacer>
      <v-menu transition="slide-x-transition" bottom right>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="secondary" v-bind="attrs" v-on="on" icon text small>
            <v-icon>filter_list</v-icon>
          </v-btn>
        </template>

        <v-list dense>
          <v-list-item-group v-model="selected">
            <v-list-item v-for="(item, i) in filters" :key="i">
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-card-title>
    <v-card-text v-for="review in reviews" :key="review.id" class="pb-1">
      <h4>{{ review.name }}</h4>
      <p class="mb-1 caption">{{ review.createdAt }}</p>
      <div>
        <v-rating
          :value="review.rate"
          background-color="gray"
          color="warning"
          dense
          half-increments
          hover
          readonly
          size="16"
        ></v-rating>
      </div>
      <p class="mb-0">{{ review.text }}</p>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "ReviewsAboutMaster",
  props: {
    reviews: {
      type: Array,
      default: () =>
        Array.from({ length: 12 }, (item, i) => ({
          id: i,
          name: "Avtandil",
          createdAt: "2022-02-10",
          rate: 2.5,
          text: "Some good comments for you"
        }))
    }
  },
  data() {
    return {
      filters: ["All Rating", "Rate 1", "Rate 2", "Rate 3", "Rate 4", "Rate 5"],
      selected: 0,
      loading: false
    };
  },
  watch: {
    selected(selected) {
      this.$emit("selected-filter", selected);
      this.loading = !this.loading;
      setTimeout(() => (this.loading = !this.loading), 2000);
    }
  }
};
</script>
