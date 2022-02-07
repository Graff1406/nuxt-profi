<template>
  <v-container>
    <!-- <v-divider></v-divider> -->
    <v-row justify="center" class="py-3" v-if="!$device.isMobile">
      <v-col sm="11" md="9">
        <banner
          title="Find a master"
          text="Find a suitable specialist or create a task and let the specialist find you"
        >
          <template #actions>
            <div class="ml-2 mb-2">
              <v-btn color="#5b5a5a" outlined>Find master</v-btn>
            </div>
          </template>
        </banner>
      </v-col>

      <v-col sm="11" md="9">
        <banner
          title="Create a task"
          text="create a task and let the specialist find you"
        >
          <template #actions>
            <div class="ml-2 mb-2">
              <v-btn color="#5b5a5a" outlined>Create task</v-btn>
            </div>
          </template>
        </banner>
      </v-col>

      <v-col sm="11" md="9">
        <banner
          title="Join the experts"
          text="You can offer your specialist services and start earning"
        >
          <template #actions>
            <div class="ml-2 mb-2">
              <v-btn color="error" outlined>Join master</v-btn>
            </div>
          </template>
        </banner>
      </v-col>
    </v-row>

    <!-- <v-row justify="center" class="py-3">
      <v-col sm="11" md="9" class="pa-0">
        <SliderMasters />
      </v-col>

    </v-row> -->
    <v-row justify="center" class="py-3">
      <v-col sm="11" md="9">
        <ScrollLineMasters />
      </v-col>
    </v-row>

    <!-- <v-col sm="11" md="9"> </v-col> -->
    <!-- <v-divider></v-divider> -->
    <!-- <v-row class="my-3">
      <v-col>
        <h1 class="d-flex justify-center">Services</h1>
        <v-card flat>
          <v-card-text>
            <v-row justify="start">
              <v-col sm="6" md="4">
                <v-card width="344">
                  <v-card-title primary-title>
                    title
                  </v-card-title>
                  <v-expand-transition>
                    <div v-show="show">
                      <v-card-text>
                        I'm a thing. But, like most politicians, he promised
                        more than he could deliver. You won't have time for
                        sleeping, soldier, not with all the bed making you'll be
                        doing. Then we'll go with that data file! Hey, you add a
                        one and two zeros to that or we walk! You're going to do
                        his laundry? I've got to find a way to escape.
                      </v-card-text>
                    </div>
                  </v-expand-transition>

                  <v-card-actions>

                    <v-spacer></v-spacer>
                    <v-btn icon @click="show = !show">
                      <v-icon>{{
                        show ? "mdi-chevron-up" : "mdi-chevron-down"
                      }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col sm="6" md="4">
                <v-card width="344">
                  <v-card-title primary-title>
                    title
                  </v-card-title>
                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text>
                        I'm a thing. But, like most politicians, he promised
                        more than he could deliver. You won't have time for
                        sleeping, soldier, not with all the bed making you'll be
                        doing. Then we'll go with that data file! Hey, you add a
                        one and two zeros to that or we walk! You're going to do
                        his laundry? I've got to find a way to escape.
                      </v-card-text>
                    </div>
                  </v-expand-transition>

                  <v-card-actions>

                    <v-spacer></v-spacer>
                    <v-btn icon @click="show = !show">
                      <v-icon>{{
                        show ? "mdi-chevron-up" : "mdi-chevron-down"
                      }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col sm="6" md="4">
                <v-card width="344">
                  <v-card-title primary-title>
                    title
                  </v-card-title>
                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text>
                        I'm a thing. But, like most politicians, he promised
                        more than he could deliver. You won't have time for
                        sleeping, soldier, not with all the bed making you'll be
                        doing. Then we'll go with that data file! Hey, you add a
                        one and two zeros to that or we walk! You're going to do
                        his laundry? I've got to find a way to escape.
                      </v-card-text>
                    </div>
                  </v-expand-transition>

                  <v-card-actions>

                    <v-spacer></v-spacer>
                    <v-btn icon @click="show = !show">
                      <v-icon>{{
                        show ? "mdi-chevron-up" : "mdi-chevron-down"
                      }}</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row> -->
    <!-- <v-divider></v-divider> -->
    <!-- <v-row class="my-3">
      <v-col>
        <h1 class="d-flex justify-center">Cities</h1>
        <v-card flat>
          <v-card-text>
            <v-row justify="start">
              <v-col sm="4" md="3">
                <v-card width="344" flat>
                  <v-card-text>
                    <div v-for="item in 10" :key="item">{{ item }}</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col sm="4" md="3">
                <v-card width="344" flat>
                  <v-card-text>
                    <div v-for="item in 10" :key="item">{{ item }}</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col sm="4" md="3">
                <v-card width="344" flat>
                  <v-card-text>
                    <div v-for="item in 10" :key="item">{{ item }}</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col sm="4" md="3">
                <v-card width="344" flat>
                  <v-card-text>
                    <div v-for="item in 10" :key="item">{{ item }}</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row> -->
    <!-- <v-divider></v-divider> -->
    <!-- <v-row class="my-3">
      <v-col>
        <h1 class="d-flex justify-center">For master</h1>
        <v-card flat>
          <v-card-text>
            <h3>
              Are you master of your deal? Then come to us. Make good money on
              your skills. Gain a reputation for being the best and get loyal
              customers.
            </h3>
            <div class="d-flex justify-center my-3">
              <v-btn color="error" class="mx-3" depressed>
                To be a master
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import Banner from "@/components/text/Banner";
import SliderMasters from "@/components/sliders/Masters";
import ScrollLineMasters from "@/components/ScrollLineMasters";

export default {
  layout: ({ route }) => (route.query?.search ? "resultMobile" : "default"),
  components: {
    Banner,
    SliderMasters,
    ScrollLineMasters
  },
  // middleware: "searchQueries",
  data() {
    return {
      show: false
    };
  },
  methods: {
    setQueries() {
      const queries = this.$store.state.search.queries;
      const routeWithSetQuery = {
        ...this.$route,
        query: { ...this.$route.query, ...queries }
      };
      this.$router.push(routeWithSetQuery);
    }
  },
  created() {
    // this.setQueries();
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("search/setUrlQueries", from.query);
    next();
  }
};
</script>
<style scoped>
.width {
  max-width: 600px;
}
.width div {
  /* max-width: 110px; */
}
</style>
