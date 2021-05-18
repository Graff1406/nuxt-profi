<template>
  <v-row justify="center" class="title">
    <v-btn v-if="$device.isDesktop" text to="/">
      <v-icon class="mr-2" color="#616161">home</v-icon>
      Profi
    </v-btn>
    <span v-else>PROFI</span>
  </v-row>
</template>
<script>
  export default {
    name: 'Logo',
  }
</script>
