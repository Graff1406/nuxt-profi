<template>
  <v-card :width="cardWidth" :color="cardColor" outlined class="pa-3">
    <v-card-title primary-title class="title-1">
      {{ title }}
    </v-card-title>
    <v-card-text class="text-1">
      {{ text }}
    </v-card-text>
    <v-card-actions>
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "Banner",
  props: {
    title: String,
    text: String,
    cardColor: String,
    cardWidth: [String, Number]
  }
};
</script>
<style>
.title-1 {
  font-size: 36px;
}
.text-1 {
  font-size: 22px;
}

@media screen and (max-width: 450px) {
  .title-1 {
    font-size: 26px;
  }
  .text-1 {
    font-size: 16px;
  }
}
</style>
