<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-row>
        <v-col :cols="!expandMaps ? 10 : 2">
          <v-card
            tile
            flat
            @mouseenter="expandMaps && (hover = true)"
            @mouseleave="expandMaps && (hover = false)"
          >
            <PicsSlider />
            <v-fade-transition v-if="expandMaps">
              <v-overlay v-if="hover" absolute color="black">
                <v-btn larg @click="expandMaps = !expandMaps">
                  <v-icon>settings_overscan</v-icon>
                </v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card></v-col
        >
        <v-col :cols="expandMaps ? 10 : 2" class="pl-0">
          <v-card
            tile
            flat
            @mouseenter="!expandMaps && (hover = true)"
            @mouseleave="!expandMaps && (hover = false)"
          >
            <v-img
              lazy-src="https://www.ealingtimes.co.uk/resources/images/11820989.png?display=1&htype=0&type=responsive-gallery"
              height="500"
              src="https://www.ealingtimes.co.uk/resources/images/11820989.png?display=1&htype=0&type=responsive-gallery"
            ></v-img>
            <v-fade-transition v-if="!expandMaps">
              <v-overlay v-if="hover" absolute color="black">
                <v-btn larg @click="expandMaps = !expandMaps">
                  <v-icon>settings_overscan</v-icon>
                </v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="9">
      <Content />
    </v-col>
  </v-row>
</template>
<script>
import PicsSlider from "@/components/profile/afterResult/PicsSlider";
import Content from "@/components/profile/afterResult/Content";
export default {
  name: "AfretResult",
  layout: "toMasterAfterResult",
  components: { Content, PicsSlider },
  data() {
    return {
      hover: true,
      expandMaps: false
    };
  }
};
</script>
