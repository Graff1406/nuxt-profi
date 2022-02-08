<template>
  <ScrollLineMasters />
</template>

<script>
import ScrollLineMasters from "@/components/ScrollLineMasters";

export default {
  middleware({ route, redirect, $device }) {
    if (!$device.isMobile && route.query.search)
      redirect({ path: "/tablet-desktop-result", query: route.query });
  },
  layout: ({ $device }) =>
    $device.isMobile ? "MobileList" : "TabletDesktopList",
  components: {
    ScrollLineMasters
  },
  data() {
    return {
      show: false
    };
  },
  beforeRouteLeave(to, from, next) {
    if (from.query?.search)
      this.$store.commit("search/setUrlQueries", from.query);
    next();
  }
};
</script>
