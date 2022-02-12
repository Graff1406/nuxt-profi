<template>
  <div>
    <v-btn
      :color="color"
      :small="small"
      icon
      class="mx-1"
      @mouseenter="preventGoToMaster(true)"
      @mouseleave="preventGoToMaster(false)"
      @click="favoriteAdded = !favoriteAdded"
    >
      <v-icon>{{ favoriteAdded ? "favorite" : "favorite_border" }}</v-icon>
    </v-btn>
    <v-btn
      :color="color"
      :small="small"
      icon
      class="mx-1"
      @mouseenter="preventGoToMaster(true)"
      @mouseleave="preventGoToMaster(false)"
      @click="sheet = !sheet"
    >
      <v-icon>share</v-icon>
    </v-btn>

    <v-bottom-sheet v-model="sheet" inset>
      <v-sheet
        class="text-center"
        height="200px"
        style="border-radius: 15px 15px 0 0"
      >
        <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
          close
        </v-btn>
        <div class="my-3">
          This is a bottom sheet using the inset prop
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>
<script>
export default {
  name: "BtnsFavoriteAndShare",
  props: {
    color: String,
    default: "white",
    small: Boolean
  },
  data() {
    return {
      favoriteAdded: false,
      sheet: false
    };
  },
  methods: {
    preventGoToMaster(prevent) {
      this.$emit("prevent-go-to-route", prevent);
    }
  }
};
</script>
