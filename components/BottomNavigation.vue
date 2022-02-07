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
    <v-btn nuxt :to="{ path: '/', query: queries }" :value="navBar.home">
      <span>List</span>
      <v-icon>list</v-icon>
    </v-btn>

    <v-btn nuxt :to="`/${navBar.search}`" :value="navBar.search">
      <span>Search</span>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn nuxt :to="`/${navBar.createTask}`" :value="navBar.createTask">
      <span>Add task</span>
      <v-icon>add_circle_outline</v-icon>
    </v-btn>

    <v-btn nuxt :to="`/${navBar.login}`" :value="navBar.login">
      <span>Person</span>
      <v-icon>person</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  name: "BottomNavigation",
  props: {
    defaultBtnIndex: Number,
    hideOnScroll: Boolean
  },
  data() {
    return {
      value: this.$route.name,
      navBar: {
        home: "index",
        search: "search",
        createTask: "create-task",
        login: "login"
      }
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
