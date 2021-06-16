<template>
  <v-app>
    <v-app-bar app color="white" hide-on-scroll>
      <v-btn icon nuxt to="/">
        <v-icon>home</v-icon>
      </v-btn>
      <v-toolbar-title>{{ $route.params.title }}</v-toolbar-title>
      <!-- <v-toolbar-title>{{ $store.state.search.titleForResult }}</v-toolbar-title> -->

      <v-spacer></v-spacer>

      <v-btn icon color="black" @click="dialog = true">
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon color="black" @click="sheet = true">
        <v-icon>filter_list</v-icon>
      </v-btn>

      <v-btn icon color="black" to="/create-task?step=0">
        <v-icon>add</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
      <SearchModal :active.sync="dialog" />
    </v-main>
    <v-btn color="black" icon bottom fixed right fab dark small>
      <v-icon>map</v-icon>
    </v-btn>
    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" height="200px">
        <v-btn class="mt-6" text color="red" @click="sheet = !sheet">
          close
        </v-btn>
        <div class="py-3">
          This is a bottom sheet using the controlled by v-model instead of
          activator
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </v-app>
</template>
<script>
import SearchModal from "@/components/search/modal/SearchModal";

export default {
  name: "resultMobile",
  components: {
    SearchModal
  },
  data() {
    return {
      dialog: false,
      bottomNavigation: 0,
      sheet: false
    };
  }
};
</script>
