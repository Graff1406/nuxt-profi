<template>
  <v-app>
    <v-app-bar app color="white">
      <AppBtnBack />
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
    </v-app-bar>
    <v-main app>
      <v-container fluid>
        <div class="mt-1 mb-4">
          <span>
            <v-icon color="secondary">location_on</v-icon>
            Tbilisi,</span
          >
          <span class="caption">
            Last visited 11 feb 2022, 18:32
          </span>
        </div>

        <div class="mb-4">
          <ImageView fullscreen />
        </div>

        <div class="my-4">
          <!-- <Rate /> -->
          <Rating @to-reviews="goToReviews" :rate="countRating" />
        </div>

        <div class="my-4">
          <MasterProfileDescribe />
        </div>

        <div class="my-4">
          <MasterOnMap fullscreen />
        </div>

        <div class="my-4 mb-13">
          <ReviewsAboutMaster @selected-filter="goToReviews" />
        </div>
        <!-- <Nuxt /> -->
      </v-container>
    </v-main>
    <v-app-bar bottom fixed elevation="2" color="white" dense>
      <BtnsCallAndShare />
      <!-- <v-row class="pa-0" no-wrap>
        <v-col cols="8">
          <v-row justify="space-between">
            <v-col cols="6" class="pa-0">
              <BtnsFavoriteAndShare color="secondary" />
            </v-col>
            <v-col cols="6" class="d-flex justify-end align-center pa-0">
              <BtnsCallAndShare />
            </v-col>
          </v-row>
        </v-col>
      </v-row> -->
    </v-app-bar>
  </v-app>
</template>
<script>
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
  name: "MobileMasterProfile",
  components: {
    AppBtnBack,
    BtnsFavoriteAndShare,
    BtnsCallAndShare,
    ImageView,
    // Rate,
    Rating,
    MasterProfileDescribe,
    MasterOnMap,
    ReviewsAboutMaster
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
