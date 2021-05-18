<template>
  <v-bottom-navigation
    v-if="$device.isMobile"
    v-model="index"
    bottom
    fixed
    shift
  >
    <v-btn to="/">
      <span>Home</span>

      <v-icon>home</v-icon>
    </v-btn>

    <v-btn to="/create-task">
      <span>Add task</span>

      <v-icon>add_circle_outline</v-icon>
    </v-btn>

    <v-btn link to="/login">
      <span>Person</span>

      <v-icon>person</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
  export default {
    name: 'BottomNavigation',
    props: {
      defaultBtnIndex: Number
    },
    data() {
      return {
        index: this.defaultBtnIndex
      }
    }
  }
</script>