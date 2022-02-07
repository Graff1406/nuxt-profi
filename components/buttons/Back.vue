<template>
  <span :class="$attrs.class">
    <v-btn icon small>
      <v-icon @click="goBack"> arrow_back_ios </v-icon>
    </v-btn>
  </span>
</template>
<script>
export default {
  name: "Back",
  methods: {
    goBack() {
      this.$emit("before-go-back");
      this.$router.go(-1);
      this.$emit("after-go-back");
    }
  }
};
</script>
