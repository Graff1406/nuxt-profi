<template>
  <v-app>
    <v-main app>
      <v-container fluid>
        <v-row justify="center">
          <v-col sm="12" md="7">
            <div class="mt-1 mb-4 d-flex justify-center">
              <Logo show-icon />
            </div>
            <div class="mb-4">
              <ImageView show-arrows outlined />
            </div>

            <div class="mt-1 mb-4">
              <span>
                <v-icon color="secondary">location_on</v-icon>
                Tbilisi,</span
              >
              <span class="caption">
                Last visited 11 feb 2022, 18:32
              </span>
            </div>

            <v-row>
              <v-col sm="6" md="5" class="pr-1">
                <v-card outlined class="card-sticky">
                  <v-toolbar color="white" flat class="mt-2">
                    <v-toolbar-title class="mx-1">
                      <v-avatar size="36px">
                        <img
                          alt="Avatar"
                          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                        />
                      </v-avatar>
                      <span class="mx-2">Djon Deep</span>
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <BtnsFavoriteAndShare color="secondary" small />
                  </v-toolbar>
                  <div class="my-4">
                    <MasterOnMap />
                  </div>
                  <div class="py-4">
                    <BtnsCallAndShare />
                  </div>
                </v-card>
              </v-col>
              <v-col sm="6" md="7">
                <div>
                  <!-- <Rate /> -->
                  <Rating @to-reviews="goToReviews" :rate="countRating" />
                </div>

                <div class="my-4">
                  <MasterProfileDescribe />
                </div>

                <div class="my-4">
                  <ReviewsAboutMaster @selected-filter="goToReviews" />
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- <Nuxt /> -->
      </v-container>
    </v-main>
    <!-- <v-app-bar bottom fixed elevation="2" color="white" dense>
      <BtnsCallAndShare />
    </v-app-bar> -->
  </v-app>
</template>
<script>
import Logo from "../components/Logo.vue";
import ReviewsAboutMaster from "../components/tile/ReviewsAboutMaster.vue";
import MasterOnMap from "../components/tile/MasterOnMap.vue";
import MasterProfileDescribe from "../components/tile/MasterProfileDescribe.vue";
import Rating from "../components/tile/Rating.vue";
// import Rate from "../components/tile/Rate.vue";
import ImageView from "../components/tile/ImageView.vue";
import BtnsCallAndShare from "../components/tile/BtnsCallAndShare.vue";
import BtnsFavoriteAndShare from "../components/tile/BtnsFavoriteAndShare.vue";
import AppBtnBack from "@/components/buttons/Back";
export default {
  name: "TabletDesktopMasterProfile",
  components: {
    AppBtnBack,
    BtnsFavoriteAndShare,
    BtnsCallAndShare,
    ImageView,
    // Rate,
    Rating,
    MasterProfileDescribe,
    MasterOnMap,
    ReviewsAboutMaster,
    Logo
  },
  data() {
    return {
      model: null
    };
  },
  computed: {
    countRating() {
      const rate = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 400000
      };

      const total = Object.entries(rate).reduce(
        (ac, cu) => {
          const [key, value] = cu;
          ac.members += value;
          ac.rating += key * value;
          ac.total = ac.rating / ac.members;
          return ac;
        },
        { members: 0, rating: 0, total: 0 }
      )?.total;
      return +total.toString().substring(0, 3);
    }
  },
  methods: {
    goToReviews() {
      const reviewsComponent = document.getElementById("reviews");

      if (!reviewsComponent) return;

      this.$vuetify.goTo(reviewsComponent, {
        duration: 300,
        offset: 15,
        easing: "easeInOutCubic"
      });
    }
  }
};
</script>
<style>
.card-sticky {
  position: sticky;
  top: 17px;
}
</style>
