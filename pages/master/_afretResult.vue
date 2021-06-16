<template>
  <v-row justify="center">
    <v-col cols="12">
      <PicsSlider />
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
  components: { Content, PicsSlider }
};
</script>
