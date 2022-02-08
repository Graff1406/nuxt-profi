<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app fixed temporary width="350" right>
      <v-list>
        <v-list-group :value="true">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Sorting</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(title, i) in ['Hight price', 'Low price', 'New price']"
            :key="i"
            link
            class="px-10"
          >
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group :value="true">
          <template v-slot:activator>
            <v-list-item-title>Filter</v-list-item-title>
          </template>

          <v-list-group
            :value="true"
            no-action
            sub-group
            v-for="(filter, ifl) in filters"
            :key="ifl"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ filter.title }}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="(child, i) in filter.children" :key="i" link>
              <template v-slot:default="{ active }">
                <v-list-item-action>
                  <v-checkbox :input-value="active"></v-checkbox>
                </v-list-item-action>
                <v-list-item-title v-text="child"></v-list-item-title>

                <!-- <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon> -->
              </template>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-row justify="center" class="mt-5">
        <Logo show-icon />
      </v-row>
      <v-row justify="center" align="center" class="mt-5">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon color="black" v-bind="attrs" v-on="on">
              <v-icon>map</v-icon>
            </v-btn>
          </template>
          <span>Show map</span>
        </v-tooltip>
        <v-col cols="6">
          <v-text-field
            :value="$route.query.search"
            name="name"
            placeholder="Find master"
            id="id"
            solo
            readonly
            hide-details
            @click="dialog = true"
          ></v-text-field>
        </v-col>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              color="black"
              v-bind="attrs"
              v-on="on"
              @click="drawer = !drawer"
            >
              <v-icon>filter_list</v-icon>
            </v-btn>
          </template>
          <span>Filters</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              color="black"
              to="/create-task?step=0"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>add</v-icon>
            </v-btn>
          </template>
          <span>Create task</span>
        </v-tooltip>
      </v-row>
      <v-container fluid>
        <Nuxt />
      </v-container>
      <SearchModal :active.sync="dialog" />
    </v-main>
  </v-app>
</template>
<script>
import Logo from "../components/Logo.vue";
import SearchModal from "@/components/search/modal/SearchModal";

export default {
  name: "resultDesktop",
  components: {
    SearchModal,
    Logo
  },
  data() {
    return {
      dialog: false,
      bottomNavigation: 0,
      drawer: false,
      filters: [
        { title: "Rate", children: ["Raite"] },
        { title: "Price", children: ["10$", "20$"] },
        { title: "Price", children: ["10$", "20$"] },
        { title: "Price", children: ["10$", "20$"] },
        { title: "Price", children: ["10$", "20$"] }
      ]
    };
  }
};
</script>
