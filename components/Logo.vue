<template>
  <v-btn :to="withoutLink ? '' : '/'" color="error" outlined small>
    <v-icon v-if="showIcon" class="mr-2">home</v-icon>
    PROFI
  </v-btn>
</template>
<script>
export default {
  name: "Logo",
  props: {
    showIcon: Boolean,
    link: String,
    withoutLink: Boolean
  }
};
</script>
