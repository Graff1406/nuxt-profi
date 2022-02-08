<template>
  <v-app>
    <v-app-bar app color="white" elevate-on-scroll>
      <Logo is-desktop without-link />

      <v-spacer></v-spacer>

      <v-btn depressed @click="dialog = !dialog">
        <v-icon class="px-2">search</v-icon>
        Find master
      </v-btn>

      <v-btn class="mx-2" depressed to="/login">
        Sign
      </v-btn>
      <v-btn depressed to="/create-task?step=0">
        Create task
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row justify="center" class="py-3">
          <v-col sm="11" md="9">
            <banner title="Find a master">
              <template #text>
                Find a suitable specialist or create a task and let the
                specialist find you
              </template>

              <template #actions>
                <div class="ml-2 mb-2">
                  <v-btn color="#5b5a5a" outlined @click="dialog = !dialog"
                    >Find master</v-btn
                  >
                </div>
              </template>
            </banner>
          </v-col>

          <v-col sm="11" md="9">
            <banner title="Create a task">
              <template #text>
                create a task and let the specialist find you
              </template>

              <template #actions>
                <div class="ml-2 mb-2">
                  <v-btn color="#5b5a5a" outlined to="/create-task?step=0"
                    >Create task</v-btn
                  >
                </div>
              </template>
            </banner>
          </v-col>

          <v-col sm="11" md="9">
            <banner title="Join the experts">
              <template #text>
                You can offer your specialist services and start earning
              </template>

              <template #actions>
                <div class="ml-2 mb-2">
                  <v-btn color="error" outlined to="/login?role=master"
                    >Join master</v-btn
                  >
                </div>
              </template>
            </banner>
          </v-col>
        </v-row>

        <v-row justify="center" class="py-3">
          <v-col sm="11" md="9">
            <Nuxt />
            <SearchModal :active.sync="dialog" />
          </v-col>
        </v-row>

        <v-row justify="center" class="py-3">
          <v-btn color="secondary" outlined to="/search?search=all"
            >See All</v-btn
          >
        </v-row>

        <v-row justify="center" class="py-3">
          <v-col sm="11" md="9">
            <v-divider></v-divider>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col sm="11" md="9" class="my-2">
            <banner title="How are we useful to society?">
              <template #text>
                <p>
                  This resource is intended to facilitate the search for the
                  specialist you need. We do our best to ensure that the quality
                  of the services provided is at a high level.
                </p>
                <p>
                  It is not always possible to accurately determine the level of
                  training of a specialist and what he wrote in his resume. It
                  is important for us to be in touch with our users in order to
                  improve the quality of the services provided.
                </p>
              </template>
            </banner>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer v-if="$device.isDesktop" dark padless>
      <v-card class="flex" flat dark tile>
        <v-card-title class="grey darken-4">
          <strong class="subheading"
            >Get connected with us on social networks!</strong
          >

          <v-spacer></v-spacer>

          <v-btn
            v-for="icon in socialNetworkIcons"
            :key="icon"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 grey darken-3 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
import SearchModal from "@/components/search/modal/SearchModal";
import Logo from "@/components/Logo";
import Banner from "@/components/text/Banner";

export default {
  name: "TabletDesktopList",
  components: {
    Logo,
    Banner,
    SearchModal
  },
  data() {
    return {
      dialog: false,
      socialNetworkIcons: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-linkedin",
        "mdi-instagram"
      ]
    };
  }
};
</script>
