<template>
  <div>
    <v-card @click="moveToDetales" nuxt outlined>
      <!-- <v-img
        height="180"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img> -->
      <v-app-bar absolute color="transparent" elevation="0">
        <v-spacer></v-spacer>
        <BtnsFavoriteAndShare
          @prevent-go-to-route="preventGoToMaster = $event"
        />
      </v-app-bar>
      <v-card-title>Cafe Badilico</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 text-subtitle-1">
          <v-avatar size="45">
            <img
              alt="Avatar"
              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
            />
          </v-avatar>
          <span class="mx-3">Italian, Cafe</span>
        </div>

        <div>
          Small plates, salads sandwiches - an intimate setting with 12 indoor
          seats plus patio seating.
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="secondary" text @click="moveToDetales">
          Detales
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import BtnsFavoriteAndShare from "./BtnsFavoriteAndShare";
export default {
  name: "TileForDesktop",
  components: { BtnsFavoriteAndShare },
  props: {
    master: {
      type: Object,
      required: true,
      default: () => ({ id: 1 })
    }
  },
  data() {
    return {
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      colors: [
        "green",
        "secondary",
        "yellow darken-4",
        "red lighten-2",
        "orange darken-1"
      ],
      preventGoToMaster: false,
      favoriteAdded: false,
      sheet: false
    };
  },
  computed: {},
  methods: {
    moveToDetales(param) {
      if (!this.preventGoToMaster) {
        this.$router.push(`/master/${this.master.id}`);
      }
    }
  }
};
</script>
