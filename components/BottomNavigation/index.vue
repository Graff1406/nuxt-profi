<template>
  <v-bottom-navigation
    v-model="value"
    color="#fc7400"
    bottom
    fixed
    grow
    app
    :hide-on-scroll="hideOnScroll"
  >
    <v-btn
      nuxt
      :to="{ path: navBar.home.path, query: queries }"
      :value="navBar.home.name"
    >
      <span>List</span>
      <v-icon>list</v-icon>
    </v-btn>

    <v-btn nuxt :to="navBar.search.path" :value="navBar.search.name">
      <span>Search</span>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn nuxt :to="navBar.createTask.path" :value="navBar.createTask.name">
      <span>Add task</span>
      <v-icon>add_circle_outline</v-icon>
    </v-btn>

    <v-btn nuxt :to="navBar.login.path" :value="navBar.login.name">
      <span>Person</span>
      <v-icon>person</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
import navBar from "./routersForNav";
export default {
  name: "BottomNavigation",
  props: {
    defaultBtnIndex: Number,
    hideOnScroll: Boolean
  },
  data() {
    return {
      value: this.$route.name,
      navBar
    };
  },
  computed: {
    queries() {
      return { ...this.$route.query, ...this.$store.state.search.queries };
    }
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        this.showError();
      }
    }
  },
  methods: {
    showError() {
      const nameRoutes = this.$router?.options?.routes.map(({ name }) => name);
      if (!nameRoutes.includes(this.value))
        throw new Error(
          `Absent router path for current nav tab in component of 'BottomNavigation.vue'. Current navBar value is ${this.value}.`
        );
    }
  }
};
</script>
